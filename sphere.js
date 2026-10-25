/* sphere.js - the 3D universe (DeepSeek-style globe: star field, wire shell, core, ring, DOM nodes).
   Everything 3D lives in ONE group (`world`), so stars, shell, core, ring, dust and node anchors
   always rotate together. DOM nodes are projected from that group's matrices every frame,
   after the matrices are updated, so they never lag or drift. */
window.initSphere = function (categories) {
  const stage = document.getElementById("stage"), canvas = document.getElementById("globe");
  const nodesEl = document.getElementById("nodes"), info = document.getElementById("nodeInfo");
  // the headline is revealed by the intro screen (index.html); if the intro is already gone, reveal now
  const reveal = () => { if (!document.body.classList.contains("intro-active")) document.body.classList.add("revealed"); };
  const noGL = (why) => { if (why) console.warn("[sphere]", why); document.body.classList.add("no-3d"); reveal(); };
  if (!window.THREE) return noGL("Three.js not loaded");
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" }); }
  catch (e) { return noGL(e.message); }
  canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); noGL("context lost"); });

  const R = 2.45, FOV = 45, TAN = Math.tan((FOV * Math.PI) / 360);
  const ACCENTS = ["#ff304f"]; // neon red hover glow for every node
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100), world = new THREE.Group();
  scene.fog = new THREE.Fog(0x05070d, 1, 10); // depth: far stars fade into the background
  scene.add(world);

  /* --- visuals (all children of `world`) --- */
  const GA = Math.PI * (3 - Math.sqrt(5)), small = innerWidth < 768;
  function cloud(n, r0, r1, size, opacity, color = 0xf4f2ef) {
    const p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(Math.max(0, 1 - y * y)), th = i * GA, k = r0 + Math.random() * (r1 - r0);
      p.set([Math.cos(th) * r * R * k, y * R * k, Math.sin(th) * r * R * k], i * 3);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    return new THREE.Points(g, new THREE.PointsMaterial({ color, size, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  }
  world.add(cloud(small ? 700 : 1500, 0.86, 1.02, small ? 0.022 : 0.016, 0.72));   // star shell
  world.add(cloud(small ? 90 : 220, 1.12, 1.55, small ? 0.03 : 0.022, 0.5, 0xa78bfa));      // floating dust
  world.add(new THREE.Mesh(new THREE.IcosahedronGeometry(R * 1.001, 2), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.09, depthWrite: false })));
  world.add(new THREE.Mesh(new THREE.SphereGeometry(R * 0.32, 32, 32), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.09, depthWrite: false })));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(R * 0.66, 0.0035, 8, 160), new THREE.MeshBasicMaterial({ color: 0x0dcaf0, transparent: true, opacity: 0.28, depthWrite: false }));
  ring.rotation.set(Math.PI / 2.35, 0.2, 0); world.add(ring);

  /* --- nodes: DOM buttons anchored to unit vectors on a Fibonacci sphere --- */
  const N = categories.length;
  const nodes = categories.map((cat, i) => {
    // offset by half a step so no node sits exactly on a pole (a pole node never moves when the globe spins)
    const y = 1 - (2 * i + 1) / N, r = Math.sqrt(Math.max(0, 1 - y * y)), th = i * GA;
    const el = document.createElement("button");
    el.type = "button"; el.className = "node";
    el.setAttribute("aria-label", `${cat.name} — open directory (${cat.count} entries)`);
    el.innerHTML = `<span class="node__inner" style="--a:${ACCENTS[i % ACCENTS.length]}"><span class="node__dot"></span><span class="node__label">${cat.short}<span class="node__count">${cat.count}</span></span></span>`;
    nodesEl.appendChild(el);
    const show = () => { info.innerHTML = `<div class="count">Category</div><h3>${cat.name}</h3><p>${cat.description}</p><div class="count">${cat.count} entries</div>`; info.classList.add("show"); hovering = true; };
    const hide = () => { info.classList.remove("show"); hovering = false; };
    el.addEventListener("pointerenter", show); el.addEventListener("pointerleave", hide);
    el.addEventListener("focus", show); el.addEventListener("blur", hide);
    el.addEventListener("click", (ev) => { if (suppressClick) return ev.preventDefault(); location.href = "category.html?cat=" + cat.slug; });
    return { el, unit: new THREE.Vector3(Math.cos(th) * r, y, Math.sin(th) * r) };
  });

  /* --- state --- */
  let yaw = 0.4, pitch = -0.12, vYaw = 0, vPitch = 0, auto = 0;       // rotation (rad, rad/s)
  let zoom = 1, zoomT = 1; const ZMIN = 0.7, ZMAX = 1.5;               // zoom factor
  let dist = 7, base = 7, W = 1, H = 1;
  let dragging = false, hovering = false, suppressClick = false, moved = 0, lastMoveT = 0, lastAct = 0, visible = true;
  const pts = new Map(); let pinch = null;
  const clampZ = (z) => Math.min(ZMAX, Math.max(ZMIN, z));

  function resize() {
    W = stage.clientWidth; H = stage.clientHeight; if (!W || !H) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    const fill = W < 420 ? 0.32 : W < 640 ? 0.36 : 0.42, m = Math.min(W, H);
    base = (R * (H / 2)) / (fill * m * TAN);                            // sphere fits any screen size
  }
  new ResizeObserver(resize).observe(stage); resize();

  /* --- input: drag to rotate, wheel / pinch / buttons to zoom --- */
  const dist2 = () => { const [a, b] = [...pts.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
  stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2) { pinch = { d: dist2(), z: zoomT }; dragging = false; }
    else { dragging = true; moved = 0; vYaw = vPitch = 0; stage.classList.add("dragging"); }
    lastMoveT = performance.now();
  });
  window.addEventListener("pointermove", (e) => {
    const p = pts.get(e.pointerId); if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
    lastAct = performance.now();
    if (pinch && pts.size === 2) { zoomT = clampZ(pinch.z * dist2() / pinch.d); suppressClick = true; return; }
    if (!dragging) return;
    moved += Math.abs(dx) + Math.abs(dy);
    const k = 0.0055, dt = Math.max(0.008, (lastAct - lastMoveT) / 1000); lastMoveT = lastAct;
    yaw += dx * k; pitch = Math.max(-0.75, Math.min(0.75, pitch + dy * k));
    vYaw = Math.max(-4, Math.min(4, vYaw * 0.6 + (dx * k / dt) * 0.4));
    vPitch = Math.max(-4, Math.min(4, vPitch * 0.6 + (dy * k / dt) * 0.4));
  });
  function up(e) {
    if (!pts.delete(e.pointerId)) return;
    if (pts.size < 2) pinch = null;
    if (pts.size === 0) {
      dragging = false; stage.classList.remove("dragging");
      if (performance.now() - lastMoveT > 90) vYaw = vPitch = 0;          // held still before release: no fling
      suppressClick = suppressClick || moved > 6; setTimeout(() => (suppressClick = false), 80);
    }
    lastAct = performance.now();
  }
  window.addEventListener("pointerup", up); window.addEventListener("pointercancel", up);
  stage.addEventListener("wheel", (e) => {
    const next = clampZ(zoomT * Math.exp(-e.deltaY * 0.0015));
    if (next === zoomT) return;                                           // at the limit: let the page scroll
    e.preventDefault(); zoomT = next; lastAct = performance.now();
  }, { passive: false });
  const step = (f) => { zoomT = clampZ(zoomT * f); lastAct = performance.now(); };
  document.getElementById("zoomIn").addEventListener("click", () => step(1.25));
  document.getElementById("zoomOut").addEventListener("click", () => step(0.8));
  new IntersectionObserver((en) => (visible = en[0].isIntersecting)).observe(stage);

  /* --- one frame: update state -> update matrices -> place DOM nodes -> render --- */
  const v = new THREE.Vector3(); let prev = performance.now(), first = true;
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - prev) / 1000); prev = now;
    if (document.hidden || !visible || !W) return;
    if (!dragging) {
      const damp = Math.exp(-dt * 3.2);
      yaw += vYaw * dt; pitch += vPitch * dt; vYaw *= damp; vPitch *= damp;
      const idle = !reduced && !hovering && !pinch && now - lastAct > 2500;
      auto += ((idle ? 0.14 : 0) - auto) * (1 - Math.exp(-dt * 2)); yaw += auto * dt;   // eased idle spin
      if (Math.abs(pitch) > 0.75) { pitch = Math.sign(pitch) * 0.75; vPitch = 0; }
    }
    zoom += (zoomT - zoom) * (1 - Math.exp(-dt * 8));
    dist = Math.max(R * 1.5, base / zoom);                                // never enters the sphere
    camera.position.set(0, 0, dist);
    scene.fog.near = dist - R; scene.fog.far = dist + R * 1.2;
    world.rotation.set(pitch, yaw, 0);                                    // yaw, then screen-fixed pitch
    world.updateMatrixWorld(true); camera.updateMatrixWorld(true);        // matrices current BEFORE projecting

    const grow = Math.pow(zoom, 0.35);
    for (const n of nodes) {
      v.copy(n.unit).multiplyScalar(R).applyMatrix4(world.matrixWorld);
      const f = (v.z / R + 1) / 2;                                        // 0 far side .. 1 near side
      v.project(camera);
      const x = (v.x * 0.5 + 0.5) * W, y = (-v.y * 0.5 + 0.5) * H, op = 0.3 + 0.7 * f;
      n.el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) translate(-50%,-50%)`;
      n.el.style.opacity = op.toFixed(3);
      n.el.style.zIndex = Math.round(3 + f * 6);
      n.el.style.pointerEvents = f < 0.32 ? "none" : "auto";             // back-side nodes can't be clicked through the globe
      n.el.firstChild.style.setProperty("--s", ((0.78 + 0.36 * f) * grow).toFixed(3));
    }
    renderer.render(scene, camera);
    if (first) { first = false; nodesEl.classList.add("ready"); reveal(); }
  }
  requestAnimationFrame(frame);
};
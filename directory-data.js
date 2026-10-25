/* ============================================================
   CENTRAL DATA FILE - the ONLY place directory entries live.
   Generated from AI_Tools_Master_Directory.xlsx, then yours to edit.
   See README.md for how to add entries.

   BLANK ENTRY TEMPLATE (copy, paste at the end of `entries`, edit):
   {
     id: "category-slug-tool-name",   // unique, lowercase, no spaces
     name: "",
     category: "AI Tools",            // must match a category name below
     subcategory: "",
     description: "",
     helpfulness: "",
     officialUrl: "",                 // "" if unknown. Must start with https://
     pricing: "",
     pricingType: "Varies / Verify",  // see pricingTypes
     accessType: "",
     tags: [],
     notes: "",
     verificationStatus: "Needs Verification",
     source: "",
     metadata: { workbookStatus: "" }
   },
   ============================================================ */
window.DIRECTORY_DATA = {
  categories: [
    {
      "name": "AI Tools",
      "slug": "ai-tools",
      "short": "AI Tools",
      "description": "AI assistants, models, AI agents, image/video/audio tools and AI platforms."
    },
    {
      "name": "Websites & Platforms",
      "slug": "websites-platforms",
      "short": "Websites",
      "description": "General websites, stock assets, learning resources, hosting, databases, design inspiration and productivity tools."
    },
    {
      "name": "UI Components & References",
      "slug": "ui-components",
      "short": "UI Components",
      "description": "Component libraries, sliders, carousels, animation examples and reusable interface references."
    },
    {
      "name": "GitHub Repositories & Code Libraries",
      "slug": "github-code-libraries",
      "short": "GitHub & Code",
      "description": "GitHub repositories, JavaScript libraries, animation libraries and developer tools."
    },
    {
      "name": "Local AI Setup",
      "slug": "local-ai-setup",
      "short": "Local AI",
      "description": "Your OpenClaw + Ollama workflow, installed models and setup utilities."
    },
    {
      "name": "UI Design Styles",
      "slug": "ui-design-styles",
      "short": "UI Styles",
      "description": "The 15 design styles from your reference image. A design vocabulary/reference list."
    },
    {
      "name": "Study & Learning",
      "slug": "study-learning",
      "short": "Study",
      "description": "Educational platforms, tutorials and web-development learning resources."
    }
  ],
  pricingTypes: ["Free","Freemium","Varies / Verify","Not Applicable"],
  verificationStatuses: ["Verified","Needs Verification","Reference"],
  entries: [
    {
      "id": "ai-tools-chatgpt",
      "name": "ChatGPT",
      "category": "AI Tools",
      "subcategory": "AI Assistant",
      "description": "General-purpose AI assistant",
      "helpfulness": "Helps with concepts, coding, writing, research and problem-solving",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Assistant",
        "App"
      ],
      "notes": "OpenAI; daily-use priority",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 4",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-google-gemini",
      "name": "Google Gemini",
      "category": "AI Tools",
      "subcategory": "AI Assistant",
      "description": "AI assistant",
      "helpfulness": "Helps with learning, reasoning, writing and Google ecosystem tasks",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Assistant",
        "App"
      ],
      "notes": "Google; daily-use priority",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 5",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-perplexity",
      "name": "Perplexity",
      "category": "AI Tools",
      "subcategory": "Research AI",
      "description": "AI-powered search and research",
      "helpfulness": "Finds information and provides cited sources",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Research AI",
        "App"
      ],
      "notes": "Daily-use priority",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 6",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-claude",
      "name": "Claude",
      "category": "AI Tools",
      "subcategory": "AI Assistant",
      "description": "AI assistant",
      "helpfulness": "Useful for coding, long documents, analysis and writing",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Assistant",
        "App"
      ],
      "notes": "Anthropic; daily-use priority",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 7",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-deepseek",
      "name": "DeepSeek",
      "category": "AI Tools",
      "subcategory": "AI Assistant / Model Family",
      "description": "AI assistant and model family",
      "helpfulness": "Helps with reasoning, mathematics and coding",
      "officialUrl": "",
      "pricing": "Free access / paid API options may vary",
      "pricingType": "Freemium",
      "accessType": "Website / App / API",
      "tags": [
        "AI Assistant",
        "Model Family",
        "App",
        "API"
      ],
      "notes": "Daily-use priority",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 8",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-github-copilot",
      "name": "GitHub Copilot",
      "category": "AI Tools",
      "subcategory": "Coding AI",
      "description": "AI coding assistant",
      "helpfulness": "Suggests code, explains errors and assists development",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans; student benefits may apply",
      "pricingType": "Freemium",
      "accessType": "IDE Extension / Website",
      "tags": [
        "Coding AI",
        "IDE Extension"
      ],
      "notes": "GitHub; check student eligibility",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 9",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-grok",
      "name": "Grok",
      "category": "AI Tools",
      "subcategory": "AI Assistant",
      "description": "AI assistant",
      "helpfulness": "Helps with reasoning, writing and current-topic exploration",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid access may vary",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Assistant",
        "App"
      ],
      "notes": "xAI",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 10",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-manus",
      "name": "Manus",
      "category": "AI Tools",
      "subcategory": "AI Agent",
      "description": "AI agent platform",
      "helpfulness": "Helps carry out multi-step research and digital tasks",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Agent",
        "Cross-Listed"
      ],
      "notes": "Also listed as Manus.im; deduplicated",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 11",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-lovable",
      "name": "Lovable",
      "category": "AI Tools",
      "subcategory": "AI App Builder",
      "description": "AI app builder",
      "helpfulness": "Builds web-app prototypes from natural-language prompts",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI App Builder"
      ],
      "notes": "Lovable",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 12",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-nano-banana",
      "name": "Nano Banana",
      "category": "AI Tools",
      "subcategory": "Image Generation Model",
      "description": "Google image-generation model family",
      "helpfulness": "Creates and edits images through supported Google products",
      "officialUrl": "",
      "pricing": "Depends on host product and plan",
      "pricingType": "Varies / Verify",
      "accessType": "AI Model",
      "tags": [
        "Image Generation Model",
        "AI Model"
      ],
      "notes": "Google; not a separate general-purpose assistant",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 13",
      "metadata": {
        "workbookStatus": "Confirm exact model/version"
      }
    },
    {
      "id": "ai-tools-leonardo-ai",
      "name": "Leonardo AI",
      "category": "AI Tools",
      "subcategory": "Image Generation",
      "description": "AI image generation",
      "helpfulness": "Creates artwork and visual assets",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Image Generation"
      ],
      "notes": "Leonardo",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 14",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-meta-ai",
      "name": "Meta AI",
      "category": "AI Tools",
      "subcategory": "AI Assistant",
      "description": "AI assistant",
      "helpfulness": "Helps with everyday questions and creative tasks",
      "officialUrl": "",
      "pricing": "Free access varies by feature and region",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Assistant",
        "App"
      ],
      "notes": "Meta",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 15",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-google-ai-studio",
      "name": "Google AI Studio",
      "category": "AI Tools",
      "subcategory": "AI Development",
      "description": "Experiment with Google's generative AI models",
      "helpfulness": "Tests prompts and builds AI prototypes",
      "officialUrl": "",
      "pricing": "Free usage limits; paid API usage may apply",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Development"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 16",
      "metadata": {
        "workbookStatus": "Verify current limits"
      }
    },
    {
      "id": "ai-tools-notebooklm",
      "name": "NotebookLM",
      "category": "AI Tools",
      "subcategory": "Research / Study AI",
      "description": "Source-grounded research assistant",
      "helpfulness": "Summarises supplied documents and helps create study materials",
      "officialUrl": "",
      "pricing": "Free (Limited) / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Research",
        "Study AI"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 17",
      "metadata": {
        "workbookStatus": "Known product; verify current plans"
      }
    },
    {
      "id": "ai-tools-google-imagen-3",
      "name": "Google Imagen 3",
      "category": "AI Tools",
      "subcategory": "Image Generation Model",
      "description": "Image-generation model",
      "helpfulness": "Creates images from text prompts in supported products",
      "officialUrl": "",
      "pricing": "Depends on hosting product and access",
      "pricingType": "Varies / Verify",
      "accessType": "AI Model",
      "tags": [
        "Image Generation Model",
        "AI Model"
      ],
      "notes": "Google; model rather than standalone assistant",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 18",
      "metadata": {
        "workbookStatus": "Verify availability"
      }
    },
    {
      "id": "ai-tools-google-veo-3",
      "name": "Google Veo 3",
      "category": "AI Tools",
      "subcategory": "Video Generation Model",
      "description": "Video-generation model",
      "helpfulness": "Generates video from supported prompts and inputs",
      "officialUrl": "",
      "pricing": "Depends on hosting product and access",
      "pricingType": "Varies / Verify",
      "accessType": "AI Model",
      "tags": [
        "Video Generation Model",
        "AI Model"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 19",
      "metadata": {
        "workbookStatus": "Verify availability"
      }
    },
    {
      "id": "ai-tools-google-flow",
      "name": "Google Flow",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI filmmaking and scene-creation tool",
      "helpfulness": "Helps create and edit cinematic video scenes",
      "officialUrl": "",
      "pricing": "Plan, region and eligibility dependent",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "Google; keep near Gemini and Veo",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 20",
      "metadata": {
        "workbookStatus": "Verify current availability"
      }
    },
    {
      "id": "ai-tools-sora-2",
      "name": "Sora 2",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI video generation",
      "helpfulness": "Generates videos from prompts and supported inputs",
      "officialUrl": "",
      "pricing": "Access and plan dependent",
      "pricingType": "Varies / Verify",
      "accessType": "Website / App / Model",
      "tags": [
        "Video Generation",
        "App",
        "Model"
      ],
      "notes": "OpenAI",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 21",
      "metadata": {
        "workbookStatus": "Verify current availability"
      }
    },
    {
      "id": "ai-tools-heygen",
      "name": "HeyGen",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI avatar video creation",
      "helpfulness": "Creates presenter-style videos",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 22",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-elevenlabs",
      "name": "ElevenLabs",
      "category": "AI Tools",
      "subcategory": "Audio / Voice AI",
      "description": "AI voice generation",
      "helpfulness": "Creates synthetic voices and voiceovers",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / API",
      "tags": [
        "Audio",
        "Voice AI",
        "API"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 23",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-pictory",
      "name": "Pictory",
      "category": "AI Tools",
      "subcategory": "Video Creation",
      "description": "AI video creation",
      "helpfulness": "Turns scripts and content into videos",
      "officialUrl": "",
      "pricing": "Free Trial / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Creation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 24",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-murf-ai",
      "name": "Murf AI",
      "category": "AI Tools",
      "subcategory": "Audio / Voice AI",
      "description": "AI voiceovers",
      "helpfulness": "Creates narration for presentations and videos",
      "officialUrl": "",
      "pricing": "Free Trial / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Audio",
        "Voice AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 25",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-lovo-ai",
      "name": "LOVO AI",
      "category": "AI Tools",
      "subcategory": "Audio / Video AI",
      "description": "AI voice and video tools",
      "helpfulness": "Creates voiceovers and related content",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Audio",
        "Video AI"
      ],
      "notes": "Also called LOVO",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 26",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-synthesia",
      "name": "Synthesia",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI avatar videos",
      "helpfulness": "Creates training and presentation videos",
      "officialUrl": "",
      "pricing": "Free demo / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 27",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-descript",
      "name": "Descript",
      "category": "AI Tools",
      "subcategory": "Audio / Video Editing",
      "description": "Transcript-based audio and video editor",
      "helpfulness": "Edits recordings through transcript-based workflows",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Desktop / Website",
      "tags": [
        "Audio",
        "Video Editing",
        "Desktop"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 28",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-runway",
      "name": "Runway",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI video generation and editing",
      "helpfulness": "Creates and transforms video clips",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 29",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-pika",
      "name": "Pika",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI video generation",
      "helpfulness": "Creates short creative clips from prompts and images",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 30",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-higgsfield",
      "name": "Higgsfield",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI video and visual generation",
      "helpfulness": "Creates cinematic and stylised visual content",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Generation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 31",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-gamma-ai",
      "name": "Gamma AI",
      "category": "AI Tools",
      "subcategory": "Productivity AI",
      "description": "AI presentations and visual documents",
      "helpfulness": "Creates presentation decks and documents",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Productivity AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 32",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-chatpdf",
      "name": "ChatPDF",
      "category": "AI Tools",
      "subcategory": "Research / Study AI",
      "description": "AI document question-answering",
      "helpfulness": "Asks questions about PDFs and summarises documents",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Research",
        "Study AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 33",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-paperpal",
      "name": "Paperpal",
      "category": "AI Tools",
      "subcategory": "Writing / Research AI",
      "description": "AI academic writing assistant",
      "helpfulness": "Improves academic writing, grammar and manuscript clarity",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Writing",
        "Research AI",
        "App"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 34",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-distilbook",
      "name": "DistilBook",
      "category": "AI Tools",
      "subcategory": "AI Video / Learning",
      "description": "Document-to-explainer video tool",
      "helpfulness": "Turns learning material into visual explanations",
      "officialUrl": "",
      "pricing": "Verify current pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Video",
        "Learning"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 35",
      "metadata": {
        "workbookStatus": "Verify exact features and plans"
      }
    },
    {
      "id": "ai-tools-chatgpt-study",
      "name": "ChatGPT Study",
      "category": "AI Tools",
      "subcategory": "Education AI",
      "description": "AI-assisted learning and study support",
      "helpfulness": "Helps explain concepts and practise problems",
      "officialUrl": "",
      "pricing": "Depends on ChatGPT plan and feature availability",
      "pricingType": "Varies / Verify",
      "accessType": "Website / App",
      "tags": [
        "Education AI",
        "App"
      ],
      "notes": "ChatGPT study feature / mode",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 36",
      "metadata": {
        "workbookStatus": "Verify exact feature name"
      }
    },
    {
      "id": "ai-tools-dora",
      "name": "DORA",
      "category": "AI Tools",
      "subcategory": "AI Website Design",
      "description": "AI-assisted website design and creation",
      "helpfulness": "May help create interactive websites and animations",
      "officialUrl": "",
      "pricing": "Verify current pricing and availability",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Website Design"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 37",
      "metadata": {
        "workbookStatus": "Verify exact product"
      }
    },
    {
      "id": "ai-tools-sitereel-ai",
      "name": "SiteReel.ai",
      "category": "AI Tools",
      "subcategory": "Design Inspiration",
      "description": "Website discovery and inspiration",
      "helpfulness": "May help explore website examples and design references",
      "officialUrl": "",
      "pricing": "Verify current pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Design Inspiration"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 38",
      "metadata": {
        "workbookStatus": "Verify exact product"
      }
    },
    {
      "id": "ai-tools-youmind",
      "name": "YouMind",
      "category": "AI Tools",
      "subcategory": "Productivity / Research AI",
      "description": "AI-assisted research and knowledge management",
      "helpfulness": "Organises research and helps develop ideas",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Productivity",
        "Research AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 39",
      "metadata": {
        "workbookStatus": "Verify current offering"
      }
    },
    {
      "id": "ai-tools-meigen-ai",
      "name": "Meigen.AI",
      "category": "AI Tools",
      "subcategory": "AI Tool",
      "description": "AI-related creative or productivity service",
      "helpfulness": "Use depends on the exact service listed",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Tool"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 40",
      "metadata": {
        "workbookStatus": "Verify exact URL and offering"
      }
    },
    {
      "id": "ai-tools-wispr-flow",
      "name": "Wispr Flow",
      "category": "AI Tools",
      "subcategory": "Productivity AI",
      "description": "AI voice dictation",
      "helpfulness": "Converts speech into text across supported apps",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "App",
      "tags": [
        "Productivity AI",
        "App"
      ],
      "notes": "Wispr Flow",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 41",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-moxt",
      "name": "Moxt",
      "category": "AI Tools",
      "subcategory": "AI Aggregator / Workspace",
      "description": "Multi-model AI workspace",
      "helpfulness": "Provides access to different AI models in one workspace",
      "officialUrl": "",
      "pricing": "Verify current plan and usage pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Aggregator",
        "Workspace"
      ],
      "notes": "Parent platform for model names listed below",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 42",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ai-tools-sonnet-5",
      "name": "Sonnet 5",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 43",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-sonnet-4-6",
      "name": "Sonnet 4.6",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 44",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-gpt-5-6-terra",
      "name": "GPT-5.6 Terra",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 45",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-gpt-5-6-luna",
      "name": "GPT-5.6 Luna",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 46",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-gpt-5-5",
      "name": "GPT-5.5",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 47",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-gemini-3-1-pro",
      "name": "Gemini 3.1 Pro",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "Google model family; verify exact name",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 48",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-gemini-3-5-flash",
      "name": "Gemini 3.5 Flash",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "Google model family; verify exact name",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 49",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-deepseek-v4-pro",
      "name": "DeepSeek V4-Pro",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 50",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-deepseek-v4-flash",
      "name": "DeepSeek V4-Flash",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 51",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-kimi-k3",
      "name": "Kimi K3",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 52",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-kimi-k2-6",
      "name": "Kimi K2.6",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 53",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-qwen-3-7-max",
      "name": "Qwen 3.7-Max",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 54",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-glm-5-2",
      "name": "GLM-5.2",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 55",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-glm-5-1",
      "name": "GLM-5.1",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 56",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-mimo-v2-5-pro",
      "name": "MiMo-V2.5-Pro",
      "category": "AI Tools",
      "subcategory": "AI Model",
      "description": "Model name supplied from Moxt",
      "helpfulness": "Use depends on model capabilities and provider",
      "officialUrl": "",
      "pricing": "Depends on Moxt/provider access",
      "pricingType": "Varies / Verify",
      "accessType": "Model inside Moxt",
      "tags": [
        "AI Model",
        "Model inside Moxt"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 57",
      "metadata": {
        "workbookStatus": "Verify exact model name"
      }
    },
    {
      "id": "ai-tools-openclaw",
      "name": "OpenClaw",
      "category": "AI Tools",
      "subcategory": "AI Agent / Local Setup",
      "description": "Runs an AI agent through a command-line interface",
      "helpfulness": "Connects an agent to supported models and workflows",
      "officialUrl": "",
      "pricing": "Software access may be free; connected services may cost",
      "pricingType": "Freemium",
      "accessType": "Local Software / CLI",
      "tags": [
        "AI Agent",
        "Local Setup",
        "Local Software",
        "CLI"
      ],
      "notes": "Configured in your local setup",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 58",
      "metadata": {
        "workbookStatus": "Verify current project and security practices"
      }
    },
    {
      "id": "ai-tools-google-stitch",
      "name": "Google Stitch",
      "category": "AI Tools",
      "subcategory": "UI / UX AI",
      "description": "AI-powered UI design",
      "helpfulness": "Generates interface concepts from prompts",
      "officialUrl": "",
      "pricing": "Check current plan and availability",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "UI",
        "UX AI",
        "Cross-Listed"
      ],
      "notes": "Google; same as Stitch entry",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 59",
      "metadata": {
        "workbookStatus": "Verify current availability"
      }
    },
    {
      "id": "ai-tools-floot",
      "name": "Floot",
      "category": "AI Tools",
      "subcategory": "AI App Builder",
      "description": "AI-powered app and website building",
      "helpfulness": "Helps build and deploy web applications",
      "officialUrl": "",
      "pricing": "Check current plan and usage limits",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI App Builder"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 60",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-lovable-website-builder",
      "name": "Lovable website builder",
      "category": "AI Tools",
      "subcategory": "AI App Builder",
      "description": "AI website/app generation",
      "helpfulness": "Builds web projects from prompts",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI App Builder",
        "Cross-Listed"
      ],
      "notes": "Duplicate of Lovable; retained as alias note",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'AI Tools', row 61",
      "metadata": {
        "workbookStatus": "Merge with Lovable if desired"
      }
    },
    {
      "id": "websites-platforms-pixabay",
      "name": "Pixabay",
      "category": "Websites & Platforms",
      "subcategory": "Stock Assets",
      "description": "Stock images, illustrations and media",
      "helpfulness": "Finds assets for websites and presentations",
      "officialUrl": "https://pixabay.com",
      "pricing": "Free with licence conditions",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Stock Assets"
      ],
      "notes": "Pixabay.com",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 4, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Check asset licence"
      }
    },
    {
      "id": "websites-platforms-stocksnap",
      "name": "StockSnap",
      "category": "Websites & Platforms",
      "subcategory": "Stock Assets",
      "description": "Free stock photography",
      "helpfulness": "Finds photos for designs and websites",
      "officialUrl": "https://stocksnap.io",
      "pricing": "Free with licence conditions",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Stock Assets"
      ],
      "notes": "StockSnap.io",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 5, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Check asset licence"
      }
    },
    {
      "id": "websites-platforms-unsplash",
      "name": "Unsplash",
      "category": "Websites & Platforms",
      "subcategory": "Stock Assets",
      "description": "Stock photography",
      "helpfulness": "Provides high-quality photographs",
      "officialUrl": "https://unsplash.com",
      "pricing": "Free with licence conditions",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Stock Assets"
      ],
      "notes": "Unsplash.com",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 6, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Check asset licence"
      }
    },
    {
      "id": "websites-platforms-pexels",
      "name": "Pexels",
      "category": "Websites & Platforms",
      "subcategory": "Stock Assets",
      "description": "Stock photography and videos",
      "helpfulness": "Finds visual assets for projects",
      "officialUrl": "https://pexels.com",
      "pricing": "Free with licence conditions",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Stock Assets"
      ],
      "notes": "Pexels.com",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 7, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Check asset licence"
      }
    },
    {
      "id": "websites-platforms-dribbble",
      "name": "Dribbble",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Design inspiration and portfolio platform",
      "helpfulness": "Finds UI references, layouts and visual ideas",
      "officialUrl": "",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 8",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-godly",
      "name": "Godly",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Website design inspiration",
      "helpfulness": "Showcases visually distinctive websites",
      "officialUrl": "",
      "pricing": "Free browsing",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Design Inspiration"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 9",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-flaticon",
      "name": "Flaticon",
      "category": "Websites & Platforms",
      "subcategory": "Design Assets",
      "description": "Icons and stickers library",
      "helpfulness": "Adds icons to websites, presentations and UI designs",
      "officialUrl": "https://www.flaticon.com/",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Assets"
      ],
      "notes": "https://www.flaticon.com/",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 10, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "User supplied link; check licence"
      }
    },
    {
      "id": "websites-platforms-color-hunt",
      "name": "Color Hunt",
      "category": "Websites & Platforms",
      "subcategory": "Design Assets / Colour",
      "description": "Curated colour palettes",
      "helpfulness": "Helps choose colour combinations for websites and projects",
      "officialUrl": "",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Design Assets",
        "Colour"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 11",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-haikei",
      "name": "Haikei",
      "category": "Websites & Platforms",
      "subcategory": "Design Assets",
      "description": "Generative SVG shapes and backgrounds",
      "helpfulness": "Creates backgrounds and decorative SVG assets",
      "officialUrl": "",
      "pricing": "Free tools / features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Assets"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 12",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-realtime-colors",
      "name": "Realtime Colors",
      "category": "Websites & Platforms",
      "subcategory": "Design Assets / Colour",
      "description": "Colour palette and website preview tool",
      "helpfulness": "Tests colours and typography on sample interfaces",
      "officialUrl": "",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Design Assets",
        "Colour"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 13",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-framer",
      "name": "Framer",
      "category": "Websites & Platforms",
      "subcategory": "Website Builder / Templates",
      "description": "Website design and publishing",
      "helpfulness": "Designs and publishes polished websites",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Website Builder",
        "Templates"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 14",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-lovable",
      "name": "Lovable",
      "category": "Websites & Platforms",
      "subcategory": "AI Website / App Work",
      "description": "AI app builder",
      "helpfulness": "Builds web-app prototypes from prompts",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Website",
        "App Work"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 15",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-v0-by-vercel",
      "name": "v0 by Vercel",
      "category": "Websites & Platforms",
      "subcategory": "AI Website / App Work",
      "description": "AI interface and app generation",
      "helpfulness": "Generates UI and code from prompts",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Website",
        "App Work"
      ],
      "notes": "Vercel",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 16",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-bolt-new",
      "name": "Bolt.new",
      "category": "Websites & Platforms",
      "subcategory": "AI Website / App Work",
      "description": "AI web development",
      "helpfulness": "Creates and edits web projects in the browser",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Website",
        "App Work"
      ],
      "notes": "StackBlitz",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 17",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-firebase-studio",
      "name": "Firebase Studio",
      "category": "Websites & Platforms",
      "subcategory": "AI Website / App Work",
      "description": "AI-assisted app development",
      "helpfulness": "Prototypes and builds apps with Google tools",
      "officialUrl": "",
      "pricing": "Check current availability and plan",
      "pricingType": "Varies / Verify",
      "accessType": "Development Platform",
      "tags": [
        "AI Website",
        "App Work",
        "Development Platform"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 18",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-workik",
      "name": "Workik",
      "category": "Websites & Platforms",
      "subcategory": "AI Website / App Work",
      "description": "AI coding and development assistant",
      "helpfulness": "Helps generate, explain and work with code",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Website",
        "App Work"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 19",
      "metadata": {
        "workbookStatus": "Verify current offering"
      }
    },
    {
      "id": "websites-platforms-google-ai-studio",
      "name": "Google AI Studio",
      "category": "Websites & Platforms",
      "subcategory": "AI Work / Development",
      "description": "Generative AI prototyping",
      "helpfulness": "Tests prompts and builds AI prototypes",
      "officialUrl": "",
      "pricing": "Free usage limits; paid API usage may apply",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Work",
        "Development"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 20",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-notebooklm",
      "name": "NotebookLM",
      "category": "Websites & Platforms",
      "subcategory": "AI Work / Research",
      "description": "Research assistant for supplied sources",
      "helpfulness": "Summarises documents and creates study materials",
      "officialUrl": "",
      "pricing": "Free (Limited) / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Work",
        "Research"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 21",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-google-flow",
      "name": "Google Flow",
      "category": "Websites & Platforms",
      "subcategory": "AI Work / Video",
      "description": "AI filmmaking and scene creation",
      "helpfulness": "Creates and edits cinematic video scenes",
      "officialUrl": "",
      "pricing": "Access and plan dependent",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Work",
        "Video"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 22",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-google-cloud",
      "name": "Google Cloud",
      "category": "Websites & Platforms",
      "subcategory": "Cloud / Hosting",
      "description": "Cloud computing platform",
      "helpfulness": "Hosts applications, databases and AI services",
      "officialUrl": "",
      "pricing": "Free quotas / Paid usage",
      "pricingType": "Freemium",
      "accessType": "Cloud Platform",
      "tags": [
        "Cloud",
        "Hosting",
        "Cloud Platform"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 23",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-neon",
      "name": "Neon",
      "category": "Websites & Platforms",
      "subcategory": "Database / Backend",
      "description": "Serverless PostgreSQL database",
      "helpfulness": "Provides a cloud database for web apps",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Cloud Service",
      "tags": [
        "Database",
        "Backend",
        "Cloud Service"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 24",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-render",
      "name": "Render",
      "category": "Websites & Platforms",
      "subcategory": "Hosting / Deployment",
      "description": "App hosting and deployment",
      "helpfulness": "Deploys websites, APIs and backend services",
      "officialUrl": "",
      "pricing": "Free options / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Cloud Service",
      "tags": [
        "Hosting",
        "Deployment",
        "Cloud Service"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 25",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-kaggle",
      "name": "Kaggle",
      "category": "Websites & Platforms",
      "subcategory": "Data Science / Learning",
      "description": "Datasets, notebooks and ML competitions",
      "helpfulness": "Provides data for practice and experimentation",
      "officialUrl": "",
      "pricing": "Free access to core features",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Data Science",
        "Learning"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 26",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-google-colab",
      "name": "Google Colab",
      "category": "Websites & Platforms",
      "subcategory": "Coding / ML",
      "description": "Cloud Python notebooks",
      "helpfulness": "Runs Python and machine-learning experiments",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Coding",
        "ML"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 27",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-google-apps-script",
      "name": "Google Apps Script",
      "category": "Websites & Platforms",
      "subcategory": "Automation / Development",
      "description": "Workspace automation",
      "helpfulness": "Automates Sheets, Docs, Gmail and other workflows",
      "officialUrl": "",
      "pricing": "Generally free within applicable limits",
      "pricingType": "Freemium",
      "accessType": "Development Platform",
      "tags": [
        "Automation",
        "Development",
        "Development Platform"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 28",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-web-dev",
      "name": "web.dev",
      "category": "Websites & Platforms",
      "subcategory": "Learning / Web Development",
      "description": "Web development learning resources",
      "helpfulness": "Learn web standards, performance, accessibility and best practices",
      "officialUrl": "",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Learning",
        "Web Development"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 29",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-codewithharry",
      "name": "CodeWithHarry",
      "category": "Websites & Platforms",
      "subcategory": "Learning / Coding",
      "description": "Programming tutorials",
      "helpfulness": "Learn web development, Python and other programming topics",
      "officialUrl": "",
      "pricing": "Free content; paid courses may vary",
      "pricingType": "Freemium",
      "accessType": "Website / YouTube",
      "tags": [
        "Learning",
        "Coding",
        "YouTube"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 30",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-docsity",
      "name": "Docsity",
      "category": "Websites & Platforms",
      "subcategory": "Education / Study",
      "description": "Study notes and educational resources",
      "helpfulness": "Finds study materials and exam preparation resources",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Education",
        "Study"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 31",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-paper-panda",
      "name": "Paper Panda",
      "category": "Websites & Platforms",
      "subcategory": "Research / Study",
      "description": "Academic paper discovery or research tool",
      "helpfulness": "May help locate research papers and academic material",
      "officialUrl": "",
      "pricing": "Verify exact product and pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Research",
        "Study"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 32",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-youmind",
      "name": "YouMind",
      "category": "Websites & Platforms",
      "subcategory": "Productivity / Research",
      "description": "Research and knowledge management",
      "helpfulness": "Organises research and helps develop ideas",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Productivity",
        "Research"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 33",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-distilbook",
      "name": "DistilBook",
      "category": "Websites & Platforms",
      "subcategory": "AI Video / Learning",
      "description": "Document-to-explainer video tool",
      "helpfulness": "Turns documents into visual learning videos",
      "officialUrl": "https://distilbook.com/",
      "pricing": "Verify current pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Video",
        "Learning"
      ],
      "notes": "https://distilbook.com/",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 34, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "User supplied link; verify features"
      }
    },
    {
      "id": "websites-platforms-dora",
      "name": "DORA",
      "category": "Websites & Platforms",
      "subcategory": "Website Design / AI",
      "description": "AI-assisted website design and creation",
      "helpfulness": "May help create interactive websites and animations",
      "officialUrl": "",
      "pricing": "Verify current pricing and availability",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Website Design",
        "AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 35",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-sitereel-ai",
      "name": "SiteReel.ai",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Website discovery and inspiration",
      "helpfulness": "May help explore website examples and design references",
      "officialUrl": "",
      "pricing": "Verify current pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Design Inspiration"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 36",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-manus-im",
      "name": "Manus.im",
      "category": "Websites & Platforms",
      "subcategory": "AI Agents",
      "description": "AI agent platform",
      "helpfulness": "Helps carry out multi-step research and digital tasks",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "AI Agents",
        "Cross-Listed"
      ],
      "notes": "Manus; duplicate of Manus entry",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 37",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-cascadeur",
      "name": "Cascadeur",
      "category": "Websites & Platforms",
      "subcategory": "3D / Animation",
      "description": "3D animation software",
      "helpfulness": "Helps create and refine character animation",
      "officialUrl": "https://cascadeur.com/",
      "pricing": "Free options / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Desktop Software",
      "tags": [
        "3D",
        "Animation",
        "Desktop Software"
      ],
      "notes": "https://cascadeur.com/",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 38, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-getlayers-ai",
      "name": "GetLayers.ai",
      "category": "Websites & Platforms",
      "subcategory": "Design Resources",
      "description": "Design resources or AI design tool",
      "helpfulness": "Potentially helps source visual assets and design inspiration",
      "officialUrl": "https://getlayers.ai/",
      "pricing": "Verify current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Design Resources"
      ],
      "notes": "https://getlayers.ai/",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 39, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-motionsites-ai",
      "name": "MotionSites AI",
      "category": "Websites & Platforms",
      "subcategory": "Website Design / Animation",
      "description": "AI website / motion-design tool",
      "helpfulness": "May help create animated website experiences",
      "officialUrl": "",
      "pricing": "Verify current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Website Design",
        "Animation"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 40",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-horizonx-so",
      "name": "HorizonX.so",
      "category": "Websites & Platforms",
      "subcategory": "Website / AI Tool",
      "description": "Website / AI tool from supplied list",
      "helpfulness": "Use depends on exact service",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Tool"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 41",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-originkit-dev",
      "name": "Originkit.dev",
      "category": "Websites & Platforms",
      "subcategory": "Design Resources",
      "description": "Website design resources / components",
      "helpfulness": "May help source assets or interface resources",
      "officialUrl": "",
      "pricing": "Verify current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Design Resources"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 42",
      "metadata": {
        "workbookStatus": "Confirm exact product"
      }
    },
    {
      "id": "websites-platforms-moxt",
      "name": "Moxt",
      "category": "Websites & Platforms",
      "subcategory": "AI Platform",
      "description": "Multi-model AI workspace",
      "helpfulness": "Accesses multiple AI models in one place",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Platform"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 43",
      "metadata": {
        "workbookStatus": "See AI Tools sheet for listed models"
      }
    },
    {
      "id": "websites-platforms-poe",
      "name": "Poe",
      "category": "Websites & Platforms",
      "subcategory": "AI Platform",
      "description": "Multi-model AI platform",
      "helpfulness": "Accesses different AI assistants and bots in one place",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI Platform",
        "App"
      ],
      "notes": "Quora",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 44",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-wispr-flow",
      "name": "Wispr Flow",
      "category": "Websites & Platforms",
      "subcategory": "Productivity",
      "description": "AI voice dictation",
      "helpfulness": "Converts speech into text across supported apps",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "App",
      "tags": [
        "Productivity",
        "App"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 45",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-canva",
      "name": "Canva",
      "category": "Websites & Platforms",
      "subcategory": "Design / Templates",
      "description": "Graphic design and presentations",
      "helpfulness": "Creates graphics, presentations and visual content",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Design",
        "Templates",
        "App"
      ],
      "notes": "Canva AI features included",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 46",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-uizard",
      "name": "Uizard",
      "category": "Websites & Platforms",
      "subcategory": "UI / UX Design",
      "description": "AI wireframes and mockups",
      "helpfulness": "Turns prompts and ideas into interface prototypes",
      "officialUrl": "https://uizard.io",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "UI",
        "UX Design"
      ],
      "notes": "uizard.io",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 47, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-uxpilot",
      "name": "UXPilot",
      "category": "Websites & Platforms",
      "subcategory": "UI / UX Design",
      "description": "AI UI/UX design",
      "helpfulness": "Creates UI concepts and user flows",
      "officialUrl": "https://uxpilot.ai",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "UI",
        "UX Design"
      ],
      "notes": "uxpilot.ai",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 48, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-banani",
      "name": "Banani",
      "category": "Websites & Platforms",
      "subcategory": "UI / UX Design",
      "description": "AI UI design and prototyping",
      "helpfulness": "Generates editable interface concepts",
      "officialUrl": "",
      "pricing": "Check current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "UI",
        "UX Design"
      ],
      "notes": "banani",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 49",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-prototypr",
      "name": "Prototypr",
      "category": "Websites & Platforms",
      "subcategory": "Product Design",
      "description": "AI research and prototyping resources",
      "helpfulness": "Helps research and prototype product ideas",
      "officialUrl": "",
      "pricing": "Check current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Product Design"
      ],
      "notes": "prototypr",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 50",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "websites-platforms-google-stitch",
      "name": "Google Stitch",
      "category": "Websites & Platforms",
      "subcategory": "UI / UX Design",
      "description": "AI UI design",
      "helpfulness": "Generates interface concepts from prompts",
      "officialUrl": "",
      "pricing": "Check current plan and availability",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "UI",
        "UX Design"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 51",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-sitereel-ai-2",
      "name": "Sitereel.ai",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Website inspiration / discovery",
      "helpfulness": "May help find website examples",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Cross-Listed"
      ],
      "notes": "Duplicate alias of SiteReel.ai",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 52",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-flow",
      "name": "Flow",
      "category": "Websites & Platforms",
      "subcategory": "AI Video",
      "description": "AI filmmaking and video generation",
      "helpfulness": "Creates cinematic video scenes",
      "officialUrl": "",
      "pricing": "Depends on product and access",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "AI Video"
      ],
      "notes": "Assumed Google Flow; verify",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Websites & Platforms', row 53",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-skiper-ui",
      "name": "Skiper UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Ready-made UI components and sections",
      "helpfulness": "Helps build modern web interfaces faster",
      "officialUrl": "",
      "pricing": "Check current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 4",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "ui-components-cult-ui",
      "name": "Cult UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Interactive and animated UI components",
      "helpfulness": "Adds distinctive effects and interactions to websites",
      "officialUrl": "",
      "pricing": "Free core components / check paid options",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 5",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-watermelon-ui",
      "name": "Watermelon UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Reusable UI components",
      "helpfulness": "Speeds up interface development with ready-made components",
      "officialUrl": "",
      "pricing": "Check licence and offering",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 6",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "ui-components-motion-primitives",
      "name": "Motion Primitives",
      "category": "UI Components & References",
      "subcategory": "UI Components / Animation",
      "description": "Animated interface components",
      "helpfulness": "Adds text effects, transitions and animations",
      "officialUrl": "",
      "pricing": "Free core resources / licence applies",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Animation",
        "Code Library"
      ],
      "notes": "React-focused",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 7",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-aceternity-ui",
      "name": "Aceternity UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Animated UI components and website blocks",
      "helpfulness": "Creates interactive cards, backgrounds and visual effects",
      "officialUrl": "",
      "pricing": "Free components / paid products may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "React and Tailwind CSS",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 8",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-threeui",
      "name": "ThreeUI",
      "category": "UI Components & References",
      "subcategory": "3D UI Components",
      "description": "3D UI components or tools",
      "helpfulness": "Helps create 3D elements for web interfaces",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "3D UI Components",
        "Code Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 9",
      "metadata": {
        "workbookStatus": "Confirm exact project"
      }
    },
    {
      "id": "ui-components-animmaster-lib",
      "name": "AnimMaster Lib",
      "category": "UI Components & References",
      "subcategory": "Animation Library",
      "description": "Animation library (name supplied)",
      "helpfulness": "May provide reusable animations for interfaces",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Library / Website",
      "tags": [
        "Animation Library",
        "Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 10",
      "metadata": {
        "workbookStatus": "Confirm exact project"
      }
    },
    {
      "id": "ui-components-flick-cards-slider",
      "name": "Flick Cards Slider",
      "category": "UI Components & References",
      "subcategory": "Carousel / Slider",
      "description": "Card-based sliding interaction",
      "helpfulness": "Displays cards in an interactive horizontal slider",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Component / Demo",
      "tags": [
        "Carousel",
        "Slider",
        "Component",
        "Demo"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 11",
      "metadata": {
        "workbookStatus": "Verify original source"
      }
    },
    {
      "id": "ui-components-radial-cards-slider",
      "name": "Radial Cards Slider",
      "category": "UI Components & References",
      "subcategory": "Carousel / Slider",
      "description": "Radially arranged card navigation",
      "helpfulness": "Creates circular or radial card layouts",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Component / Demo",
      "tags": [
        "Carousel",
        "Slider",
        "Component",
        "Demo"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 12",
      "metadata": {
        "workbookStatus": "Verify original source"
      }
    },
    {
      "id": "ui-components-liquid-glass-carousel",
      "name": "Liquid Glass Carousel",
      "category": "UI Components & References",
      "subcategory": "Carousel / Slider",
      "description": "Glass-style carousel",
      "helpfulness": "Creates translucent, layered sliding cards",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Component / Demo",
      "tags": [
        "Carousel",
        "Slider",
        "Component",
        "Demo"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 13",
      "metadata": {
        "workbookStatus": "Verify original source"
      }
    },
    {
      "id": "ui-components-cascading-slider",
      "name": "Cascading Slider",
      "category": "UI Components & References",
      "subcategory": "Carousel / Slider",
      "description": "Cascading card or image slider",
      "helpfulness": "Creates overlapping slides with depth",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Component / Demo",
      "tags": [
        "Carousel",
        "Slider",
        "Component",
        "Demo"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 14",
      "metadata": {
        "workbookStatus": "Verify original source"
      }
    },
    {
      "id": "ui-components-dropping-cards-stack",
      "name": "Dropping Cards Stack",
      "category": "UI Components & References",
      "subcategory": "Carousel / Slider",
      "description": "Animated stacked-card interaction",
      "helpfulness": "Adds layered cards with dropping or stacking motion",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Component / Demo",
      "tags": [
        "Carousel",
        "Slider",
        "Component",
        "Demo"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 15",
      "metadata": {
        "workbookStatus": "Verify original source"
      }
    },
    {
      "id": "ui-components-design-prompts",
      "name": "Design Prompts",
      "category": "UI Components & References",
      "subcategory": "Design Prompt Reference",
      "description": "Prompts or creative directions for design",
      "helpfulness": "Helps generate interface concepts and visual ideas",
      "officialUrl": "",
      "pricing": "Depends on source",
      "pricingType": "Varies / Verify",
      "accessType": "Prompt Collection",
      "tags": [
        "Design Prompt Reference",
        "Prompt Collection"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'UI Components', row 16",
      "metadata": {
        "workbookStatus": "Generic name; add source URL"
      }
    },
    {
      "id": "ui-components-bento-ui",
      "name": "Bento UI",
      "category": "UI Components & References",
      "subcategory": "UI Pattern",
      "description": "Modular grid-like card layout pattern",
      "helpfulness": "Organises content into visually distinct grid blocks",
      "officialUrl": "",
      "pricing": "Reference concept",
      "pricingType": "Varies / Verify",
      "accessType": "Design Pattern",
      "tags": [
        "UI Pattern",
        "Design Pattern"
      ],
      "notes": "From UI design styles image",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Components', row 17",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-glassmorphism",
      "name": "Glassmorphism",
      "category": "UI Components & References",
      "subcategory": "UI Pattern",
      "description": "Translucent, frosted-glass-like surfaces",
      "helpfulness": "Creates layered UI with blurred backgrounds",
      "officialUrl": "",
      "pricing": "Reference concept",
      "pricingType": "Varies / Verify",
      "accessType": "Design Pattern",
      "tags": [
        "UI Pattern",
        "Design Pattern"
      ],
      "notes": "From UI design styles image",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Components', row 18",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-neumorphism",
      "name": "Neumorphism",
      "category": "UI Components & References",
      "subcategory": "UI Pattern",
      "description": "Soft raised or recessed surfaces",
      "helpfulness": "Creates low-contrast tactile UI effects",
      "officialUrl": "",
      "pricing": "Reference concept",
      "pricingType": "Varies / Verify",
      "accessType": "Design Pattern",
      "tags": [
        "UI Pattern",
        "Design Pattern"
      ],
      "notes": "From UI design styles image",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Components', row 19",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-claymorphism",
      "name": "Claymorphism",
      "category": "UI Components & References",
      "subcategory": "UI Pattern",
      "description": "Soft, rounded, clay-like 3D elements",
      "helpfulness": "Creates playful, dimensional interface elements",
      "officialUrl": "",
      "pricing": "Reference concept",
      "pricingType": "Varies / Verify",
      "accessType": "Design Pattern",
      "tags": [
        "UI Pattern",
        "Design Pattern"
      ],
      "notes": "From UI design styles image",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Components', row 20",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-motiondivision-motion",
      "name": "motiondivision/motion",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Animation Library",
      "description": "Motion animation library",
      "helpfulness": "Adds transitions, gestures and animated interactions to interfaces",
      "officialUrl": "",
      "pricing": "Free / Open Source",
      "pricingType": "Free",
      "accessType": "GitHub Repository / Library",
      "tags": [
        "Animation Library",
        "GitHub Repository",
        "Library"
      ],
      "notes": "Motion for React and JavaScript",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 4",
      "metadata": {
        "workbookStatus": "Repository name supplied by user"
      }
    },
    {
      "id": "github-code-libraries-anime-js",
      "name": "Anime.js",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Animation Library",
      "description": "JavaScript animation library",
      "helpfulness": "Creates web animations and interactive effects",
      "officialUrl": "https://animejs.com",
      "pricing": "Free core library / licence applies",
      "pricingType": "Freemium",
      "accessType": "JavaScript Library",
      "tags": [
        "Animation Library",
        "JavaScript Library"
      ],
      "notes": "animejs.com",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 5, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-motion-dev",
      "name": "Motion.dev",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Animation Library",
      "description": "JavaScript animation library",
      "helpfulness": "Adds smooth UI and gesture animations",
      "officialUrl": "https://motion.dev",
      "pricing": "Free core library / licence applies",
      "pricingType": "Freemium",
      "accessType": "JavaScript Library",
      "tags": [
        "Animation Library",
        "JavaScript Library"
      ],
      "notes": "motion.dev",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 6, Parent/Notes column (domain supplied by you)",
      "metadata": {
        "workbookStatus": "Potentially same Motion ecosystem; verify exact package"
      }
    },
    {
      "id": "github-code-libraries-lenis",
      "name": "Lenis",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Scroll / Interaction",
      "description": "Smooth-scroll library",
      "helpfulness": "Improves scrolling behaviour on websites",
      "officialUrl": "",
      "pricing": "Free core library / licence applies",
      "pricingType": "Freemium",
      "accessType": "JavaScript Library",
      "tags": [
        "Scroll",
        "Interaction",
        "JavaScript Library"
      ],
      "notes": "lenis",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 7",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-aceternity-ui",
      "name": "Aceternity UI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Animated React components",
      "helpfulness": "Adds modern effects and components to websites",
      "officialUrl": "",
      "pricing": "Free components / paid products may vary",
      "pricingType": "Freemium",
      "accessType": "Code Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 8",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-motion-primitives",
      "name": "Motion Primitives",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Reusable animated UI components",
      "helpfulness": "Adds animations and transitions to React interfaces",
      "officialUrl": "",
      "pricing": "Free core resources / licence applies",
      "pricingType": "Freemium",
      "accessType": "Code Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 9",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-skiper-ui",
      "name": "Skiper UI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Reusable UI sections and components",
      "helpfulness": "Speeds up frontend development",
      "officialUrl": "",
      "pricing": "Check current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Code Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 10",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-cult-ui",
      "name": "Cult UI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Interactive component library",
      "helpfulness": "Adds visual interactions and UI effects",
      "officialUrl": "",
      "pricing": "Check current offering",
      "pricingType": "Varies / Verify",
      "accessType": "Code Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 11",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-watermelon-ui",
      "name": "Watermelon UI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Reusable UI components",
      "helpfulness": "Provides prebuilt UI elements",
      "officialUrl": "",
      "pricing": "Check licence and offering",
      "pricingType": "Varies / Verify",
      "accessType": "Code Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 12",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-threeui",
      "name": "ThreeUI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "3D UI Library",
      "description": "3D UI component resource",
      "helpfulness": "May help build 3D interface elements",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "Code Library",
      "tags": [
        "3D UI Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 13",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-openclaw-cli",
      "name": "OpenClaw CLI",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "AI Agent / CLI",
      "description": "Command-line interface for OpenClaw",
      "helpfulness": "Installs and runs the agent interface",
      "officialUrl": "",
      "pricing": "Software access may be free; connected services may cost",
      "pricingType": "Freemium",
      "accessType": "Local Software",
      "tags": [
        "AI Agent",
        "CLI",
        "Local Software"
      ],
      "notes": "Used in your local setup",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'GitHub & Code Libraries', row 14",
      "metadata": {
        "workbookStatus": "Verify current install instructions"
      }
    },
    {
      "id": "local-ai-setup-openclaw-tui-cli",
      "name": "OpenClaw TUI / CLI",
      "category": "Local AI Setup",
      "subcategory": "AI Agent Interface",
      "description": "Agent interface",
      "helpfulness": "Lets you interact with the configured AI agent",
      "officialUrl": "",
      "pricing": "Software access may be free; connected services may cost",
      "pricingType": "Freemium",
      "accessType": "Local CLI",
      "tags": [
        "AI Agent Interface",
        "Local CLI"
      ],
      "notes": "Commands used: openclaw chat or openclaw tui",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 4",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-openclaw-agent",
      "name": "OpenClaw Agent",
      "category": "Local AI Setup",
      "subcategory": "AI Agent",
      "description": "Agent orchestration",
      "helpfulness": "Routes tasks to the configured model and supported tools",
      "officialUrl": "",
      "pricing": "Depends on software and connected services",
      "pricingType": "Varies / Verify",
      "accessType": "Local / Connected",
      "tags": [
        "AI Agent",
        "Local",
        "Connected"
      ],
      "notes": "Configured to use Ollama",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 5",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-ollama",
      "name": "Ollama",
      "category": "Local AI Setup",
      "subcategory": "Local AI Runtime",
      "description": "Local model runtime",
      "helpfulness": "Downloads and runs supported models on your computer",
      "officialUrl": "",
      "pricing": "Free software; hardware costs apply",
      "pricingType": "Free",
      "accessType": "Local",
      "tags": [
        "Local AI Runtime",
        "Local"
      ],
      "notes": "Installed locally; command used: ollama list",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 6",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-qwen-qwen-latest",
      "name": "Qwen (qwen:latest)",
      "category": "Local AI Setup",
      "subcategory": "AI Model",
      "description": "Default model in your setup",
      "helpfulness": "Runs supported text and reasoning tasks locally",
      "officialUrl": "",
      "pricing": "Model licence and use conditions apply",
      "pricingType": "Varies / Verify",
      "accessType": "Local via Ollama",
      "tags": [
        "AI Model",
        "Local via Ollama"
      ],
      "notes": "Set as default: ollama/qwen:latest",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 7",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-llama-3-2-3b",
      "name": "Llama 3.2 3B",
      "category": "Local AI Setup",
      "subcategory": "AI Model",
      "description": "Small language model",
      "helpfulness": "Provides a lightweight model to test locally",
      "officialUrl": "",
      "pricing": "Model licence and use conditions apply",
      "pricingType": "Varies / Verify",
      "accessType": "Local via Ollama",
      "tags": [
        "AI Model",
        "Local via Ollama"
      ],
      "notes": "Downloaded with ollama pull llama3.2:3b",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 8",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-qwen-2-5-3b",
      "name": "Qwen 2.5 3B",
      "category": "Local AI Setup",
      "subcategory": "AI Model",
      "description": "Small language model",
      "helpfulness": "Supports local text and coding experiments",
      "officialUrl": "",
      "pricing": "Model licence and use conditions apply",
      "pricingType": "Varies / Verify",
      "accessType": "Local via Ollama",
      "tags": [
        "AI Model",
        "Local via Ollama"
      ],
      "notes": "Downloaded with ollama pull qwen2.5:3b",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 9",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-node-js",
      "name": "Node.js",
      "category": "Local AI Setup",
      "subcategory": "Development Dependency",
      "description": "JavaScript runtime",
      "helpfulness": "Supports tools and development workflows that require Node.js",
      "officialUrl": "",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Local",
      "tags": [
        "Development Dependency",
        "Local"
      ],
      "notes": "Installed as part of setup",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 10",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "local-ai-setup-powershell",
      "name": "PowerShell",
      "category": "Local AI Setup",
      "subcategory": "System Tool",
      "description": "Command-line shell",
      "helpfulness": "Runs installation commands and manages local setup",
      "officialUrl": "",
      "pricing": "Included with supported Windows setups",
      "pricingType": "Free",
      "accessType": "Local",
      "tags": [
        "System Tool",
        "Local"
      ],
      "notes": "Used for installation commands",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'Local AI Setup', row 11",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-design-styles-minimalism",
      "name": "Minimalism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Clean layouts with only essential elements",
      "helpfulness": "Whitespace, restrained palette and simple hierarchy",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 4",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 1
      }
    },
    {
      "id": "ui-design-styles-maximalism",
      "name": "Maximalism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Rich visuals, layered elements and bold expression",
      "helpfulness": "Dense compositions, varied patterns and strong colour",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 5",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 2
      }
    },
    {
      "id": "ui-design-styles-glassmorphism",
      "name": "Glassmorphism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Translucent, frosted-glass-like surfaces",
      "helpfulness": "Blurred backgrounds and semi-transparent panels",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 6",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 3
      }
    },
    {
      "id": "ui-design-styles-neumorphism",
      "name": "Neumorphism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Soft surfaces that appear raised or recessed",
      "helpfulness": "Subtle shadows and low-contrast surfaces",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 7",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 4
      }
    },
    {
      "id": "ui-design-styles-claymorphism",
      "name": "Claymorphism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Soft, rounded, clay-like 3D elements",
      "helpfulness": "Puffy forms, rounded corners and soft depth",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 8",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 5
      }
    },
    {
      "id": "ui-design-styles-brutalism",
      "name": "Brutalism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Raw layouts with strong, unconventional structure",
      "helpfulness": "Unpolished structure and high-contrast typography",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 9",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 6
      }
    },
    {
      "id": "ui-design-styles-neo-brutalism",
      "name": "Neo-Brutalism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Bold colours, hard shadows and thick borders",
      "helpfulness": "Strong outlines and playful visual blocks",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 10",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 7
      }
    },
    {
      "id": "ui-design-styles-skeuomorphism",
      "name": "Skeuomorphism",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Digital elements imitate real-world objects",
      "helpfulness": "Textures, realistic controls and familiar metaphors",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 11",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 8
      }
    },
    {
      "id": "ui-design-styles-flat-design",
      "name": "Flat Design",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Simple shapes, minimal depth and clean colours",
      "helpfulness": "Two-dimensional icons and clear visual hierarchy",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 12",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 9
      }
    },
    {
      "id": "ui-design-styles-material-design",
      "name": "Material Design",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Structured UI based on Google's design principles",
      "helpfulness": "Consistent surfaces, elevation and motion",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 13",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 10
      }
    },
    {
      "id": "ui-design-styles-bento-ui",
      "name": "Bento UI",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Content arranged in modular grid-like cards",
      "helpfulness": "Grid of cards with varied sizes",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 14",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 11
      }
    },
    {
      "id": "ui-design-styles-y2k-design",
      "name": "Y2K Design",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Playful aesthetics inspired by the 2000s",
      "helpfulness": "Chrome effects, bright colours and futuristic motifs",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 15",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 12
      }
    },
    {
      "id": "ui-design-styles-retro-design",
      "name": "Retro Design",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Visual styles inspired by earlier eras",
      "helpfulness": "Period-specific type, colours and textures",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 16",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 13
      }
    },
    {
      "id": "ui-design-styles-cyberpunk",
      "name": "Cyberpunk",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Futuristic visuals with neon and high-tech themes",
      "helpfulness": "Neon accents, dark backgrounds and sci-fi imagery",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 17",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 14
      }
    },
    {
      "id": "ui-design-styles-editorial-design",
      "name": "Editorial Design",
      "category": "UI Design Styles",
      "subcategory": "Design Style",
      "description": "Typography-led layouts inspired by magazines",
      "helpfulness": "Strong type hierarchy, grids and image-led storytelling",
      "officialUrl": "",
      "pricing": "",
      "pricingType": "Not Applicable",
      "accessType": "",
      "tags": [
        "Design Style"
      ],
      "notes": "",
      "verificationStatus": "Reference",
      "source": "Workbook sheet 'UI Design Styles', row 18",
      "metadata": {
        "workbookStatus": "",
        "styleNumber": 15
      }
    },
    {
      "id": "study-learning-codewithharry",
      "name": "CodeWithHarry",
      "category": "Study & Learning",
      "subcategory": "Coding Education",
      "description": "Programming tutorials",
      "helpfulness": "Learn web development, Python and other programming topics",
      "officialUrl": "",
      "pricing": "Free content; paid courses may vary",
      "pricingType": "Freemium",
      "accessType": "Website / YouTube",
      "tags": [
        "Coding Education",
        "YouTube"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 4",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-web-dev",
      "name": "web.dev",
      "category": "Study & Learning",
      "subcategory": "Web Development",
      "description": "Web development learning resources",
      "helpfulness": "Learn web standards, performance, accessibility and best practices",
      "officialUrl": "",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Web Development"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 5",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-docsity",
      "name": "Docsity",
      "category": "Study & Learning",
      "subcategory": "Study Resources",
      "description": "Study notes and educational resources",
      "helpfulness": "Find study materials and exam preparation resources",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid options may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Study Resources"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 6",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-paperpal",
      "name": "Paperpal",
      "category": "Study & Learning",
      "subcategory": "Academic Writing",
      "description": "Academic writing assistant",
      "helpfulness": "Improves academic writing, grammar and manuscript clarity",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Academic Writing",
        "App",
        "Cross-Listed"
      ],
      "notes": "Also listed in AI Tools",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 7",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-chatpdf",
      "name": "ChatPDF",
      "category": "Study & Learning",
      "subcategory": "Study / Research",
      "description": "PDF question-answering",
      "helpfulness": "Ask questions about PDF documents and summarise content",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Study",
        "Research",
        "Cross-Listed"
      ],
      "notes": "Also listed in AI Tools",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 8",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-notebooklm",
      "name": "NotebookLM",
      "category": "Study & Learning",
      "subcategory": "Study / Research",
      "description": "Source-grounded research assistant",
      "helpfulness": "Study supplied documents and organise research",
      "officialUrl": "",
      "pricing": "Free (Limited) / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Study",
        "Research"
      ],
      "notes": "Google",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 9",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-kaggle",
      "name": "Kaggle",
      "category": "Study & Learning",
      "subcategory": "Data Science Learning",
      "description": "Datasets, notebooks and competitions",
      "helpfulness": "Practise data analysis and machine learning",
      "officialUrl": "",
      "pricing": "Free access to core features",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Data Science Learning"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 10",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-google-colab",
      "name": "Google Colab",
      "category": "Study & Learning",
      "subcategory": "Coding / ML Learning",
      "description": "Cloud Python notebooks",
      "helpfulness": "Practise Python and ML without local setup",
      "officialUrl": "",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Coding",
        "ML Learning"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "Workbook sheet 'Study & Learning', row 11",
      "metadata": {
        "workbookStatus": ""
      }
    }
  ]
};

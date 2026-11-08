/*BLANK ENTRY TEMPLATE
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
*/
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
      "id": "websites-platforms-make",
      "name": "Make",
      "category": "Websites & Platforms",
      "subcategory": "Workflow Automation",
      "description": "No-code workflow automation platform",
      "helpfulness": "Connects apps and AI services into automated scenarios",
      "officialUrl": "https://www.make.com",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Platform",
      "tags": [
        "Automation",
        "No-Code"
      ],
      "notes": "Draft listed it under AI Tools; reclassified as an automation platform",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-zapier",
      "name": "Zapier",
      "category": "Websites & Platforms",
      "subcategory": "Workflow Automation",
      "description": "No-code app integration and automation platform",
      "helpfulness": "Automates repetitive tasks across thousands of apps",
      "officialUrl": "https://zapier.com",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Platform",
      "tags": [
        "Automation",
        "No-Code"
      ],
      "notes": "Draft listed it under AI Tools; reclassified as an automation platform",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-shopify",
      "name": "Shopify",
      "category": "Websites & Platforms",
      "subcategory": "E-commerce Platform",
      "description": "E-commerce store builder",
      "helpfulness": "Builds and runs online stores with hosting and payments",
      "officialUrl": "https://www.shopify.com",
      "pricing": "Free Trial / Paid Plans may vary",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Platform",
      "tags": [
        "E-commerce",
        "Website Builder"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-gprm",
      "name": "GPRM",
      "category": "Websites & Platforms",
      "subcategory": "Developer Utilities",
      "description": "GitHub profile README generator",
      "helpfulness": "Builds a polished GitHub profile README with stats and widgets",
      "officialUrl": "https://gprm.itsvg.in",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "GitHub",
        "README",
        "Developer Tool"
      ],
      "notes": "Domain supplied in the draft as gprm.itsvg.in (GitHub Profile ReadMe Maker)",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current availability"
      }
    },
    {
      "id": "websites-platforms-squoosh-app",
      "name": "Squoosh.app",
      "category": "Websites & Platforms",
      "subcategory": "Image Editing & Optimization",
      "description": "In-browser image compression and conversion",
      "helpfulness": "Compresses and converts images into smaller web-friendly formats",
      "officialUrl": "https://squoosh.app",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Image Optimization",
        "Web Performance"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-pacdora",
      "name": "Pacdora",
      "category": "Websites & Platforms",
      "subcategory": "3D Design & Mockups",
      "description": "Online packaging and product mockup platform",
      "helpfulness": "Creates 3D packaging mockups and dielines in the browser",
      "officialUrl": "https://www.pacdora.com",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "3D",
        "Mockups",
        "Packaging"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-spline",
      "name": "Spline",
      "category": "Websites & Platforms",
      "subcategory": "3D Design & Mockups",
      "description": "Browser-based 3D design tool",
      "helpfulness": "Designs interactive 3D scenes for websites and apps",
      "officialUrl": "https://spline.design",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "3D",
        "Interactive Design"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-unicorn",
      "name": "Unicorn",
      "category": "Websites & Platforms",
      "subcategory": "3D Design & Mockups",
      "description": "3D or visual design platform; exact product to confirm",
      "helpfulness": "Exact use to be confirmed once the product is identified",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "3D",
        "Unverified"
      ],
      "notes": "Draft lists 'Unicorn' without a URL; verify which product is meant",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact product"
      }
    },
    {
      "id": "websites-platforms-huemint",
      "name": "Huemint",
      "category": "Websites & Platforms",
      "subcategory": "Design Assets / Colour",
      "description": "AI colour palette generator",
      "helpfulness": "Generates brand and website colour palettes",
      "officialUrl": "https://huemint.com",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Colour",
        "Palette",
        "Design Assets"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-fonts-in-use",
      "name": "Fonts In Use",
      "category": "Websites & Platforms",
      "subcategory": "Typography & Fonts",
      "description": "Archive of typography used in real designs",
      "helpfulness": "Shows how typefaces are used in branding, print and web projects",
      "officialUrl": "https://fontsinuse.com",
      "pricing": "Free browsing",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Typography",
        "Inspiration"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "websites-platforms-velvetyne-fr",
      "name": "Velvetyne.fr",
      "category": "Websites & Platforms",
      "subcategory": "Typography & Fonts",
      "description": "Libre type foundry",
      "helpfulness": "Offers open-licensed display fonts for projects",
      "officialUrl": "https://velvetyne.fr",
      "pricing": "Free fonts; check each licence",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Typography",
        "Free Fonts"
      ],
      "notes": "Velvetyne.fr; check the licence of each font",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Check asset licence"
      }
    },
    {
      "id": "websites-platforms-landingfolio",
      "name": "Landingfolio",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Landing page design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://www.landingfolio.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-layers-to",
      "name": "Layers.to",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Design showcase and community platform",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://layers.to",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-land-book",
      "name": "Land-book",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Landing page design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://land-book.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-httpster",
      "name": "HTTPster",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Curated website design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://httpster.net",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-recent-design",
      "name": "Recent.design",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Website design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://recent.design",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Recent.design",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-dark-design",
      "name": "Dark.design",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Dark-theme website design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://dark.design",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Dark.design",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-nicelydone-club",
      "name": "Nicelydone.club",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Website and UI design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://nicelydone.club",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Nicelydone.club",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-minimal-gallery",
      "name": "Minimal.gallery",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Minimal website design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://minimal.gallery",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Minimal.gallery",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-designspiration",
      "name": "Designspiration",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Visual design inspiration platform",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://www.designspiration.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-ui-live",
      "name": "UI.live",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "UI design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://ui.live",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: UI.live",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-siteinspire",
      "name": "SiteInspire",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Curated web design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://www.siteinspire.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-hoverstat-es",
      "name": "Hoverstat.es",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Gallery of website hover states and interactions",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://hoverstat.es",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Hoverstat.es",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-landing-love",
      "name": "Landing.love",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Landing page design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://landing.love",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: Landing.love",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-darkmodedesign",
      "name": "DarkModeDesign",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Dark-mode website and app design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://www.darkmodedesign.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-one-page-love",
      "name": "One Page Love",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Single-page website gallery and resources",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://onepagelove.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-lapa-ninja",
      "name": "Lapa Ninja",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Landing page design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://www.lapa.ninja",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-bestwebsite-gallery",
      "name": "BestWebsite.gallery",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Curated website design gallery",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "https://bestwebsite.gallery",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Domain as supplied in the draft: BestWebsite.gallery",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-design-made-in-germany",
      "name": "Design Made in Germany",
      "category": "Websites & Platforms",
      "subcategory": "Design Inspiration",
      "description": "Design gallery of German web and digital work",
      "helpfulness": "Finds real-world website and landing page references for layout and style ideas",
      "officialUrl": "",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "Gallery"
      ],
      "notes": "Official URL not confirmed",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-mobbin",
      "name": "Mobbin",
      "category": "Websites & Platforms",
      "subcategory": "App UI Inspiration",
      "description": "App design pattern and screenshot library",
      "helpfulness": "Finds mobile and app interface references for screens and user flows",
      "officialUrl": "https://mobbin.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "App UI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "websites-platforms-screendesign-com",
      "name": "Screendesign.com",
      "category": "Websites & Platforms",
      "subcategory": "App UI Inspiration",
      "description": "App screen design gallery",
      "helpfulness": "Finds mobile and app interface references for screens and user flows",
      "officialUrl": "https://screendesign.com",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "App UI"
      ],
      "notes": "Domain as supplied in the draft: Screendesign.com",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-appshot-gallery",
      "name": "Appshot.gallery",
      "category": "Websites & Platforms",
      "subcategory": "App UI Inspiration",
      "description": "App screenshot gallery",
      "helpfulness": "Finds mobile and app interface references for screens and user flows",
      "officialUrl": "https://appshot.gallery",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Design Inspiration",
        "App UI"
      ],
      "notes": "Domain as supplied in the draft: Appshot.gallery",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "websites-platforms-uxui-shrut",
      "name": "uxui_shrut",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "UI/UX design creator profile",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Handle as supplied in the draft; platform and profile URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact profile URL"
      }
    },
    {
      "id": "websites-platforms-samey-unfolds",
      "name": "samey.unfolds",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "UI/UX design creator profile",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Handle as supplied in the draft; platform and profile URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact profile URL"
      }
    },
    {
      "id": "websites-platforms-alphenex-ai",
      "name": "alphenex.ai",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "Design and AI creator profile",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Handle as supplied in the draft; platform and profile URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact profile URL"
      }
    },
    {
      "id": "websites-platforms-theultronai",
      "name": "theultronai",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "AI and design creator profile",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Handle as supplied in the draft; platform and profile URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact profile URL"
      }
    },
    {
      "id": "websites-platforms-aaditya-web",
      "name": "aaditya.web",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "Web design creator profile",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Handle as supplied in the draft; platform and profile URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact profile URL"
      }
    },
    {
      "id": "websites-platforms-theo",
      "name": "Theo",
      "category": "Websites & Platforms",
      "subcategory": "Design & Dev Creators",
      "description": "Developer and design creator",
      "helpfulness": "Source of UI/UX and web design inspiration",
      "officialUrl": "",
      "pricing": "Free to follow",
      "pricingType": "Free",
      "accessType": "Social Profile",
      "tags": [
        "Creator",
        "Inspiration"
      ],
      "notes": "Listed only as 'Theo' in the draft; confirm which creator and profile",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact creator"
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
      "id": "ui-components-reactbits",
      "name": "ReactBits",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Animated React components for creative interfaces",
      "helpfulness": "Adds ready-made animated backgrounds, text effects and interactions",
      "officialUrl": "https://reactbits.dev",
      "pricing": "Free components / paid products may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "React; GitHub repository is recorded separately under GitHub & Code Libraries",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ui-components-componentry-dev",
      "name": "Componentry.dev",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Reusable UI component collection",
      "helpfulness": "Provides ready-made components for building interfaces faster",
      "officialUrl": "https://componentry.dev",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "Domain as supplied in the draft; exact offering to verify",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ui-components-21st-dev",
      "name": "21st.dev",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "Community marketplace of React and Tailwind UI components",
      "helpfulness": "Browse and copy ready-made components and prompts",
      "officialUrl": "https://21st.dev",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ui-components-canvas-ui",
      "name": "Canvas UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "UI component library; exact offering to confirm",
      "helpfulness": "Provides reusable interface components",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "Official URL not confirmed",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ui-components-vengeance-ui",
      "name": "Vengeance UI",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "UI component library; exact offering to confirm",
      "helpfulness": "Provides reusable interface components",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "Official URL not confirmed",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ui-components-supahero-io",
      "name": "Supahero.io",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "UI component resource; exact offering to confirm",
      "helpfulness": "Provides ready-made sections and components for landing pages",
      "officialUrl": "https://supahero.io",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "Domain as supplied in the draft; exact offering to verify",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ui-components-bencho",
      "name": "Bencho",
      "category": "UI Components & References",
      "subcategory": "UI Components",
      "description": "React UI blocks and interface sounds",
      "helpfulness": "Copy-paste interactive blocks and sound effects for polished UIs",
      "officialUrl": "https://bencho.dev",
      "pricing": "Free MIT blocks / paid Bencho Pro",
      "pricingType": "Freemium",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Code Library"
      ],
      "notes": "Draft name Bencho.dev; free blocks are MIT-licensed, paid blocks need the Pro licence (repo cabralorenzo/bencho)",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ui-components-cursify",
      "name": "Cursify",
      "category": "UI Components & References",
      "subcategory": "UI Components / Animation",
      "description": "Cursor animation components for React and Next.js",
      "helpfulness": "Adds interactive cursor effects to landing pages and portfolios",
      "officialUrl": "https://cursify.vercel.app",
      "pricing": "Free open-source library; verify any paid products",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Code Library",
      "tags": [
        "UI Components",
        "Animation",
        "Cursor Effects"
      ],
      "notes": "Draft name Cursify.ui-layouts (repo ui-layouts/cursify)",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ui-components-animos",
      "name": "Animos",
      "category": "UI Components & References",
      "subcategory": "Animation Library",
      "description": "Motion or animation resource; exact product to confirm",
      "helpfulness": "Exact use to be confirmed once the product is identified",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Animation",
        "Unverified"
      ],
      "notes": "Draft lists it under animation libraries; could be a browser motion-template tool, verify before relying on it",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact product"
      }
    },
    {
      "id": "ui-components-60fps-design",
      "name": "60fps.design",
      "category": "UI Components & References",
      "subcategory": "Animation Reference",
      "description": "Gallery of UI animation and motion examples",
      "helpfulness": "Reference for micro-interactions and motion patterns",
      "officialUrl": "https://60fps.design",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Animation",
        "Motion Reference"
      ],
      "notes": "Domain as supplied in the draft: 60fps.design",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ui-components-scrolltide-co",
      "name": "Scrolltide.co",
      "category": "UI Components & References",
      "subcategory": "Design Prompt Reference",
      "description": "Prompt library for design and AI workflows; exact offering to confirm",
      "helpfulness": "Provides prompts to speed up design and UI generation with AI tools",
      "officialUrl": "https://scrolltide.co",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website / Prompt Collection",
      "tags": [
        "Prompt Library",
        "Design Prompts"
      ],
      "notes": "Domain as supplied in the draft: Scrolltide.co",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact offering"
      }
    },
    {
      "id": "ui-components-cta-gallery",
      "name": "CTA.gallery",
      "category": "UI Components & References",
      "subcategory": "UI Pattern Galleries",
      "description": "Gallery of call-to-action section designs",
      "helpfulness": "Shows how common website sections and components are designed in practice",
      "officialUrl": "https://cta.gallery",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "UI Patterns",
        "Reference"
      ],
      "notes": "Domain as supplied in the draft: CTA.gallery",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ui-components-navbar-gallery",
      "name": "Navbar.gallery",
      "category": "UI Components & References",
      "subcategory": "UI Pattern Galleries",
      "description": "Gallery of navigation bar designs",
      "helpfulness": "Shows how common website sections and components are designed in practice",
      "officialUrl": "https://navbar.gallery",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "UI Patterns",
        "Reference"
      ],
      "notes": "Domain as supplied in the draft: Navbar.gallery",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ui-components-pricingpages-design",
      "name": "PricingPages.design",
      "category": "UI Components & References",
      "subcategory": "UI Pattern Galleries",
      "description": "Gallery of pricing page designs",
      "helpfulness": "Shows how common website sections and components are designed in practice",
      "officialUrl": "https://pricingpages.design",
      "pricing": "Free browsing / paid features may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "UI Patterns",
        "Reference"
      ],
      "notes": "Domain as supplied in the draft: PricingPages.design",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ui-components-component-gallery",
      "name": "Component.gallery",
      "category": "UI Components & References",
      "subcategory": "UI Pattern Galleries",
      "description": "Reference gallery of UI components across design systems",
      "helpfulness": "Shows how common components are named and built in real design systems",
      "officialUrl": "https://component.gallery",
      "pricing": "Free browsing",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "UI Patterns",
        "Component Reference"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ui-components-glass3d-dev",
      "name": "Glass3D.dev",
      "category": "UI Components & References",
      "subcategory": "3D & Experimental UI",
      "description": "Glass-style 3D UI reference; exact offering to confirm",
      "helpfulness": "Inspiration for glass and 3D interface effects",
      "officialUrl": "https://glass3d.dev",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "3D UI",
        "Glassmorphism",
        "Reference"
      ],
      "notes": "Domain as supplied in the draft: Glass3D.dev",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ui-components-eechy-com-runa",
      "name": "Eechy.com/Runa",
      "category": "UI Components & References",
      "subcategory": "3D & Experimental UI",
      "description": "Experimental UI reference; exact offering to confirm",
      "helpfulness": "Inspiration for experimental interface and motion ideas",
      "officialUrl": "https://eechy.com/Runa",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Experimental UI",
        "Reference"
      ],
      "notes": "Link as supplied in the draft: Eechy.com/Runa",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
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
      "id": "github-code-libraries-gsap",
      "name": "GSAP",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Animation Library",
      "description": "Professional JavaScript animation library",
      "helpfulness": "Animates UI, scroll and SVG effects with precise timeline control",
      "officialUrl": "https://gsap.com",
      "pricing": "Free to use; check licence terms",
      "pricingType": "Varies / Verify",
      "accessType": "JavaScript Library",
      "tags": [
        "Animation Library",
        "JavaScript Library"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify licence terms"
      }
    },
    {
      "id": "github-code-libraries-reactbits",
      "name": "ReactBits",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "UI Component Library",
      "description": "Animated React components",
      "helpfulness": "Adds modern effects and components to websites",
      "officialUrl": "https://github.com/DavidHDev/react-bits",
      "pricing": "Free components / paid products may vary",
      "pricingType": "Freemium",
      "accessType": "GitHub Repository / Library",
      "tags": [
        "UI Component Library",
        "Code Library",
        "Cross-Listed"
      ],
      "notes": "Duplicate reference; main record in UI Components",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "github-code-libraries-vgpu",
      "name": "VGPU",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "3D / GPU Library",
      "description": "WebGPU library for shaders and 3D graphics",
      "helpfulness": "Builds GPU-powered visuals and is designed to work well with AI coding agents",
      "officialUrl": "https://vgpu.labs.vercel.dev",
      "pricing": "Free (open source)",
      "pricingType": "Free",
      "accessType": "JavaScript Library",
      "tags": [
        "WebGPU",
        "3D",
        "Shaders"
      ],
      "notes": "Open-source project from Vercel Labs; repository github.com/vgpu/vgpu",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-freecodecamp",
      "name": "freeCodeCamp",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Open-source codebase and curriculum behind freeCodeCamp",
      "helpfulness": "Free coding curriculum plus the source of the learning platform",
      "officialUrl": "https://github.com/freeCodeCamp/freeCodeCamp",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-developer-roadmap",
      "name": "Developer Roadmap",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Roadmaps and guides for developer career paths",
      "helpfulness": "Shows what to learn and in which order for different developer roles",
      "officialUrl": "https://github.com/kamranahmedse/developer-roadmap",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-public-apis",
      "name": "Public APIs",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Curated list of free public APIs",
      "helpfulness": "Finds APIs to use in practice projects and prototypes",
      "officialUrl": "https://github.com/public-apis/public-apis",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-30-seconds-of-code",
      "name": "30 Seconds of Code",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Short, reusable code snippets for web development",
      "helpfulness": "Gives quick copy-ready snippets with explanations",
      "officialUrl": "https://github.com/Chalarangelo/30-seconds-of-code",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-javascript-algorithms",
      "name": "JavaScript Algorithms",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Algorithms and data structures implemented in JavaScript",
      "helpfulness": "Helps learn and revise core algorithms with explanations",
      "officialUrl": "https://github.com/trekhleb/javascript-algorithms",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-project-based-learning",
      "name": "Project Based Learning",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Curated list of project-based programming tutorials",
      "helpfulness": "Finds build-along tutorials to practise languages and frameworks",
      "officialUrl": "https://github.com/practical-tutorials/project-based-learning",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-mdn-content",
      "name": "MDN Content",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Learning & Reference Repositories",
      "description": "Source content for MDN Web Docs",
      "helpfulness": "Reference material for HTML, CSS and JavaScript",
      "officialUrl": "https://github.com/mdn/content",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "GitHub Repository",
      "tags": [
        "Learning",
        "Open Source"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "github-code-libraries-the-openai-dots-killer",
      "name": "The OpenAI Dots Killer",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Open-Source Alternatives",
      "description": "Open-source alternative project aimed at an OpenAI product (exact target to confirm)",
      "helpfulness": "Offers a free or self-hosted alternative to a paid tool",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "GitHub Repository",
      "tags": [
        "Open-Source Alternative",
        "Clone Project"
      ],
      "notes": "Repository name supplied by user; repository URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "github-code-libraries-the-monarch-money-killer",
      "name": "The Monarch Money Killer",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Open-Source Alternatives",
      "description": "Open-source alternative project aimed at Monarch Money (personal finance)",
      "helpfulness": "Offers a free or self-hosted alternative to a paid tool",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "GitHub Repository",
      "tags": [
        "Open-Source Alternative",
        "Clone Project"
      ],
      "notes": "Repository name supplied by user; repository URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "github-code-libraries-the-solidworks-killer",
      "name": "The SolidWorks Killer",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Open-Source Alternatives",
      "description": "Open-source alternative project aimed at SolidWorks (CAD)",
      "helpfulness": "Offers a free or self-hosted alternative to a paid tool",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "GitHub Repository",
      "tags": [
        "Open-Source Alternative",
        "Clone Project"
      ],
      "notes": "Repository name supplied by user; repository URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "github-code-libraries-the-after-effects-killer",
      "name": "The After Effects Killer",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Open-Source Alternatives",
      "description": "Open-source alternative project aimed at After Effects (motion graphics)",
      "helpfulness": "Offers a free or self-hosted alternative to a paid tool",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "GitHub Repository",
      "tags": [
        "Open-Source Alternative",
        "Clone Project"
      ],
      "notes": "Repository name supplied by user; repository URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact project"
      }
    },
    {
      "id": "github-code-libraries-the-lucidchart-killer",
      "name": "The Lucidchart Killer",
      "category": "GitHub Repositories & Code Libraries",
      "subcategory": "Open-Source Alternatives",
      "description": "Open-source alternative project aimed at Lucidchart (diagramming)",
      "helpfulness": "Offers a free or self-hosted alternative to a paid tool",
      "officialUrl": "",
      "pricing": "Verify",
      "pricingType": "Varies / Verify",
      "accessType": "GitHub Repository",
      "tags": [
        "Open-Source Alternative",
        "Clone Project"
      ],
      "notes": "Repository name supplied by user; repository URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact project"
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
    },
    {
      "id": "study-learning-leetcode",
      "name": "LeetCode",
      "category": "Study & Learning",
      "subcategory": "Coding Practice",
      "description": "Coding interview practice platform",
      "helpfulness": "Practises algorithms and data structures with timed problems",
      "officialUrl": "https://leetcode.com",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Coding Practice",
        "Algorithms"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "study-learning-quickref-me",
      "name": "QuickRef.me",
      "category": "Study & Learning",
      "subcategory": "Documentation & Quick References",
      "description": "Cheat sheets for developers",
      "helpfulness": "Gives quick syntax references for languages and tools",
      "officialUrl": "https://quickref.me",
      "pricing": "Free",
      "pricingType": "Free",
      "accessType": "Website",
      "tags": [
        "Cheat Sheets",
        "Quick Reference"
      ],
      "notes": "Listed twice in the draft (study and developer utilities); kept as one record",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "study-learning-ieee-xplore",
      "name": "IEEE Xplore",
      "category": "Study & Learning",
      "subcategory": "Research Papers & Journals",
      "description": "Digital library of IEEE technical papers and standards",
      "helpfulness": "Finds engineering and computer science research papers",
      "officialUrl": "https://ieeexplore.ieee.org",
      "pricing": "Free and paid access; institutional access varies",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Research Papers",
        "Engineering"
      ],
      "notes": "Many full texts need a subscription or institutional access",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current access"
      }
    },
    {
      "id": "study-learning-pdf-drive",
      "name": "PDF Drive",
      "category": "Study & Learning",
      "subcategory": "Study Resources",
      "description": "PDF and ebook search engine",
      "helpfulness": "Finds PDF books and documents for study and research",
      "officialUrl": "https://www.pdfdrive.com",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "PDF",
        "Ebooks",
        "Research"
      ],
      "notes": "Check copyright and licence before downloading or sharing files",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current availability"
      }
    },
    {
      "id": "study-learning-the-open-university-openlearn-data-analysis-visualisations-in-excel",
      "name": "The Open University — OpenLearn: Data Analysis: Visualisations in Excel",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "The Open University (OpenLearn) online course or program",
      "helpfulness": "Teaches data visualisation techniques in Excel",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-free-academy-ai-chatgpt-vs-claude-vs-gemini-complete-guide",
      "name": "Free Academy.ai — ChatGPT vs Claude vs Gemini: Complete Guide",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Free Academy.ai online course or program",
      "helpfulness": "Compares major AI assistants and when to use each",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-cisco-networking-academy-junior-cybersecurity-analyst",
      "name": "Cisco Networking Academy — Junior Cybersecurity Analyst",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Cisco Networking Academy online course or program",
      "helpfulness": "Builds entry-level cybersecurity analyst skills",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-modern-millie-content-creator-masterclass",
      "name": "Modern Millie — Content Creator Masterclass",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Modern Millie online course or program",
      "helpfulness": "Covers content creation and creator growth basics",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-blackmagic-design-editing",
      "name": "Blackmagic Design — Editing",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Blackmagic Design online course or program",
      "helpfulness": "Teaches video editing fundamentals",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-google-project-management",
      "name": "Google — Project Management",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Google online course or program",
      "helpfulness": "Covers project management fundamentals",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-microsoft-introduction-to-python-fundamentals",
      "name": "Microsoft — Introduction to Python Fundamentals",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Microsoft online course or program",
      "helpfulness": "Introduces Python basics",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-meta-advertising-with-meta",
      "name": "Meta — Advertising with Meta",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Meta online course or program",
      "helpfulness": "Explains how to run advertising on Meta platforms",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-microsoft-ms-office-specialist",
      "name": "Microsoft — MS Office Specialist",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Microsoft online course or program",
      "helpfulness": "Builds and certifies Microsoft Office skills",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-deloitte-technology-consulting-virtual-internship",
      "name": "Deloitte — Technology Consulting Virtual Internship",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Deloitte online course or program",
      "helpfulness": "Gives simulated technology consulting experience",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-paypal-sales-inspire-program",
      "name": "PayPal — Sales Inspire Program",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "PayPal online course or program",
      "helpfulness": "Builds sales skills through a guided program",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "study-learning-cisco-data-analytics-essentials",
      "name": "Cisco — Data Analytics Essentials",
      "category": "Study & Learning",
      "subcategory": "Online Courses & Certifications",
      "description": "Cisco online course or program",
      "helpfulness": "Introduces core data analytics concepts",
      "officialUrl": "",
      "pricing": "Verify current pricing and certificate fees",
      "pricingType": "Varies / Verify",
      "accessType": "Online Course",
      "tags": [
        "Course"
      ],
      "notes": "Course URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact course URL"
      }
    },
    {
      "id": "ai-tools-agent-qa",
      "name": "agent-qa",
      "category": "AI Tools",
      "subcategory": "App Testing",
      "description": "Natural-language web/mobile QA with persistent memidex memory and validated self-improvement.",
      "helpfulness": "Gives coding agents CLI/MCP test execution and reviewable evidence for application changes.",
      "officialUrl": "https://vostride.com",
      "pricing": "Local package free to install; model and external-service fees may apply.",
      "pricingType": "Varies / Verify",
      "accessType": "Local CLI / MCP server",
      "tags": [
        "Testing",
        "AI Agents",
        "MCP",
        "Web",
        "Android",
        "iOS"
      ],
      "notes": "Requires Node.js 24+, configured model access and browser/device setup. License: FSL-1.1-ALv2. Submitted by vostride for maintainer review.",
      "verificationStatus": "Needs Verification",
      "source": "https://github.com/vostride/agent-qa",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ai-tools-cursor",
      "name": "Cursor",
      "category": "AI Tools",
      "subcategory": "Coding AI",
      "description": "AI-powered code editor",
      "helpfulness": "Helps write, edit and refactor code with an AI agent built into the editor",
      "officialUrl": "https://cursor.com",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Desktop App",
      "tags": [
        "Coding AI",
        "AI Editor",
        "Vibe Coding"
      ],
      "notes": "Listed twice in the draft (assistants and vibe coding); kept as one record",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-replit",
      "name": "Replit",
      "category": "AI Tools",
      "subcategory": "AI App Builder",
      "description": "Online IDE with an AI agent for building and hosting apps",
      "helpfulness": "Builds, runs and deploys apps from prompts in the browser",
      "officialUrl": "https://replit.com",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "AI App Builder",
        "Online IDE",
        "Vibe Coding"
      ],
      "notes": "Listed twice in the draft (assistants and vibe coding); kept as one record",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-writefull",
      "name": "Writefull",
      "category": "AI Tools",
      "subcategory": "Writing / Research AI",
      "description": "AI writing feedback for academic text",
      "helpfulness": "Improves grammar, wording and paraphrasing in academic and research writing",
      "officialUrl": "https://www.writefull.com",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website / Add-in",
      "tags": [
        "Academic Writing",
        "Writing AI"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-jenni-ai",
      "name": "Jenni AI",
      "category": "AI Tools",
      "subcategory": "Writing / Research AI",
      "description": "AI writing assistant for essays and research papers",
      "helpfulness": "Helps draft, expand and cite academic writing",
      "officialUrl": "https://jenni.ai",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Academic Writing",
        "Writing AI",
        "Research"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-undetectable-ai",
      "name": "Undetectable AI",
      "category": "AI Tools",
      "subcategory": "Writing / Research AI",
      "description": "AI text rewriting and humanizing tool",
      "helpfulness": "Rewrites AI-generated text to read more naturally",
      "officialUrl": "https://undetectable.ai",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "Website",
      "tags": [
        "Writing AI",
        "AI Humanizer"
      ],
      "notes": "Check academic integrity and institutional policies before using on coursework",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-scispace",
      "name": "SciSpace",
      "category": "AI Tools",
      "subcategory": "Research / Study AI",
      "description": "AI research assistant for reading papers",
      "helpfulness": "Explains research papers, finds literature and answers questions about PDFs",
      "officialUrl": "https://scispace.com",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Research AI",
        "Academic",
        "Papers"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-d-id",
      "name": "D-ID",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "AI avatar and talking-head video generation",
      "helpfulness": "Creates presenter-style videos from images, scripts and voice",
      "officialUrl": "https://www.d-id.com",
      "pricing": "Free Trial / Paid Plans may vary",
      "pricingType": "Varies / Verify",
      "accessType": "Website / API",
      "tags": [
        "Video Generation",
        "AI Avatar"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-invideo-ai",
      "name": "InVideo AI",
      "category": "AI Tools",
      "subcategory": "Video Generation",
      "description": "Prompt-to-video creation and editing",
      "helpfulness": "Turns scripts and prompts into edited videos with voiceover and stock media",
      "officialUrl": "https://invideo.io",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Video Generation",
        "Video Editing"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-capcut",
      "name": "CapCut",
      "category": "AI Tools",
      "subcategory": "Audio / Video Editing",
      "description": "Video editor with AI features",
      "helpfulness": "Edits short-form and social videos with templates, captions and effects",
      "officialUrl": "https://www.capcut.com",
      "pricing": "Free (Limited) / Paid Plans",
      "pricingType": "Freemium",
      "accessType": "Website / App",
      "tags": [
        "Video Editing",
        "Templates"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-media-io",
      "name": "Media.io",
      "category": "AI Tools",
      "subcategory": "Audio / Video Editing",
      "description": "Online suite of AI video, audio and image tools",
      "helpfulness": "Handles quick conversion, editing and enhancement tasks in the browser",
      "officialUrl": "https://www.media.io",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Video Editing",
        "Audio Tools",
        "Online Tools"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-mapify",
      "name": "Mapify",
      "category": "AI Tools",
      "subcategory": "Mind Mapping & Diagrams",
      "description": "AI mind map generator",
      "helpfulness": "Turns text, documents and videos into structured mind maps",
      "officialUrl": "https://mapify.so",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Mind Mapping",
        "Study Tool"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-napkin-ai",
      "name": "Napkin AI",
      "category": "AI Tools",
      "subcategory": "Mind Mapping & Diagrams",
      "description": "AI tool that turns text into diagrams and visuals",
      "helpfulness": "Converts notes and ideas into editable graphics and infographics",
      "officialUrl": "https://www.napkin.ai",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Diagrams",
        "Infographics"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-goblin-tools",
      "name": "Goblin Tools",
      "category": "AI Tools",
      "subcategory": "Productivity AI",
      "description": "Small AI tools for breaking tasks into steps",
      "helpfulness": "Splits overwhelming tasks into manageable steps and adjusts tone",
      "officialUrl": "https://goblin.tools",
      "pricing": "Web free; verify app pricing",
      "pricingType": "Varies / Verify",
      "accessType": "Website / App",
      "tags": [
        "Task Management",
        "Productivity"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-usehallmark",
      "name": "UseHallmark",
      "category": "AI Tools",
      "subcategory": "AI Design Skills & MCP",
      "description": "Design skill for AI coding agents",
      "helpfulness": "Pushes Claude Code, Cursor and Codex towards distinctive, non-generic UI",
      "officialUrl": "https://usehallmark.com",
      "pricing": "Free (open source)",
      "pricingType": "Free",
      "accessType": "Agent Skill / CLI",
      "tags": [
        "Design Skill",
        "AI Agents",
        "UI Design"
      ],
      "notes": "By Together AI; installs with npx skills add nutlope/hallmark",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ai-tools-tasteskill-dev",
      "name": "TasteSkill.dev",
      "category": "AI Tools",
      "subcategory": "AI Design Skills & MCP",
      "description": "Anti-slop frontend skills for AI agents",
      "helpfulness": "Gives coding agents tunable design taste for more polished UI output",
      "officialUrl": "https://tasteskill.dev",
      "pricing": "Free (open source)",
      "pricingType": "Free",
      "accessType": "Agent Skill / CLI",
      "tags": [
        "Design Skill",
        "AI Agents",
        "UI Design"
      ],
      "notes": "Draft listed it under templates; it is an agent skill pack (repo Leonxlnx/taste-skill)",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": ""
      }
    },
    {
      "id": "ai-tools-inspo-mcp",
      "name": "Inspo MCP",
      "category": "AI Tools",
      "subcategory": "AI Design Skills & MCP",
      "description": "MCP server with a searchable archive of real website designs",
      "helpfulness": "Lets coding agents look up design systems, palettes, typography and components from production sites",
      "officialUrl": "",
      "pricing": "Open-source; verify hosted access and limits",
      "pricingType": "Varies / Verify",
      "accessType": "MCP Server",
      "tags": [
        "MCP",
        "Design Reference",
        "AI Agents"
      ],
      "notes": "Draft listed it under 3D & Experimental UI; functionally an MCP server. Official URL to confirm",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify exact URL"
      }
    },
    {
      "id": "ai-tools-cleanup-pictures",
      "name": "Cleanup.pictures",
      "category": "AI Tools",
      "subcategory": "Image Editing AI",
      "description": "AI object and background removal",
      "helpfulness": "Removes unwanted objects, text and people from images",
      "officialUrl": "https://cleanup.pictures",
      "pricing": "Free (Limited) / Paid Plans may vary",
      "pricingType": "Freemium",
      "accessType": "Website",
      "tags": [
        "Image Editing",
        "Object Removal"
      ],
      "notes": "",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Verify current plans"
      }
    },
    {
      "id": "ai-tools-zsky-ai",
      "name": "ZSKY AI",
      "category": "AI Tools",
      "subcategory": "AI Tool",
      "description": "AI tool; exact offering not yet confirmed",
      "helpfulness": "To be confirmed once the product is verified",
      "officialUrl": "",
      "pricing": "Verify current plan",
      "pricingType": "Varies / Verify",
      "accessType": "",
      "tags": [
        "Unverified"
      ],
      "notes": "Flagged as needing further verification in the draft list",
      "verificationStatus": "Needs Verification",
      "source": "User-supplied category draft list, Nov 2026",
      "metadata": {
        "workbookStatus": "Flagged for further verification"
      }
    }
  ]
};

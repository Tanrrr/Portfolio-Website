export const PROJECTS = [
  {
    id: "iceiq",
    title: "IceIQ",
    tagline: "Multi-user fantasy hockey analytics SaaS",
    description:
      "IceIQ links to a user's Yahoo Fantasy account and turns their league data into standings, power rankings, a luck index, performance heatmaps, and auto-generated weekly recaps. The backend is fully serverless: Lambda functions behind API Gateway sync league data from the Yahoo Fantasy API, fan out daily sync jobs through SQS, and compute analytics into DynamoDB. Clerk handles authentication (email, Google, Apple) and every API call is JWT-authorized and scoped to the user's own leagues.",
    stack: ["React", "AWS Lambda", "API Gateway", "DynamoDB", "SQS", "Clerk", "Yahoo Fantasy API"],
    metrics: [
      { label: "Active users", value: "100+" },
      { label: "Monthly infra cost", value: "$0" },
      { label: "Critical flows", value: "Playwright E2E" },
    ],
    live: "https://fantasy.tannerbronson.ca",
    featured: true,
  },
  {
    id: "lottery20",
    title: "lottery20",
    tagline: "Fantasy draft lottery platform",
    description:
      "A Next.js app that runs fantasy league draft lotteries with animated ball-draw results. Supabase handles auth and data with row-level security enforcing that league members can only see and act on their own league's data, backed by a full unit, integration, and Playwright E2E test suite.",
    stack: ["Next.js", "TypeScript", "Supabase", "Playwright"],
    outcome: "Full unit/integration/E2E coverage with Supabase RLS-enforced multi-tenant security.",
    github: "https://github.com/Tanrrr/lottery20",
  },
  {
    id: "fantasytracker",
    title: "fantasytracker",
    tagline: "Fantasy hockey stat visualizer",
    description:
      "A Python pipeline that pulls a season of Yahoo Fantasy Hockey data and turns it into shareable infographics — seasonal awards, stat leaderboards, and visual recaps generated automatically with pandas and matplotlib.",
    stack: ["Python", "pandas", "matplotlib", "Pillow"],
    outcome: "Automates a season's worth of league stats into ready-to-share visual recaps.",
    github: "https://github.com/Tanrrr/FantasyHockeyTracker",
  },
  {
    id: "chadgpt",
    title: "ChadGPT",
    tagline: "Local LLM chat app",
    description:
      "A self-hosted chat interface for a locally-running LLM (llama.cpp), with a FastAPI backend, streaming responses, and optional live web search grounding.",
    stack: ["Python", "FastAPI", "llama.cpp"],
    outcome: "Full chat experience — streaming, history, optional web search — running entirely on local infrastructure.",
    github: "https://github.com/Tanrrr/ChadGPT",
  },
];

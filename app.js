/**
 * ERIOLUWA AYODEJI — PORTFOLIO ORCHESTRATION & TERMINAL ENGINE
 */

const PROJECTS = [
  {
    id: "loc",
    title: "Lagos On Chain (LOC)",
    category: "solana",
    badge: "Solana Blinks • Consumer",
    status: "Superteam Grant Applicant",
    desc: "A consumer crypto lifestyle OS for Lagos youth culture. Solves gate POS failure and ticket scalping at underground events through Dialect Actions & Blinks, and Proof-of-Physical-Vibe (PoPV) cNFT check-ins.",
    highlights: [
      "1-Click Social Ticketing inside Twitter/X & WhatsApp via Solana Blinks",
      "Dynamic NFC/QR PoPV venue check-in minting zero-gas cNFTs",
      "Curated 'Under ₦10k Food Radar' supporting dual NGN/SOL local commerce",
      "3.5% automated platform royalty routed to founder treasury"
    ],
    tags: ["Solana Actions", "Dialect Blinks", "State Compression", "Leaflet.js", "PWA"],
    liveUrl: "https://ayodejierioluwa.github.io/lagos-on-chain/",
    codeUrl: "https://github.com/ayodejierioluwa/lagos-on-chain"
  },
  {
    id: "mermail",
    title: "Mermail Security Bounty Desk",
    category: "solana",
    badge: "Solana Security • MCP",
    status: "PR #346 • Deployed on Vercel",
    desc: "Autonomous AI bug bounty desk for Solana protocols. Integrates Anthropic Model Context Protocol (MCP), adversarial prompt injection quarantines, and a 1-click PayBox signer for instant white-hat payouts.",
    highlights: [
      "Zero-Trust Adversarial Quarantine prevents hidden [SYSTEM OVERRIDE] attacks",
      "Real-time Anthropic Model Context Protocol (MCP) tool execution logs",
      "Live 1-click PayBox signer triggering on-chain Solana bounty releases",
      "Streamlined Linear/Superhuman-inspired two-pane security triage interface"
    ],
    tags: ["Anthropic MCP", "Vercel Serverless", "Solana Pay", "Zero-Trust", "React/TS"],
    liveUrl: "https://mermail-security-desk.vercel.app",
    codeUrl: "https://github.com/ayodejierioluwa/mermail-security-desk"
  },
  {
    id: "cookiepay",
    title: "CookiePay",
    category: "solana",
    badge: "Social Micro-Tipping",
    status: "Production Submitted",
    desc: "Multi-wallet social micro-tipping protocol on Solana. Enables instant on-chain appreciation tips paired with provably fair digital fortune cookie mints containing on-chain wisdom and rewards.",
    highlights: [
      "Multi-wallet adapter supporting Nightly, Phantom, and Solflare",
      "Sub-cent tip routing in SOL and SPL USDC",
      "Interactive 3D unboxing animation revealing on-chain fortune cookies",
      "Optimized lightweight mobile-first client architecture"
    ],
    tags: ["Solana Web3.js", "Nightly Wallet", "Phantom", "TypeScript", "TailwindCSS"],
    liveUrl: "https://github.com/ayodejierioluwa/cookiepay",
    codeUrl: "https://github.com/ayodejierioluwa/cookiepay"
  },
  {
    id: "solplay",
    title: "SolPlay Protocol",
    category: "solana",
    badge: "Rust SBF • Social Wagering",
    status: "$15K Grant Proposal",
    desc: "Decentralized social sportsbook on Solana. Merges sub-second smart contracts (native Rust SBF) with embedded HLS sports streams, 1-click chat bet cloning, and dynamic house liquidity pools.",
    highlights: [
      "Native Solana SBF smart contract with zero external framework bloat",
      "Social copy-betting engine with 2% automatic creator royalties on wins",
      "Automated house risk management & latency front-running protection",
      "Non-custodial LP vault allowing users to act as the house"
    ],
    tags: ["Rust (SBF)", "Smart Contracts", "HLS Streaming", "Python Oracle", "Solana"],
    liveUrl: "https://github.com/ayodejierioluwa/SOLPLAY",
    codeUrl: "https://github.com/ayodejierioluwa/SOLPLAY"
  },
  {
    id: "solwork",
    title: "SolWork Protocol",
    category: "solana",
    badge: "Anchor • Gig Escrow",
    status: "Anchor Mainnet Pilot",
    desc: "Non-custodial micro-escrow protocol for African freelance developers and creative talent, bypassing domestic banking rail blockades with instant milestone settlements in USDC.",
    highlights: [
      "Anchor SPL Token program with Program Derived Address (PDA) escrow vaults",
      "Client milestone approval and instant zero-delay worker payouts",
      "On-chain Proof-of-Work talent reputation tracking",
      "Express REST gateway and responsive task dashboard"
    ],
    tags: ["Anchor", "Solana SPL", "Rust", "TypeScript", "Express"],
    liveUrl: "https://github.com/ayodejierioluwa/SOLWORK",
    codeUrl: "https://github.com/ayodejierioluwa/SOLWORK"
  },
  {
    id: "omesham",
    title: "Omesham AI & WITSML Telemetry",
    category: "energy",
    badge: "Petroleum Systems • Deep Tech",
    status: "IPTC 2027 Abstract Ready",
    desc: "Real-time drilling telemetry and wellbore digital twin intelligence platform. Combines high-performance Rust streaming parsers for WITSML/LAS data with automated NUPRC regulatory hazard detection.",
    highlights: [
      "Rust-accelerated streaming parser for sub-millisecond LAS/WITSML log parsing",
      "Automated early warning for drillstring washouts, kicks, and differential sticking",
      "Full compliance telemetry for Nigerian Upstream Petroleum Regulatory Commission (NUPRC)",
      "Rig-floor forensic analysis demonstrated on Utah FORGE geothermal telemetry"
    ],
    tags: ["Rust (witsml_parser_rs)", "Petroleum Engineering", "NUPRC Twin", "FastAPI", "Python"],
    liveUrl: "https://github.com/ayodejierioluwa/omesham-ai",
    codeUrl: "https://github.com/ayodejierioluwa/omesham-ai"
  },
  {
    id: "petroone",
    title: "PetroOne & GAIA Petroleum AI",
    category: "energy",
    badge: "Energy GIS • Asset Valuation",
    status: "Active Production Suite",
    desc: "Comprehensive petroleum asset valuation, orbital spectral basin verification, and interactive GIS mineral resource mapping for the West African energy corridor.",
    highlights: [
      "Economic discounted cash flow (DCF) asset valuation engine for oil & gas acreages",
      "Interactive 37-state Nigerian mineral and hydrocarbon deposit GIS mapping",
      "Satellite orbital analysis for hydrocarbon seeps and geological basin verification",
      "Executive reporting generator for E&P operators (Oando, Seplat, ND Western)"
    ],
    tags: ["Petroleum AI", "Geological GIS", "Asset Valuation", "Leaflet", "Python"],
    liveUrl: "https://github.com/ayodejierioluwa/PETRO.ONE",
    codeUrl: "https://github.com/ayodejierioluwa/PETRO.ONE"
  },
  {
    id: "laura",
    title: "Laura & Animus AI Engine",
    category: "agent",
    badge: "Autonomous Agents",
    status: "Active System",
    desc: "Autonomous companion and agentic workspace orchestrator capable of managing multi-threaded code execution, continuous telemetry ingestion, and social syndication.",
    highlights: [
      "Multi-agent task dispatching and memory persistence via SQLite WAL",
      "Autonomous tool-use execution across command line and web telemetry",
      "Proactive background alerting and workspace state management"
    ],
    tags: ["Autonomous Agents", "Python", "SQLite WAL", "FastAPI", "LangChain"],
    liveUrl: "https://github.com/ayodejierioluwa/LAURA",
    codeUrl: "https://github.com/ayodejierioluwa/LAURA"
  }
];

class PortfolioApp {
  constructor() {
    this.currentFilter = "all";
    this.terminalHistory = [];
  }

  init() {
    this.renderProjects();
    this.setupFilters();
    this.setupTerminal();
  }

  renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const filtered = this.currentFilter === "all" 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === this.currentFilter);

    grid.innerHTML = filtered.map(p => {
      const badgeClass = p.category === "solana" ? "badge-solana" : p.category === "energy" ? "badge-energy" : "badge-agent";
      return `
        <div class="project-card" data-category="${p.category}">
          <div>
            <div class="project-badge-bar">
              <span class="project-badge ${badgeClass}">${p.badge}</span>
              <span class="project-status">${p.status}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <ul class="project-highlights">
              ${p.highlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
          </div>
          <div>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
            <div class="project-links">
              <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-demo">
                <span>View Live / Demo</span> ↗
              </a>
              <a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-code">
                <span>Inspect Code</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  setupFilters() {
    const pills = document.querySelectorAll(".filter-pill");
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        this.currentFilter = pill.dataset.filter;
        this.renderProjects();
      });
    });
  }

  setupTerminal() {
    const input = document.getElementById("terminal-input");
    const chips = document.querySelectorAll(".chip-btn");

    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const val = input.value.trim().toLowerCase();
          if (val) {
            this.handleCommand(val);
            input.value = "";
          }
        }
      });
    }

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const cmd = chip.dataset.cmd;
        this.handleCommand(cmd);
      });
    });
  }

  handleCommand(cmd) {
    const body = document.getElementById("terminal-body");
    if (!body) return;

    if (cmd === "clear") {
      body.innerHTML = `
        <div class="terminal-line"><span class="prompt">➜ ~</span> <span class="cmd">clear</span></div>
        <div class="terminal-output">Terminal buffer cleared. Ready for next command.</div>
      `;
      return;
    }

    let output = "";

    switch(cmd) {
      case "help":
        output = `
Available commands:
  • <span style="color:#38bdf8;">skills</span>     - Review technical capabilities across Rust, Solana, and AI
  • <span style="color:#38bdf8;">projects</span>   - List featured production repositories
  • <span style="color:#38bdf8;">grants</span>     - Inspect active funding applications ($5k Superteam, $15k Solana)
  • <span style="color:#38bdf8;">whoami</span>     - Brief biography and engineering philosophy
  • <span style="color:#38bdf8;">contact</span>    - Direct email, Telegram, and social links
  • <span style="color:#38bdf8;">clear</span>      - Clear terminal screen
        `;
        break;

      case "skills":
        output = `
[TECHNICAL CAPABILITIES]
  • <strong>Solana & Rust:</strong> Native SBF smart contracts, Anchor framework, Solana Actions / Blinks (Dialect), State Compression (cNFTs), Solana Pay.
  • <strong>Energy & Subsurface:</strong> Real-time WITSML / LAS telemetry parsing in Rust, drilling hydraulics, wellbore collision avoidance, NUPRC regulatory twin.
  • <strong>Agentic AI & Security:</strong> Anthropic Model Context Protocol (MCP), prompt-injection isolation sandboxes, multi-agent pipelines.
  • <strong>Full-Stack:</strong> TypeScript, React, Modern Vanilla JS, FastAPI, Python, WebSockets, Leaflet.js.
        `;
        break;

      case "projects":
        output = `
[PRODUCTION REPOSITORIES]
  1. <strong>Lagos On Chain (LOC)</strong> — 1-Click Blinks ticketing & PoPV cNFT venue check-ins.
  2. <strong>Mermail Security Bounty Desk</strong> — Autonomous MCP security triage & 1-click PayBox signer.
  3. <strong>CookiePay</strong> — Solana social micro-tipping & on-chain fortune cookie minting.
  4. <strong>SolPlay Protocol</strong> — Decentralized social sportsbook on Solana with Rust SBF contracts.
  5. <strong>SolWork</strong> — Non-custodial USDC gig escrow for African freelancers.
  6. <strong>Omesham AI</strong> — Industrial Wellbore Telemetry & Digital Twin Engine.
        `;
        break;

      case "grants":
        output = `
[ACTIVE GRANTS & FUNDING]
  • <strong>Superteam Nigeria:</strong> $5,000 USD Milestone Grant for Lagos On Chain (LOC)
  • <strong>Solana Foundation:</strong> $15,000 USD Grant Application for SolPlay Protocol
  • <strong>Alliance DAO:</strong> $250,000 USD Pre-seed Accelerator Batch Application
        `;
        break;

      case "whoami":
        output = `
<strong>Erioluwa Ayodeji</strong>
Petroleum Systems Engineer & Full-Stack Solana Rust Developer based in Lagos, Nigeria.
Founder of <strong>XXII Group</strong>. Building censorship-resistant financial infrastructure and high-throughput industrial telemetry systems.
        `;
        break;

      case "contact":
      case "hire":
        output = `
[DIRECT CHANNELS]
  • Email: <a href="mailto:ayodejierioluwa@gmail.com" style="color:#14f195;">ayodejierioluwa@gmail.com</a>
  • GitHub: <a href="https://github.com/ayodejierioluwa" target="_blank" style="color:#38bdf8;">github.com/ayodejierioluwa</a>
  • Location: Lagos, Nigeria (Available for global remote contracts / full-time)
        `;
        break;

      default:
        output = `Command not recognized: '${cmd}'. Type <span style="color:#38bdf8;">help</span> or click a quick chip above.`;
        break;
    }

    const commandEntry = document.createElement("div");
    commandEntry.innerHTML = `
      <div class="terminal-line"><span class="prompt">➜ ~</span> <span class="cmd">${cmd}</span></div>
      <div class="terminal-output">${output}</div>
    `;
    body.appendChild(commandEntry);
    body.scrollTop = body.scrollHeight;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new PortfolioApp();
  app.init();
});

// ── PROJECT DATA ──────────────────────────────────────────────
const projects = [
  {
    num: "01",
    domain: "Real-time Collaboration · MERN",
    name: "Project Management System (PMS)",
    role: "Full-Stack Developer",
    desc: "Real-time internal project management app (task boards + projects) where teams collaborate on the same workspace. Task changes sync instantly without page refresh, with activity, membership, and notifications to keep everyone aligned.",
    highlights: [
      "Designed and delivered a real-time task board experience so updates appear instantly for all members in the same project.",
      "Built project workspace features: projects, members, activity feed, and notifications for task and workflow changes.",
      "Implemented collaborative presence so users can see who is currently active in a project.",
      "Created a secure membership model so only approved members can join and interact within a project workspace.",
      "Added reliable notifications for key task changes (in-app, plus email delivery when configured).",
      "Ensured scalability for real-time collaboration by supporting Redis-based Socket.IO scaling when needed.",
      "Delivered the full MERN stack implementation end-to-end (UI, API, data models, and real-time updates).",
    ],
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT Auth",
      "Redux Toolkit (Auth)",
      "Zustand",
      "Nodemailer",
      "Redis Adapter",
    ],
    liveUrl: "https://project-management-system-olive-eight.vercel.app",
  },
  {
    num: "02",
    domain: "Platform Engineering · AI · DevOps",
    name: "NexusFlow",
    role: "Full-Stack Engineer — Solo Build",
    desc: "Production-grade visual workflow automation platform — think Zapier, built from scratch. Drag-and-drop canvas, async DAG execution engine, real-time SSE streaming, AI Copilot nodes, collaborative editing, and full Kubernetes deployment. (Specification: workflow automation with async DAG execution, AI-assisted node creation, realtime collaboration, encrypted credentials, and production-grade Kubernetes deployment.)",

    highlights: [
      "Built async execution engine using BullMQ + Redis — webhook ingestion returns HTTP 202 in under 50ms via queue-based load leveling pattern.",
      "Implemented Kahn's Algorithm for topological DAG traversal with parallel branch execution and configurable exponential backoff retry policies.",
      "AI Copilot node powered by Groq LLaMA 3.3 with prompt injection defense, structured output validation via Zod, and fallback value support.",
      "Real-time collaboration using Y.js CRDTs + Hocuspocus WebSocket server — concurrent canvas edits never conflict, same tech as Figma.",
      "AES-256-GCM credential encryption with per-tenant key derivation — credentials resolved at runtime via $SECRET:key syntax in node configs.",
      "Developer SDK (@nexusflow/sdk) with API key auth, workflows.trigger(), executions.waitForCompletion(), webhooks.verify() helper.",
      "Multi-stage Dockerfiles, Kubernetes manifests with KEDA autoscaling, GitHub Actions CI/CD — k6 load tested at 1000 VUs with p99 < 100ms.",
      "17 integration tests covering auth, workflow CRUD, and multi-tenant isolation enforcement.",
    ],
    tech: [
      "Next.js 15",
      "React Flow",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Y.js",
      "Groq LLM",
      "Docker",
      "Kubernetes",
      "TypeScript",
      "Prometheus",
    ],
  },
  {
    num: "03",
    domain: "Fintech",
    name: "Afropay (Swap)",
    role: "Frontend Developer",
    desc: "Admin panel for a fintech platform managing transactions, KYC workflows, agent onboarding, and fund disbursements. Built to handle secure, role-based financial operations at scale.",
    highlights: [
      "Built and improved admin panel modules for managing transactions, KYC workflows, agent onboarding, and fund disbursements.",
      "Implemented role-based access and charge configuration based on KYC levels, ensuring secure and scalable operations.",
      "Enhanced UI, streamlined workflows, and integrated APIs to improve operational efficiency and admin experience.",
    ],
    tech: [
      "React.js",
      "REST API",
      "RBAC",
      "KYC Workflows",
      "JWT Auth",
      "Modular CSS",
    ],
  },
  {
    num: "04",
    domain: "Government · DR Congo",
    name: "Sonal Monitoring (DRC)",
    role: "Frontend Developer",
    desc: "Centralized monitoring system for DR Congo's government to oversee all betting-related operations, compliance reporting, and taxation summaries across gaming operators. Enables secure tracking of transactions with complete transparency.",
    highlights: [
      "Developed a centralized, secure gateway platform to manage and monitor multiple products/services, reducing direct system exposure.",
      "Built dynamic and reusable UI components using Next.js, React, and Tailwind CSS for real-time monitoring.",
      "Implemented robust RBAC and permission-based workflows, enabling fine-grained access control and hierarchical user management.",
      "Integrated Redux with token management and interceptors for seamless authentication.",
      "Integrated X-Road APIs for secure, standardized data exchange between government systems.",
      "Engineered core modules (Central & Security Server) to manage users, certificates, keys, services, and system diagnostics.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Redux",
      "GraphQL",
      "X-Road API",
      "Tailwind CSS",
      "Lucide React",
      "React Icons",
    ],
  },
  {
    num: "05",
    domain: "Enterprise · CRM",
    name: "Goldmark CRM",
    role: "Frontend Developer",
    desc: "Revamped a legacy CRM platform for lead management, property listings, and calendar scheduling — transforming outdated modules into a modern, high-performance system with structured workflows.",
    highlights: [
      "Revamped legacy CRM modules for lead management, property listings, and calendar scheduling with improved UI and modern workflows.",
      "Implemented structured lead pipelines and updated business logic to align with evolving requirements.",
      "Built role-based access control (RBAC) modules to support hierarchical sales team operations.",
    ],
    tech: [
      "React.js",
      "REST API",
      "RBAC",
      "Modular CSS",
      "Lead Pipelines",
      "Calendar Integration",
    ],
  },
  {
    num: "06",
    domain: "SaaS · Education",
    name: "School Management System",
    role: "Frontend Developer",
    desc: "Multi-tenant SaaS platform to digitize and streamline school operations — academic, administrative, and communication needs. Secure, responsive, and scalable access across devices, integrated with a Python Trytond backend.",
    highlights: [
      "Established seamless communication with a Python Trytond backend via RESTful APIs for student, staff, and payroll data.",
      "Designed role-based dashboards and access views, enabling multiple institutions to operate independently within the same SaaS ecosystem.",
      "Delivered mobile-first, cross-browser compatible dashboards optimized for accessibility and performance.",
      "Improved rendering speed and state management with React.js and Redux to handle large volumes of concurrent users.",
      "Worked closely with backend teams and stakeholders to translate complex workflows into intuitive digital experiences.",
    ],
    tech: [
      "React.js",
      "Redux",
      "REST API",
      "Modular CSS",
      "Multi-tenant SaaS",
      "Python Trytond",
      "React Hooks",
    ],
  },
  {
    num: "07",
    domain: "Productivity · Billing",
    name: "Simplify Invoice",
    role: "Frontend Developer",
    desc: "Web-based billing platform for creating invoices, bills, and estimates efficiently. Users manage itemized pricing, generate PDFs, and customize templates, with membership-based feature gating for free and paid tiers.",
    highlights: [
      "Developed dynamic invoice and estimate creation tools with itemized pricing and quantity management.",
      "Built template management and PDF generation functionality for professional and customizable documents.",
      "Implemented membership-based feature access for free and paid subscription plans.",
      "Designed a responsive, user-friendly interface for seamless navigation and efficient billing workflows.",
      "Integrated secure data handling and storage for invoices, estimates, and user profiles.",
      "Optimized performance for real-time calculations, template rendering, and PDF generation.",
    ],
    tech: [
      "React.js",
      "Redux",
      "REST API",
      "PDF Generation",
      "Modular CSS",
      "Subscription Logic",
      "React Hooks",
    ],
  },
  {
    num: "08",
    domain: "Travel · Booking",
    name: "ZAPS Travels",
    role: "Frontend Developer",
    desc: "Travel booking platform for hotel and flight reservations with a responsive UI for browsing listings, viewing booking details, calculating taxes and total charges, and filtering results based on user preferences.",
    highlights: [
      "Integrated hotel and flight booking APIs into the frontend to enable real-time data retrieval.",
      "Developed and updated UI components for displaying booking details including taxes, total charges, and availability.",
      "Implemented search-based hotel and flight listings with filters and dynamic result updates.",
      "Ensured accurate display of pricing breakdowns including service fees and taxes.",
      "Utilized Material-UI to maintain consistent design across all booking modules.",
    ],
    tech: [
      "React.js",
      "Material-UI (MUI)",
      "CSS Modules",
      "React Icons",
      "Booking APIs",
      "Dynamic Filters",
    ],
  },
  {
    num: "09",
    domain: "B2B · Intelligence",
    name: "OpenSaas Platform",
    role: "Frontend Developer",
    desc: "Centralized intelligence platform providing detailed insights into registered companies — background, sales strategy, news mentions, partnerships, and reviews. Generates a secure trust score for partnership evaluation.",
    highlights: [
      "Integrated APIs to display company details such as news, sales strategy, and business profile.",
      "Developed responsive UI components based on Figma designs for company overview, news, and secure score display.",
      "Implemented reusable custom hooks to manage API data fetching and local component state.",
      "Displayed dynamic secure score visuals based on real-time data for decision-making support.",
      "Created clear and concise API documentation for the news and strategy modules.",
    ],
    tech: [
      "React.js",
      "Material-UI (MUI)",
      "Custom Hooks",
      "CSS Modules",
      "API Integration",
      "Figma-to-Code",
    ],
  },
  {
    num: "10",
    domain: "Compliance · Identity",
    name: "E-KYC Platform",
    role: "Frontend Developer",
    desc: "Comprehensive eKYC platform with a structured role-based system — Super Admins, Admins, Tenants, Tenant Employees, and Agents. Agents perform KYC verification for users and submit for approval with full audit trails.",
    highlights: [
      "Developed role-based access control for Super Admins, Admins, Tenants, Tenant Employees, and Agents.",
      "Implemented end-to-end eKYC workflows — agents collect and verify user documents and submit approval requests.",
      "Designed dashboards and tracking systems to monitor pending, approved, and rejected KYC requests.",
      "Integrated real-time notifications and alerts to ensure timely approvals and follow-ups.",
      "Built reporting and audit features to maintain compliance and traceability across all user roles.",
      "Optimized workflow management to reduce turnaround time for eKYC verification.",
    ],
    tech: [
      "React.js",
      "REST API",
      "RBAC",
      "eKYC Workflows",
      "Modular CSS",
      "Lucide React",
      "Audit Logs",
      "Real-time Notifications",
    ],
  },
  {
    num: "11",
    domain: "Hospitality · Management",
    name: "JUA Hotel Portal",
    role: "Frontend Developer",
    desc: "Comprehensive hotel operations platform integrating booking management, employee records, reports, and registration requests. Role-based dashboards for Super Admins, Sub-Admins, Hotels, and Hotel Employees.",
    highlights: [
      "Developed role-based dashboards for Super Admins, Sub-Admins, Hotels, and Hotel Employees.",
      "Implemented scalable modules for managing bookings, employee records, hotel details, reports, and registration requests.",
      "Built responsive, mobile-first interfaces for seamless access across devices.",
      "Integrated frontend with backend systems for real-time data updates and secure information handling.",
      "Optimized performance and state management to support multiple hotels and large user volumes.",
    ],
    tech: [
      "React.js",
      "Modular CSS",
      "REST API",
      "RBAC",
      "React Hooks",
      "Lucide React",
      "React Icons",
    ],
  },
  {
    num: "12",
    domain: "Facilities · Operations",
    name: "Facility Management System",
    role: "Frontend Developer",
    desc: "Platform to streamline management of residential and commercial facilities. Centralizes operations for buildings, houses, residents, employees, fees, payments, tickets, and reports with role-based access.",
    highlights: [
      "Coordinated multi-role access and permissions, enabling clear separation of administrative and operational responsibilities.",
      "Designed data visualization and reporting tools to provide insights on residents, buildings, and operational metrics.",
      "Implemented notification and alert systems to ensure timely follow-up on tickets, payments, and maintenance tasks.",
      "Streamlined company onboarding and management workflows for Super Admins and Sub-Admins.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "REST API",
      "RBAC",
      "React Hooks",
      "Lucide React",
      "Data Visualization",
    ],
  },
  {
    num: "13",
    domain: "AI · Automation",
    name: "Chatbot Platform",
    role: "Full-Stack Developer",
    desc: "Intelligent and adaptable chatbot solution with customizable question flows (Selection, Input, Form types). Features a robust admin panel for managing chat history, themes, and session tracking across multiple user sessions per client.",
    highlights: [
      "Created a dynamic chatbot with customizable themes and interactive form elements (Selection, Input, Form).",
      "Developed an admin interface for managing chatbot questions, user sessions, and chat history.",
      "Implemented hierarchical question types and structured user input flows.",
      "Built a session management system tracking multiple user IDs per client.",
      "Built reusable components and optimized APIs for scalability and future updates.",
      "Integrated seamless backend operations using MongoDB and Mongoose for persistent storage.",
    ],
    tech: [
      "MongoDB",
      "Mongoose",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "CSS Modules",
      "Session Management",
    ],
  },
];

// ── RENDER CARDS ─────────────────────────────────────────────
const grid = document.getElementById("projectsGrid");
projects.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.dataset.index = i;
  card.dataset.delay = (i % 3) * 100;
  card.innerHTML = `
      <div class="project-num">${p.num}</div>
      <div class="project-domain">${p.domain}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc.length > 130 ? p.desc.slice(0, 130) + "…" : p.desc}</div>
      <div class="project-tech">${p.tech
        .slice(0, 4)
        .map((t) => `<span class="tech-badge">${t}</span>`)
        .join(
          "",
        )}${p.tech.length > 4 ? `<span class="tech-badge">+${p.tech.length - 4} more</span>` : ""}</div>
      <div class="card-hint"><div class="card-hint-dot"></div> Click to explore</div>
    `;
  card.addEventListener("click", () => openModal(i));
  grid.appendChild(card);
});

// ── MODAL LOGIC ───────────────────────────────────────────────
const overlay = document.getElementById("modalOverlay");
const modalEl = document.getElementById("modal");
const closeBtn = document.getElementById("modalClose");

function openModal(index) {
  const p = projects[index];
  document.getElementById("modalNum").textContent = p.num;
  document.getElementById("modalDomain").textContent = p.domain;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalRole").innerHTML = `<span>◈</span> ${p.role}`;

  const hl = document.getElementById("modalHighlights");
  hl.innerHTML = p.highlights.map((h) => `<li>${h}</li>`).join("");

  const tech = document.getElementById("modalTech");
  tech.innerHTML = p.tech
    .map((t) => `<span class="modal-tech-badge">${t}</span>`)
    .join("");

  const liveLink = document.getElementById("modalLiveLink");
  if (p.liveUrl) {
    liveLink.innerHTML = `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">↗ Live Demo</a>`;
    liveLink.style.display = "block";
  } else {
    liveLink.style.display = "none";
  }

  document.body.style.overflow = "hidden";
  overlay.classList.add("open");
  modalEl.scrollTop = 0;
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ── CUSTOM CURSOR ─────────────────────────────────────────────
const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.transform = `translate(${rx}px, ${ry}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

function attachHoverCursor() {
  document
    .querySelectorAll(
      "a, button, .project-card, .skill-category, .stat-card, .modal-tech-badge",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });
}
attachHoverCursor();

// ── NAV SCROLL ────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, entry.target.dataset.delay || 0);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".exp-item").forEach((el, i) => {
  el.dataset.delay = i * 150;
  observer.observe(el);
});
document.querySelectorAll(".project-card").forEach((el) => {
  observer.observe(el);
});

// ── ACTIVE NAV ────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
  });
});

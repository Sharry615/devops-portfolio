const projects = [
  {
    name: "ALT Balaji / Kutingg",
    type: "OTT / Media Platform",
    cloud: "GCP",
    stack: ["Cloud Run", "Cloud SQL", "Redis", "Kafka", "BigQuery", "Cloud Build"],
    summary:
      "Production cloud architecture using Cloud DNS, HTTPS Load Balancer, Cloud Armor, Cloud Run, Cloud SQL, Redis, Kafka and BigQuery.",
    highlights: [
      "Managed production deployment workflow",
      "Supported scalable Cloud Run-based services",
      "Worked with database, cache and event-driven components",
      "Integrated monitoring and operational visibility"
    ]
  },
  {
    name: "PTI",
    type: "News / Digital Platform",
    cloud: "Cloud Infrastructure",
    stack: ["CI/CD", "Monitoring", "Load Balancing", "Linux", "Cloud"],
    summary:
      "Infrastructure operations, deployment automation and monitoring for production digital platform workloads.",
    highlights: [
      "Supported cloud-hosted production workloads",
      "Implemented monitoring and alerting workflows",
      "Handled release and deployment operations",
      "Improved reliability through operational checks"
    ]
  },
  {
    name: "Mastii.in",
    type: "Media / Entertainment",
    cloud: "GCP",
    stack: ["Cloud", "CI/CD", "Monitoring", "Storage", "Networking"],
    summary:
      "Cloud infrastructure and deployment support for media application services with centralized observability.",
    highlights: [
      "Configured cloud deployment processes",
      "Supported production infrastructure health",
      "Used monitoring dashboards for operations",
      "Managed infrastructure-level troubleshooting"
    ]
  },
  {
    name: "SMS Platform",
    type: "Messaging / Communication",
    cloud: "Cloud",
    stack: ["Linux", "CI/CD", "Monitoring", "Networking", "Databases"],
    summary:
      "Production support and deployment automation for messaging workloads with monitoring and alerting.",
    highlights: [
      "Maintained deployment and release workflow",
      "Monitored application and server health",
      "Supported incident response activities",
      "Worked on network and database connectivity"
    ]
  },
  {
    name: "CNBC Arabia",
    type: "Media / News Platform",
    cloud: "Cloud",
    stack: ["Cloud Ops", "Monitoring", "CI/CD", "Load Balancer", "Security"],
    summary:
      "Cloud infrastructure operations and monitoring model for media platform application services.",
    highlights: [
      "Supported production application operations",
      "Worked with dashboards and alerting systems",
      "Improved deployment visibility",
      "Handled infrastructure troubleshooting"
    ]
  },
  {
    name: "IKOMG",
    type: "Cloud Application Platform",
    cloud: "GCP",
    stack: ["Cloud Run", "Cloud SQL", "MongoDB Atlas", "VPC", "Artifact Registry"],
    summary:
      "GCP Cloud Run deployment with Cloud SQL, MongoDB Atlas connectivity, Direct VPC egress and production troubleshooting.",
    highlights: [
      "Configured Cloud Run Gen2 services",
      "Worked with Direct VPC egress and private networking",
      "Troubleshot MongoDB Atlas connectivity",
      "Managed container images and deployment settings"
    ]
  },
  {
    name: "Art of Living",
    type: "Application / CMS Platform",
    cloud: "GCP",
    stack: ["Cloud", "CMS", "Monitoring", "CI/CD", "Security"],
    summary:
      "Cloud operations, application deployment and monitoring support for production CMS/application workloads.",
    highlights: [
      "Supported deployment and cloud operations",
      "Monitored infrastructure health",
      "Worked on availability and production reliability",
      "Maintained operational documentation"
    ]
  }
];

const architectureItems = [
  {
    title: "ALT Balaji / Kutingg Architecture",
    image: "assets/architecture/alt-balaji.png",
    text: "Cloud DNS, HTTPS Load Balancer, Cloud Armor, Cloud Run, Cloud SQL, Redis, Kafka and BigQuery."
  },
  {
    title: "PTI Architecture",
    image: "assets/architecture/pti.png",
    text: "Production infrastructure, deployment flow, monitoring and cloud operations architecture."
  },
  {
    title: "Mastii.in Architecture",
    image: "assets/architecture/mastii.png",
    text: "Media platform cloud infrastructure with monitoring, deployment and service operations."
  },
  {
    title: "SMS Architecture",
    image: "assets/architecture/sms.png",
    text: "Messaging platform infrastructure with application services, monitoring and alerting."
  },
  {
    title: "CNBC Arabia Architecture",
    image: "assets/architecture/cnbc.png",
    text: "Media/news cloud architecture with deployment, monitoring and infrastructure operations."
  },
  {
    title: "IKOMG Architecture",
    image: "assets/architecture/ikomg.png",
    text: "Cloud Run, Cloud SQL, MongoDB Atlas, VPC networking and Artifact Registry-based deployment."
  },
  {
    title: "Art of Living Architecture",
    image: "assets/architecture/art-of-living.png",
    text: "Application/CMS infrastructure with CI/CD, monitoring, cloud networking and security."
  }
];

const projectsGrid = document.getElementById("projectsGrid");
const architectureGrid = document.getElementById("architectureGrid");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-top">
            <div>
              <h3>${project.name}</h3>
              <p>${project.type}</p>
            </div>
            <span class="project-badge">${project.cloud}</span>
          </div>

          <p>${project.summary}</p>

          <div class="project-meta">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>

          <ul class="project-list">
            ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderArchitecture() {
  if (!architectureGrid) return;

  architectureGrid.innerHTML = architectureItems
    .map(
      (item) => `
        <article class="visual-card reveal">
          <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('missing-image');" />
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setupMobileMenu() {
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal, .skill-card, .metric-card, .visual-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  items.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

function setupImageFallbacks() {
  document.querySelectorAll(".visual-card img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.closest(".visual-card")?.classList.add("missing-image");
    });
  });
}

function setCurrentYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

renderProjects();
renderArchitecture();
setupMobileMenu();
setupImageFallbacks();
setupRevealAnimation();
setCurrentYear();


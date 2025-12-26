// Smooth internal navigation
document.querySelectorAll("[data-scroll]").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById(link.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Skill intelligence
const skillData = {
  html: "Semantic structure, accessibility, and document architecture.",
  css: "Layout systems, motion design, responsive scaling.",
  js: "State, interaction, async logic, UI behavior.",
  python: "Backend logic, AI pipelines, automation.",
  react: "Component architecture, state-driven UI.",
  java: "Object-oriented systems and scalability."
};

const panel = document.getElementById("skillPanel");

document.querySelectorAll(".skill-node").forEach(node => {
  node.addEventListener("click", () => {
    panel.textContent = skillData[node.dataset.skill];
  });
});

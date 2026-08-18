document.addEventListener("DOMContentLoaded", () => {
  const palco = document.querySelector("[data-palco3d]");
  if (!palco || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  palco.addEventListener("pointermove", (e) => {
    const r = palco.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    palco.style.setProperty("--olhar-x", `${(x * 18).toFixed(2)}deg`);
    palco.style.setProperty("--olhar-y", `${(-y * 10).toFixed(2)}deg`);
  });

  palco.addEventListener("pointerleave", () => {
    palco.style.setProperty("--olhar-x", "0deg");
    palco.style.setProperty("--olhar-y", "0deg");
  });
});

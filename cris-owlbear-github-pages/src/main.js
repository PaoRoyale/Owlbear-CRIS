import OBR from "@owlbear-rodeo/sdk";
import "./style.css";

const app = document.querySelector("#app");
const bar = document.querySelector("#window-bar");
const iframe = document.querySelector("#cris-frame");
const status = document.querySelector("#status");
const pin = document.querySelector("#pin");
const minimize = document.querySelector("#minimize");
const maximize = document.querySelector("#maximize");

let drag = null;
let resize = null;
let minimized = false;
let expanded = false;
let pinned = false;

iframe.addEventListener("load", () => { status.hidden = true; });
iframe.addEventListener("error", () => {
  status.textContent = "O C.R.I.S. não permitiu ou não conseguiu carregar nesta janela.";
});

pin.addEventListener("click", () => {
  pinned = !pinned;
  app.classList.toggle("pinned", pinned);
  pin.setAttribute("aria-pressed", String(pinned));
  pin.title = pinned ? "Desafixar" : "Fixar janela";
});

minimize.addEventListener("click", () => {
  minimized = !minimized;
  app.classList.toggle("minimized", minimized);
  minimize.textContent = minimized ? "+" : "—";
});

maximize.addEventListener("click", () => {
  expanded = !expanded;
  app.classList.toggle("expanded", expanded);
  maximize.textContent = expanded ? "❐" : "□";
});

bar.addEventListener("pointerdown", (e) => {
  if (e.target.closest("button")) return;
  const r = app.getBoundingClientRect();
  drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
  bar.setPointerCapture(e.pointerId);
});
bar.addEventListener("pointermove", (e) => {
  if (!drag) return;
  app.style.left = `${Math.max(0, e.clientX - drag.dx)}px`;
  app.style.top = `${Math.max(0, e.clientY - drag.dy)}px`;
  app.style.right = "auto";
  app.style.bottom = "auto";
});
bar.addEventListener("pointerup", () => drag = null);
bar.addEventListener("pointercancel", () => drag = null);

const handle = document.querySelector("#resize-handle");
handle.addEventListener("pointerdown", (e) => {
  const r = app.getBoundingClientRect();
  resize = { x: e.clientX, y: e.clientY, w: r.width, h: r.height };
  handle.setPointerCapture(e.pointerId);
});
handle.addEventListener("pointermove", (e) => {
  if (!resize) return;
  app.style.width = `${Math.max(340, resize.w + e.clientX - resize.x)}px`;
  app.style.height = `${Math.max(260, resize.h + e.clientY - resize.y)}px`;
});
handle.addEventListener("pointerup", () => resize = null);
handle.addEventListener("pointercancel", () => resize = null);

// A ficha é local: não transmite URL, dados ou conteúdo aos outros jogadores.
// O SDK é inicializado para a extensão carregar no ambiente Owlbear.
OBR.onReady(() => document.documentElement.classList.add("owlbear-ready"));

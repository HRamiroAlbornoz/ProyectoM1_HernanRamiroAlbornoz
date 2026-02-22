/*
// Generar color aleatorio en HSL
function randomHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Generar color aleatorio en RGBA
function randomRGBA() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random()).toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Renderizar paleta
function generarPaleta() {
  const size = parseInt(document.getElementById("size").value);
  const format = document.getElementById("format").value;
  const paleta = document.getElementById("paleta");
  paleta.innerHTML = "";

// En lugar de poner el código dentro de la caja, se genera un div.color-code debajo de cada div.color-box para mostrar el código del color directamente.
// Esto hace que la interfaz sea más clara y fácil de usar, ya que los usuarios pueden ver el código del color sin tener que interactuar con la caja de color.
  for (let i = 0; i < size; i++) {
    const color = format === "hsl" ? randomHSL() : randomRGBA();

    const item = document.createElement("div");
    item.className = "color-item";

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;

    const code = document.createElement("div");
    code.className = "color-code";
    code.textContent = color; // Mostrar el código del color directamente
    
    item.appendChild(box);
    item.appendChild(code);
    paleta.appendChild(item);
  }

  // Microfeedback simple
  const toast = document.createElement("div");
  toast.textContent = "¡Paleta generada!";
  toast.style.position = "fixed";
  toast.style.bottom = "10px";
  toast.style.right = "10px";
  toast.style.background = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "0.5rem 1rem";
  toast.style.borderRadius = "4px";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
*/

// Convertir RGBA a Hex de 8 dígitos (#RRGGBBAA)
function rgbaToHex(r, g, b, a) {
  const toHex = x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const alpha = Math.round(a * 255);
  return "#" + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
}

// Convertir HSLA a Hex de 8 dígitos
function hslaToHex(h, s, l, a) {
  s /= 100;
  l /= 100;

  const k = n => (n + h / 30) % 12;
  const b = s * Math.min(l, 1 - l);
  const f = n =>
    Math.round(255 * (l - b * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));

  return rgbaToHex(f(0), f(8), f(4), a);
}

// Generar paleta
function generarPaleta() {
  const size = parseInt(document.getElementById("size").value);
  const format = document.getElementById("format").value;
  const paleta = document.getElementById("paleta");
  paleta.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let color, hex;

    if (format === "hsla") {
      const h = Math.floor(Math.random() * 360);
      const s = Math.floor(Math.random() * 100);
      const l = Math.floor(Math.random() * 100);
      const a = Math.random().toFixed(2);
      color = `hsla(${h}, ${s}%, ${l}%, ${a})`;
      hex = hslaToHex(h, s, l, parseFloat(a));
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a = Math.random().toFixed(2);
      color = `rgba(${r}, ${g}, ${b}, ${a})`;
      hex = rgbaToHex(r, g, b, parseFloat(a));
    }

    const item = document.createElement("div");
    item.className = "color-item";

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;

    const code = document.createElement("div");
    code.className = "color-code";
    code.textContent = color;

    const hexCode = document.createElement("div");
    hexCode.className = "color-code";
    hexCode.textContent = hex;

    item.appendChild(box);
    item.appendChild(code);
    item.appendChild(hexCode);
    paleta.appendChild(item);
  }

  // Microfeedback simple
  const toast = document.createElement("div");
  toast.textContent = "¡Paleta generada!";
  toast.style.position = "fixed";
  toast.style.bottom = "10px";
  toast.style.right = "10px";
  toast.style.background = "#333";
  toast.style.color = "#fff";
  toast.style.padding = "0.5rem 1rem";
  toast.style.borderRadius = "4px";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// Eventos
document.getElementById("generar").addEventListener("click", generarPaleta);
document.getElementById("explorar").addEventListener("click", generarPaleta);

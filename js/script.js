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

// Eventos
document.getElementById("generar").addEventListener("click", generarPaleta);
document.getElementById("explorar").addEventListener("click", generarPaleta);

// -----------------------------
// Conversión de colores a HEX
// -----------------------------

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

// -----------------------------
// Conversión de colores a HEX
// -----------------------------
function rgbaToHex(r, g, b, a) {
  const toHex = x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const alpha = Math.round(a * 255);
  return "#" + toHex(r) + toHex(g) + toHex(b) + toHex(alpha);
}

function hslaToHex(h, s, l, a) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const b = s * Math.min(l, 1 - l);
  const f = n =>
    Math.round(255 * (l - b * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));
  return rgbaToHex(f(0), f(8), f(4), a);
}

// -----------------------------
// Generador de paletas
// -----------------------------
function generarPaleta() {
  const sizeValue = document.getElementById("size").value;
  const formatValue = document.getElementById("format").value;

  // Validación: si no se eligió tamaño o formato, salir sin hacer nada
  if (!sizeValue || !formatValue) {
    return;
  }

  const size = parseInt(sizeValue);
  const format = formatValue;
  const paleta = document.getElementById("paleta");
  //paleta.innerHTML = "";

  // Si ya hay colores, revisamos cuáles están bloqueados
  const itemsExistentes = paleta.querySelectorAll(".color-item");

  let coloresGenerados = [];

  for (let i = 0; i < size; i++) {
    let item

    // Si existe y está bloqueado, lo dejamos igual
    if (itemsExistentes[i] && itemsExistentes[i].querySelector(".lock-icon.locked")) {
      item = itemsExistentes[i];
    } else {

      // Generamos un nuevo color    
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

      item = document.createElement("div");
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

      // Al hacer clic en la caja, copia el HEX
      box.addEventListener("click", () => {
        copiarAlPortapapeles(hexCode, hex);
      });

      // Ícono de bloqueo
      const lock = document.createElement("div");
      lock.className = "lock-icon";
      lock.textContent = "🔓";

      lock.addEventListener("click", () => {
        lock.classList.toggle("locked");
        //lock.textContent = lock.classList.contains("locked") ? "🔒" : "🔓";
        if (lock.classList.contains("locked")) {
          lock.textContent = "🔒";
          mostrarToast("Color bloqueado 🔒");
        } else {
          lock.textContent = "🔓";
          mostrarToast("Color desbloqueado 🔓");
        }
      });

      // Copiar el código del color (RGBA/HSLA)
      code.addEventListener("click", () => {
        copiarAlPortapapeles(code, color);
      });

      // Copiar el código HEX
      hexCode.addEventListener("click", () => {
        copiarAlPortapapeles(hexCode, hex);
      });

      item.appendChild(box);
      item.appendChild(code);
      item.appendChild(hexCode);
      item.appendChild(lock);
      //paleta.appendChild(item);
      coloresGenerados.push(color);
    }

    // Si es nuevo, lo agregamos; si estaba bloqueado, lo mantenemos
    if (!itemsExistentes[i]) {
      paleta.appendChild(item);
    } else {
      paleta.replaceChild(item, itemsExistentes[i]);
    }
  }

  // Guardar en localStorage la última paleta según formato
  localStorage.setItem(`ultimaPaleta_${format}`, JSON.stringify(coloresGenerados));

  // Mostrar la paleta guardada
  mostrarPaletaGuardada(format);

  mostrarToast("¡Paleta generada!");
}

// -----------------------------
// Mostrar paleta guardada
// -----------------------------
function mostrarPaletaGuardada(format) {
  const contenedor = document.getElementById(`lista-paletas-${format}`);
  contenedor.innerHTML = `<h3>Última Paleta ${format.toUpperCase()}</h3>`;

  const colores = JSON.parse(localStorage.getItem(`ultimaPaleta_${format}`)) || [];

  colores.forEach(color => {
    const item = document.createElement("div");
    item.className = "color-item";

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;

    const code = document.createElement("div");
    code.className = "color-code";
    code.textContent = color;

    item.appendChild(box);
    item.appendChild(code);
    contenedor.appendChild(item);
  });
}


// Mejorar microfeedback al copiar: cambiar el texto a "Copiado ✅" y aplicar una clase visual temporalmente
// Función para copiar y dar feedback visual
function copiarAlPortapapeles(elemento, texto) {
  navigator.clipboard.writeText(texto).then(() => {

    // Guardamos el texto original
    const originalText = elemento.textContent;

    // Cambiamos el contenido y aplicamos clase visual
    elemento.textContent = "Copiado ✅";
    elemento.classList.add("copiado");

    // Restauramos después de 1.5 segundos
    setTimeout(() => {
      elemento.textContent = originalText;
      elemento.classList.remove("copiado");
    }, 1500);

    // También mostramos un toast breve
    mostrarToast(`Copiado: ${texto}`);
  });
};

// Microfeedback simple
function mostrarToast(mensaje) {
  const toast = document.createElement("div");
  toast.textContent = mensaje;
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

// -----------------------------
// Menú hamburguesa
// -----------------------------
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");

  // Cambiar el ícono según estado
  if (navList.classList.contains("active")) {
    menuToggle.innerHTML = "✖"; // ícono de cerrar
  } else {
    menuToggle.innerHTML = "☰"; // ícono hamburguesa
  }
});

// -----------------------------
// Eventos principales
// -----------------------------
document.getElementById("generar").addEventListener("click", generarPaleta);
document.getElementById("explorar").addEventListener("click", generarPaleta);

// Al cargar la página, mostrar paletas guardadas si existen
window.addEventListener("DOMContentLoaded", () => {
  mostrarPaletaGuardada("hsla");
  mostrarPaletaGuardada("rgba");
});
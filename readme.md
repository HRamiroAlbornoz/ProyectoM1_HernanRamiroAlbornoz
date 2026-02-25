# Proyecto Integrador M1

---

## 🎨 Colorfly Studio - Generador de Paletas de Colores Aleatorias

Colorfly Studio es una aplicación web que permite generar paletas de colores aleatorias en formato **HSL** y **RGBA**, con la posibilidad de copiar los códigos, bloquear colores específicos y guardar la última paleta generada en el navegador.

---

## 🚀 Características principales

- Generación de paletas en **HSL** y **RGBA**.
- Conversión automática de colores a **HEX de 8 dígitos**.
- **Bloqueo de colores** para mantener tonos específicos al regenerar la paleta.
- **Copiado rápido** de códigos de color (HSLA/RGBA y HEX) al portapapeles.
- **Microfeedback visual** al copiar (texto temporal y toast).
- **Paletas guardadas** en `localStorage` para recordar la última generada.
- **Diseño responsive** con **CSS Grid**, **Flexbox** y media queries.
- **Modo oscuro automático** según la preferencia del sistema (`prefers-color-scheme`).
- Menú de navegación adaptable con **botón hamburguesa** en móviles.

---

## 📂 Estructura del proyecto

```
Colorfly-Studio/
├── 📄 index.html          # Página principal (HTML5)
├── 🎨 styles/
│   └── 🎨 styles.css      # Estilos (responsive, modo oscuro, grid/flex)
├── ⚡ js/
│   └── ⚙️ script.js       # Lógica de generación, bloqueo y copiado
└── 🖼️ img/
    └── 🖼️ logo.png        # Logo oficial de la aplicación
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5**: estructura semántica y accesible.
- **CSS3**: responsive design con `clamp()`, `grid`, `flexbox`, media queries y modo oscuro.
- **JavaScript (ES6+)**: generación de colores, eventos, `localStorage`, `clipboard API`.

---

## ⚙️ Decisiones técnicas

- **HTML5 semántico**: estructura clara y accesible.
- **CSS3 moderno**:
  - Uso de `clamp()` para tipografía y espaciado dinámico.
  - **CSS Grid** y **Flexbox** para layouts adaptables.
  - Media queries para tablets y móviles.
  - `prefers-color-scheme` para modo oscuro automático.
- **JavaScript ES6+**:
  - Generación aleatoria de colores en HSLA y RGBA.
  - Conversión a HEX de 8 dígitos (#RRGGBBAA).
  - Uso de `localStorage` para guardar la última paleta.
  - `clipboard API` para copiar códigos.
  - Microinteracciones con toasts y feedback visual.
- **Responsive design**: menú hamburguesa en móviles y adaptación de paletas a distintos tamaños de pantalla.

---

## ▶️ Ejecución local

1. Asegúrate de tener **Git** instalado en tu máquina.
2. Abre tu terminal o línea de comandos.
3. Navega al directorio donde deseas clonar el proyecto.
4. Clonar el repositorio usando el siguiente comando:
    `git clone https://github.com/HRamiroAlbornoz/ProyectoM1_HernanRamiroAlbornoz.git`
6. Ingresa al directorio del proyecto:
    `cd ProyectoM1_HernanRamiroAlbornoz`
7. Abre el archivo `index.html` en tu navegador.
Nota: No se requieren dependencias ni servidor adicional, ya que es una aplicación estática.

---

## 📖 Uso

1. Selecciona el **formato** (HSL o RGBA).
2. Elige el **tamaño de la paleta** (6, 8 o 9 colores).
3. Haz clic en **Generar Paleta**.
4. Interactúa con los colores:
   - 🔒 Bloquea un color para mantenerlo en la siguiente generación.
   - 📋 Copia el código HSLA/RGBA o HEX haciendo clic en el texto o la caja.
5. Consulta las **últimas paletas guardadas** en la sección correspondiente.

---

## 🌐 Despliegue en GitHub Pages
1. 	Sube el proyecto a tu repositorio en GitHub.
2. 	Ve a **Settings** > **Pages** dentro del repositorio.
3. 	En **Source**, selecciona la rama principal (`main` o `master`) y la carpeta raíz (`/root`).
4. 	Guarda los cambios.
5. 	GitHub generará automáticamente la URL pública de tu aplicación, por ejemplo:
    https://tuusuario.github.io/Colorfly-Studio

---

## 🌐 Demo

https://hramiroalbornoz.github.io/ProyectoM1_HernanRamiroAlbornoz/

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente, siempre citando la autoría original.

---

## ✨ Autor

Desarrollado por **Ramiro**.  
Apasionado por el diseño web, la interacción y la creación de herramientas visuales simples y mantenibles.
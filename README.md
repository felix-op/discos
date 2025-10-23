# Scheduling de discos

Simulador de administración de discos para Sistemas Operativos

# Estructura del Proyecto

Aquí tienes una vista general de la organización de las carpetas y archivos clave del proyecto.

```
.
├── /public/
│   └── (Archivos públicos, ej: index.html en dev, favicons)
├── /src/
│   ├── /assets/
│   ├── /components/
│   │   └── /layout/
│   ├── /pages/
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts

```

## Descripción de Archivos

* **/src/**: Directorio principal del código fuente de la aplicación.

  * **/assets/**: Archivos estáticos como imágenes, fuentes, etc.

  * **/components/**: Componentes de React reutilizables (botones, inputs, etc.).

  * **/pages/**: Componentes que representan las páginas o vistas principales.

  * **main.tsx**: Punto de entrada de la aplicación React (renderiza `<App />`).

* **/public/**: Archivos estáticos que no se procesan por Vite y se copian tal cual.

* **.gitignore**: Especifica qué archivos y carpetas debe ignorar Git.

* **eslint.config.js**: Configuración del linter (ESLint).

* **index.html**: Plantilla HTML principal de la aplicación.

* **package.json**: Define las dependencias y scripts del proyecto.

* **package-lock.json**: Registra las versiones exactas de las dependencias.

* **tsconfig.json**: Configuración del compilador de TypeScript.

* **vite.config.ts**: Configuración de Vite (servidor de desarrollo, build, plugins).


# Iniciar el servidor de desarrollo
npm run dev

# Iniciar la compilación para producción
npm build
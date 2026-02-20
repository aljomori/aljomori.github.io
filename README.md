# Alexis Moreno - Portfolio

SPA portfolio built with React, Vite and TypeScript.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en GitHub Pages

El despliegue es **automático** con GitHub Actions. Al hacer push a `main` o `dev`, el workflow:

1. Instala dependencias
2. Compila la app React (`npm run build`)
3. Despliega en GitHub Pages

### Configuración inicial (solo una vez)

1. En tu repo: **Settings** → **Pages**
2. En **Build and deployment** → **Source**: elige **GitHub Actions**
3. Haz push a `main` o `dev` y el workflow desplegará automáticamente

### Despliegue manual (opcional)

```bash
npm run deploy
```

> Requiere tener configurado GitHub Pages desde la rama `gh-pages` si usas este método.

## Estructura

- `src/` - Código fuente React
- `public/` - Assets estáticos (imágenes, CSS, fuentes)
- `dist/` - Build de producción (generado)

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para generar sitio estático compatible con hosting compartido
  output: 'static',
 
  // Configurar build para hosting compartido
  build: {
    format: 'directory', // Genera carpetas con index.html
    assets: 'assets' // Carpeta para archivos estáticos en la raíz
  },
 
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    host: true
  },
 
  // Configuración de las páginas
  site: 'https://tudominio.com', // Cambia por tu dominio final
 
  // Configurar rutas para hosting compartido
  trailingSlash: 'ignore', // Permite tanto con / como sin /
 
  // Optimizaciones para hosting compartido
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Archivos estáticos sin hash para mejor compatibilidad
          entryFileNames: 'assets/js/[name].js',
          chunkFileNames: 'assets/js/[name].js',
          assetFileNames: 'assets/[ext]/[name].[ext]'
        }
      }
    }
  },
 
  // Configuración adicional para hosting compartido
  compressHTML: true // Comprimir HTML
 
  // REMOVIDO: redirects que causaban el problema
});
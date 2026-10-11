self.addEventListener('install', (e) => {
  console.log('Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necesario para que Chrome permita la instalación
});

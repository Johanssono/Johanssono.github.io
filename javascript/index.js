const staticCacheName = 'site-static';


self.addEventListener('install', evt => {
  console.log('service worker has been installed');
});



self.addEventListener('activate', evt => {
  console.log('service woker has been activated');
});




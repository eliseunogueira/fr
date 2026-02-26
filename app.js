if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
	  console.log("ServiceWorker Activated");
	   caches.delete('FrenchOuinoCache5.0.0');
       caches.delete('FrenchOuinoDynamic5.0.0');	
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
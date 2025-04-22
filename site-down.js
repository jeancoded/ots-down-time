addEventListener('fetch', event => {
  event.respondWith(
    new Response('<h1>Site Under Maintenance</h1><p>We will be back shortly.</p>', {
      headers: { 'Content-Type': 'text/html' },
      status: 503
    })
  );
});


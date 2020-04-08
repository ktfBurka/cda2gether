self.addEventListener('fetch', function(event) {
    console.log("hello");
    event.respondWith(
        fetch(event.request)
      );
  });
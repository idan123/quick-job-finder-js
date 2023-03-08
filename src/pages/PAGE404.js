document.addEventListener('DOMContentLoaded', function () {
    const PAGE404Container = document.querySelector('#PAGE404');
  
    PAGE404Container.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-center">404 Error: Page not found</h1>
            <p class="text-center">Sorry, the page you requested could not be found.</p>
          </div>
        </div>
      </div>
    `;
  });
  
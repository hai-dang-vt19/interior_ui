<template>
  <div>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-success" href="#">THINK IN</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Our Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
      </div>
      <button class="btn btn-outline-secondary">
        <i class="bi bi-cart"></i>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="display-4 fw-bold">DESIGN CREATES CULTURE</h1>
    </div>
  </section>

  <!-- Cards Section -->
  <section class="card-section container">
    <div class="row justify-content-center g-4">
      <!-- Card 1 -->
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="https://placehold.co/320x200" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Behzad Ghaffarian</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="https://placehold.co/320x200" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Jared Rice</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="https://placehold.co/320x200" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Spacejoy</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial-section text-center">
    <div class="container">
      <blockquote class="blockquote">
        <p class="fs-4 fst-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <footer class="blockquote-footer mt-4">Khaksarmadani / CEO</footer>
      </blockquote>
      <div class="d-flex justify-content-center mt-4">
        <div class="mx-2 p-1 bg-secondary rounded-circle" style="width: 10px; height: 10px;"></div>
        <div class="mx-2 p-1 bg-dark rounded-circle" style="width: 10px; height: 10px;"></div>
        <div class="mx-2 p-1 bg-secondary rounded-circle" style="width: 10px; height: 10px;"></div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="text-center py-5 bg-light">
    <div class="container">
      <div class="row footer-logos">
        <div class="col">
          <img src="https://placehold.co/100x50" alt="Logo">
        </div>
        <div class="col">
          <img src="https://placehold.co/100x50" alt="Logo">
        </div>
        <div class="col">
          <img src="https://placehold.co/100x50" alt="Logo">
        </div>
        <div class="col">
          <img src="https://placehold.co/100x50" alt="Logo">
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.hero-section {
      position: relative;
      background-image: url('@/assets/bg-head.png');
      background-size: cover;
      background-position: center;
      height: 100vh;
      color: white;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      padding-top: 150px;
    }

    .card-section {
      margin-top: -50px;
    }

    .testimonial-section {
      background-color: #f9f9f9;
      padding: 60px 0;
    }

    .footer-logos img {
      max-width: 120px;
    }
</style>
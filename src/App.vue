<script setup>

</script>

<template>
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="https://inixindo.id">
          <img src="https://i.ibb.co/MnPN2H8/Logo-X-Transparent-White.png" alt="LogoX"
            class="d-inline-block align-center me-3" width="25" height="25" />
          Inixindo
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/gallery" class="nav-link">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link">Contact Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/courselist" class="nav-link">Courses</router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                User Area
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/register" class="dropdown-item">Register</router-link>
                </li>
                <li>
                  <router-link to="/login" class="dropdown-item">Login</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- merender components -->
    <div class="container mt-5 pt-5">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div class="container">
      <footer class="py-5 my-5">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><router-link to="/" class="nav-link px-2 text-body-secondary">Home</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link px-2 text-body-secondary">About</router-link></li>
          <li class="nav-item"><router-link to="/gallery" class="nav-link px-2 text-body-secondary">Gallery</router-link>
          </li>
          <li class="nav-item"><router-link to="/courselist"
              class="nav-link px-2 text-body-secondary">Courses</router-link></li>
        </ul>
        <p class="text-center text-body-secondary">&copy; 2023 | Inixindo</p>
      </footer>
    </div>
  </div>
</template>

<style></style>

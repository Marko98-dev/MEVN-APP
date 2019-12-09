<template>
    <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark custom-bg-dark">
    <router-link to="/" class="navbar-brand">
      Task Manager
    </router-link>
    <button class="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarCollapse"
     aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link">
            Tasks
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/logout" class="nav-link">
            Logout
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            {{ this.$store.state.username ? this.$store.state.username : 'User' }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

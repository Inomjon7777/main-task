<template>
  <nav>
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: sans-serif;
  text-decoration: none;
  scroll-behavior: smooth;
}

.container {
  padding: 0 12rem;
}
</style>

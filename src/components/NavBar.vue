<template>
  <nav class="navbar navbar-expand-lg bg-success-subtle">
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        to="/"
      ><strong>USERS</strong></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul
          class="navbar-nav mb-2 mb-lg-0"
          v-for="(item, index) in links"
          :key="item.id + index"
        >
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="item.link"
            >{{ item.name }}</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
const links = reactive([
  { id: 1, name: 'Dashboard', link: '/' },
  { id: 2, name: "Company", link: '#' },
  { id: 3, name: "Portfolio", link: '#' },
  { id: 4, name: "Blog", link: '#' }
])
</script>
<style lang="">

</style>

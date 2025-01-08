<template>
  <footer class="footer bg-secondary mt-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div
          class="d-flex"
        >
          <div
            class="navbar-nav"
            v-for="item in menu"
            :key="item.id"
          >
            <router-link class="nav-link text-white m-1" :to="item.link"> {{ item.name }} </router-link>
          </div>
        </div>
      </div>
    </nav>
    <p class="copyright text-center text-white pb-3">
      made with love for a better web
    </p>
  </footer>
</template>

<script>
export default {
  name: "footer-section",
  data: () => {
    return {
      menu: [
        { id: 1, name: "Dasboard", link: '/' },
        { id: 2, name: "Company", link: '#' },
        { id: 3, name: "Portfolio", link: '#' },
        { id: 4, name: "Blog", link: '#' }
      ]
    }
  }
}
</script>

<template>
  <div>
    <Header />

    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mt-3 mb-5 text-center">Users List</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <UsersList />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader.vue'
import UsersList from '@/components/UsersList.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
.table tbody tr {
  cursor: pointer;
}
</style>

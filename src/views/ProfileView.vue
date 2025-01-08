<template>
  <div class="profile">
    <Header />

    <div class="content mt-4">
      <div class="container-fluid">

        <ProfileDetail />

      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/TheHeader.vue'
import ProfileDetail from '@/components/ProfileDetail.vue'
import Footer from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
</style>

<template>
  <div
    class="card mb-3 bg-secondary-subtle"
    style="width: 15rem;"
  >
    <div class="image" @click="$emit('detailProfile', props.user_data.id)">
      <img
        src="../assets/images/face-6.jpg"
        class="card-img-top rounded-circle p-5"
        :alt="props.user_data.name"
      >
    </div>

    <div class="card-body">
      <h5 class="card-title text-center">{{ props.user_data.name }}</h5>
      <p class="card-text text-center">{{ props.user_data.email }}</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  user_data: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="scss" scoped>
.card {
  height: 300px;
  margin-right: 15px;
  @media screen and (max-width: 533px) {
    margin: auto;
  }
  .image {
    position: relative;
    height: 190px;
    cursor: pointer;
    .card-img-top {
      position: absolute;
      top: -30px;
    }
  }
}

</style>
<template>
  <div class="row">
    <div class="col">
      <div class="d-flex justify-content-center mb-4">
        <input
          class="form-control me-2 input-search border"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="findUser"
        >
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col d-flex flex-wrap justify-content-center">
      <CardUser
        v-for="user in filteredUserSList"
        :key="user.id"
        :user_data="user"
        @detailProfile="getProfile"
      />
    </div>
  </div>
</template>

<script setup>
import CardUser from "./CardUser.vue";
import { ref, onMounted, computed } from "vue"
import axios from "axios"
import router from "@/router/index"

const users = ref([])
const findUser = ref('')

// search user
const filteredUserSList = computed(() => {
  return users.value.filter((elem) => {
    return elem.name
      .toLowerCase()
      .includes(findUser.value.toLowerCase())
  })
})

const getProfile = (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user))
    router.push({ name: 'profile' })
  }
}

onMounted(async () => {
  await axios
    .get("users")
    .then((response) => {
      users.value = response.data.slice(0, 10)
    });
});
</script>

<style lang="scss" scoped>
.input-search {
  width: 40%;
  @media screen and (max-width: 533px) {
    width: 100%;
  }
}
</style>
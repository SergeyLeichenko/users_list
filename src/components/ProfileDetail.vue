<template>
  <div class="container">
    <div
      class="row"
      v-if="errorMessages !== ''"
    >
      <div class="col">
        <!-- error messages -->
        <div
          class="alert alert-danger d-flex flex-column text-center"
          role="alert"
        >
          <p>{{ errorMessages }}</p>
          <p><router-link :to="{ name: 'home' }">Back to dashboard</router-link></p>

        </div>
      </div>
    </div>

    <div
      class="row"
      v-else
    >
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Profile</h4>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-6 px-1">
                  <div class="form-group">
                    <p>Name</p>
                    <p class="form-control">{{ userDetail.name }}</p>
                  </div>
                </div>
                <div class="col-md-6 px-1">
                  <div class="form-group">
                    <p>UserName</p>
                    <p class="form-control">{{ userDetail.username }}</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 px-1">
                  <div class="form-group">
                    <p>Email</p>
                    <p class="form-control">{{ userDetail.email }}</p>
                  </div>
                </div>
                <div
                  class="col-md-6 px-1"
                  v-if="userDetail.address"
                >
                  <div class="form-group">
                    <p>Street</p>
                    <p class="form-control">
                      {{ userDetail.address.street }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="row"
                v-if="userDetail.address"
              >
                <div class="col-md-6 px-1">
                  <div class="form-group">
                    <p>Suite</p>
                    <p class="form-control">{{ userDetail.address.suite }}</p>
                  </div>
                </div>
                <div class="col-md-6 px-1">
                  <div class="form-group">
                    <p>Zipcode</p>
                    <p class="form-control">{{ userDetail.address.zipcode }}u</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-user">
          <div class="card-body">
            <div class="author">

              <img
                class="avatar border-gray"
                src="../assets/images/face-6.jpg"
                :alt="userDetail.name"
              />
              <h5 class="title">{{ userDetail.name }}</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"
import { useStoreUser } from "@/stores/users"

const userStore = useStoreUser()

const userDetail = ref({})
const errorMessages = ref('')

onMounted(async () => {
  try {
    await axios
      .get(`users/${userStore.userId}`)
      .then((response) => {
        userDetail.value = response.data
      })
  } catch (error) {
    errorMessages.value = error.message
  }
})
</script>

<style lang="scss" scooped>
.form-control {
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
}

.avatar {
  width: 100%;
  height: auto;
}
</style>
<template>
  <div>
    <div class="row">
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

const userDetail = ref({})

onMounted(() => {
  if (localStorage.getItem("user")) {
    try {
      userDetail.value = JSON.parse(
        localStorage.getItem("user")
      );
    } catch {
      localStorage.removeItem("user");
    }
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
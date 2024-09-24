<template>
  <div class="from_register">
    <b-card class="formatCard">
      <div class="container">
        <h2 class="text-center m-5">Đăng nhập</h2>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="group-email"
            label="Email address"
            label-for="email"
            class="mb-2"
          >
            <b-form-input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="group-password"
            label="Password"
            label-for="password"
            class="mb-2"
          >
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button variant="primary" type="submit" class="mt-3 mb-1 w-100">Đăng nhập</b-button>
        </b-form>
        <div class="footer">
          <p>
            Chưa có tài khoản?
            <router-link :to="{ name: 'RegistrationPage' }"
              >Đăng ký</router-link
            >
          </p>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "test@fabbi.com.vn",
      password: "5484",
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      
      this.login(user);

      alert("Đăng nhập thành công");

      this.$router.push({name: 'DashboardPage'});
    },
  },
};
</script>

<style scoped>
.from_register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.formatCard {
  width: calc(100% - 50%);
  max-width: 25rem;
  border-radius: 15px; /* Bo tròn góc */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  border: none;
}
</style>

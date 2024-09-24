<template>
  <div class="from_register">
    <b-card class="formatCard">
      <div class="container">
        <h2 class="text-center m-5">Đăng ký</h2>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="group-username"
            label="User name"
            label-for="username"
            class="mb-2"
          >
            <b-form-input
              id="username"
              v-model="username"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

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
            <router-link :to="{ name: 'LoginPage' }"
              >Đăng nhập</router-link
            >
          </p>
        </div>
      </div>
    </b-card>
  </div>
</template>



<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    onSubmit() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.register(user);
      alert("Đăng ký thành công!");
      this.username = '';
      this.email = '';
      this.password = '';
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

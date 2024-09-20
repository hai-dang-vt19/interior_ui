<template>
  <div class="registration">
    <h2>Đăng ký</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
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
/* Styling cho form */
</style>

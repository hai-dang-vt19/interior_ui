<template>
  <div class="registration">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    ...mapActions('auth', ['login']),
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.login(user);
      console.log(user);
      
      alert("Đăng nhập thành công");
    }
  }
};

</script>

<style scoped>
/* Styling cho form */
</style>

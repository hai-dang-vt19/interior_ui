<template>
  <div class="from_register">
    <div class="container">
      <h2>Đăng Nhập</h2>
      <form @submit.prevent="onSubmit">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />

        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
        
        <button type="submit">Đăng nhập</button>
      </form>
      <div class="footer">
        <p>Chưa có tài khoản? <router-link :to="{name: 'RegistrationPage'}">Đăng ký</router-link></p>
      </div>
    </div>
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
.from_register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #ffffff; /* Nền trắng cho container */
  border-radius: 15px; /* Bo tròn góc */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  padding: 40px;
  width: 100%; /* Chiều rộng 100% */
  max-width: 400px; /* Chiều rộng tối đa */
}

h2 {
  text-align: center;
  color: #333333; /* Màu chữ tối */
  margin-bottom: 20px;
  font-size: 24px; /* Kích thước font tiêu đề */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #e2e8f0; /* Đường viền nhẹ */
  border-radius: 8px; /* Bo tròn góc */
  font-size: 16px;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #4A90E2; /* Màu khi focus */
  outline: none;
}

button {
  background-color: #4A90E2; /* Màu xanh dương */
  color: #ffffff; /* Màu chữ trắng */
  padding: 12px;
  border: none;
  border-radius: 8px; /* Bo tròn góc */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #357ABD; /* Màu tối hơn khi hover */
}

.footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.footer a {
  color: #4A90E2; /* Màu liên kết */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline; /* Gạch chân khi hover */
}

</style>

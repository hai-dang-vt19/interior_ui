<template>
  <div id="app">
    <router-link to="/register">Đăng ký</router-link>
    <router-link to="/login">Đăng nhập</router-link>
    <router-view></router-view> <!-- Đây là nơi hiển thị các component dựa vào route -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
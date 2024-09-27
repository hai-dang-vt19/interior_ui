<template>
  <div class="client-layout">
    <!-- Navbar -->
    <div class="fm-nav">
      <!-- <div class="d-flex justify-content-center"> -->
      <p class="title-navbar">CHUNG SI INTERIOR</p>
      <div class="position-relative">
        <button type="button" class="fm-btn position-relative">
          <svg width="22" height="25" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.5H15V17.5H1V5.5Z" stroke="#3B4355" stroke-width="2" />
            <path d="M4 5V5.5H12V5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5Z" stroke="#3B4355"
              stroke-width="2"/>
          </svg>
          <span class="fm-noti position-absolute top-100 start-80 translate-middle rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </button>
        <!-- <div class="position-absolute">CArt 12342</div> -->
      </div>
      <!-- </div> -->
    </div>

    <router-view></router-view> <!-- Nội dung của các route con sẽ được hiển thị ở đây -->
  </div>
</template>

<script>
export default {
  name: 'ClientLayout',
};
</script>

<style>
@font-face {
  font-family: "Gowun Batang", serif;
  src: url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap');
}

.client-layout {
  overflow: none;
}

.fm-nav {
  background: transparent;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1.5rem;
  padding-inline: 8rem;

}

.title-navbar {
  font-family: "Gowun Batang", serif;
  font-size: 3vh;
  font-weight: 600;
  font-style: normal;
}

.item-link {
  text-decoration: none;
  color: #292929;
  margin-inline: 1rem;
  font-size: 3vh;
}

.fm-btn {
  background-color: transparent;
  outline: none;
  border: none;
}

.fm-noti {
  padding: 0.4rem;
  background-color: #0adf27;
}
</style>

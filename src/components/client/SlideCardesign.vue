<template>
  <!-- Cards Section -->
  <div class="card-section">
    <h1 class="vertical-text">DESIGN CREATES CULTURE</h1>
    <!-- card -->
    <div class="card fm-card shadow-sm me-5" v-for="(dataSlideCard, index) in dataSlideCards" :key="index"
      v-bind:style="{height: (25 - index)+'rem'}"
    >
      <div class="card-body">
        <h5 class="card-title">Behzad Ghaffarian {{ dataSlideCard.name }}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <!-- <img :src="require(`@/assets/${dataSlideCard.urlFile}`)" class="card-img-bottom img-slide" alt="..." loading="lazy"
        v-bind:style="{height: (13.063 - index)+'rem'}"
      > -->
      <div class="card-img-bottom img-slide" :style="{backgroundImage: `url(${dataSlideCard.urlFile})`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideCardesign',
  data() {
    return {
      dataSlideCards: [
        {id: 1, name: 'A', urlFile: require('@/assets/image-47.png')},
        {id: 2, name: 'B', urlFile: require('@/assets/image-47-2.png')},
        {id: 3, name: 'C', urlFile: require('@/assets/image-47-3.png')},
      ]
    }
  }
}
</script>

<style scoped>

.card-section {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: end;
  margin-right: 5rem;
  margin-bottom: 3rem;
  z-index: 3;
  filter: brightness(65%);
}

.vertical-text {
  color: #292929;
  font-weight: 200;
  font-size: 35px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  writing-mode: vertical-rl; /* Hoặc vertical-lr để thay đổi chiều */
  transform: rotate(180deg); /* Để làm cho văn bản đọc từ dưới lên */
}
.fm-card {
  max-height: 25rem;
  width: 17.438rem;

  border-radius: 20px;
  overflow: hidden;
}

.img-slide {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>
<template>
  <div>
    <!-- Danh sách điều hướng -->
    <ul class="fm-menu">
      <li v-for="nSection in 3" :key="nSection" :class="{ active: activeSection === 'section' + nSection }"
        class="item-scpy" @click="scrollToSection('section' + nSection)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote"
          viewBox="0 0 16 16">
          <path
            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
        </svg>
      </li>
    </ul>
    <!-- Khu vực hiển thị nội dung -->
    <div class="content">
      <!-- slide Section -->
      <section class="slide-section section" id="section1" ref="section1">
        <p class="fm-text-bg">Interior Design</p>
        <div class="slide-overlay">
          <SlideCardesign class="slide-card-design"></SlideCardesign>
        </div>
      </section>

      <!-- about Section -->
      <section class="about-section text-center section" id="section2" ref="section2">
        <div class="container">
          <blockquote class="blockquote fm-blockquote">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-quote"
              viewBox="0 0 16 16">
              <path
                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
            <p class="fs-4 fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
            <footer class="blockquote-footer mt-4">Chung SI / Designer</footer>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-quote"
              viewBox="0 0 16 16">
              <path
                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
          </blockquote>
        </div>
        <div class="text-center py-5">
          <div class="container">
            <div class="row footer-logos align-items-center">
              <div class="col">
                <img :src="require('@/assets/company-1.png')" alt="Logo">
              </div>
              <div class="col">
                <img :src="require('@/assets/company-2.png')" alt="Logo">
              </div>
              <div class="col">
                <img :src="require('@/assets/company-3.png')" alt="Logo">
              </div>
              <div class="col">
                <img :src="require('@/assets/company-4.png')" alt="Logo">
              </div>
              <div class="col">
                <img :src="require('@/assets/company-5.png')" alt="Logo">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product-section section" id="section3" ref="section3">
        <ProductDesign></ProductDesign>
      </section>
    </div>
  </div>
</template>

<script>
import SlideCardesign from "@/components/client/SlideCardesign.vue";
import ProductDesign from '@/components/client/ProductDesign.vue';

export default {
  name: 'HomePage',
  components: {
    SlideCardesign,
    ProductDesign
  },
  data() {
    return {
      activeSection: 'section1',
    };
  },
  methods: {
    scrollToSection(sectionId) {
      // Lấy phần tử DOM tương ứng với `ref`
      const sectionElement = this.$refs[sectionId];

      if (sectionElement) {
        // Cuộn đến phần tử bằng cách sử dụng scrollIntoView
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        this.activeSection = sectionId;
      }
    },
    onScroll() {
      const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];

      for (let section of sections) {
        const sectionElement = this.$refs[section];
        if (sectionElement && sectionElement.getBoundingClientRect) {
          const rect = sectionElement.getBoundingClientRect();

          // Kiểm tra xem phần tử có đang ở trong vùng nhìn thấy của người dùng không
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            this.activeSection = section; // Cập nhật phần tử đang active
            break;
          }
        }
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
.slide-section {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  background-image: url('@/assets/bg-head.png');
  filter: brightness(150%);
}

.fm-text-bg {
  position: absolute;
  color: #29292915;
  z-index: 10;
  top: 10rem;
  right: 0;
  max-width: 15rem;
  text-wrap: pretty;
  word-break: break-all;
  font-size: 15vh;
  z-index: 2;

  writing-mode: vertical-rl;
  text-orientation: upright;

  user-select: none;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.slide-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 150px;
}

.slide-card-design {
  position: sticky;
  top: calc(100% - 63%);
}

.about-section {
  padding: 60px 0;

  background-size: cover;
  background-position: center;
  background-image: url('@/assets/bg-body-1.png');
}
.fm-blockquote {
  padding-inline: 15rem;
}

.footer-logos img {
  max-width: 120px;
}

.fm-menu {
  position: fixed;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: 100;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #f9f9f9;
  background-color: rgba(151, 151, 151, 0.829);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.item-scpy {
  padding: 0.5rem;
  cursor: pointer;
}

.active {
  color: #292929;
}
</style>
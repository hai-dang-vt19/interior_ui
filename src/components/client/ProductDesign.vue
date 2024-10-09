<template>
  <div class="product-design">
    <h2 class="text-center">Interior Design By Chung</h2>
    <div class="group-menu">
      <div class="menu-type-design">
        <button class="button2" 
          v-for="mn in 10" :key="mn" 
          @click="menuActive = mn" 
          :class="{'button2-active': menuActive === mn}">
          Hover me {{ mn }}
        </button>
      </div>
    </div>
    <FancyboxGallery :options="fancyboxOptions" class="fm-fancybox">
      <div class="fm-card" v-for="n in 20" :key="n">
        <div class="card card-has-bg click-col">
          <div class="card-img-overlay" :style="{ backgroundImage: `url(${imgSrc})` }">
            <a 
              data-fancybox="gallery" 
              :data-caption="`Ma design ` + n" 
              :href="imgSrc">
              <div class="card-body">
                <small class="card-meta mb-2">Thought Leadership</small>
                <h4 class="card-title mt-0">
                  Web Development Lorem Ipsum Sit Amet Consectetur dipisi?
                </h4>
                <small><i class="far fa-clock"></i> October 15, 2020</small>
              </div>
            </a>
            <div class="group-cart">
              <div class="group-btn-card">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="btn-card bi bi-bag-heart-fill" viewBox="0 0 16 16">
                  <path
                    d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="btn-card bi bi-bag-plus-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FancyboxGallery>
  </div>
</template>

<script>
import FancyboxGallery from '../other/FancyboxGallery.vue';
export default {
  name: 'ProductDesign',
  components: {
    FancyboxGallery
  },
  data() {
    return {
      imgSrc: require('@/assets/product-1.png'), // Đường dẫn đến hình ảnh
      imageList: [],
      menuActive: 1,

      fancyboxOptions: {
        Carousel: {
          transition: "fade",
        },
        Images: {
          initialSize: "cover",
        },
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [
              "zoomIn",
              "zoomOut",
              "toggle1to1",
              "rotateCCW",
              "rotateCW",
              "flipX",
              "flipY",
            ],
            right: ["slideshow", "thumbs", "close"],
          },
        }
      }
    };
  },
  mounted() {

  }
}
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.product-design {
  padding: 5rem 10rem;
}

.fm-fancybox {
  display: flex;
  width: 100%;
  overflow-x: auto;
  border-radius: 20px;
}
.fm-card {
  width: fit-content;
}

.group-cart {
  position: relative;
  width: 100%;
  height: 100%;
}
.group-btn-card {
  position: absolute;
  bottom: 50%;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: fit-content;
  padding: 5px 5px;
  background-color: rgba(41, 41, 41, 0.549);
  border-radius: 20px;
  opacity: 0%;
}

.btn-card {
  /* padding: 0.5rem; */
  color: #ffffff;
  cursor: pointer;
  margin: 0 0.5rem;
}

.group-btn-card:hover {
  background-color: #292929;
}

.btn-card:hover {
  transform: scale(1.3);
}

.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  width: 22rem;
  margin: 0.5rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

.card-has-bg:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  filter: grayscale(1);
}

.card-has-bg:hover {
  transform: scale(0.98);
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
  background-size: 130%;
}

.card-footer {
  background: none;
  border-top: none;
}

.card-title {
  font-weight: 800;
}

.card-meta {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
}

.card-body {
  color: transparent;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}

.card:hover .card-body {
  margin-top: 30px;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  cursor: pointer;
  background-color: rgba(41, 41, 41, 0.8);
  color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(41, 41, 41, 0.8);
  opacity: 100%;
}

.card:hover .group-btn-card {
  opacity: 100%;
}

.card-img-overlay {
  /* display: flex;
  flex-direction: column-reverse; */
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Media Queries */
@media (max-width: 768px) {
  .card {
    min-height: 350px;
  }
}

@media (max-width: 420px) {
  .card {
    min-height: 300px;
  }
}

.group-menu {
  width: 100%;
  margin: 2rem 0;
}
.menu-type-design {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.5em 1.2em;
  cursor: pointer;
  font-size: 15px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  margin: 0.5rem;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #292929;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
}

.button2:hover:before {
  top: -35%;
  background-color: #292929;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #292929;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.button2-active {
  color: #ffffff;
  background-color: #292929;
}
</style>
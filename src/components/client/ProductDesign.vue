<template>
    <div class="product-design">
      <section class="wrapper">
        <div class="container">
          <div
            class="d-flex fm-card"
          >
            <div class="col-3 mb-4" v-for="n in 20" :key="n">
              <div class="card card-has-bg click-col">
                <div
                  class="card-img-overlay d-flex flex-column"
                  :style="{ backgroundImage: `url(${imgSrc})` }"
                >
                  <div class="card-body">
                    <small class="card-meta mb-2">Thought Leadership</small>
                    <h4 class="card-title mt-0">
                      Web Development Lorem Ipsum Sit Amet Consectetur dipisi?
                    </h4>
                    <small><i class="far fa-clock"></i> October 15, 2020</small>
                  </div>
                  <div class="card-footer">
                    <div class="d-flex justify-content-between group-btn-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="btn-card bi bi-bag-heart-fill" viewBox="0 0 16 16">
                            <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="btn-card bi bi-bag-plus-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
                        </svg>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDesign',
    data() {
      return {
        imgSrc: require('@/assets/product-1.png'), // Đường dẫn đến hình ảnh
      };
    },
  }
  </script>
  
  <style scoped>
  .product-design {
    padding: 2rem 4rem;
  }
  
  .wrapper {
    margin: 10vh;
  }
  
  /* Post card styles */
  .fm-card {
    width: calc(100vw - 20vw);
    overflow-x: auto;
    border-radius: 20px;
  }
  
.group-btn-card {
    padding: 5px 20px;
    background-color: rgba(41, 41, 41, 0.549);
    border-radius: 20px;
}

 .btn-card {
    /* padding: 0.5rem; */
    color:#ffffff;
    cursor: pointer;
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
    max-width: 22rem;
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
  }
  
  .card-img-overlay {
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
  </style>
  
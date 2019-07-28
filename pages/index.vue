<template>
  <div class="container-fluid">
      <div class="top-products__container">
          <div><carousel :navigationEnabled="true" :perPageCustom="[[768, 3], [1024, 4]]">
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
              <slide>
                  <figure>
                      <a href="#">
                          <img src="https://dummyimage.com/200x250/000/fff.jpg&text=sample" alt="sample">
                      </a>
                      <div class="top-product__description">
                          <a href="#">Super product #1</a>
                      </div>
                  </figure>
              </slide>
          </carousel></div>
      </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'



export default {
    components: {
        AppLogo
  }
}
</script>

<style scoped>
    figure {
        padding: 10px
    }
</style>
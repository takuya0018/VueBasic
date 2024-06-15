<template>
  <div class="setting">
    <Swiper class="overNone" :modules="swiperModules" navigation :pagination="pagioptions" :autoplay="autoplayOptions" :speed="speedOption.speed" :loop="true">
      <SwiperSlide v-for="(item, index) in slideItems" :key="index">
        <img :src="`src/assets/img/${item}`" alt="">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

// オプション
const swiperModules = [Navigation, Pagination, Autoplay];
const pagioptions:{clickable:boolean} = {
  clickable:true,
}
const autoplayOptions:{delay:number,disableOnInteraction:boolean} = {
  delay: 5000,
  disableOnInteraction: false
}
const speedOption = {
  speed: 100
}
// 画像の設定
const slideItems:string[] = [
  'img01.jpg',
  'img02.jpg',
  'img01.jpg',
];
</script>

<style lang="scss">
.swiper{
  width: 100%;
  height: auto;
  overflow: hidden;
  .swiper-slide{
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.swiper-button-prev {
  color: blueviolet;
}
.overNone {
  overflow: initial;
}
</style>
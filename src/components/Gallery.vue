<template>
  <div v-masonry transition-duration="1s" item-selector=".item" fitWidth="true" class="img-container">
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/1.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/2.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/3.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/4.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/5.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/6.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/7.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/8.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/9.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/10.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/11.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/12.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/13.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/14.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/15.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/16.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/17.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/18.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/19.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/20.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/21.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/22.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/23.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/24.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/25.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/26.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/27.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/28.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/29.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/30.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/31.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/32.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/33.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/34.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/35.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/36.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/37.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/38.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/39.jpg"/>
    </div>
    <div v-masonry-tile class="item"><img src="./../assets/photos/gallery/40.jpg"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Gallery',
    components: {},
    data: () => ({
      isActive: false,
      fullScreenSRC: null,
    }),
    mounted() {

    },
    methods: {
      fullScreen(event) {
        this.fullScreenSRC = event.target.src;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../css/main.scss";

  .img-container {

    padding: 2.5px;

    img {
      width: 300px;
      margin: 2.5px;
    }
  }
</style>

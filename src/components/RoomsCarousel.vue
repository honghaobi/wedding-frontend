<template>
  <carousel :perPage="perPage" :autoplay="autoplay" :loop="loop" paginationActiveColor="#54D4C4">
    <slide>
      <img src="./../assets/photos/garza/juniorsuite.jpg"/>
      <h3>Junior Suite</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/onebedroom1.jpg"/>
      <h3>One Bedroom</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/onebedroom2.jpg"/>
      <h3>One Bedroom</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/twobedroom1.jpg"/>
      <h3>Two Bedroom</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/twobedroom2.jpg"/>
      <h3>Two Bedroom</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/3bedroomloft1.jpg"/>
      <h3>Three Bedroom Loft</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/3bedroomloft2.jpg"/>
      <h3>Three Bedroom Loft</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/4bedroompenthouse1.jpg"/>
      <h3>Four Bedroom Penthouse</h3>
    </slide>
    <slide>
      <img src="./../assets/photos/garza/4bedroompenthouse2.jpg"/>
      <h3>Four Bedroom Penthouse</h3>
    </slide>
  </carousel>
</template>

<script>
  //TODO: Balloons remove bottom scroll
  export default {
    name: 'Room-Carousel',
    data: () => ({
      perPage: 1,
      autoplay: true,
      loop: true
    })
  };
</script>

<style lang="scss" scoped>
</style>

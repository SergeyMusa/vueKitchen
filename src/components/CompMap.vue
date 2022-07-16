<template>
    <div class="map">
        <!-- {MAP} -->
        <yandex-map 
            :coords="coords"
            :zoom="17" 
            @click="onClick"
        >
            <ymap-marker 
            :coords="coords" 
            marker-id="123" 
            hint-content="Mebel-26" 
            />
        </yandex-map> 
    </div>
</template>
   <!-- map.behaviors.disable('scrollZoom') -->
    <!-- state={{ center: center, zoom: zoom, behaviors: ["disable('scrollZoom')"] }} -->

<script>

import { yandexMap, ymapMarker } from 'vue-yandex-maps'
// https://vue-yandex-maps.github.io/examples/#%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0

export default {
  name: 'CompMap',

  components: { yandexMap, ymapMarker },
  // other options
  data: () => ({
    coords: [
        45.054971, 41.995639,
    ],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
}
</script>

<style scoped>
.map {
  height: 60vh;
  width: 45vw;
    position: sticky;
    overflow: hidden;
}
.ymap-container {
  height: 100%;
}
</style>

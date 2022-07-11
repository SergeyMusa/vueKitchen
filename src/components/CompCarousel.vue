<template>
    <div>

        <carousel-3d>
            <slide :index="0">
                Slide 1 Content
            </slide>
            <slide :index="1">
                Slide 2 Content
            </slide>
            <slide :index="2">
                Slide 3 Content
            </slide>
        </carousel-3d>

        <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                    <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                </template>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
//   ...
  components: {
    Carousel3d,
    Slide
  }
//   ...
};
</script>

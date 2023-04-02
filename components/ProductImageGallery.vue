<script setup lang="ts">
import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

interface Props {
    image: string;
}

defineProps<Props>();

const thumbnails = ref<InstanceType<typeof Splide>>();
const main = ref<InstanceType<typeof Splide>>();

const thumbnailOptions: Options = reactive({
    width: "12rem",
    height: "60rem",
    arrows: false,
    pagination: false,
    fixedHeight: "12rem",
    fixedWidth: "12rem",
    gap: "4rem",
    lazyLoad: "nearby",
    isNavigation: true,
    direction: "ttb",
    type: "slide",
    rewind: true,
});

const mainOptions: Options = reactive({
    type: "loop",
    arrows: false,
    pagination: true,
    direction: "ltr",
    classes: {
        pagination: "splide__pagination splide__pagination--product",
    },
});

onMounted(() => {
    const thumbnailsSlider = thumbnails.value?.splide;

    if (thumbnailsSlider) {
        main.value?.sync(thumbnailsSlider);
    }
});
</script>

<template>
    <section class="single-product__gallery">
        <!-- THUMBNAILS IMAGE GALLERY -->
        <div class="single-product__thumbnails">
            <Splide :options="thumbnailOptions" ref="thumbnails">
                <SplideSlide v-for="i in 5" :key="i">
                    <NuxtImg class="single-product__thumbnail" :src="image" alt="Product Image" format="webp" quality="100" />
                </SplideSlide>
            </Splide>
        </div>
        <!-- MAIN IMAGE GALLERY -->
        <div class="single-product__image">
            <Splide :options="mainOptions" ref="main">
                <SplideSlide v-for="i in 5" :key="i">
                    <NuxtImg class="single-product__img" :src="image" alt="Product Image" format="webp" quality="100" />
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<style lang="scss">
.single-product {
    &__gallery {
        display: grid;

        @media screen and (min-width: 768px) {
            grid-template-columns: 12rem auto;
            gap: 2.9rem;
        }

        @media screen and (min-width: 1280px) {
            gap: 3.9rem;
        }
    }

    &__thumbnails {
        display: none;

        @media screen and (min-width: 768px) {
            display: block;
        }
    }

    &__img,
    &__thumbnail {
        height: auto;
        width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
}

.single-product__thumbnails .splide__slide {
    opacity: 0.6;

    &.is-active {
        opacity: 1;
        border: none !important;
    }
}

.splide__pagination--product {
    bottom: -3rem !important;
    left: 0 !important;
    padding: 0 !important;
    display: flex;

    li {
        flex: 1;

        button {
            background: #d8d8d8;
            height: 2px;
            width: 100%;
            border-radius: 0;
            margin: 0;
            opacity: 1;

            &.is-active {
                transform: none;
                background: #707070;
            }
        }
    }
}
</style>

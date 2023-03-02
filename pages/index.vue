<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const ProductStore = useProductStore();

const sliderOptions = reactive({
    arrows: false,
    classes: {
        pagination: "splide__pagination splide__pagination--home",
    },
});
</script>

<template>
    <div class="home-page">
        <!-- HEADER SLIDER -->
        <Splide :options="sliderOptions">
            <SplideSlide v-for="item in 5" :key="item">
                <home-slider-item></home-slider-item>
            </SplideSlide>
        </Splide>

        <!-- PRODUCTS LIST -->
        <section class="shop-section">
            <div class="shop-section__heading flex items-center space-between">
                <h2 class="heading-1">Shop The Latest</h2>
                <nuxt-link :to="{ name: 'shop' }" class="navigation__link navigation__link--accent heading-4">View All </nuxt-link>
            </div>
            <product-card-list>
                <product-card-item v-for="product in ProductStore.allProducts" :product="product" :key="product.slug"></product-card-item>
            </product-card-list>
        </section>
    </div>
</template>

<style lang="scss">
.shop-section {
    margin-top: 6.4rem;

    &__heading {
        margin-bottom: 3.9rem;
    }
}

.home-page .splide__pagination--home {
    bottom: 2.6em;
    gap: 1.371rem;

    .splide__pagination__page {
        background: #fff;
        height: 0.91rem;
        width: 0.91rem;
        margin: 0;
        opacity: 1;

        &:hover {
            opacity: 1;
        }

        &.is-active {
            background: none;
            border: 0.1rem solid #fff;
            transform: scale(1.4);
            z-index: 1;
            height: 1.6rem;
            width: 1.6rem;
        }
    }
}
</style>

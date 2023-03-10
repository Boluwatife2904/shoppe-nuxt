<script setup lang="ts"></script>

<template>
    <section class="home-slider flex items-center">
        <NuxtImg src="/header.png" format="webp" quality="100" alt="Home Slider Image" />
        <div class="home-slider__content">
            <h3 class="home-slider__name heading-1 text-white">Gold big hoops</h3>
            <p class="home-slider__price heading-2 text-white">$ 68,00</p>
            <BaseButton text="View Product" variant="outline-white" size="medium"></BaseButton>
        </div>
    </section>
</template>

<style lang="scss">
.home-slider {
    border-radius: 1.6rem;
    height: 35.6rem;
    transition: all 0.2s linear;
    position: relative;
    overflow: hidden;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        height: 46.6rem;
    }

    @media screen and (min-width: 992px) {
        height: 64.6rem;
    }

    &__content {
        padding: 0 2rem;

        @media screen and (min-width: 768px) {
            padding: 0 3.9rem;
        }
    }

    &__name {
        margin-bottom: 1.6rem;
    }

    &__price {
        margin-bottom: 1.6rem;

        @media screen and (min-width: 768px) {
            margin-bottom: 4.8rem;
        }
    }
}
</style>

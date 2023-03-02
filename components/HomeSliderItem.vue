<script setup lang="ts"></script>

<template>
    <section class="home-slider flex items-center">
        <div class="home-slider__content">
            <h3 class="home-slider__name heading-1 text-white">Gold big hoops</h3>
            <p class="home-slider__price heading-2 text-white">$ 68,00</p>
            <BaseButton text="View Product" variant="outline-white" size="medium"></BaseButton>
        </div>
    </section>
</template>

<style lang="scss">
.home-slider {
    background-image: url("../assets/images/header.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.6rem;
    height: 35.6rem;
    transition: all 0.2s linear;

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

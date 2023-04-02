<script lang="ts" setup>
import vue3starRatings from "vue3-star-ratings";

const star = ref(3);
</script>

<template>
    <div class="review">
        <p class="review__name"><span class="heading-3">Scarlet withch</span><span class="review__date body-medium dark-gray-text">6 May, 2020</span></p>
        <vue3star-ratings v-model="star" :disable-click="true" :numberOfStars="5" :step="1" star-size="18" inactive-color="#fff" :show-control="false" star-color="#000" />
        <p class="review__message heading-5 dark-gray-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
    </div>
</template>

<style lang="scss">
.review {
    max-width: 90%;

    &:not(:last-child) {
        border-bottom: 0.1rem solid var(--gray);
        padding-bottom: 1.9rem;
        margin-bottom: 2.4rem;

        @media screen and (min-width: 992px) {
            padding-bottom: 3.9rem;
        }
    }

    &__name {
        margin-bottom: 1.6rem;

        .heading-3 {
            margin-right: 1.6rem;
        }
    }

    &__message {
        margin-top: 1rem;

        @media screen and (min-width: 992px) {
            margin-top: 2.4rem;
        }
    }
}
</style>

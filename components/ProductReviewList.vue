<script setup lang="ts">
import ProductReviewListItem from "./ProductReviewListItem.vue";
</script>

<template>
    <div class="reviews">
        <p class="reviews__title heading-3">2 Reviews for lira earings</p>
        <ProductReviewListItem v-for="i in 2" :key="i" />
    </div>
</template>

<style lang="scss">
.reviews {
    &__title {
        margin-bottom: 2.6rem;

        @media screen and (min-width: 768px) {
            margin-bottom: 4.6rem;
        }

        @media screen and (min-width: 992px) {
            margin-bottom: 7.6rem;
        }
    }
}
</style>

<script setup lang="ts">
interface Props {
    type: string;
    heading: string;
    message: string;
    hasAction?: boolean;
}

defineProps<Props>();
</script>

<template>
    <div class="empty-state text-center">
        <div class="empty-state__icon">
            <NuxtImg v-if="type === 'shop'" src="/crying-face.png" alt="Crying Face Image" loading="lazy" />
            <NuxtImg v-else-if="type === 'cart'" src="/empty-cart.png" alt="Empty Cart Image" loading="lazy" />
        </div>
        <h5 class="empty-state__heading heading-3">{{ heading }}</h5>
        <p class="empty-state__message heading-5">{{ message }}</p>
        <nuxt-link v-if="hasAction" :to="{ name: 'shop' }" class="navigation__link button button--large flex items-center content-center button--solid-black empty-state__action"> Let's go Shopping ☺️</nuxt-link>
    </div>
</template>

<style lang="scss">
.empty-state {
    max-width: 50rem;
    margin: 5rem auto;
    padding: 3rem 1rem;

    &__icon {
        max-width: 10rem;
        max-height: 10rem;
        margin: 0 auto 2rem;

        img {
            height: auto;
            width: 100%;
            display: block;
            margin: 0 auto;
        }
    }

    &__heading {
        margin-bottom: 2rem;
    }

    &__action {
        margin-top: 3rem;
    }
}
</style>

<script setup lang="ts">
type TabChoices = "description" | "additional-information" | "reviews";

interface Props {
    selectedTab: TabChoices;
}

defineProps<Props>();
const emit = defineEmits<{
    (e: "change-tab", tab: TabChoices): void;
}>();

const tabChoices: TabChoices[] = ["description", "additional-information", "reviews"];

const changeTab = (tab: TabChoices) => {
    emit("change-tab", tab);
};
</script>

<template>
    <ul class="tab flex items-center">
        <li v-for="option in tabChoices" :key="option" class="tab__item">
            <button class="tab__button text-capitalize button heading-3" :class="{ active: option === selectedTab }" :title="option" @click="changeTab(option)">
                <template v-if="option === 'additional-information'">Additional Information</template>
                <template v-else-if="option === 'reviews'">Reviews(2)</template>
                <template v-else>{{ option }}</template>
            </button>
        </li>
        <span class="indicator position-absolute" :class="selectedTab"></span>
    </ul>
</template>

<style lang="scss">
.tab {
    transform: matrix(0.71, 0, inf, nan, 0, 0);
    gap: 9.6rem;
    position: relative;
    margin-top: 5rem;
    margin-bottom: 2.4rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &::after {
        content: "";
        position: absolute;
        height: 0.1rem;
        width: 100%;
        left: 0;
        bottom: 0.2rem;
        background-color: var(--light-gray);
    }

    @media screen and (min-width: 600px) {
        margin-top: 9.9rem;
        margin-bottom: 3.9rem;
    }

    &__item {
        flex-shrink: 0;
    }

    &__button {
        padding-bottom: 3.4rem;
        color: var(--dark-gray);
        transition: all 0.2s linear;
        border-bottom: 0.1rem solid transparent;
    }

    .indicator {
        position: absolute;
        content: "";
        height: 0.1rem;
        width: 100%;
        bottom: 0.2rem;
        background-color: var(--black-color);
        transition: all 0.2s linear;
        z-index: 1;

        &.description {
            left: 0;
            width: 8rem;

            @media screen and (min-width: 600px) {
                width: 8.9rem;
            }

            @media screen and (min-width: 992px) {
                width: 10.7rem;
            }
        }

        &.additional-information {
            left: 17rem;
            width: 14.7rem;

            @media screen and (min-width: 600px) {
                left: 18rem;
                width: 17rem;
            }

            @media screen and (min-width: 992px) {
                left: 20rem;
                width: 20.7rem;
            }
        }

        &.reviews {
            left: 41.4rem;
            width: 7.5rem;

            @media screen and (min-width: 600px) {
                left: 44.3rem;
                width: 8.9rem;
            }

            @media screen and (min-width: 992px) {
                left: 50rem;
                width: 10rem;
            }
        }
    }
}
</style>

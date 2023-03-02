<script setup lang="ts"></script>

<template>
    <div class="products-list">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.products-list {
    display: grid;
    gap: 2.4rem 1.6rem;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (min-width: 800px) {
        gap: 8.6rem 3.2rem;
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
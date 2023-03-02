<script setup lang="ts">
</script>

<template>
    <div class="cart-product__list">
        <slot></slot>

        <div class="cart-product__list-update">
            <BaseButton text="UPDATE CART" variant="outline-black" size="large-medium" />
        </div>
    </div>
</template>

<style lang="scss">
.cart-product__list {
    margin-bottom: 3.2rem;

    @media screen and (min-width: 768px) {
        margin-bottom: 6.4rem;
    }

    &-update {
        text-align: right;
    }
}
</style>

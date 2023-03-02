<script setup lang="ts">
interface Props {
    canPlaceOrder: boolean;
    orderTitle: string;
}

const paymentMethod = ref("Direct Bank Transfer");

defineProps<Props>();
defineEmits(["place-order"]);
</script>

<template>
    <div class="order-summary">
        <h4 class="order-section__title">{{ orderTitle }}</h4>
        <div class="order-summary__wrapper">
            <h6 class="order-summary__heading flex space-between heading-5">
                <span>PRODUCT</span>
                <span>TOTAL</span>
            </h6>
            <ul class="order-summary__items">
                <li class="order-summary__item flex space-between dark-gray-text heading-5">
                    <span>Lira Earrings</span>
                    <span>$64</span>
                </li>
                <li class="order-summary__item flex space-between dark-gray-text heading-5">
                    <span>Ollie Earrings</span>
                    <span>$10</span>
                </li>
                <li class="order-summary__item flex space-between dark-gray-text heading-5">
                    <span>Kaede Hair Pin</span>
                    <span>$10</span>
                </li>
            </ul>
            <h6 class="order-summary__text heading-5 flex space-between">
                <span>SUBTOTAL</span>
                <span class="dark-gray-text">$85</span>
            </h6>
            <h6 class="order-summary__text heading-5 flex space-between">
                <span>SHIPPING</span>
                <span class="dark-gray-text">Free Shipping</span>
            </h6>
            <h6 class="order-summary__total body-large flex space-between">
                <span>TOTAL</span>
                <span>$85</span>
            </h6>
            <div v-if="canPlaceOrder" class="order-summary__payment flex flex-column">
                <div class="order-summary__payment-option">
                    <BaseRadio v-model="paymentMethod" value="Direct Bank Transfer" name="payment" id="direct" label="Direct Bank Transfer" />
                    <span v-if="paymentMethod === 'Direct Bank Transfer'" class="body-small dark-gray-text order-summary__payment-option-info">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</span>
                </div>
                <div class="order-summary__payment-option">
                    <BaseRadio v-model="paymentMethod" value="Check payments" name="payment" id="check" label="Check payments" />
                </div>
                <div class="order-summary__payment-option">
                    <BaseRadio v-model="paymentMethod" value="Cash on delivery" name="payment" id="cash" label="Cash on delivery" />
                </div>
                <div class="order-summary__payment-option">
                    <base-radio v-model="paymentMethod" value="Paypal" name="payment" id="paypal"> Paypal <IconsPayPal /> </base-radio>
                </div>
            </div>
            <div v-if="canPlaceOrder" class="order-summary__place-order">
                <BaseButton size="large" variant="solid-black" text="PLACE ORDER" @click="$emit('place-order')" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.order-summary {
    &__wrapper {
        background-color: var(--light-gray);
        padding: 3.9rem 2.9rem 4.8rem;

        @media screen and (min-width: 768px) {
            padding: 3.9rem 5.9rem 4.8rem;
        }
    }

    &__heading {
        padding-bottom: 2.2rem;
        margin-bottom: 2.2rem;
        border-bottom: 0.1rem solid var(--gray);
    }

    &__items {
        padding-bottom: 1.2rem;
        margin-bottom: 1.4rem;
        border-bottom: 0.1rem solid var(--gray);
    }

    &__item {
        &:not(:last-child) {
            margin-bottom: 2.6rem;
        }
    }

    &__text {
        margin-bottom: 1.4rem;
        padding-bottom: 1rem;
        border-bottom: 0.1rem solid var(--gray);
    }

    &__total {
        margin-top: 2.4rem;
    }

    &__payment {
        margin-top: 6.1rem;
        gap: 1.8rem;
    }

    &__place-order {
        margin-top: 6.5rem;
    }

    &__payment-option-info {
        display: block;
        margin-top: 1.9rem;
    }
}
</style>

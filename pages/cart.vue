<script setup lang="ts">
import useCartStore from "@/stores/CartStore";

const CartStore = useCartStore();
</script>

<template>
	<div class="shopping-cart page-layout-margin">
		<h2 class="shopping-cart__title heading-1 page__title">Shopping Cart</h2>
		<div v-if="CartStore.numberOfProductsInCart > 0" class="shopping-cart__wrapper">
			<div class="shopping-cart__items">
				<LazyCartProductList v-if="CartStore.productsInCart && CartStore.productsInCart.length > 0">
					<CartProductItem v-for="product in CartStore.productsInCart" :product="product" :key="product.slug" />
				</LazyCartProductList>
				<CartApplyCoupon />
			</div>
			<div class="shopping-cart__totals cart-totals">
				<h3 class="order-section__title">Cart Totals</h3>
				<div class="cart-totals__subtotal">
					<span class="title heading-5">SUBTOTAL</span>
					<div class="content heading-5 dark-gray-text">$ {{ CartStore.totalAmountOfProductsInCart }},00</div>
				</div>
				<div class="cart-totals__shipping">
					<span class="title heading-5">SHIPPING</span>
					<div class="content">
						<p class="heading heading-5 dark-gray-text">Shipping costs will be calculated once you have provided address.</p>
						<CartShippingCalculator />
					</div>
				</div>
				<div class="cart-totals__total flex items-center space-between">
					<span class="body-large">TOTAL</span>
					<span class="body-large">$ {{ CartStore.totalAmountOfProductsInCart }},00</span>
				</div>
				<div class="cart-totals__checkout">
					<nuxt-link :to="{ name: 'checkout' }" class="navigation__link button button--large flex items-center content-center button--solid-black"> CHECKOUT</nuxt-link>
				</div>
			</div>
		</div>
		<EmptyState v-else :has-action="true" type="cart" heading="Cart is Empty!" message="You've added any product to your cart. When You add a product to your cart, they'll show up here." />
	</div>
</template>

<style lang="scss">
.shopping-cart {
	&__title {
		margin-bottom: 3.2rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 6.4rem;
		}
	}

	&__wrapper {
		display: grid;

		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__totals {
		margin-top: 3.9rem;

		@media screen and (min-width: 768px) {
			padding: 3.9rem 5.9rem;
		}
	}
}

%flex-wrapper {
	display: flex;
	gap: 2rem;

	@media screen and (min-width: 768px) {
		justify-content: space-between;
	}

	.title {
		flex: 1 1 8rem;
		max-width: 8rem;
	}

	.content {
		flex: 1 1 25rem;
		max-width: 25rem;
	}
}

.cart-totals {
	&__subtotal {
		@extend %flex-wrapper;
		margin-bottom: 2.3rem;
	}

	&__shipping {
		@extend %flex-wrapper;
		margin-bottom: 3.9rem;

		.heading {
			margin-bottom: 3.9rem;
		}
	}

	&__total {
		border-top: 0.1rem solid var(--gray);
		padding-top: 1.8rem;
		margin-bottom: 2.5rem;

		@media screen and (min-width: 768px) {
			padding-top: 4.2rem;
			margin-bottom: 4.5rem;
		}
	}
}
</style>

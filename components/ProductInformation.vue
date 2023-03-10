<script setup lang="ts">
import vue3starRatings from "vue3-star-ratings";
import useCartStore from "@/stores/CartStore";
const route = useRoute();
const CartStore = useCartStore();

const star = ref(5);
const productCount = ref(1);

interface Product {
	image: string;
	name: string;
	price: number;
	category: string;
	stock: number;
	discountValue: number;
	variant: string;
	slug: string;
}

interface Props {
	product: Product;
}

defineProps<Props>();

const addProductToCart = () => {
	const slug = route.params.slug as string;
	CartStore.addItemToCart(slug, productCount.value);
	productCount.value = 1;
};
</script>

<template>
	<div class="single-product">
		<h3 class="single-product__name heading-2">{{ product.name }}</h3>
		<p class="single-product__price heading-4 accent-text">$ {{ product.price }},00</p>

		<div class="single-product__review flex items-center">
			<div class="single-product__rating">
				<vue3star-ratings v-model="star" :disable-click="true" :numberOfStars="5" :step="1" star-size="18" inactive-color="#fff" :show-control="false" star-color="#000" />
			</div>
			<p class="single-product__count dark-gray-text heading-5">1 customer review</p>
		</div>

		<p class="single-product__description heading-5 dark-gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>

		<div class="single-product__quantity flex items-center">
			<div class="single-product__counter flex items-center space-between">
				<button class="button heading-5" title="Reduce Quantity" @click="productCount--">-</button>
				<span class="heading-5">{{ productCount }}</span>
				<button class="button heading-5" title="Increase Quantity" @click="productCount++">+</button>
			</div>
			<BaseButton variant="outline-black" size="large" text="ADD TO CART" @click="addProductToCart" />
		</div>

		<div class="single-product__icons flex items-center">
			<button class="button single-product__wishlist navigation__link navigation__link--light" title="Like">
				<IconsAction variant="like" />
			</button>
			<ul class="single-product__socials flex items-center">
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer" class="navigation__link navigation__link--light">
						<IconsAction variant="mail" />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer" class="navigation__link navigation__link--light">
						<IconsSocial variant="facebook" />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer" class="navigation__link navigation__link--light">
						<IconsSocial variant="instagram" />
					</a>
				</li>
				<li>
					<a href="#" target="_blank" rel="noopener noreferrer" class="navigation__link navigation__link--light">
						<IconsSocial variant="twitter" />
					</a>
				</li>
			</ul>
		</div>

		<p class="single-product__sku heading-5">
			<span>SKU:</span>
			<span class="dark-gray-text">12</span>
		</p>

		<p class="single-product__categories heading-5">
			<span>Categories:</span>
			<span class="dark-gray-text">Fashion, Style</span>
		</p>
	</div>
</template>

<style lang="scss">
.single-product {
	margin-top: 3rem;

	@media screen and (min-width: 768px) {
		margin-top: 0;
	}

	&__name {
		margin-bottom: 1rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 2.3rem;
		}
	}

	&__price {
		margin-bottom: 2.2rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 6.4rem;
		}
	}

	&__review {
		margin-bottom: 1rem;
		gap: 2.4rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 1.9rem;
		}
	}

	&__description {
		margin-bottom: 2.4rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 4.8rem;
		}
	}

	&__quantity {
		margin-bottom: 4.2rem;
		gap: 2.3rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 8.1rem;
		}
	}

	&__counter {
		background: var(--light-gray);
		border-radius: 4px;
		min-width: 12rem;
		padding: 1.4rem 1.2rem 1.2rem 1.6rem;

		span,
		button {
			color: var(--dark-gray);
		}
	}

	&__icons {
		margin-bottom: 1.8rem;
		gap: 3.9rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 3.8rem;
		}
	}

	&__socials {
		gap: 2.5rem;
		padding-left: 3.9rem;
		border-left: 1px solid var(--gray);
	}

	&__sku {
		margin-bottom: 0.6rem;
	}

	&__sku,
	&__categories {
		span:first-child {
			margin-right: 1.6rem;
		}
	}
}
</style>

<script setup lang="ts">
import useCartStore from "../stores/CartStore";

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

const props = defineProps<Props>();

const router = useRouter();

const viewProduct = (slug: string) => {
	router.push({ name: "product-slug", params: { slug } });
};

const CartStore = useCartStore();

const addProductToCart = () => {
	CartStore.addItemToCart(props.product.slug, 1);
};
</script>

<template>
	<div class="product">
		<div class="product__image position-relative">
			<NuxtImg :src="product.image" :alt="product.name" format="webp" quality="100" loading="lazy" />
			<div class="product__badges position-absolute">
				<base-badge v-if="product.discountValue > 0"> -{{ product.discountValue }}% </base-badge>
				<base-badge v-if="product.stock === 0">Sold out</base-badge>
			</div>
			<div class="product__image--overlay position-absolute flex items-center content-center">
				<ul class="product__icons flex items-center flex-center">
					<li class="product__icon">
						<base-button title="Add to Cart" @click="addProductToCart">
							<IconsAction variant="cart" />
						</base-button>
					</li>
					<li class="product__icon">
						<base-button title="View Product" @click="viewProduct(product.slug)">
							<IconsAction variant="view" />
						</base-button>
					</li>
					<li class="product__icon">
						<base-button title="Like Product">
							<IconsAction variant="like" />
						</base-button>
					</li>
				</ul>
			</div>
		</div>
		<div class="product__details">
			<h3 class="product__name heading-3">{{ product.name }}</h3>
			<p class="product__price heading-4 accent-text">$ {{ product.price }}, 00</p>
		</div>
	</div>
</template>

<style lang="scss">
.product {
	width: 100%;

	&__image {
		margin-bottom: 0.6rem;
		position: relative;

		@media screen and (min-width: 600px) {
			margin-bottom: 2.4rem;
		}

		img {
			max-width: 100%;
			max-height: 100%;
			height: auto;
			width: 100%;
		}

		&--overlay {
			background: rgba(255, 255, 255, 0.6);
			border-radius: 0.4rem 0.4rem 0 0;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			opacity: 0;
			transform: translateY(2rem);
			transition: all 0.2s;
		}
	}

	&:hover {
		.product__image--overlay {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&__icons {
		gap: 3rem;
	}

	&__name {
		margin-bottom: 0.4rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 1.6rem;
		}
	}

	&__badges {
		top: 1rem;
		left: 1rem;
	}
}
</style>

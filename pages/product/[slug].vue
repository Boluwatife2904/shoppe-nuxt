<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";

const ProductStore = useProductStore();
const route = useRoute();
const router = useRouter();

const similarProducts = ProductStore.allProducts.slice(0, 3);

type TabChoices = "description" | "additional-information" | "reviews";
const selectedTab = ref<TabChoices>("description");

const changeActiveTab = (tab: TabChoices) => {
	selectedTab.value = tab;
};

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

const product = ref<Product>();

watchEffect(() => {
	const slug = route.params.slug as string;
	product.value = ProductStore.singleProduct(slug);

	if (route.name === "product-slug" && product.value === undefined) {
		router.push("/page-not-found");
	}
});
</script>

<template>
	<div v-if="product" class="single-product">
		<!-- PRODUCT IMAGE GALLERY AND INFORMATION -->
		<div class="single-product__heading">
			<LazyProductImageGallery :image="product.image" />
			<LazyProductInformation :product="product" />
		</div>

		<!-- PRODUCT TAB CHANGER -->
		<LazyProductChangeSelectedTab :selected-tab="selectedTab" @change-tab="changeActiveTab" />

		<!-- PRODUCT DESCRIPTION SECTION -->
		<div v-if="selectedTab === 'description'" class="single-product__description">
			<p class="heading-5 dark-gray-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.</p>
		</div>

		<!-- PRODUCT ADDTIONAL INFORMATION SECTION -->
		<div v-if="selectedTab === 'additional-information'" class="single-product__additional-information">
			<p class="heading-5 flex"><span class="weight-700">Weight:</span> <span class="dark-gray-text">0.3kg</span></p>
			<p class="heading-5 flex"><span class="weight-700">Dimensions:</span> <span class="dark-gray-text">15 x 10 x 1 cm</span></p>
			<p class="heading-5 flex"><span class="weight-700">Colours:</span> <span class="dark-gray-text">Black, Brown, White</span></p>
			<p class="heading-5 flex"><span class="weight-700">Materials:</span> <span class="dark-gray-text">Metal</span></p>
		</div>

		<!-- PRODUCT REVIEWS SECTION -->
		<div v-if="selectedTab === 'reviews'" class="single-product__reviews grid">
			<LazyProductReviewList />
			<LazyProductReviewForm />
		</div>

		<!-- SIMILAR ITEMS -->
		<section class="similar-items">
			<h3 class="similar-items__heading heading-2">Similar Items</h3>
			<product-card-list>
				<product-card-item v-for="product in similarProducts" :product="product" :key="product.slug"></product-card-item>
			</product-card-list>
		</section>
	</div>
</template>

<style lang="scss">
.single-product {
	&__heading {
		display: grid;
		margin-top: 6rem;
		gap: 3.1rem;

		@media screen and (min-width: 992px) {
			grid-template-columns: 60% 40%;
		}

		@media screen and (min-width: 1280px) {
			gap: 6.2rem;
		}
	}

	&__additional-information {
		p {
			&:not(:last-child) {
				margin-bottom: 1.2rem;
			}

			gap: 2rem;
		}
	}

	&__reviews {
		gap: 3.9rem 0;

		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}

.similar-items {
	margin-top: 9.6rem;

	&__heading {
		margin-bottom: 4.7rem;
	}
}
</style>

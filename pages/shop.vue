<script setup lang="ts">
import useProductStore from "@/stores/ProductStore";
import Slider from "@vueform/slider";

const ProductStore = useProductStore();
const { isOnMobile } = useDeviceType();

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

const searchValue = ref("");
const shopByOption = ref("");
const sortByOption = ref("");
const onSale = ref(false);
const inStock = ref(false);
const priceRange = ref([0, 100]);
const showFilterContainer = ref(false);

const filterProductsByName = (products: Product[]): Product[] => {
	if (searchValue.value) {
		return [...products].filter((product) => product.name.toLowerCase().includes(searchValue.value.toLowerCase()));
	}
	return products;
};

const filterProductsByCategory = (products: Product[]): Product[] => {
	if (shopByOption.value) {
		return [...products].filter((product) => product.category === shopByOption.value);
	}
	return products;
};

const filterProductsByPrice = (products: Product[]): Product[] => {
	return [...products].filter((product) => product.price >= priceRange.value[0] && product.price <= priceRange.value[1]);
};

const sortProductsByValue = (products: Product[]): Product[] => {
	if (sortByOption.value) {
		switch (sortByOption.value) {
			case "category":
				return [...products].sort((productOne, productTwo) => (productOne.category > productTwo.category ? 1 : -1));
			case "name":
				return [...products].sort((productOne, productTwo) => (productOne.name > productTwo.name ? 1 : -1));
		}
	}
	return products;
};

const productsThatAreInStock = (products: Product[]): Product[] => {
	if (inStock.value) {
		return [...products].filter((product) => product.stock > 0);
	}
	return products;
};

const productsThatAreOnSale = (products: Product[]): Product[] => {
	if (onSale.value) {
		return [...products].filter((product) => product.discountValue > 0);
	}
	return products;
};

const filteredProducts = computed(() => {
	return filterProductsByPrice(filterProductsByName(filterProductsByCategory(sortProductsByValue(productsThatAreInStock(productsThatAreOnSale(ProductStore.allProducts))))));
});

const shopByOptions = [
	{ key: "earring", value: "Earrings" },
	{ key: "pin", value: "Pins" },
	{ key: "necklace", value: "Necklaces" },
];

const sortByOptions = [
	{ key: "name", value: "Name" },
	{ key: "price", value: "Price" },
];

const toggleFilterContainer = () => {
	showFilterContainer.value = !showFilterContainer.value;
};
</script>

<template>
	<div class="shop-page page-layout-margin">
		<div class="shop-page__heading flex items-start space-between">
			<h1 class="heading-1 shop-page__title">Shop The Latest</h1>
			<button class="shop-page__filter-button button" title="Filter" @click="toggleFilterContainer">
				<IconsAction variant="filter" />
			</button>
		</div>

		<div class="shop-page__wrapper">
			<!-- FILTER -->
			<div class="shop-page__filter flex flex-column text-center" :class="{ 'shop-page__filter--mobile': showFilterContainer && isOnMobile }">
				<p class="heading-1 flex space-between title">
					Filter Products
					<button title="Filter" class="button" @click="toggleFilterContainer">
						<IconsAction variant="close" />
					</button>
				</p>
				<div class="shop-page__search position-relative">
					<BaseInput v-model="searchValue" id="search" type="search" placeholder="Search..." />
					<div class="shop-page__search-icon position-absolute">
						<IconsAction variant="search" />
					</div>
				</div>
				<div class="shop-page__shop-by">
					<BaseSelect name="shop-by" id="shop-by" v-model="shopByOption" :options="shopByOptions" placeholder="Shop By" :has-border="true" size="large" />
				</div>
				<div class="shop-page__sort-by">
					<BaseSelect name="sort-by" id="sort-by" v-model="sortByOption" :options="sortByOptions" placeholder="Sort By" :has-border="true" size="large" />
				</div>
				<div class="shop-page__slider">
					<Slider v-model="priceRange" :min="0" :max="100" :lazy="false" :tooltips="false" />
					<p class="body-medium dark-gray-text shop-page__prices text-left">Price: ${{ priceRange[0] }} - ${{ priceRange[1] }}</p>
				</div>
				<div class="shop-page__on-sale flex items-center space-between">
					<span class="heading-5">On Sale</span>
					<BaseCheckbox v-model="onSale" type="switch" id="on-sale" name="On Sale" />
				</div>
				<div class="shop-page__in-stock flex items-center space-between">
					<span class="heading-5">In Stock</span>
					<BaseCheckbox v-model="inStock" type="switch" id="in-stock" name="In Stock" />
				</div>

				<div class="shop-page__apply-filter">
					<BaseButton size="large" variant="solid-accent" text="Apply Filters" @click="toggleFilterContainer" />
				</div>
			</div>
			<!-- PRODUCTS -->
			<div class="shop-page__products">
				<lazy-product-card-list v-if="filteredProducts && filteredProducts.length > 0">
					<product-card-item v-for="product in filteredProducts" :product="product" :key="product.slug"></product-card-item>
				</lazy-product-card-list>
				<LazyEmptyState v-else type="shop" heading="No product found!" message="We could not find any product matching the selected filters. Kindly try out other filters to check out some of our other amazing products." />
			</div>
		</div>
	</div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
.shop-page {
	&__title {
		margin-bottom: 3.9rem;
	}

	&__wrapper {
		display: grid;
		gap: 3.5rem;

		@media screen and (min-width: 992px) {
			grid-template-columns: 26.2rem auto;
		}
	}

	&__filter {
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		z-index: 1;
		padding: 5rem 3rem;
		left: -100%;
		transition: all 0.3s linear;

		@media screen and (min-width: 992px) {
			position: sticky;
			padding: 0;
			height: 60rem;
			padding-top: 1rem;
		}

		&--mobile {
			left: 0;
		}

		.title {
			margin-bottom: 3.9rem;

			@media screen and (min-width: 992px) {
				display: none;
			}
		}
	}

	&__filter-button {
		@media screen and (min-width: 992px) {
			display: none;
		}
	}

	&__search {
		margin-bottom: 3.9rem;

		&-icon {
			top: 0.4rem;
			right: 0;
		}
	}

	&__shop-by {
		margin-bottom: 1.6rem;
	}

	&__sort-by {
		margin-bottom: 3.9rem;
	}

	&__slider {
		margin-bottom: 3.9rem;
	}

	&__on-sale {
		margin-bottom: 4.2rem;
	}

	&__prices {
		margin-top: 2rem;
	}

	&__apply-filter {
		margin-top: auto;

		@media screen and (min-width: 992px) {
			display: none;
		}
	}
}
</style>

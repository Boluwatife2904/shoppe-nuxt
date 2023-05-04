<script setup lang="ts">
const navigationLinks = ref([
	{ name: "Shop", path: "shop" },
	{ name: "Blog", path: "blog" },
	{ name: "Our Story", path: "about" },
]);

const goToDashboard = () => {
	navigateTo({ name: "about" });
};

const showCartSideMenu = ref(false);

const toggleCartSideMenu = (value: boolean): void => {
	showCartSideMenu.value = value;
};

watch(showCartSideMenu, () => {
	document.body.classList.toggle("overflow-hidden");
});
</script>

<template>
	<nav class="navigation flex items-center">
		<div class="navigation__logo">
			<NuxtLink :to="{ name: 'index' }" class="navigation__link--home" title="Shoppe">
				<IconsShoppeLogo />
			</NuxtLink>
		</div>
		<ul class="navigation__links position-relative w-100 items-center space-between">
			<li v-for="link in navigationLinks" :key="link.path" class="navigation__item navigation__item--navbar">
				<NuxtLink :to="{ name: link.path }" class="navigation__link navigation__link--dark heading-5 text-capitalize">{{ link.name }}</NuxtLink>
			</li>
		</ul>
		<ul class="navigation__icons flex items-center space-between w-100">
			<li>
				<BaseButton class="hide-on-mobile" title="Search">
					<IconsAction variant="search" />
				</BaseButton>
			</li>
			<li>
				<BaseButton title="Cart">
					<IconsAction variant="cart" @click="toggleCartSideMenu(true)" />
				</BaseButton>
			</li>
			<li>
				<BaseButton title="Go To Dashboard" class="hide-on-mobile" @click="goToDashboard">
					<IconsUser />
				</BaseButton>
			</li>
			<li class="hide-on-desktop">
				<BaseButton title="Hamburger">
					<IconsHamburger />
				</BaseButton>
			</li>
		</ul>
	</nav>
	<teleport to="body">
		<transition name="slideIn" mode="out-in" appear>
			<LazyNavigationCartList v-if="showCartSideMenu" @close-menu="toggleCartSideMenu(false)" />
		</transition>
	</teleport>
</template>

<style lang="scss" scoped>
.navigation {
	justify-content: space-between;
	padding-bottom: 1.7rem;
	border-bottom: 0.1rem solid var(--light-gray);

	@media screen and (min-width: 768px) {
		justify-content: flex-start;
	}

	&__links {
		max-width: 27rem;
		margin-right: 9.6rem;
		display: none;
		margin-left: auto;

		@media screen and (min-width: 768px) {
			display: flex;
		}

		&::after {
			position: absolute;
			content: "";
			width: 0.1rem;
			height: 1.7rem;
			right: -4.8rem;
			background-color: var(--dark-gray);
		}
	}

	&__icons {
		width: 100%;
		max-width: 9rem;
		gap: 1.6rem;

		@media screen and (min-width: 768px) {
			max-width: 11.8rem;
			gap: 0;
		}

		button {
			line-height: 0;
		}
	}
}

.slideIn-enter-active,
.slideIn-leave-active {
	transition: all 0.2s ease-in;
}

.slideIn-enter-from,
.slideIn-leave-to {
	transform: translate(100%);
}

.slideIn-enter-to,
.slideIn-leave-from {
	transform: translate(0);
}

.router-link-exact-active {
	padding-bottom: 2.15rem;
	border-bottom: 2px solid #000;
}

.navigation__link--home {
	padding-bottom: 0;
	border: none !important;
}
</style>

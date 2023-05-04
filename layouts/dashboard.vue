<script setup lang="ts">
const isOpen = ref(false);
const route = useRoute();

const toggleSidebar = () => {
	isOpen.value = !isOpen.value;
};

const hideSideBarOnMobile = () => {
	const innerWidth = window.innerWidth;
	if (innerWidth > 768) isOpen.value = false;
};

onMounted(() => {
	window.addEventListener("resize", hideSideBarOnMobile);
});

onUnmounted(() => {
	window.addEventListener("resize", hideSideBarOnMobile);
});

watch(route, () => {
    if(isOpen.value) isOpen.value = false;
});
</script>

<template>
	<div class="dashboard">
		<aside class="dashboard__sidebar" :class="{ 'dashboard__sidebar--active': isOpen }">
			<TheSidebar />
		</aside>
		<main class="dashboard__content">
			<div class="dashboard__header">
				<DashboardHeader :is-open="isOpen" @toggle-sidebar="toggleSidebar" />
			</div>
			<div class="dashboard__main">
				<slot></slot>
			</div>
		</main>
		<div v-if="isOpen" class="overlay" @click="toggleSidebar"></div>
	</div>
</template>

<style lang="scss" scoped>
.dashboard {
	display: grid;

	@media screen and (min-width: 768px) {
		grid-template-columns: 30rem auto;
	}

	&__sidebar {
		position: fixed;
		top: 0;
		left: -100%;
		z-index: 10;
		background-color: #fff;
		transition: all 0.4s;

		@media screen and (min-width: 768px) {
			position: initial;
		}

		&--active {
			left: 0;
			width: 100%;
			min-width: 26rem;
			max-width: 60%;
		}
	}

	&__content {
		background-color: #fdfdfd;
		height: 100vh;
		overflow-y: scroll;
		padding-bottom: 10rem;
	}

	&__main {
		padding: 0rem 2rem;

		@media screen and (min-width: 600px) {
			padding: 0rem 3.2rem;
		}
	}
}

.overlay {
	top: 0;
	left: 0;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.15);
	height: 100vh;
	width: 100%;
	cursor: pointer;
}
</style>

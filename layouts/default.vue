<script setup lang="ts">
// import Notifications from '@kyvg/vue3-notification'
</script>

<template>
	<main class="main-layout">
		<!-- <TheHeader /> -->
		<slot />
		<!-- <TheFooter /> -->
		<!-- <Notifications position="bottom right" classes="app-notification" width="320px" /> -->
	</main>
</template>

<style lang="scss" scoped>
.main-layout {
	max-width: 124.8rem;
	margin: 0 auto;
	padding: 1.5rem 1.6rem 2.4rem;

	@media screen and (min-width: 600px) {
		padding: 4.8 2rem 9rem;
	}

	@media screen and (min-width: 992px) {
		padding: 4.8rem 3.2rem 9rem;
	}
}

.vue-notification-group {
	bottom: 2.4rem !important;
	right: 2.4rem !important;
}

.app-notification {
	margin: 0 0.5rem 0.5rem;
	padding: 1.8rem 1.2rem;
	color: #ffffff;
	border-radius: 0.6rem;

	.notification-title {
		font-size: 1.8rem;
	}

	.notification-content {
		font-size: 1.6rem;
	}

	// default (blue)
	background: #44a4fc;
	border-left: 5px solid #187fe7;

	// types (green, amber, red)
	&.success {
		background: #68cd86;
		border-left-color: #42a85f;
	}

	&.warn {
		background: #ffb648;
		border-left-color: #f48a06;
	}

	&.error {
		background: #e54d42;
		border-left-color: #b82e24;
	}
}
</style>

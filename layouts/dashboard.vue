<script setup lang="ts"></script>

<template>
	<div class="dashboard">
		<aside class="dashboard__sidebar">
			<TheSidebar />
		</aside>
		<main class="dashboard__content">
			<div class="dashboard__header">
				<DashboardHeader />
			</div>
			<div class="dashboard__main">
				<slot></slot>
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.dashboard {
	display: grid;

	@media screen and (min-width: 600px) {
		grid-template-columns: 30rem auto;
	}

	&__sidebar {
		display: none;

		@media screen and (min-width: 600px) {
			display: block;
		}
	}

	&__content {
		background-color: #f9f9f9;
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
</style>

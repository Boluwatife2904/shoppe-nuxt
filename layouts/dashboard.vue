<script setup lang="ts"></script>

<template>
	<div class="dashboard">
		<aside class="dashboard__sidebar">
			<TheSidebar />
		</aside>
		<main class="dashboard__content">
			<slot></slot>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.dashboard {
	display: grid;
	grid-template-columns: 30rem auto;

	&__sidebar {
	}

	&__content {
		background-color: #f9f9f9;
		height: 100vh;
		overflow-y: scroll;
	}
}
</style>

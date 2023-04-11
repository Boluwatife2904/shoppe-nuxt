<template>
	<div class="dashboard-header">
		<div class="dashboard-header__content">
			<div class="dashboard-header__right">
				<div class="dashboard-header__image flex items-center content-center text-white">V</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dashboard-header {
	background-color: #fff;
	padding: 1.6rem 2rem;
	box-shadow: 0rem 0.25rem 1rem rgba(225, 225, 225, 0.15);
    margin-bottom: 3rem;

	@media screen and (min-width: 600px) {
		padding: 1.6rem 3.2rem;
	}

	&__image {
		background-color: var(--accent-color);
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
		margin-left: auto;
	}
}
</style>

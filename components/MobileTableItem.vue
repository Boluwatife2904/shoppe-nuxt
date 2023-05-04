<script setup lang="ts">
interface Props {
	title?: string;
}

defineProps<Props>();
</script>

<template>
	<div class="mobile-table-item flex items-center">
		<span class="mobile-table-item__title text-uppercase text-black weight-500">{{ title }}</span>
		<span class="mobile-table-item__text dark-gray-text"><slot></slot></span>
	</div>
</template>

<style lang="scss" scoped>
.mobile-table-item {
	font-size: 1.4rem;

	&:not(:last-child) {
		border-bottom: 0.1rem solid rgb(220, 220, 220);
	}

	&__title {
		padding: 1rem 1.6rem;
		background-color: rgb(245, 245, 245);
		width: 14rem;
	}

    &__text {
        padding: 1rem 1.6rem;
    }
}
</style>

<script setup lang="ts">
interface Props {
	title: string;
}

defineProps<Props>();
</script>

<template>
	<div class="page-header">
		<h4 class="page-header__title">{{ title }}</h4>
	</div>
</template>

<style lang="scss" scoped>
.page-header {
	&__title {
		@include typeface(600, 2.4rem, 2.8rem);
		margin-bottom: 3rem;
	}
}
</style>

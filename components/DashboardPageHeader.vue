<script setup lang="ts">
interface Props {
	title: string;
}

defineProps<Props>();
</script>

<template>
	<div class="page-header">
		<h4 class="page-header__title heading-3 weight-600">{{ title }}</h4>
	</div>
</template>

<style lang="scss" scoped>
.page-header {
	&__title {
		font-weight: 600;
        margin-bottom: 3rem;
	}
}
</style>

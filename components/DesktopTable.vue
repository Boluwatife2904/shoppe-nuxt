<script setup lang="ts">
interface Props {
	headers: string[];
}

defineProps<Props>();
</script>

<template>
	<div class="table">
		<div class="table__header flex items-center">
			<span v-for="header in headers" :key="header" class="text-uppercase heading-5 text-black">
				{{ header }}
			</span>
		</div>
		<div class="table__body">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.table {
	margin-bottom: 5rem;
}
</style>

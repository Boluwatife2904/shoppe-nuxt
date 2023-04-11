<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});
</script>

<template>
	<div class="downloads">
		<DashboardPageHeader title="Downloads" />
		<div class="downloads__content">
			<BaseAlert :show-icon="false" text="No downloads available yet" link-text="BROWSE PRODUCTS" link-address="/shop" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

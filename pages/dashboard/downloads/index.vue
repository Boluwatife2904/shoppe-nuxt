<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});
</script>

<template>
	<div class="orders">
		<DashboardPageHeader title="Downloads" />
		<div class="orders__content">
			<BaseAlert :show-icon="false" text="No downloads available yet" link-text="BROWSE PRODUCTS" link-address="/shop" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

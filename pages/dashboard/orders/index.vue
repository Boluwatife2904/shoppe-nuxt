<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});
</script>

<template>
	<div class="orders">
		<DashboardPageHeader title="Orders" />
		<div class="orders__content">
			<BaseAlert :show-icon="false" text="No orders have been made yet" link-text="BROWSE PRODUCTS" link-address="/shop" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

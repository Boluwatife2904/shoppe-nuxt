<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});
</script>

<template>
	<div class="addresses">
		<DashboardPageHeader title="Addresses" />
		<div class="addresses__wrapper">
			<p class="addresses__message">The following addresses will be used on the checkout page by default.</p>
			<div class="addresses__content">
				<div class="addresses__content--left">
					<DashboardAddressForm address-type="billing" />
				</div>
				<div class="addresses__content--right">
					<DashboardAddressForm address-type="shipping" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.addresses {
	&__message {
		color: var(--black-color);
		margin-bottom: 4.5rem;
	}

	&__content {
		display: grid;
        gap: 4rem;

		@media screen and (min-width: 992px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>

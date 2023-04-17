<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const logout = () => {};
</script>

<template>
	<div class="dashboard-home">
		<DashboardPageHeader title="Dashboard" />
		<div class="dashboard-home__content flex flex-column">
			<p class="heading-5">Hello Vitatheme (Not Vitatheme? <span class="accent-text" @click="logout">Log out</span>)</p>
			<p class="heading-5">From your account dashboard you can view your <span class="accent-text" @click="navigateTo('/dashboard/orders')">recent orders</span>, manage your <span class="accent-text" @click="navigateTo('/dashboard/addresses')">shipping and billing addresses</span>, and edit your <span class="accent-text" @click="navigateTo('/dashboard/account')">password and account details</span>.</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dashboard-home {
	&__content {
		gap: 2rem;
	}

	span {
		cursor: pointer;
	}
}
</style>

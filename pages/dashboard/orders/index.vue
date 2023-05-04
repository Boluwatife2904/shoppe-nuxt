<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const headers = ["order number", "date", "status", "total", "actions"];

const orders = [
	{ orderNumber: "7643980998990", date: "October 8,2021", status: "Delivered", total: "$ 105" },
	{ orderNumber: "943980998990", date: "October 8,2021", status: "Processing", total: "$ 100" },
	{ orderNumber: "879980998990", date: "October 8,2020", status: "Delivered", total: "$ 65" },
];

const viewOrder = (orderNumber: string) => {};
</script>

<template>
	<div class="orders">
		<DashboardPageHeader title="Orders" />
		<div class="orders__content">
			<template v-if="orders && orders.length > 0">
				<DesktopTable :headers="headers">
					<template #body>
						<DesktopTableItem v-for="order in orders" :key="order.orderNumber">
							<span>{{ order.orderNumber }}</span>
							<span>{{ order.date }}</span>
							<span>{{ order.status }}</span>
							<span>{{ order.total }}</span>
							<span><button class="button body-large accent-text" @click="viewOrder(order.orderNumber)">View Order</button></span>
						</DesktopTableItem>
					</template>
				</DesktopTable>
			</template>

			<LazyBaseAlert v-else :show-icon="false" text="No orders have been made yet" link-text="BROWSE PRODUCTS" link-address="/shop" />
		</div>
	</div>
</template>

<style lang="scss" scoped></style>

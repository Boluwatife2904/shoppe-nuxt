<script setup lang="ts">
interface Props {
	title: string;
}

defineProps<Props>();

const showAddressForm = ref(false);
const toggleAddressForm = () => (showAddressForm.value = !showAddressForm.value);
</script>

<template>
	<div class="address">
		<p class="address__title">{{ title }}</p>
		<div v-if="showAddressForm" class="address__form"></div>
		<div v-else class="address__empty-state">
			<button class="button" @click="toggleAddressForm">ADD</button>
			<p>You have not set up this type of address yet.</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.address {
	&__title {
		@include typeface(400, 1.8rem, 2.5rem);
		color: var(--black-color);
		margin-bottom: 2.4rem;
	}

	&__empty-state {
		button {
			border: none;
			background-color: transparent;
			color: var(--accent-color);
			margin-bottom: 0.8rem;
			@include typeface(500, 1.6rem, 2.1rem);
		}

		p {
			@include typeface(400, 1.4rem, 2.2rem);
			color: var(--dark-gray);
		}
	}
}
</style>

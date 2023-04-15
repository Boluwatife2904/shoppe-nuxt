<script setup lang="ts">
interface Props {
	addressType: string;
}

defineProps<Props>();

const showAddressForm = ref(false);
const address = reactive({
	firstName: "",
	lastName: "",
	companyName: "",
	country: "",
	streetAddress: "",
	postcodeOrZip: "",
	townOrCity: "",
	phone: "",
	email: "",
});
const countries = [{ key: "nigeria", value: "Nigeria" }];
const toggleAddressForm = () => (showAddressForm.value = !showAddressForm.value);
const updateUserAddress = () => {};
</script>

<template>
	<div class="address">
		<p class="address__title">{{ addressType }} address</p>
		<form v-if="showAddressForm" class="address__form" @submit.prevent="updateUserAddress">
			<div class="address__grid grid">
				<BaseInput type="text" id="firstName" v-model="address.firstName" placeholder="First Name *" margin-bottom="large" />
				<BaseInput type="text" id="lastName" v-model="address.lastName" placeholder="Last Name *" margin-bottom="large" />
			</div>
			<BaseInput type="text" id="companyName" v-model="address.companyName" placeholder="Company Name" margin-bottom="large" />
			<BaseSelect size="large" color="grey" margin-bottom="large" :options="countries" name="country" v-model:model-value="address.country" placeholder="Country *" />
			<BaseInput type="text" id="streetAddress" v-model="address.streetAddress" placeholder="Street Address *" margin-bottom="large" />
			<BaseInput type="text" id="postcodeOrZip" v-model="address.postcodeOrZip" placeholder="Postcode / ZIP *" margin-bottom="large" />
			<BaseInput type="text" id="townOrCity" v-model="address.townOrCity" placeholder="Town / City *" margin-bottom="large" />
			<BaseInput type="text" id="phone" v-model="address.phone" placeholder="Phone *" margin-bottom="large" />
			<BaseInput type="email" id="email" v-model="address.email" placeholder="Email *" />

			<div class="address__submit">
				<BaseButton text="Save Changes" variant="solid-black" size="large-medium" />
			</div>
		</form>
		<div v-else class="address__empty-state">
			<button class="button" @click="toggleAddressForm">ADD</button>
			<p>You have not set up this type of address yet.</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.address {
	background-color: #fff;
	padding: 3.2rem 2rem;
	border-radius: 0.6rem;

	@media screen and (min-width: 600px) {
		padding: 3.2rem;
	}

	&__grid {
		@media screen and (min-width: 600px) {
            gap: 2rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__title {
		@include typeface(400, 1.8rem, 2.5rem);
		color: var(--black-color);
		margin-bottom: 2.4rem;
        text-transform: capitalize;
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

	&__submit {
		margin-top: 6.4rem;
	}
}
</style>

<script setup lang="ts">
const router = useRouter();

const showApplyCouponContainer = ref(false);
const toggleShowApplyCouponContainer = () => (showApplyCouponContainer.value = !showApplyCouponContainer.value);

const firstName = ref("");
const lastName = ref("");
const companyName = ref("");
const streetAddress = ref("");
const postCode = ref("");
const townOrCity = ref("");
const emailAddress = ref("");
const phoneNumber = ref("");
const orderNotes = ref("");
const country = ref("");
const countries = reactive([{ key: "nigeria", value: "Nigeria" }]);
const createAccount = ref(false);
const shipToDifferentAddress = ref(false);

const placeOrder = () => {
	router.push({
		name: "order-confirmation",
		params: { slug: "1324353543" },
		query: { newOrder: "true" },
	});
};
</script>

<template>
	<div class="checkout-page page-layout-margin">
		<h1 class="page__title heading-1 checkout-page__title">checkout</h1>
		<div class="checkout-page__heading">
			<p class="heading-5"><span class="dark-gray-text">Returning Customer?</span> <nuxt-link :to="{ name: 'auth' }" class="navigation__link navigation__link--dark">Click here to login</nuxt-link></p>
			<p class="heading-5"><span class="dark-gray-text">Have a coupon?</span> <base-button title="Enter Code" @click="toggleShowApplyCouponContainer">Click here to enter your code</base-button></p>

			<div v-if="showApplyCouponContainer" class="checkout-page__coupon">
				<p class="heading-5 dark-gray-text checkout-page__coupon-title">If you have a coupon code, please apply it below.</p>
				<LazyCartApplyCoupon />
			</div>
		</div>
		<div class="checkout-page__wrapper">
			<div class="checkout-page__billing">
				<h1 class="checkout-page__title">Billing Details</h1>
				<form class="billing-form">
					<div class="billing-form__input flex billing-form__names">
						<BaseInput v-model="firstName" type="text" id="company-name" placeholder="First Name *" />
						<BaseInput v-model="lastName" type="text" id="company-name" placeholder="Last Name *" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="companyName" type="text" id="company-name" placeholder="Company Name" />
					</div>
					<div class="billing-form__input">
						<BaseSelect v-model="country" :options="countries" name="country" placeholder="Country *" size="large" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="streetAddress" type="text" id="street-address" placeholder="Street Address *" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="postCode" type="text" id="post-code" placeholder="Post Code / ZIP*" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="townOrCity" type="text" id="town-or-city" placeholder="Town or City *" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="phoneNumber" type="text" id="phone-number" placeholder="Phone *" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="emailAddress" type="email" id="email-address" placeholder="Email *" />
					</div>
					<div class="billing-form__input flex flex-column billing-form__checkboxes">
						<BaseCheckbox v-model="createAccount" id="create-account" label="Create an account?" />
						<BaseCheckbox v-model="shipToDifferentAddress" id="ship-to-different-address" label="Ship to a different address?" />
					</div>
					<div class="billing-form__input">
						<BaseInput v-model="orderNotes" type="text" id="order-notes" placeholder="Order Notes" />
					</div>
				</form>
			</div>
			<div class="checkout-page__order">
				<OrderSummary order-title="Your order" :can-place-order="true" @place-order="placeOrder" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.checkout-page {
	&__title {
		margin-bottom: 6.4rem;
	}

	&__heading {
		@media screen and (min-width: 768px) {
			max-width: 50%;
		}

		button {
			font-size: 1.6rem;
		}
	}

	&__coupon {
		margin-top: 2.4rem;
		border: 0.1rem solid var(--gray);
		padding: 2.4rem 2.4rem 4rem;

		&-title {
			margin-bottom: 3.9rem;
		}
	}

	&__wrapper {
		display: grid;
		margin-top: 4.8rem;
		gap: 3.9rem;

		@media screen and (min-width: 768px) {
			gap: 8.8rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__title {
		font-size: 1.8rem;
		line-height: 2.1rem;
		margin-bottom: 2.2rem;
		font-weight: 400;

		@media screen and (min-width: 600px) {
			font-size: 2rem;
			line-height: 2.4rem;
		}

		@media screen and (min-width: 992px) {
			font-size: 2.6rem;
			line-height: 2.5rem;
			margin-bottom: 3.9rem;
		}
	}
}

.billing-form {
	&__names {
		gap: 4rem;
		flex-direction: column;

		@media screen and (min-width: 768px) {
			flex-direction: row;
		}
	}

	&__input {
		margin-bottom: 3.7rem;
	}

	&__checkboxes {
		gap: 1.8rem;
	}
}
</style>

<script setup lang="ts">
definePageMeta({
	layout: "dashboard",
});

const account = reactive({
	firstName: "",
	lastName: "",
	displayName: "",
	emailAddress: "",
	currentPassword: "",
	newPassword: "",
	confirmNewPassword: "",
});
</script>

<template>
	<div class="account">
		<DashboardPageHeader title="Account Information" />
		<form @submit.prevent="" class="account__form">
			<div class="account__details">
				<h4 class="account__header">Account Details</h4>
				<BaseInput type="text" id="firstName" v-model="account.firstName" placeholder="First Name*" margin-bottom="large" />
				<BaseInput type="text" id="lastName" v-model="account.lastName" placeholder="Last Name*" margin-bottom="large" />
				<BaseInput type="text" id="displayName" v-model="account.displayName" placeholder="Display Name*" margin-bottom="large">
					<small class="block dark-gray-text account__display-name__text">This will be how your name will be displayed in the account section and in reviews.</small>
				</BaseInput>
				<BaseInput type="email" id="emailAddress" v-model="account.emailAddress" placeholder="Email Address*" />
			</div>

			<div class="account__password">
				<h4 class="account__header">Password Change</h4>
				<BaseInput type="password" id="currentPassword" v-model="account.currentPassword" placeholder="Current password (leave blank to leave unchanged)" margin-bottom="large" />
				<BaseInput type="password" id="newPassword" v-model="account.newPassword" placeholder="New password (leave blank to leave unchanged)" margin-bottom="large" />
				<BaseInput type="password" id="confirmNewPassword" v-model="account.confirmNewPassword" placeholder="Confirm new password" />
			</div>

			<BaseButton text="SAVE CHANGES" size="full" variant="solid-black" />
		</form>
	</div>
</template>

<style lang="scss" scoped>
.account {
	&__form {
		background-color: #fff;
		padding: 3.2rem 2rem;
		border-radius: 0.6rem;

		@media screen and (min-width: 600px) {
			padding: 3.2rem;
		}
	}

	&__details {
		margin-bottom: 4.8rem;
	}

	&__password {
		margin-bottom: 6.4rem;
	}

	&__display-name__text {
		margin-top: 0.8rem;
		@include typeface(400, 1.2rem, 1.5rem);
	}

	&__header {
		@include typeface(500, 1.8rem, 2.5rem);
		margin-bottom: 4.1rem;
	}
}
</style>

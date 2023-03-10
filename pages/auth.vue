<script setup lang="ts">
type AuthSection = "sign-in" | "register";

const currentAuthTab = ref<AuthSection>("sign-in");
const setCurrentAuthTab = (value: AuthSection): void => {
	currentAuthTab.value = value;
};

const formData = reactive({
	emailAddress: "",
	password: "",
});

const rememberMe = ref(false);

const authenticate = () => {
	console.log(formData);
};
</script>

<template>
	<div class="auth-page page-layout-margin">
		<h1 class="heading-1 text-center auth-page__title">My Account</h1>

		<div class="auth-tab">
			<button class="auth-tab__button heading-3" :class="{ 'auth-tab__button--active': currentAuthTab === 'sign-in' }" title="Switch to Sign In" @click="setCurrentAuthTab('sign-in')">Sign In</button>
			<button class="auth-tab__button heading-3" :class="{ 'auth-tab__button--active': currentAuthTab === 'register' }" title="Switch to Register" @click="setCurrentAuthTab('register')">Register</button>
		</div>

		<form class="auth-form" @submit.prevent="authenticate">
			<div class="auth-form__section">
				<BaseInput v-model="formData.emailAddress" id="emaillAddress" type="text" placeholder="Email" />
			</div>
			<div class="auth-form__section">
				<BaseInput v-model="formData.password" id="password" type="password" placeholder="Password" />
			</div>
			<div class="auth-form__checkbox">
				<BaseCheckbox v-model="rememberMe" label="Remember me" id="rememberMe" />
			</div>
			<div class="auth-form__submit">
				<BaseButton text="SIGN IN" variant="solid-black" size="large" />
			</div>
		</form>

		<div class="forgot-password text-center">
			<nuxt-link :to="{ name: 'forgot-password' }" class="navigation__link navigation__link--light heading-5"> Have you forgotten your password?</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss">
.auth-page {
	max-width: 50rem;

	&__title {
		margin-bottom: 2.4rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 6.4rem;
		}
	}
}

.auth-tab {
	background: #efefef;
	border-radius: 0.8rem;
	padding: 0.5rem;
	display: flex;
	margin-bottom: 8.7rem;

	@media screen and (min-width: 768px) {
		margin-bottom: 12.6rem;
	}

	&__button {
		flex: 1;
		border: none;
		outline: none;
		background: transparent;
		padding: 1.2rem 2.4rem;
		cursor: pointer;
		transition: all 0.2s;

		&--active {
			background: #ffffff;
			box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
			border-radius: 0.8rem;
		}
	}
}

.auth-form {
	&__section {
		&:first-child {
			margin-bottom: 4.6rem;
		}
	}

	&__checkbox {
		margin-top: 2.2rem;

		@media screen and (min-width: 768px) {
			margin-top: 1.5rem;
		}
	}

	&__submit {
		margin-top: 1.2rem;
		margin-bottom: 1.6rem;

		@media screen and (min-width: 768px) {
			margin-top: 6.9rem;
			margin-bottom: 1.3rem;
		}
	}
}
</style>

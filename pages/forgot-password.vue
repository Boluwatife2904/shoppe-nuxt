<script lang="ts" setup>
const emailAddress = ref("");
</script>

<template>
	<div class="forgot-password page-layout-margin">
		<h1 class="heading-1 page__title text-center hide-on-desktop">Lost Password ?</h1>
		<h1 class="heading-1 page__title hide-on-mobile">Have you Forgotten Your Password ?</h1>
		<p class="forgot-password__subtitle heading-3">If you've forgotten your password, enter your e-mail address and we'll send you an e-mail</p>
		<form class="forgot-password__form">
			<div class="forgot-password__section">
				<BaseInput v-model="emailAddress" type="email" id="emailAddress" placeholder="Email" />
			</div>
			<div class="forgot-password__submit">
				<BaseButton type="button" text="RESET PASSWORD" variant="solid-black" size="large" />
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.forgot-password {
	max-width: 56.1rem;

	&__subtitle {
		max-width: 50rem;
		margin: 1.6rem auto 6.4rem;

		@media screen and (min-width: 768px) {
			text-align: center;
			margin: 3.9rem auto 7.6rem;
		}
	}

	&__form {
		max-width: 50rem;
		margin: 0 auto;
	}

	&__submit {
		margin-top: 3.9rem;

		@media screen and (min-width: 768px) {
			margin-top: 6.4rem;
		}
	}
}
</style>

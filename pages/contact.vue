<script setup lang="ts">
const formData = reactive({
	firstName: "",
	lastName: "",
	emailAddress: "",
	subject: "",
	message: "",
});
</script>

<template>
	<div class="contact-page page-layout-margin">
		<h1 class="heading-1 contact-page__title page__title">Contact Us</h1>
		<p class="heading-3 text-center contact-page__subtitle hide-on-mobile">Say Hello send us your thoughts about our products or share your ideas with our Team!</p>

		<form class="contact-form">
			<div class="contact-form__grid">
				<div class="contact-form__section">
					<BaseInput v-model="formData.firstName" type="text" id="firstName" placeholder="First Name" />
				</div>
				<div class="contact-form__section">
					<BaseInput v-model="formData.lastName" type="text" id="lastName" placeholder="Last Name" />
				</div>
				<div class="contact-form__section">
					<BaseInput v-model="formData.emailAddress" type="email" id="emailAddress" placeholder="Email" />
				</div>
				<div class="contact-form__section">
					<BaseInput v-model="formData.subject" type="text" id="subject" placeholder="Subject" />
				</div>
				<div class="contact-form__section">
					<BaseTextarea v-model="formData.message" id="message" placeholder="Message" />
				</div>
			</div>
			<div class="contact-form__submit text-center">
				<BaseButton type="button" text="SEND" variant="solid-black" size="large" :bold="true" />
			</div>
		</form>
	</div>
</template>

<style lang="scss">
.contact-page {
	&__title {
		margin-bottom: 6.2rem;

		@media screen and (min-width: 768px) {
			margin-bottom: 3.9rem;
		}
	}

	&__subtitle {
		max-width: 56.1rem;
		margin: 0 auto 10.8rem;
	}
}

.contact-form {
	max-width: 90.8rem;
	margin: 0 auto;

	&__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 4.7rem 0;

		@media screen and (min-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 11.6rem 9.4rem;
		}
	}

	&__section {
		&:last-child {
			@media screen and (min-width: 768px) {
				grid-column: span 2;
			}
		}
	}

	&__submit {
		margin-top: 2.4rem;

		@media screen and (min-width: 768px) {
			margin-top: 9.6rem;
		}
	}
}
</style>

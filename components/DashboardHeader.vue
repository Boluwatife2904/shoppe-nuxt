<script setup lang="ts">
interface Props {
	isOpen: boolean;
}

interface Emits {
	(event: "toggle-sidebar"): void;
}

defineEmits<Emits>();

defineProps<Props>();
</script>

<template>
	<div class="dashboard-header">
		<div class="dashboard-header__content flex items-center space-between">
			<div class="dashboard-header__right">
				<button class="dashboard-header__toggler flex-column button" :class="{ 'dashboard-header__toggler--active': isOpen }" @click="$emit('toggle-sidebar')">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<div class="dashboard-header__right">
				<div class="dashboard-header__image flex items-center content-center text-white">V</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dashboard-header {
	background-color: #fff;
	padding: 1.6rem 2rem;
	box-shadow: 0rem 0.25rem 1rem rgba(225, 225, 225, 0.25);
	margin-bottom: 3rem;

	@media screen and (min-width: 600px) {
		padding: 1.6rem 3.2rem;
	}

	&__toggler {
		display: flex;
		gap: 0.6rem;

		@media screen and (min-width: 768px) {
			display: none;
		}

		span {
			height: 0.25rem;
			width: 3.2rem;
			background-color: #333;
			border-radius: 0.8rem;
			transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		}

		&--active {
			span {
				&:nth-child(1) {
					transform: translate(0rem, 0.9rem) rotate(45deg);
				}

				&:nth-child(2) {
					transform: translateX(-6rem);
					opacity: 0;
					visibility: hidden;
				}

				&:nth-child(3) {
					transform: translate(0rem, -0.8rem) rotate(-45deg);
				}
			}
		}
	}

	&__image {
		background-color: var(--accent-color);
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
		margin-left: auto;
	}
}
</style>

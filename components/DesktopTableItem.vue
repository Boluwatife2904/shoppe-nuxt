<script setup lang="ts"></script>

<template>
	<div class="table__item flex dark-gray-text heading-5">
		<slot></slot>
	</div>
</template>

<style lang="scss">
.table__item {
	width: 100%;
	gap: 1rem;
	border-bottom: 1px solid var(--gray);
	padding-bottom: 2.4rem;
	margin-bottom: 2.4rem;

	> span {
		&:nth-child(1) {
			width: 28%;
		}

		&:nth-child(2) {
			width: 18%;
		}

		&:nth-child(3) {
			width: 18%;
		}

		&:nth-child(4) {
			width: 18%;
		}

		&:nth-child(5) {
			width: 18%;
		}
	}
}
</style>

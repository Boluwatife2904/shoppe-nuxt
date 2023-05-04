<script setup lang="ts"></script>

<template>
	<div class="mobile-table">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.mobile-table {
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.15);
    overflow: hidden;

	&:not(:last-child) {
		margin-bottom: 2.4rem;
	}
}
</style>

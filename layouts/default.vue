<script setup lang="ts"></script>

<template>
	<main class="default-layout">
		<TheHeader />
		<slot />
		<TheFooter />
		<Notifications position="bottom right" classes="app-notification" width="320px" />
	</main>
</template>

<style lang="scss"></style>

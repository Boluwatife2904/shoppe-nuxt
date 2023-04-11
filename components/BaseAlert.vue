<script setup lang="ts">
interface Props {
	showIcon?: boolean;
	text: string;
	linkText?: string;
	linkAddress?: string;
}

withDefaults(defineProps<Props>(), {
	showIcon: true,
});
</script>

<template>
	<div class="alert flex items-center space-between">
		<div class="alert__text flex items-center">
			<IconsCircle v-if="showIcon" variant="circle-check" />
			<h6 class="heading-5">{{ text }}</h6>
		</div>
		<NuxtLink :to="linkAddress" class="alert__link accent-text">{{ linkText }}</NuxtLink>
	</div>
</template>

<style lang="scss">
.alert {
	padding: 2rem 2.9rem;
	background-color: var(--light-gray);
	border-top: 2px solid var(--accent-color);
	flex-wrap: wrap;
	gap: 1.6rem 2rem;

	&__text {
		line-height: 0;
		gap: 1.6rem;

		svg {
			flex-shrink: 0;
		}
	}

	&__link {
		font-weight: 600;
	}
}
</style>

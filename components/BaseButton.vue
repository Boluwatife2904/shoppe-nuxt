<script setup lang="ts">
type ButtonType = "submit" | "button" | "reset";

interface Props {
	variant?: string;
	text?: string;
	size?: string;
	type?: ButtonType;
	bold?: boolean;
	title?: string;
}

const props = defineProps<Props>();

const variantClasses = computed(() => {
	switch (props.variant) {
		case "solid-black":
			return "button--solid-black";
		case "solid-accent":
			return "button--solid-accent";
		case "outline-black":
			return "button--outline-black";
		case "outline-white":
			return "button--outline-white";
		default:
			return "";
	}
});

const sizeClasses = computed(() => {
	switch (props.size) {
		case "medium":
			return "button--medium";
		case "large-medium":
			return "button--large-medium";
		case "large":
			return "button--large";
		case "full":
			return "button--full";
		default:
			return "";
	}
});
</script>

<template>
	<button :type="type" class="button" :class="[variantClasses, sizeClasses, { 'button--bold': props.bold }]" :title="title">
		<span v-if="!!props.text">{{ props.text }}</span>
		<slot v-else></slot>
	</button>
</template>

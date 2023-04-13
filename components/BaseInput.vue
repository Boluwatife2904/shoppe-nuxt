<script setup lang="ts">
type MarginBottom = "none" | "small" | "medium" | "large" | "xlarge";

interface Props {
	id: string;
	type: string;
	label?: string;
	modelValue: string | number;
	placeholder?: string;
	error?: boolean;
	marginBottom?: MarginBottom;
}

withDefaults(defineProps<Props>(), {
	marginBottom: "none",
});
defineEmits(["update:modelValue", "focus"]);
</script>

<template>
	<div class="input position-relative w-100" :class="`input--margin-${marginBottom}`">
		<label v-if="!!label" :for="id" class="input__label">{{ label }}</label>
		<input class="input__field" :value="modelValue" :type="type" :name="id" :id="id" :placeholder="placeholder" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @focus="$emit('focus')" />
		<small v-if="error" class="input__error position-absolute block error-text">Required field</small>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonType = "submit" | "button" | "reset";

interface Props {
    variant?: string;
    text?: string;
    size?: string;
    type?: ButtonType;
    bold?: boolean;
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
        default:
            return "";
    }
});
</script>

<template>
    <button :type="type" class="button" :class="[variantClasses, sizeClasses, { 'button--bold': props.bold }]">
        <span v-if="!!props.text">{{ props.text }}</span>
        <slot v-else></slot>
    </button>
</template>

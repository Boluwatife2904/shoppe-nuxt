<script setup lang="ts">
interface Props {
    name: string;
    id: string;
    label?: string;
    modelValue: string;
    value: string;
}
const props = defineProps<Props>();
defineEmits(["update:modelValue"]);

const isChecked = computed(() => props.modelValue === props.value);
</script>

<template>
    <div class="radio flex items-center heading-5">
        <input class="radio__input" type="radio" :checked="isChecked" :value="value" :name="name" :id="id" @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
        <label :for="id" class="radio__label">
            <span v-if="!!label">{{ label }}</span>
            <slot v-else></slot>
        </label>
    </div>
</template>

<style lang="scss">
.radio {
    gap: 0.8rem;
    max-width: max-content;

    &__input {
        accent-color: var(--black-color);
    }

    &__input,
    &__label,
    span {
        cursor: pointer;
    }

    &__label {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
    }
}
</style>

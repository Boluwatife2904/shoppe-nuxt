<script setup lang="ts">
interface Props {
    id: string,
    label?: string,
    modelValue: string | number,
    placeholder?: string,
    error?: boolean
}

defineProps<Props>();
defineEmits(['update:modelValue', 'focus'])
</script>

<template>
    <div class="input position-relative w-100">
        <label v-if="!!label" :for="id" class="input__label">{{ label }}</label>
        <textarea class="input__field" :name="id" :id="id" cols="30" rows="3" :placeholder="placeholder"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
            @focus="$emit('focus')"></textarea>
        <small v-if="error" class="input__error position-absolute block error-text">Required field</small>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Option {
    key: string;
    value: string;
}

interface Props {
    name: string;
    options: Option[];
    placeholder?: string;
    modelValue: string;
    size?: string;
    hasBorder?: boolean;
}

const props = defineProps<Props>();
defineEmits(["update:modelValue"]);

const fontClasses = computed(() => {
    switch (props.size) {
        case "large":
            return "select__field--large-font";
        default:
            break;
    }
});
</script>

<template>
    <div class="select w-100 position-relative">
        <select class="select__field" :class="['w-100', fontClasses, { 'select__field--bordered': hasBorder }]" :name="name" :id="name" :value="modelValue" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
            <option v-if="!!placeholder" value="">{{ placeholder }}</option>
            <option v-for="{ key, value } in options" :value="key">{{ value }}</option>
        </select>
    </div>
</template>

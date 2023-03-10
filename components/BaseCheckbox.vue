<script setup lang="ts">
interface Props {
    label?: string;
    id: string;
    modelValue: boolean;
    type?: string;
    labelSize?: string;
    labelColor?: string;
    name?: string;
}

defineProps<Props>();
defineEmits(["update:modelValue"]);
</script>

<template>
    <!-- SWITCH CHECKBOXES -->
    <label v-if="type === 'switch'" :for="id" class="switch">
        <input :id="id" type="checkbox" :checked="modelValue" :name="name" @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
        <span class="slider round"></span>
    </label>
    <!-- NORMAL CHECKBOXES -->
    <label v-else class="checkbox__label flex items-center" :for="id">
        <input class="checkbox__input" type="checkbox" :name="name" :id="id" @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)" :checked="modelValue" />
        <span v-if="!!label" :class="[labelSize === 'small' ? 'small-label' : 'heading-5', { 'dark-gray-text': labelColor === 'gray' }]">{{ label }}</span>
    </label>
</template>

<style lang="scss" scoped>
.checkbox {
    max-width: max-content;

    &__input {
        accent-color: var(--black-color);
        cursor: pointer;
        margin-right: 0.8rem;
    }

    &__label {
        cursor: pointer;
    }
}

.small-label {
    font-size: 12px;
    line-height: 16px;
}

/* switch checkbox style */
.switch {
    position: relative;
    display: inline-block;
    width: 3.3rem;
    height: 2rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
            background-color: var(--accent-color);

            &:before {
                -webkit-transform: translateX(1.3rem);
                -ms-transform: translateX(1.3rem);
                transform: translateX(1.3rem);
            }
        }

        &:focus + .slider {
            box-shadow: 0 0 0.1rem transparent;
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--dark-gray);
        -webkit-transition: 0.4s;
        transition: 0.4s;

        &::before {
            position: absolute;
            content: "";
            height: 1.3rem;
            width: 1.3rem;
            left: 0.333rem;
            bottom: 0.333rem;
            background-color: #fff;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }

        &.round {
            border-radius: 3.4rem;

            &::before {
                border-radius: 50%;
            }
        }
    }
}
</style>

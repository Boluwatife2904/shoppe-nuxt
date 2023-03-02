<script setup lang="ts">
import { ref } from "vue";
import vue3starRatings from "vue3-star-ratings";

const review = ref("");
const name = ref("");
const email = ref("");
const saveEmail = ref(true);
const rating = ref(0);
</script>

<template>
    <div class="review-form">
        <h5 class="review-form__heading heading-3">Add a Review</h5>
        <p class="review-form__subheading text-capitalize">Your email address will not be published. Required fields are marked *</p>
        <form class="review-form__form">
            <div class="review-form__input-field">
                <BaseTextarea v-model="review" id="review" placeholder="Your Review*" />
            </div>
            <div class="review-form__input-field">
                <BaseInput v-model="name" type="text" id="name" placeholder="Enter your name*" />
            </div>
            <div class="review-form__input-field">
                <BaseInput v-model="email" type="text" id="email" placeholder="Enter your email*" />
            </div>
            <div class="review-form__input-field">
                <BaseCheckbox v-model="saveEmail" id="save-email" label-size="small" label-color="gray" label="Save my name, email, and website in this browser for the next time I comment" />
            </div>
            <div class="review-form__star-rating">
                <p class="body-medium dark-gray-text">Your Rating*</p>
                <vue3star-ratings v-model="rating" :numberOfStars="5" :step="1" star-size="18" inactive-color="#fff" :show-control="false" star-color="#000" />
            </div>
            <BaseButton type="submit" text="Submit" size="medium" variant="solid-black" />
        </form>
    </div>
</template>

<style lang="scss">
.review-form {
    &__heading {
        margin-bottom: 1.1rem;
    }

    &__subheading {
        font-weight: 400;
        font-size: 13px;
        line-height: 30px;
        margin-bottom: 4.6rem;
    }

    &__input-field {
        margin-bottom: 3.9rem;
    }

    &__star-rating {
        margin: 4.8rem 0;

        p {
            margin-bottom: 1.3rem;
        }
    }
}

.vue3-star-ratings__wrapper {
    margin: 0 !important;
    padding: 0 !important;
    text-align: left !important;
}

.vue3-star-ratings {
    display: block !important;
}

.vue3-star-ratings svg:not(:first-child) {
    margin-left: 10px !important;
}

.stars path {
    stroke: #000 !important;
    stroke-width: 20px !important;
    stroke-dasharray: 0, 0 !important;
    stroke-linejoin: bevel !important;
}
</style>

<template>
    <div class="privacy-policy page-layout-margin">
        <div class="privacy-policy__group">
            <h1 class="heading-1 text-capitalize page__title">terms of service</h1>
        </div>
        <div class="privacy-policy__group">
            <p class="heading-5">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
                gravida arcu. Nam
                fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
                placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
            </p>
        </div>
        <div class="privacy-policy__group">
            <h4 class="privacy-policy__group--header">Security</h4>
            <p class="heading-5">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a,
                gravida arcu. Nam
                fringilla molestie velit, eget pellentesque risus scelerisque.</p>
        </div>
        <div class="privacy-policy__group cookies">
            <h4 class="privacy-policy__group--header">Cookies</h4>
            <p class="heading-5 cookies__item">
                ● Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.
            </p>
            <p class="heading-5 cookies__item">
                ● Nam fringilla molestie velit, eget pellentesque risus scelerisque a
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/abstract/mixins";

.privacy-policy {
    max-width: 67rem;

    &__group {
        &:not(:last-child) {
            margin-bottom: 3.9rem;
        }

        &:not(:first-child) {
            @media screen and (max-width: 768px) {
                margin-bottom: 2.2rem;
            }
        }

        &--header {
            @include typeface(400, 1.8rem, 2.7rem);
            margin-bottom: 1.3rem;

            @media screen and (min-width: 768px) {
                @include typeface(400, 2.6rem, 2.5rem);
                margin-bottom: 2.4rem;
            }
        }
    }
}

.cookies {
    &__item {
        &:not(:last-child) {
            margin-bottom: 1.6rem;
        }
    }
}
</style>

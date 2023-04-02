<script setup lang="ts">
import statesData from "@/data/nigeria-state-and-lgas.json";

const countries = reactive([{ key: "nigeria", value: "Nigeria" }]);
const selectedState = ref("");
const selectedCountry = ref("");
const selectedLGA = ref("");

const states = computed(() => {
	return statesData
		.map((state) => {
			return {
				key: state.state.toLowerCase(),
				value: state.state,
			};
		})
		.sort((a, b) => (a.key > b.key ? 1 : -1));
});

const lgas = computed(() => {
	if (selectedState.value) {
		const state = statesData.find((state) => state.state.toLowerCase() === selectedState.value);
		return [...(<string[]>state?.lgas)].map((lga) => {
			return {
				key: lga.toLowerCase(),
				value: lga,
			};
		});
	} else {
		return [];
	}
});

// Change Selected LGA to "" when the selectedState is changed
watch(selectedState, () => (selectedLGA.value = ""));
</script>

<template>
	<div class="shipping">
		<h5 class="heading-5 shipping__title">CALCULATE SHIPPING</h5>
		<div class="shipping__input">
			<BaseSelect v-model="selectedCountry" :options="countries" name="country" placeholder="SELECT A COUNTRY" />
		</div>
		<div class="shipping__input">
			<BaseSelect v-model="selectedState" :options="states" name="state" placeholder="SELECT A STATE" />
		</div>
		<div class="shipping__input">
			<BaseSelect v-model="selectedLGA" :options="lgas" name="lga" placeholder="SELECT A L.G.A." />
		</div>
		<div class="shipping__update">
			<BaseButton variant="outline-black" size="large" text="UPDATE TOTALS" />
		</div>
	</div>
</template>

<style lang="scss">
.shipping {
	&__title {
		margin-bottom: 2.3rem;
	}

	&__input {
		margin-bottom: 2.3rem;
	}
}
</style>

export function useDeviceType() {
	const isOnMobile = ref(false);

	const checkScreenWidth = () => {
		isOnMobile.value = window.innerWidth <= 992;
	};

	onMounted(() => {
		checkScreenWidth();
		window.addEventListener("resize", checkScreenWidth);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", checkScreenWidth);
	});

	return { isOnMobile };
}

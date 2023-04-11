// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "Shoppe | Home",
			charset: "UTF-8",
			viewport: "width=device-width, initial-scale=1.0",
			meta: [
				{ hid: "description", name: "theme_color", content: "#a18a68" },
				{ hid: "description", name: "description", content: "A fully-fledged e-commerce platform with features like cart, checkout, wishlist where users can purchase jewellries of all kinds." },
				{ hid: "og:description", name: "og:description", content: "A fully-fledged e-commerce platform with features like cart, checkout, wishlist where users can purchase jewellries of all kinds." },
				{ hid: "og:title", name: "og:title", content: "Shoppe | Home" },
				{ hid: "og:site_name", name: "og:site_name", content: "Shoppe" },
				{ hid: "og:url", name: "og:url", content: "https://shoppe-chi.vercel.app" },
				{ hid: "og:type", name: "og:type", content: "website" },
				{ hid: "og:image", name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1678474560/shoppe-ogimage_vxpqo1.png" },
			],
		},
	},
	css: ["@/assets/scss/index.scss", "@/assets/fonts.scss"],
	modules: ["@pinia/nuxt", "@nuxt/image-edge"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@import "@/assets/scss/abstract/_mixins.scss";
					`,
				},
			},
		},
	},
});

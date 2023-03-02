import { defineStore, acceptHMRUpdate } from "pinia";

const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [
                {
                    image: "/images/product-one.png",
                    name: "Lira Earrings",
                    price: 20,
                    category: "earring",
                    stock: 34,
                    discountValue: 21,
                    variant: "Black/Medium",
                    slug: "lira-earrings",
                },
                {
                    image: "/images/product-two.png",
                    name: "Hal Earrings",
                    price: 25,
                    category: "earring",
                    stock: 4,
                    discountValue: 0,
                    variant: "Black/Medium",
                    slug: "hal-earrings",
                },
                {
                    image: "/images/product-three.png",
                    name: "Kaede Hair Pin Set Of 3 ",
                    price: 25,
                    category: "pin",
                    stock: 5,
                    discountValue: 0,
                    variant: "Black/Medium",
                    slug: "kaede-hair-pin-set-of-3",
                },
                {
                    image: "/images/product-four.png",
                    name: "Hair Pin Set of 3",
                    price: 25,
                    category: "pin",
                    stock: 8,
                    discountValue: 0,
                    variant: "Black/Medium",
                    slug: "hair-pin-set-of-3",
                },
                {
                    image: "/images/product-five.png",
                    name: "Plaine Necklace",
                    price: 25,
                    category: "necklace",
                    stock: 0,
                    discountValue: 0,
                    variant: "Black/Medium",
                    slug: "plaine-necklace",
                },
                {
                    image: "/images/product-three.png",
                    name: "Yuki Hair Pin Set of 3",
                    price: 25,
                    category: "pin",
                    stock: 13,
                    discountValue: 0,
                    variant: "Black/Medium",
                    slug: "yuki-hair-pin-set-of-3",
                },
            ],
        };
    },
    actions: {},
    getters: {
        allProducts: (state) => state.products,
        singleProduct: (state) => {
            return (productSlug: string) => state.products.find((product) => product.slug === productSlug);
        },
    },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}

export default useProductStore;

import { defineStore, acceptHMRUpdate } from "pinia";
import useProductStore from "./ProductStore";
import { notify } from "@kyvg/vue3-notification";

interface CartItem {
    slug: string;
    count: number;
}

interface CartProduct extends CartItem {
    image: string;
    price: number;
    name: string;
    variant: string;
    category: string;
    stock: number;
    discountValue: number;
}

const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            cartItems: [] as CartItem[],
        };
    },
    actions: {
        addItemToCart(slug: string, count = 1) {
            // First check if the product is already in the cart before adding to cart. If it exists, increase the count. If not, add to cart
            const cartItemIndex = this.cartItems.findIndex((product) => product.slug === slug);
            if (cartItemIndex > -1) {
                this.cartItems[cartItemIndex].count += count;
            } else {
                this.cartItems.push({ slug, count });
            }
            notify({
                type: "success",
                text: "Product have been added to cart successfully 🎉!",
                duration: 500,
            });
        },

        removeItemFromCart(slug: string) {
            this.cartItems = this.cartItems.filter((cartItem) => cartItem.slug !== slug);
            notify({
                type: "success",
                text: "Product have been removed from cart successfully 🎉!",
                duration: 500,
            });
        },

        increaseCartItemCount(slug: string) {
            const cartItemIndex = this.cartItems.findIndex((cartItem) => cartItem.slug === slug);
            this.cartItems[cartItemIndex].count++;
        },

        decreaseCartItemCount(slug: string) {
            const cartItemIndex = this.cartItems.findIndex((cartItem) => cartItem.slug === slug);
            this.cartItems[cartItemIndex].count--;
        },
    },
    getters: {
        productsInCart(state) {
            const ProductStore = useProductStore();
            let cartProducts: CartProduct[] = [];
            state.cartItems.forEach((cartItem) => {
                const productIndex = ProductStore.products.findIndex((product) => product.slug === cartItem.slug);
                if (productIndex > -1) {
                    cartProducts.push({ ...ProductStore.products[productIndex], ...cartItem });
                }
            });

            return cartProducts;
        },

        numberOfProductsInCart() {
            return this.productsInCart.length;
        },

        totalAmountOfProductsInCart() {
            let total = 0;
            this.productsInCart.forEach((product) => {
                total += product.count * product.price;
            });
            return total;
        },
    },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}

export default useCartStore;

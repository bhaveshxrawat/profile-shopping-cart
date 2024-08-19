"use client";

import type { Product } from "@/components/interfaces";
import localforage from "localforage";
import { useEffect, useState } from "react";

interface CartItem extends Product {
    quantity: number;
}

const localCart = localforage.createInstance({
    name: "userCart",
});

const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        async function loadCart() {
            try {
                const storedCart = await localCart.getItem<CartItem[]>("cart");
                if (!storedCart) return;
                setCart(storedCart);
            } catch (error) {}
        }
        loadCart();
    }, []);

    useEffect(() => {
        localCart.setItem("cart", cart);
        console.log("cart updated at lf");
    }, [cart]);

    const addToCart = (product: Product, quantity = 1) => {
        setCart((prevCart) => {
            // const existingItem = prevCart.find((item) => item.id === product.id);
            // if (existingItem) {
            //     return prevCart.map((item) => {
            //         if (item.id === product.id) {
            //             return { ...item, quantity: item.quantity + quantity };
            //         }
            //         return item;
            //     });
            // } else {
            console.log("object");
            return [...prevCart, { ...product, quantity }];
            // }
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity };
                }
                return item;
            });
        });
    };

    const clearCart = () => {
        setCart([]);
    };
    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    };
};

export default useCart;

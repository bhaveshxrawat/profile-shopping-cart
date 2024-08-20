"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/components/interfaces";
import localforage from "localforage";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

const localCart = localforage.createInstance({
    name: "userCart",
});

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
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
    }, [cart]);

    const addToCart = (product: Product, quantity = 1) => {
        setCart((prevCart) => {
            return [...prevCart, { ...product, quantity }];
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

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

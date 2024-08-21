"use client";

import { useCart } from "@/context/CartContext";
import CartItemCard from "../ui/CartItemCard";

const CartList = () => {
    const { cart, clearCart } = useCart();
    return (
        <main className="border border-black/40 rounded-md">
            <header className="flex justify-between items-center bg-black/10 px-6 py-4 text-lg font-semibold border-b border-black">
                Items in Cart
                <button className="p-2" onClick={clearCart}>
                    Clear Cart
                </button>
            </header>
            <div className="p-4 flex flex-col gap-4 max-h-[75dvh] overflow-auto">
                {cart.map((item) => (
                    <CartItemCard key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
};

export default CartList;

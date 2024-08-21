"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

const CartSummary = () => {
    const { cart } = useCart();
    const [discount] = useState({
        type: "percentage",
        value: 10,
    });
    const subTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    const discountedAmt =
        discount.type === "percentage"
            ? (subTotal * discount.value) / 100
            : discount.value;
    return (
        <aside>
            <div className="border border-black/40 rounded-md">
                <header className="bg-black/10 px-6 py-4 text-lg font-semibold border-b border-black">
                    Order Summary
                </header>
                <div className="p-4">
                    <p className="text-lg font-medium">
                        Subtotal: ${subTotal.toFixed(2)}
                    </p>
                    <p className="text-lg font-medium">
                        Discount: ${discountedAmt.toFixed(2)}
                    </p>
                    <p className="text-lg font-bold">
                        Total: ${(subTotal - discountedAmt).toFixed(2)}
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default CartSummary;

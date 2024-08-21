"use client";
import { useRouter } from "next/navigation";

const CartHeader = () => {
    const router = useRouter();
    return (
        <header className="flex gap-3 p-4 items-center mb-4">
            <button
                className="w-7 aspect-square rounded-full flex items-center justify-center text-2xl"
                onClick={() => router.push("/")}
            >
                ⬅
            </button>
            <h1 className="text-2xl font-bold">Your Cart</h1>
        </header>
    );
};

export default CartHeader;

import Image from "next/image";
import { useCart } from "@/context/CartContext";

const CartItemCard = ({
    item,
}: {
    item: {
        id: number;
        image: string;
        title: string;
        price: number;
        quantity: number;
    };
}) => {
    const { updateQuantity, removeFromCart } = useCart();
    return (
        <article className="flex gap-4 items-center flex-wrap">
            <figure>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="rounded-md aspect-square bg-white object-contain"
                />
            </figure>
            <div className="flex-1">
                <h3 className="font-medium line-clamp-2">{item.title}</h3>
                <p className="text-sm">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="cart-btn"
                    disabled={item.quantity <= 1}
                >
                    -
                </button>
                <input
                    className="text-base text-center w-3 focus-within:outline-none select-none"
                    min={1}
                    type="text"
                    value={item.quantity}
                    readOnly
                />
                <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="cart-btn"
                >
                    +
                </button>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="cart-btn"
                >
                    🗑
                </button>
            </div>
        </article>
    );
};

export default CartItemCard;

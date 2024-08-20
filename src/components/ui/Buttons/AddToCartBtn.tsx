import { useCart } from "@/context/CartContext";
import type { Product } from "@/components/interfaces";

const AddToCartBtn = ({
    product,
    isAdded,
}: {
    product: Product;
    isAdded: boolean;
}) => {
    const { addToCart } = useCart();
    return (
        <button
            onClick={() => {
                isAdded ? null : addToCart(product);
            }}
            className="px-3 py-2 bg-p-red text-white rounded-md"
        >
            {isAdded ? "✔ Added" : "Add to Cart"}
        </button>
    );
};

export default AddToCartBtn;

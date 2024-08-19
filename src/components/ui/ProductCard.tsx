import Image from "next/image";
import type { Product } from "../interfaces";
import AddToCartBtn from "./Buttons/AddToCartBtn";

type ProductCard = {
    isAdded: boolean;
    product: Product;
    imageSrc: string;
    productTitle: string;
    productDescription: string;
    price: number;
};

const ProductCard = ({
    isAdded,
    product,
    imageSrc,
    productTitle,
    productDescription,
    price,
}: ProductCard) => {
    return (
        <article className="grid grid-rows-[subgrid] row-[span_4] gap-y-2 p-3 hover:shadow-md rounded-md">
            <figure>
                <Image
                    width={300}
                    height={500}
                    src={imageSrc}
                    alt={productTitle}
                    className="aspect-[2/2.5] object-contain object-center w-full bg-white"
                />
            </figure>
            <h3 className="text-lg font-semibold mb-2 line-clamp-3">
                {productTitle}
            </h3>
            <p className="text-gray-500 mb-4 line-clamp-2">
                {productDescription}
            </p>
            <div className="flex items-center gap-2 justify-between xs:flex-col xs:items-stretch">
                <p className="font-bold">${price}</p>
                <AddToCartBtn product={product} isAdded={isAdded} />
            </div>
        </article>
    );
};

export default ProductCard;

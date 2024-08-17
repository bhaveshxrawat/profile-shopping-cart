"use client";
import { useEffect, useState } from "react";
import localforage from "localforage";
import ProductCard from "./ui/ProductCard";

const fetchedProducts = localforage.createInstance({
    name: "localProducts",
});

const cart = localforage.createInstance({
    name: "userCart",
});

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const localItems: Product[] | null =
                    await fetchedProducts.getItem("products");
                if (localItems !== null) {
                    setProducts(localItems);
                    return;
                }
                const productsReq = await fetch(
                    "https://fakestoreapi.com/products?limit=10"
                );
                const productsData: Product[] = await productsReq.json();
                await fetchedProducts.setItem("products", productsData);
                setProducts(productsData);
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className="grid xs:grid-cols-2 grid-cols-[repeat(auto-fill,minmax(16rem,0.75fr))] gap-4 gap-y-6">
            {products?.map((product) => (
                <ProductCard
                    key={product!.id}
                    imageSrc={product!.image}
                    price={product!.price}
                    productDescription={product!.description}
                    productTitle={product!.title}
                />
            ))}
        </div>
    );
};

export default ProductList;

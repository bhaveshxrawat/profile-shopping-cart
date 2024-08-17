import Header from "@/components/Header";
import ProductList from "@/components/ProductList";

export default function Home() {
    return (
        <>
            <Header />
            <main className="p-4">
                <ProductList />
            </main>
        </>
    );
}

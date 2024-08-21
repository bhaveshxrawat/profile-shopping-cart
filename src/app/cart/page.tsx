import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
export default function Cart() {
    return (
        <>
            <CartHeader />
            <div className="p-4 grid grid-cols-[1fr_300px] gap-5 xs:grid-cols-1">
                <CartList />
                <CartSummary />
            </div>
        </>
    );
}

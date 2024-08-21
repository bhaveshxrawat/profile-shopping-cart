import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cart",
    description: "Your Cart",
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

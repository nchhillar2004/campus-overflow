import { Products } from "@/db/productsData";

export function generateStaticParams() {
    return Products.map((product) => ({
        categoryId: product.category,
        productId: product.id,
    }));
}

export default function Page({
    params,
}: {
    params: { categoryId: string; productId: string };
}) {
    const { categoryId, productId } = params;

    return (
        <div>
            Category: {categoryId}
            Product: {productId}
            <ul></ul>
        </div>
    );
}

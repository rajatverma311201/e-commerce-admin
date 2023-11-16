import { ProductForm } from "./components/product-form";
import prismadb from "@/lib/prismadb";

interface ColorIdPageProps {
    params: {
        productId: string;
        storeId: string;
    };
}

const ColorIdPage: React.FC<ColorIdPageProps> = async ({ params }) => {
    let product = null;
    try {
        product = await prismadb.product.findUnique({
            where: {
                id: params.productId,
            },
            include: {
                images: true,
            },
        });
    } catch (err) {}

    const categories = await prismadb.category.findMany({
        where: {
            storeId: params.storeId,
        },
    });

    const sizes = await prismadb.size.findMany({
        where: {
            storeId: params.storeId,
        },
    });

    const colors = await prismadb.color.findMany({
        where: {
            storeId: params.storeId,
        },
    });
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductForm
                    categories={categories}
                    colors={colors}
                    sizes={sizes}
                    initialData={product}
                />
            </div>
        </div>
    );
};
export default ColorIdPage;

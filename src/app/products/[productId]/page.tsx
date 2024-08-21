import { Metadata } from "next"; // Ensure this import is correct and used properly

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise< Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`,
    };
};

export default function ProductDetails({ params }: Props) {
    return <h1>This is a product mb {params.productId}</h1>;
}

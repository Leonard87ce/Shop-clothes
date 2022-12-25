import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../../data/products";
import Image from "next/image";
import { Button } from "../../components/elements/Button";

const imageLoader = ({ src })=> {
    return `/images/products/${src}`
}

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;
    const [product, setProduct] = useState ({});
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => { 
        if (productId) {
            let index = PRODUCTS.findIndex(product => product.id == productId);
            if (index > -1){
                setProduct(PRODUCTS[index])
            } else {
                setNotFound(true)
            }
            setLoading(false)        
        }
    }, [productId])

    if (notFound) {
        return (
            <div>Product not found</div>
        )
    }

    if (loading) {
        return (
            <div>loading...</div>
        )
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto my-6">
            {
                product &&
                <>
                    <div className="cols-span-2">
                        <div className="border rounded border-slate-300 flex items-center justify-center">
                            <Image loader={imageLoader} src={product.imgUrl} alt="product image" width={150} height={300} objectFit="cover" />
                        </div>
                    </div>
                    <div className="cols-span-3 flex flex-col justify-between">
                        <div className="product-info">
                            <h1>{product.title}</h1>
                            <p className="font-graphikLight">{product.description}</p>
                        </div>
                        <div className="product-controls flex flex-row items-end">
                            <Button variant="dark"> Add to Cart</Button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ProductPage;
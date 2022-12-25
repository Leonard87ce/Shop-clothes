import Image from "next/image"

const imageLoader = ({ src })=> {
    return `/images/products/${src}`
}
export const ProductContainer = ({name, imageUrl}) => {
    return (
        <div className="w-full h-auto text-center rounded">
            <div className="mt-10 w-200 h-200 border-slate-350 rounded">
                <Image loader={imageLoader} src={imageUrl} alt="product image" width={150} height={300}/>
            </div>
            <p>{name}</p>
        </div>
    )
}
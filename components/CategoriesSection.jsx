import { CategoryCard } from './CategoryCard'

export const  CategoriesSection = () => {
    const categories = [
        {
            name: "Phones",
            imgUrl: "/images/categories/phones.webp"
        },
        {
            name: "Watch",
            imgUrl: "/images/categories/watch.webp"
        },
        {
            name: "MacBook",
            imgUrl: "/images/categories/macbook.jpg"
        },
        {
            name: "Surface",
            imgUrl: "/images/categories/surface.webp"
        },
        {
            name: "Acer",
            imgUrl: "/images/categories/laptopacer.webp"
        },
        {
            name: "Asus",
            imgUrl: "/images/categories/laptopasus.webp"
        },
        {
            name: "Dell",
            imgUrl: "/images/categories/laptopdell.jpg"
        },
        {
            name: "Headphones",
            imgUrl: "/images/categories/headphones.webp"
        },
    ]

    return (
        <div>
            <h2 className="text-center text-xl mt-6 mb-3 p-2">Browse By Category</h2>
            <div className="grid grid-cols-4 text-center ">
                {categories.map((category, index) => {
                    return (
                        <CategoryCard key={index} name={category.name} imgUrl={category.imgUrl} />
                    )
                })}
            </div>
        </div>
    ) 
}
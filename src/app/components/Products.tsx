'use client';
import Image from "next/image";
import Link from "next/link";
import { cards } from "./Cards";
import { productType } from "./Cards";
import useStore from "../store/zuStore";
const Products = () => {
    const increment = useStore((state)=>state.increment);
    return (
        <>
        <div className="my-32 bg-base-200">
            <div className="heading mb-8 text-black dark:text-slate-400 text-xl font-bold font-serif ml-4">
                <span>Products</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-2 mx-4">
{cards.map((items:productType)=>(
    <>
        <div key={items.title} className="card-compact lg:card-normal w-[9.6rem] xs:w-[11rem] ms:w-[13rem] md:w-[15.5rem] xl:w-[16rem] bg-base-100 shadow-xl mb-4">
    <Link href={{
        pathname:`details/${items.title}`,
        query:{search:items.title}
    }} >
  <figure><Image width={300} height={100} src={items.src} alt={items.title} className="aspect-[4/3] object-cover" /></figure>
  <div className="card-body">
    <h2 className="card-title">{items.title.substring(0,30)}</h2>
    <p>{items.para.substring(0,50)}...</p>
  </div>
    </Link>
    <div className="card-actions text-sm flex justify-center items-end">
      <button onClick={increment} className="btn-sm w-full rounded-md btn-primary text-white">Add to Cart</button>
    </div>
</div>
    </>
))}
            </div>
        </div>
        </>
    )
}
export default Products;
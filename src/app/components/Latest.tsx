import Image from "next/image";
import { productType } from "./Cards";
import { cards } from "./Cards";
const Latest = () => {
    return (
        <>
        <div className="trendy bg-base-200 my-4">
            <div className="heading font-bold font-serif text-xl ml-4 my-2 py-2">
                <span>Latest</span>
            </div>
        <div className="carousel carousel-center w-full p-4 space-x-4">
            {cards.map((items:productType)=>(
                <>
  <div className="carousel-item relative group hover:cursor-pointer" key={items.title}>
    <Image width={300} height={200} alt={items.title} src={items.src} className="rounded-box" />
  <div className="rounded-box lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-150 z-10 absolute bottom-0 right-0 left-0 px-2 py-1 bg-neutral-500/40 text-white">
    <span className="text-center w-full">{items.title}</span>
  </div>        
  </div>
                </>
            ))}
        </div>
</div>
        </>
    )
}
export default Latest;
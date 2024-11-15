import Image from "next/image";
const Hero = (title:any) =>{
    const data = Object.values(title);
    return (
        <>
        <div className="mt-2">
            {data.map((items:any)=>(
                <>
                <div key={items.title}>
                    <div className="image grid justify-center md:grid-cols-2 xl:grid-cols-3">
                        <Image src={items.src} className="mx-auto mt-8" width={300} height={100} alt={items.title} />
                        <div className="mt-8">
                            <div className="heading h-fit">
                                <span>{items.title}</span>
                                <br /><br />
                                <span className="text-xl font-normal">Price: <span>Rs. {items.price}</span></span>
                                <div className="quantity px-4 mt-8">
                                    <span className="text-lg font-semibold">Quantity: </span>
                                    <input type="number" min={1} max={5} defaultValue={1} className="input input-info w-[21%] max-w-xs" />
                                </div>
                                <div className="card-actions text-sm flex justify-center mt-20 md:justify-start">
                                <button className="btn-sm w-full md:w-[50%] rounded-md btn-success hover:bg-green-500 text-white">Add to Cart</button>
                                <button className="btn-sm w-full md:w-[50%] rounded-md btn-primary text-white">Buy Now</button>
                                 </div>
                            </div>
                        </div>
                    </div>
                            <div className="desc my-12 mx-1 lg:mx-4">
                                <span className="font-bold lg:text-xl">Description</span>
                                <br />
                                <span className="lg:text-md">{items.para}</span>
                            </div>
                </div>
                </>
            ))}
        </div>
        </>
    )
}
export default Hero;
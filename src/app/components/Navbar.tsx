'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {HiOutlineShoppingBag} from "react-icons/hi";
import useStore from "../store/zuStore";
const Navbar = () => {
    const  productsCount = useStore((state) => state.count);
    const [open,isOpen] = useState(false);
    const path = usePathname();
    if(path.match("studio")){
        return null;
    }
    return (
        <>
        {/* For Small Screens */}
        <nav className="visible lg:hidden">
            <div className="grid grid-cols-4 bg-gradient-to-r from-indigo-400 to-cyan-400 h-[12vh]">
                <div className="logo col-span-2 all text-white text-xl font-bold">
                    <Link href="/">
                        Supernova store
                    </Link>
                </div>
                {/* shopping cart */}
                <div className="cart">
                    <Link href={'#'}>
                    <div className="float-right w-5 rounded-full border border-black bg-black px-2 text-center text-[12px] text-light-triPrimary">
              <span className="flex justify-center">{productsCount}</span>
            </div>
                    <HiOutlineShoppingBag color="white" size={28} />
                    </Link>
                </div>
                <div className="hamburger flex items-center justify-end">
                    <Image onClick={()=>isOpen(!open)} src={open ? "/img/bars.png" : "/img/menu.png"} className="mr-[13%] cursor-pointer" width={30} height={100} alt="Hamburger" />
                    <div className={`${open ? "grid" : "hidden"} grid-cols-1 bg-gradient-to-r from-indigo-400 to-cyan-400 absolute top-[12%] w-[10rem] text-white h-[25vh] overflow-y-scroll`}>
                        {NavItem.map((item:navItem)=>(
                            <>
                            <div key={item.title} className="text-right my-1">
                                <Link href={item.href} className="text-white pr-2 hover:underline decoration-white">{item.title}</Link>
                            </div>
                            </>
                        ))}
                    <form>
                        <div className="my-2">
                            <input type="text" className="w-[10rem] text-sm rounded-full bg-transparent text-white placeholder:text-white p-2 border" placeholder="Search entire store here..." />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </nav>
        {/* For Large Screens */}
        <nav className="hidden lg:contents">
            <div className="grid grid-cols-4 bg-gradient-to-r from-indigo-400 to-cyan-400 h-[12vh]">
                <div className="logo text-white">
                    <Link href="/" className="font-bold text-xl">
                        Supernova store
                    </Link>
                </div>
                    <div className={`grid grid-cols-4 gap-3 items-center justify-center text-white`}>
                        {NavItem.map((item:navItem)=>(
                            <>
                            <div key={item.title} className="text-right my-1">
                                <Link href={item.href} className="text-white pr-2 hover:underline decoration-white">{item.title}</Link>
                            </div>
                            </>
                        ))}
                    </div>
                    <div className="flex justify-end items-center">
                    <form>
                        <div className="my-2">
                            <input type="text" className="rounded-lg bg-transparent text-white placeholder:text-white p-2 border" placeholder="Search entire store here..." />
                        </div>
                    </form>
                    </div>
                    {/* shopping cart */}
                <div className="cart">
                <Link href={'#'}>
                    <div className="float-right w-5 rounded-full border border-black bg-black px-2 text-center text-[12px] text-light-triPrimary">
              <span className="flex justify-center">{productsCount}</span>
            </div>
                    <HiOutlineShoppingBag color="white" size={28} />
                    </Link>
                </div>
                
            </div>
        </nav>
          
        </>
    )
}
interface navItem {
    title:string;
    href:string;
}
const NavItem:Array<navItem> = [
    {
    title:"Home",
    href:"/"
    },
    {
    title:"About",
    href:"/about"
    },
    {
    title:"Our Wall",
    href:"/wall"
    },
    {
    title:"Login",
    href:"#"
    },
]
export default Navbar;
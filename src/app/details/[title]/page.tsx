import { cards } from "@/app/components/Cards";
import Hero from "./Hero";
export default function Home({searchParams}:any){
    const data:any = searchParams.search;
    const refine = cards.filter((items:any) => data == items.title)
    return(
        <>
        <Hero {...refine} />
        </>
    )
}
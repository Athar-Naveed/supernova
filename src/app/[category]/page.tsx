import Categories from "../components/Categories"
export default function Category({searchParams}:any){
    const data = searchParams.search;
    return(
        <>
        <Categories />
        <div>{data}</div>
        </>
    )
}
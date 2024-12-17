import Trendy from "./components/Trendy";
import Latest from "./components/Latest";
import Products from "./components/Products";
import Categories from "./components/Categories";
import { client } from "@/lib/sanityClient";
import { cache } from "react";

// Cache the data fetching functions
const getCachedData = cache(async () => {
  const resp = await client.fetch(
    `*[_type == 'watches']{
      _id,
      'images': images[]{
        'url': asset->url,
        'alt': asset->originalFilename
      },
      'category': category->{
        _id,
        category
      },
      pname,
      pdesc,
      pprice,
      pquan,
      brand
    }`
  );
  return resp;
});

const getCachedCategories = cache(async () => {
  const resp = await client.fetch(
    `*[_type=='categories']{
      _id,
      category,
      'imgUrl': img.asset->url
    }`
  );
  return resp;
});

// Set revalidation period
export const revalidate = 10; // 1 hour

export default async function Home() {
  // Fetch data immediately
  const data = await getCachedData();
  const category = await getCachedCategories();

  return (
    <>
      <Categories category={category} />
      <Trendy />
      <Latest />
      <Products />
    </>
  );
}

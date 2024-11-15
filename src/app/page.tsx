import Trendy from "./components/Trendy";
import Latest from "./components/Latest";
import Products from "./components/Products";
import Categories from "./components/Categories";
import { client } from "@/lib/sanityClient";
export const revalidate = 3600;
const getData = async () => {
  const resp = await client.fetch(
    `*[_type == 'watches']{
    _id,
    'images':images[0],
    'category':category->category,
    pname,
    pdesc,
    pprice,
    _createdAt
  }`,
    { revalidate: revalidate }
  );
  return resp;
};
const getCategory = async () => {
  const resp = await client.fetch(`*[_type=='categories']{
    _id,
    category,
    img
  }`,
    { revalidate: revalidate }
  );
  return resp;
};
export default async function Home() {
  const data = await getData();
  const category = await getCategory();
  return (
    <>
      <Categories category={category} />
      <Trendy />
      <Latest />
      <Products />
    </>
  );
}

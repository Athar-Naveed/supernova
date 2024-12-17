import Image from "next/image";
import Link from "next/link";
const Categories = ({ category }: any) => {
  return (
    <>
      {/* For Categories */}
      <div className="my-12 bg-base-200">
        <div className="heading">
          <span>Categories</span>
        </div>
        <div className="category-contaier grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-center mt-4">
          {category?.map((item: any) => {
            console.log("item", item);
            return (
              <>
                <Link
                  href={{
                    pathname: `${item.category}`,
                    query: { search: item.category },
                  }}
                  key={item._id}
                >
                  <div className="mb-8">
                    <div className="bg-white dark:bg-slate-800 text-black dark:text-slate-200 text-center rounded-lg w-[95%] mx-1 h-fit grid items-center justify-center">
                      {item.img ? (
                        item.img
                      ) : (
                        <Image
                          src={item.imgUrl}
                          className="all icon aspect-[4/3] object-cover"
                          width={200}
                          height={100}
                          alt={item.category}
                        />
                      )}
                      {item.category}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;

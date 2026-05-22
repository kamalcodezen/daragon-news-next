import { ul } from "framer-motion/client"

async function getCategory() {

  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data?.data?.news_category;
}


export default async function Home() {

  const category = await getCategory()
  console.log(category, "category data")
  return (
    <>
      <div className="grid grid-cols-12 w-11/12 mx-auto my-[30px]">

        <div className=" col-span-3">
          <h2 className=" text-xl font-bold">
            All Category
          </h2>
          <div className="mt-4 flex justify-center">
            <ul className="space-y-1">
              {category.map((cate) => (
                <li
                  key={cate.category_id}
                  className="text-lg font-medium bg-gray-100 p-1 px-5 rounded-s-sm"
                >
                  {cate.category_name}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="bg-red-300 col-span-6">
          <h2>news</h2>
        </div>
        
        <div className="bg-yellow-300 col-span-3">
          <h2>social</h2>
        </div>

      </div>
    </>
  );
}

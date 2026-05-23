import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";
import { getCategory, getCategoryNews } from "@/lib/data";

const CategoryNewsPage = async ({ params }) => {
  const { categoryId } = await params;
  //   console.log(categoryId);

  const category = await getCategory();

  const news = await getCategoryNews(categoryId);
  //   console.log(news);

  return (
    <>
      <div className="mx-auto my-[30px] grid w-11/12 grid-cols-12 gap-5">
        {/* CATEGORY */}
        <LeftSideBar category={category} activeCategory={categoryId} />

        {/* NEWS */}
        <div className="col-span-6  bg-gray-100">
          <h2 className="text-lg font-bold">Category News</h2>
          <div className="p-4 font-medium">
            {news.length > 0 ? (
              news.map((n) => <NewsCard key={n._id} n={n}></NewsCard>)
            ) : (
              <h2>News Not Found</h2>
            )}
          </div>
        </div>

        {/* SOCIAL */}

        <div className="col-span-3 ">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default CategoryNewsPage;

import LeftSideBar from "@/components/homePage/news/LeftSideBar";
import NewsCard from "@/components/homePage/news/NewsCard";
import RightSideBar from "@/components/homePage/news/RightSideBar";
import NewsNotFound from "@/components/shared/NewsNotFound";
import { getCategory, getCategoryNews } from "@/lib/data";

const CategoryNewsPage = async ({ params }) => {
  const { categoryId } = await params;

  const category = await getCategory();

  const news = await getCategoryNews(categoryId);

  return (
    <>
      <div className="mx-auto my-[30px] grid w-11/12 grid-cols-1 gap-5 lg:grid-cols-12">
        {/* CATEGORY */}
        <div className="lg:col-span-3">
          <LeftSideBar category={category} activeCategory={categoryId} />
        </div>

        {/* NEWS */}
        <div className="lg:col-span-6">
          <h2 className="text-lg font-bold">Category News</h2>

          <div className="p-3 font-medium">
            {news.length > 0 ? (
              news.map((n) => <NewsCard key={n._id} n={n} />)
            ) : (
              <NewsNotFound />
            )}
          </div>
        </div>

        {/* SOCIAL */}
        <div className="lg:col-span-3">
          <RightSideBar />
        </div>
      </div>
    </>
  );
};

export default CategoryNewsPage;

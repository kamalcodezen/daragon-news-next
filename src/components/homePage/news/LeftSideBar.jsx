import Link from "next/link";

const LeftSideBar = ({ category, activeCategory }) => {
  return (
    <div className="col-span-3">
      {/* TITLE */}

      <h2 className="text-md font-black">All Category</h2>

      {/* CATEGORY LIST */}

      <div className="mt-3">
        <ul className="space-y-2">
          {category.map((cate) => (
            <li key={cate.category_id}>
              <Link href={`/category/${cate.category_id}`}>
                <div
                  className={`cursor-pointer rounded-md px-5 py-2 text-sm  font-medium transition-all duration-300
                  
                    ${
                      activeCategory === cate.category_id
                        ? "bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-lg"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    }
                  `}
                >
                  {cate.category_name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;

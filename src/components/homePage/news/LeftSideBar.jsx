"use client";

import Link from "next/link";
import { useState } from "react";

const LeftSideBar = ({
  category,
  activeCategory,
}) => {

  const [isOpen, setIsOpen] =
    useState(false);

  return (

    <div className="w-full">

      {/* MOBILE DROPDOWN */}

      <div className="mb-4 lg:hidden">

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }

          className="flex w-full items-center justify-between rounded-md bg-red-600 px-4 py-3 font-semibold text-white"
        >

          All Category

          <span>
            {isOpen ? "▲" : "▼"}
          </span>

        </button>

        {isOpen && (

          <div className="mt-2 rounded-md bg-white p-3 shadow-lg">

            <ul className="space-y-2">

              {category.map((cate) => (

                <li key={cate.category_id}>

                  <Link
                    href={`/category/${cate.category_id}`}
                  >

                    <div
                      className={`cursor-pointer rounded-md px-5 py-2 text-sm font-medium transition-all duration-300

                      ${
                        activeCategory ===
                        cate.category_id

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
        )}

      </div>

      {/* DESKTOP SIDEBAR */}

      <div className="hidden lg:block">

        {/* TITLE */}

        <h2 className="text-md font-black">

          All Category

        </h2>

        {/* CATEGORY LIST */}

        <div className="mt-3">

          <ul className="space-y-2">

            {category.map((cate) => (

              <li key={cate.category_id}>

                <Link
                  href={`/category/${cate.category_id}`}
                >

                  <div
                    className={`cursor-pointer rounded-md px-5 py-2 text-sm font-medium transition-all duration-300

                    ${
                      activeCategory ===
                      cate.category_id

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

    </div>
  );
};

export default LeftSideBar;
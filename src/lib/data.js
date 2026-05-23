export async function getCategory() {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
        { cache: "no-store" },
    );
    const data = await res.json();
    return data?.data?.news_category;
}

export const getCategoryNews = async (category_id) => {
    // Fake delay for loading effect
    await new Promise((resolve) =>
        setTimeout(resolve, 3000)
    );
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
    const data = await res.json();
    return data.data;
};
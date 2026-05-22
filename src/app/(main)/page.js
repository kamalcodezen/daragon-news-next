import { redirect } from "next/navigation";

const category_id = "01"

const Home = async () => {
  redirect(`/category/${category_id}`)
};

export default Home;
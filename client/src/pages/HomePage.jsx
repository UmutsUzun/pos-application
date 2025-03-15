import Categories from "../components/categories/Categories.jsx";
import Header from "../components/header/Header.jsx";
import Products from "../components/products/Products.jsx";
import CartTotals from "../components/cartTotals/CartTotals.jsx";
import { useState,useEffect } from "react";
const HomePage = () => {

  const [categories,setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch ("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
        setCategories(
          data.map((item) => {
            return { ...item, value: item.title };
          })
        );
      } catch (error) {
        console.log();
      }
    };
    getCategories()
  },[])
  return (
    <>
    <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories categories={categories} setCategories={setCategories}/>
      
        </div>
        <div className="products flex-[8]  max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products categories={categories}/>
          </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px]  md:-mt-[24px] border
        ">
          <CartTotals/>
          </div>
        </div>
    </>
  )
}

export default HomePage
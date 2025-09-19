import axios from "axios";
import { useEffect, useState } from "react";
import TrendingCard from "../TrendingCard";

function ShopSection() {
  const [allProducts, setAllProducts] = useState([
    {
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
  ]);

  //   async function getAllProducts() {
  //     try {
  //       let response = await fetch("https://dummyjson.com/products?limit=1&skip=1",);
  //       let data = await response.json();
  //       console.log(data.products);
  //       setAllProducts(data.products)
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  async function getAllProducts() {
    try {
      let response = await axios.post("http://localhost:3000/movies",{
        name:"mirai",
        videoUrl:"https://mirakhkjh.com",
        cast:["teja sajja"]
      });
      setAllProducts(response.data.product);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log("allproduct",allProducts)

  return (
    <section className="h-screen w-screen">
      <h1 className="text-center bg-[var(--primaryColor)] text-[var(--secondryColor)] font-bold text-5xl capitalize py-3">
        All Products
      </h1>
      {/* ===============Products list============= */}
      <div className="flex flex-wrap gap-7">
        {/* =======map data ======== */}

        {allProducts.map((product, idx) => (
          <TrendingCard
            key={idx}
            imgUrl={product.thumbnail}
            srNo={product.id}
            productName={product.product}
            desc={product.instructions}
            mrp={product.price}
            price={product.finalprice}
          />
        ))}
      </div>
    </section>
  );
}

export default ShopSection;



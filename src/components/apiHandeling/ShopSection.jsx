import axios from "axios";
import { useEffect, useState } from "react";

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
      let response = await axios.get("https://dummyjson.com/products");
      setAllProducts(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

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
            productName={product.title}
            desc={product.description}
            mrp={product.price}
            price={( product.price*product.discountPercentage - product.price ).toFixed(1)}
          />
        ))}
      </div>
    </section>
  );
}

export default ShopSection;

const TrendingCard = ({
  productName = "abc",
  imgUrl = "./assets/images/7.webp",
  srNo = 1,
  desc,
  price,
  mrp,
}) => {
  return (
   
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src={imgUrl}
            alt={productName}
            className="w-full h-52 object-cover"
          />
          <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {srNo}
          </span>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{productName}</h3>
            <p className="text-gray-500 mt-1">{desc}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">₹{price}</p>
              <p className="text-sm text-gray-500 line-through">₹{mrp}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-yellow-400">★★★★</div>
              <div className="text-gray-300">★</div>
              <span className="text-sm text-gray-600 ml-1">(42)</span>
            </div>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
   
  );
};

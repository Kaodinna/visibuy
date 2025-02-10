import { useState } from "react";
import { Link } from "react-router-dom";
import { Products } from "../services/core/types";
import useFetchData from "../services/api/request";

const FeaturedProducts = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { data, loading, error } = useFetchData<{ products: Products[] }>(
    "https://dummyjson.com/products/?limit=20"
  );

  const filteredProducts = data?.products?.filter((product: Products) => {
    return (
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "All" || product.category === selectedCategory)
    );
  });
  if (error) {
    alert(error);
  }

  return (
    <div className="py-12 font-Montserrat bg-white flex flex-col w-full">
      <div className="text-center w-full md:w-[30%] mx-auto flex flex-col justify-center items-center space-y-4">
        <h4 className="font-normal text-[20px] text-[#737373]">
          Featured Products
        </h4>
        <h3 className="font-bold text-[24px] text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>
      </div>

      <div className="flex flex-col items-center mt-8 w-full px-4">
        <input
          type="text"
          placeholder="Search by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-[50%] px-4 py-2 border border-gray-300 rounded-md"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-4 w-full md:w-[30%] px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Categories</option>
          {[...new Set(data?.products.map((product) => product.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        {loading ? (
          <div className="text-center text-gray-500 text-lg py-10">
            Loading products...
          </div>
        ) : filteredProducts && filteredProducts?.length > 0 ? (
          <div className="py-8 px-4 grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-8 md:w-[80%]">
            {filteredProducts?.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 w-full">
                  <div className="h-[60%]">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[220px] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pb-6 pt-4 text-center font-bold leading-[24px] flex flex-col gap-3 w-full">
                    <h5 className="text-[16px] tracking-[0.1px] text-[#252B42] truncate">
                      {product.title}
                    </h5>
                    <span className="text-[14px] tracking-[0.2px] text-[#737373]">
                      {product.category}
                    </span>
                    <span className="flex flex-row items-center justify-center py-2 px-3 gap-3 tracking-[0.1px]">
                      <h5 className="text-[#BDBDBD] line-through">
                        ${product.price.toFixed(2)}
                      </h5>
                      <h5 className="text-[#23856D]">
                        $
                        {(
                          product.price -
                          (product.price * product.discountPercentage) / 100
                        ).toFixed(2)}
                      </h5>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

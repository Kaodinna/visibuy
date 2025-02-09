import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FeaturedProducts = () => {
  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products/?limit=${20}`
      );
      setData(response.data.products);
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const calculateDiscountedPrice = (price: string, discountPercent: string) => {
    const parsedPrice = parseFloat(price);
    const parsedDiscountPercent = parseFloat(discountPercent);

    if (isNaN(parsedPrice) || isNaN(parsedDiscountPercent)) {
      return "Invalid input. Please provide valid numbers.";
    }

    const discountedPrice =
      parsedPrice - (parsedPrice * parsedDiscountPercent) / 100;
    return discountedPrice.toFixed(2); // Assuming you want two decimal places
  };

  return (
    <div className="py-12 font-Montserrat bg-white flex flex-col w-full">
      <div className="text-center w-full md:w-[30%] mx-auto flex flex-col justify-center items-center space-y-4">
        <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
          Featured Products
        </h4>
        <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        {loading ? (
          <div className="text-center text-gray-500 text-lg py-10">
            Loading products...
          </div>
        ) : data && data.length > 0 ? (
          <div className="py-8 px-4 grid md:grid-cols-4 grid-cols-1 gap-x-6 gap-y-8 items-center md:w-[80%]">
            {data.map((product) => (
              <Link to={`/selected-product/${product?.id}`} key={product?.id}>
                <div className="flex flex-col items-center   bg-white shadow-md rounded-lg p-4 flex-grow w-full">
                  <div className="h-[60%]">
                    <img
                      src={product?.images[0]}
                      alt={product?.title || "Product Image"}
                      className="h-[220px] w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pb-6 pt-4 text-center font-bold leading-[24px] h-[40%] flex flex-col gap-3 w-full">
                    <h5 className="text-[16px] tracking-[0.1px] text-[#252B42] truncate">
                      {product?.title}
                    </h5>
                    <span className="text-[14px] tracking-[0.2px] text-[#737373]">
                      {product?.category}
                    </span>
                    <span className="flex flex-row items-center justify-center py-2 px-3 gap-3 tracking-[0.1px]">
                      <h5 className="text-[#BDBDBD] line-through">
                        ${product?.price}
                      </h5>
                      <h5 className="text-[#23856D]">
                        $
                        {calculateDiscountedPrice(
                          product?.price,
                          product?.discountPercentage
                        )}
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

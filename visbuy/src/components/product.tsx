import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Product } from "../services/core/types";
import useFetchData from "../services/api/request";

const ViewProduct = () => {
  const { id } = useParams();

  const { data: product } = useFetchData<Product>(
    `https://dummyjson.com/products/${id}`
  );
  function renderStockStatus(stock: number | undefined): string {
    const actualStock = stock !== undefined ? stock : 0;

    return actualStock > 0 ? "In Stock" : "Out of Stock";
  }

  return (
    <div className="font-Montserrat font-[700] ">
      <div className="bg-[#FAFAFA] md:px-10 px-4">
        <div className="py-[24px] ">
          <span className=" gap-[15px] items-center text-[14px] leading-[24px] tracking-[0.2px] flex flex-row">
            <Link to="/" className=" text-[#252B42]">
              Home
            </Link>
            <GoChevronRight className="text-[#BDBDBD] " />
            <h6 className="text-[#BDBDBD]">Shop</h6>
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-[30px] pb-[48px]">
          <div className="md:w-[40%]">
            <img
              src={product?.thumbnail}
              alt=""
              className="h-[220px] w-full object-contain"
            />
          </div>
          <div className="md:w-[60%]">
            <div className="border-b-[1px] border-[#BDBDBD] pb-[120px] w-full">
              <h4 className="font-[400] text-[20px] leading-[30px] text-[#252B42]">
                {product?.title}
              </h4>
              <span className="flex flex-row gap[10px] items-center mt-4">
                <h6 className="text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                  10 Reviews
                </h6>
              </span>
              <h3 className="text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mt-4">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product?.price || 0)}
              </h3>
              <span className="text-[14px] leading-[24px] tracking-[0.1px] flex flex-row gap-[5px]">
                <h6 className="text-[#737373]">Availability :</h6>
                <h6 className="text-[#23A6F0]">
                  {renderStockStatus(product?.stock)}
                </h6>
              </span>
            </div>
            <div className="flex flex-row gap-[10px] mt-8">
              <span className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></span>
            </div>
            <div className="mt-20 flex flex-row gap-[10px] items-center">
              <button className="bg-[#23A6F0] py-[10px] px-[20px] rounded-[5px] text-[14px] leading-[24px] tracking-[0.2px]">
                Select Options
              </button>
              <span className="border-[1px] cursor-pointer w-[40px] h-[40px] rounded-[44.79px] flex justify-center items-center bg-[#FFFFFF]">
                <IoHeartOutline color="#000000" size={24} />
              </span>
              <span className="border-[1px] cursor-pointer w-[40px] h-[40px] rounded-[44.79px] flex justify-center items-center bg-[#FFFFFF]">
                <BsCart3 color="#000000" size={24} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[24px] px-4  md:px-10">
        <span className="font-[600] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] flex flex-row text-center justify-center gap-[28px] border-b-[1px] border-[#ECECEC] pb-[24px]">
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span className="font-[700] text-[#23856D]">(0)</span>
          </p>
        </span>
        <div className="pt-[24px] pb-[48px] flex md:flex-row flex-col gap-[30px] justify-between">
          <div className="md:w-[50%] w-full pb-[25px] text-[#737373]">
            <h3 className="text-[#252B42] text-[24px] leading-[32px] tracking-[0.1px]">
              the quick fox jumps over{" "}
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h5 className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] border-l-[3px] border-[#23856D] pl-[24px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h5>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="md:w-[50%] w-full">
            <img
              alt=""
              src="/images/unsplash.svg"
              width={413}
              height={372}
              className="rounded-[9px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewProduct;

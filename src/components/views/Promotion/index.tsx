import Image from "next/image";
import Event1 from "../../assets/event1.webp";
import Event2 from "../../assets/event2.webp";
import Event3 from "../../assets/event3.webp";

const Promotion = () => {
  return (
    <div className="py-10">
      <p className="text-center text-blue-700 font-bold text-sm">PROMOTION</p>
      <h2 className="text-center text-3xl sm:text-4xl font-bold py-5">
        Our Promotion Events
      </h2>

      <div className="lg:flex gap-10 mt-10">
        <div className="flex flex-col  justify-between gap-2 lg:w-2/5">
          <div className="flex flex-col md:flex-row justify-between items-center w-full bg-gray-300 h-1/2">
            <div className="px-7 py-2 ">
              <h3 className="text-4xl font-bold">
                GET <br className="hidden lg:flex" /> UP{" "}
                <br className="hidden lg:flex" /> TO{" "}
                <br className="hidden lg:flex" /> 60%
              </h3>
              <p className="text-lg text-gray-700">
                For the <br className="hidden lg:flex" /> summer{" "}
                <br className="hidden lg:flex" /> season
              </p>
            </div>
            <div className="h-full ">
              <Image className="h-full" src={Event1} alt="evetn1" />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-black text-white p-10 w-full h-1/2">
            <h3 className="lg:text-4xl text-3xl font-bold p-5 text-center">
              GET 30% OFF
            </h3>
            <p className="text-center">USE PROMO CODE</p>
            <button className="bg-gray-700 py-2 px-3 rounded-xl text-lg lg:text-2xl font-bold">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row mt-5 gap-2 lg:gap-10 lg:mt-0 w-full lg:w-3/5">
          <div className=" bg-amber-300 w-full md:w-1/2">
            <div className="m-10">
              <p className="text-xl">Flex Sweatshirt</p>
              <p className="text-lg">
                <del className="mr-2">$100.00</del>
                <span className="text-2xl font-bold">$75.00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={Event2} alt="event2" />
            </div>
          </div>
          <div className="bg-slate-400 w-full md:w-1/2">
            <div className="m-10">
              <p className="text-xl">Flex Sweatshirt</p>
              <p className="text-lg">
                <del className="mr-2">$100.00</del>
                <span className="text-2xl font-bold">$75.00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={Event3} alt="event3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;

import carImage from "../image/supply/car.png";
import station from "../image/supply/petrolStation.png";
import supply from "../image/supply/supply.png";
import store from "../image/supply/store.png";

const Supply = function () {
  const images = [carImage, station, supply, store];

  return (
    <>
      <section className="bg-whiteLight  py-3 px-1 lg:p-0 ">
        <div className="md:container font-poppins h-[394px]  flex flex-col lg:flex-row justify-center lg:justify-between text-center lg:text-start gap-6 items-center">
          <h2 className="text-5xl font-bold leading-tight text-black lg:w-[30%]">
            The biggest supplier on the country
          </h2>
          <p className=" text-base font-normal lg:w-[55%] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
        <div className="min-h-[426px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {images.map((image, i) => (
            <div key={i}>
              <img
                src={image}
                alt="supplyImage"
                className=" h-full w-full px-2 lg:w-[458px] lg:h-[426px]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Supply;

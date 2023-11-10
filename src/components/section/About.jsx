import road from "../image/about/road.png";
import { brandImage } from "../image/about/brands/brandimage";
import Worker from "./Worker";
const About = function () {
  return (
    <>
      <section>
        <div className=" bg-subGray md:h-[633px] flex justify-center items-center">
          <div className="p-0 h-[100%] container flex flex-col lg:flex-row   lg:h-[361px]">
            <div className="grow py-10 md:py-0 flex justify-center items-center bg-mainRed">
              <h2 className="text-4xl w-[60%] font-bold text-white">
                Learn more about our company
              </h2>
            </div>
            <div>
              <img
                src={road}
                alt="roadImage"
                className=" h-full  w-full object-cover lg:object-fill lg:w-[726px]"
              />
            </div>
          </div>
        </div>
        <div className="  lg:h-[327px] flex items-center bg-white ">
          <div className="container  grid grid-cols-1 place-items-center p-6 lg:p-0 sm:grid-cols-2 lg:grid-cols-4 w-full ">
            {brandImage.map((image, i) => (
              <img key={i} src={image} alt="brands" />
            ))}
          </div>
        </div>
        <Worker />
      </section>
    </>
  );
};

export default About;

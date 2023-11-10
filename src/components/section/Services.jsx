import servicesContent from "../image/services/services";
import Button from "../ui/Button";
const Services = function () {
  return (
    <>
      <section>
        <div className=" grid grid-cols-1 py-4 lg:grid-cols-2">
          <div className=" container w-full h-[410px]  flex flex-col items-center justify-center">
            <div className=" w-[50%]">
              <h2 className=" lg:text-[64px] text-[50px] font-bold">
                Our Services
              </h2>
              <p className="text-base font-normal">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>

          {servicesContent.map((content) => (
            <div
              key={content.id}
              className=" relative flex items-center   lg:justify-center  "
            >
              <img
                className=" w-full lg:w-[960px] object-cover h-[410px] lg:h-[410px]"
                src={content.image}
                alt="slider"
              />
              <div className=" absolute w-[100%] lg:w-[80%] text-center lg:text-start  ">
                <h3 className="text-[36px] text-white font-bold mb-5">
                  {content.name}
                </h3>
                <Button>Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;

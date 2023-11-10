import { workerImage } from "../image/about/brands/brandimage";
import Button from "../ui/Button";

const Worker = function () {
  return (
    <>
      <div className=" py-5  bg-subGray flex-col justify-center flex items-center h-full lg:h-[673px]">
        <div className="container flex flex-col lg:flex-row justify-between lg:h-[410px]  ">
          {workerImage.map((image, i) => (
            <div
              key={i}
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "fill",
              }}
              className=" lg:w-[339px] p-14 h-full flex justify-center flex-col gap-14 "
            >
              <h3 className="text-[24px] font-bold text-white">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <Button style={{ background: "#ffffff50" }}>Read more</Button>
            </div>
          ))}
        </div>
        <h4 className="container text-right text-base text-black font-bold pt-4 w-full">
          MORE FROM THE BLLOG
        </h4>
      </div>
    </>
  );
};

export default Worker;

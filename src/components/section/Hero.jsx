import Button from "../ui/Button";
import banner from "../image/banner.png";
const Hero = function () {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(" + banner + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-[#00000060] w-full h-full">
          <div className=" md:container font-poppins h-[783px]">
            <div className=" flex items-center md:items-start flex-col h-full justify-center gap-[31px]">
              <h1 className=" text-center px-3  md:text-start text-[50px] lg:text-[64px] text-white font-bold">
                We exist since 1975 on the <br /> oil and gas industry.
              </h1>
              <Button>LEARN MORE</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import ButtonSecond from "../ui/ButtonSecond";

const Maps = function () {
  return (
    <>
      <div className=" w-full h-[450px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2947843.478334086!2d24.735339577100323!3d43.819474323131104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!3m2!1d40.463667!2d-3.7492199999999998!4m5!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2sTokyo%2C%20Japan!3m2!1d35.680399699999995!2d139.7690174!5e0!3m2!1sen!2sbd!4v1699609954937!5m2!1sen!2sbd"
          width="100%"
          height="100%"
        ></iframe>
      </div>

      <div className=" bg-mainRed flex items-center justify-center border-b-[5px] border-[#FFB800] lg:h-[145px]">
        <div className=" p-6 container flex flex-col md:flex-col lg:flex-row items-center lg:justify-between text-white">
          <h3 className=" font-bold text-4xl text-center lg:text-left pb-8 lg:p-0 ">
            Want to join as member branch in your area?
          </h3>
          <ButtonSecond>CONTACT</ButtonSecond>
        </div>
      </div>
    </>
  );
};

export default Maps;

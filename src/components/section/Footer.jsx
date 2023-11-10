import icons from "../icon/icons";
import footer from "../image/footer/Logo.png";
import { footerContent } from "../constant/constant";
import cert1 from "../image/footer/Cert1.png";
import cert2 from "../image/footer/Cert2.png";
const Footer = function () {
  return (
    <>
      <section className=" md:h-[552px] flex items-center justify-center w-full bg-grayLight">
        <div className=" w-full h-full flex flex-col-reverse md:flex-row md:h-[233px] md:w-[90%] lg:w-[85%] m-auto ">
          <div className="flex p-8 md:p-0 flex-col text-white justify-between h-full md:w-[35%]">
            <img
              src={footer}
              alt="footer-logo"
              width={"215px"}
              height={"44px"}
              className=" mb-5"
            />

            <div className=" flex flex-col pb-4 gap-2">
              <div className="flex items-center gap-2">
                <span className=" text-base">{icons.envelop}</span>
                <p className=" text-xs font-normal">mail@yourcompany.com</p>
              </div>
              <div className="flex items-center gap-2">
                <span className=" text-base">{icons.phone}</span>
                <p className=" text-center text-xs font-normal">
                  +896 120 5889 (Toll free)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className=" text-base">{icons.phone}</span>
                <p className=" text-center text-xs font-normal">
                  +896 120 5889 (Toll free)
                </p>
              </div>
            </div>

            <div className="flex gap-4 text-white">
              <span className="hover:cursor-pointer bg-mainRed p-[6px] text-center rounded-full w-[35px] h-auto ">
                <a href="#">{icons.facebook}</a>
              </span>
              <span className="hover:cursor-pointer bg-mainRed p-[6px] text-center rounded-full w-[35px] h-auto ">
                <a href="#">{icons.twitter}</a>
              </span>
              <span className="hover:cursor-pointer bg-mainRed p-[6px] text-center rounded-full w-[35px] h-auto ">
                <a href="#">{icons.linkdin}</a>
              </span>
              <span className="hover:cursor-pointer bg-mainRed p-[6px] text-center rounded-full w-[35px] h-auto ">
                <a href="#">{icons.instagram}</a>
              </span>
            </div>
          </div>

          <div className="flex p-8 gap-8 md:flex-row flex-col justify-between items-start py-8 text-white  h-full grow">
            <div>
              <h4 className="text-base font-bold mb-5">Company</h4>
              <ul>
                {footerContent.company.map((menu, i) => (
                  <li className="text-[14px] font-normal mb-2" key={i}>
                    <a href="#">{menu}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-5">Others</h4>
              <ul>
                {footerContent.other.map((menu, i) => (
                  <li className="text-[14px] font-normal mb-2" key={i}>
                    <a href="#">{menu}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold mb-5">Certificate</h4>
              <div className="flex gap-2">
                <img src={cert1} alt="cert1" />
                <img src={cert2} alt="cert2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;

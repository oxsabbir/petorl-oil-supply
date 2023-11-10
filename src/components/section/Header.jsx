import icons from "../icon/icons";
const Header = function () {
  return (
    <>
      <header
        className=" bg-mainGray sm:h-[51px] p-2 flex  items-center
      "
      >
        <div className=" sm:container  text-white m-auto items-center  flex justify-between  flex-col sm:flex-row">
          <div className=" flex gap-8 sm:gap-14">
            <div className="flex items-center justify-center gap-2">
              <span className=" text-base">{icons.envelop}</span>
              <p className=" text-xs font-normal">mail@yourcompany.com</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className=" text-base">{icons.phone}</span>
              <p className=" text-center text-xs font-normal">
                +896 120 5889 (Toll free)
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="hover:cursor-pointer ">
              <a href="#">{icons.facebook}</a>
            </span>
            <span className="hover:cursor-pointer ">
              <a href="#">{icons.twitter}</a>
            </span>
            <span className="hover:cursor-pointer ">
              <a href="#">{icons.linkdin}</a>
            </span>
            <span className="hover:cursor-pointer ">
              <a href="#">{icons.instagram}</a>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

const Button = function (props) {
  return (
    <>
      <button
        className=" bg-mainRed w-[186px] h-[51px] text-base font-semibold text-white"
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;

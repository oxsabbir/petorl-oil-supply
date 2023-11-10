const ButtonSecond = function (props) {
  return (
    <>
      <button
        className=" w-[140px] h-[50px] border-2 text-base font-semibold"
        {...props}
      >
        {props.children}
      </button>
    </>
  );
};

export default ButtonSecond;

import aws from "../assets/aws_logo.svg";
const Header = () => {
  return (
    <header className="max-w-6xl flex justify-between  items-center p-5 flex-wrap gap-6  text-black my-6 m-auto w-full font-medium   bg-white shadow-lg rounded-md text-2xl text-center">
      All Available Aws Machines
      <img src={aws} alt="aws" className="h-20 w-20 " />
    </header>
  );
};

export default Header;

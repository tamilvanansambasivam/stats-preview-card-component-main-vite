import mobileImg from "../images/image-header-desktop.jpg";
import desktopImg from "../images/image-header-desktop.jpg";
import NumberData from "./component/NumberData";

function App() {
  return (
    <div className="bg-VeryDarkBlue h-screen flex justify-center items-center ">
      <div className="pt-20">
        <div className="mx-auto  bg-DarkDesaturatedBlue sm:flex sm:max-w-[66%] sm:min-w-[66%] w-[80%] rounded-md overflow-hidden ">
          <div className="sm:hidden bg-SoftViolet">
            <img src={mobileImg} className="mix-blend-multiply opacity-75" />
          </div>
          <div className="sm:flex">
            <div className="px-8 sm:p-10 grid space-y-6  items-center sm:w-[50%] text-center sm:text-left">
              <div>
                <h1 className="px-2 sm:px-0 text-2xl sm:text-3xl font-inter font-bold text-White tracking-wide  mt-8">
                  Get <span className="text-SoftViolet">insights</span> that
                  help your business grow.
                </h1>
                <p className="text-headingWhite text-base mt-10">
                  Discover the benefits of data analytics and make better
                  decisions regarding revenue, customer experience, and overall
                  efficiency.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-4 sm:space-y-0 py-4">
                  <NumberData number={"10k+"} about={"companies"} />
                  <NumberData number={"314"} about={"templates"} />
                  <NumberData number={"12M+"} about={"queries"} />
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-[50%] bg-SoftViolet">
              <img
                src={desktopImg}
                className="h-[100%] mix-blend-multiply opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

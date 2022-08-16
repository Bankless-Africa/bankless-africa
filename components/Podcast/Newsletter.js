import Image from "next/image";
import newsletter from "../../asset/Images/newsletter.png";

const Newsletter = () => {
  
  return (
    <div className="px-6 py-4 bg-white sm:bg-black sm:px-12 sm:py-20">
      <div className="flex items-center justify-center px-6  py-4 bg-black sm:bg-white rounded-3xl sm:px-10 sm:py-16">
        <div>
            <div className="max-w-5xl flex flex-col justify-center">
                <div className="xl:px-10 lg:flex justify-center items-center w-full">
                    <div className="max-w-lg">
                        <h1 className="text-3xl text-start text-white sm:text-black sm:text-5xl font-semibold sm:font-bold lg:font-bold lg:text-6xl xl:font-bold xl:text-6xl">
                        Subscribe to Bankless Africa
                        </h1>
                        <p className="text-xs text-start text-white sm:text-black sm:font-normal sm:text-base sm:mt-3 lg:font-normal lg:text-base xl:text-xl xl:font-normal xl:text-left">
                        Get updates on our upcoming community events sent straight to your
                        inbox.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={newsletter}
                            alt="newsletter"
                            width={640}
                            height={540} />
                    </div>
                </div>
                    <form
                        className="flex flex-col lg:flex-row xl:px-10 justify-between items-center space-x-5 max-w-xl space-y-4 lg:space-y-0"
                        action="https://banklessafrica.substack.com/api/v1/free"
                        method="POST" target="_blank">
                        <input type="text" placeholder="Email address" className="bg-black sm:bg-white placeholder:text-white sm:placeholder:text-black border-red-600 border-[1.5px] w-full p-2.5 rounded-lg text-center outline-none text-white sm:text-black" />
                    <button
                        className="w-32 h-12 text-lg text-center text-white bg-red-600 rounded-lg"
                        type="submit">Sign up</button>
                    </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
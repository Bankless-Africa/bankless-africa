import box1 from "../../components/Podcast/Images/box1.png";
import box2 from "../../components/Podcast/Images/africa.png";
import dao from "../../components/Podcast/Images/dao.png";
import Image from "next/image";

function PastCard() {
  return (
    <section>
       <p class="ml-10 mt-20 mb-20 text-4xl text-white">Upcoming Podcast</p>
      <div className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-2 3xl:flex">
        <div className="p-8 cursor-pointer group">
          <Image
            layout="responsive"
            src={box1}
            width={350}
            height={300}
            alt="underline"
          />
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 cursor-pointer group">
          <div className="bg-red-900">
          <Image
           width={350}
           height={230}
            layout="responsive"
            src={box2}
            alt="underline"
          />
          <Image className="w-8 h-8"
            src={dao}
            alt="underline"
          />
          </div>
         
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 cursor-pointer group">
          <Image
            layout="responsive"
            src={box1}
            width={350}
            height={300}
            alt="underline"
          />
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 cursor-pointer group">
          <Image
            layout="responsive"
            src={box1}
            width={350}
            height={300}
            alt="underline"
          />
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
      </div>
      <p class="ml-10 mt-20 mb-20 text-4xl text-white">Past Podcast</p>
      <div className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-2 3xl:flex">
        <div className="p-8 cursor-pointer group">
          <Image
            layout="responsive"
            src={box1}
            width={350}
            height={300}
            alt="underline"
          />
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
        <div className="p-8 cursor-pointer group">
          <div className="bg-red-900">
          <Image
           width={350}
           height={230}
            layout="responsive"
            src={box2}
            alt="underline"
          />
          <Image className="w-8 h-8"
            src={dao}
            alt="underline"
          />
          </div>
         
          <div className="bg-[#263238] flex flex-col space-y-3">
            <p className="px-8 mt-4 text-base text-white">
              Hosted by <span className="text-red-600">Miss Purple</span>
            </p>
            <h1 className="px-8 text-lg font-semibold text-white">
              The Art Of DAOing with Ap0ll0
            </h1>
            <p className="px-8 text-sm text-white">
              What’s a DAO? How does one contribute? We explore this and many
              more from the contributor perspective in today’s episode with
              SuperUman & BanklessDAO contributor Ap0ll0
            </p>
            <div className="flex justify-between py-6 px-2 pb-4 space-x-4 sm:px-8">
              <button className="flex items-center p-1 text-white bg-red-600 rounded-lg">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0
                008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm mr-2"> Play this episode </p>
              </button>
              <button className="bg-[#34454E] p-1 text-white rounded-lg flex items-center">
                <span className="mr-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0
                    00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              <p className="text-sm mr-2"> 30 mins </p>  
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default PastCard;

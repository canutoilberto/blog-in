import Image from "next/image";
import { FaNetworkWired } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <section className="text-center mb-8">
        <h2 className="text-sm font-medium text-gray-600">
          WELCOME TO BULETIN
        </h2>
        <p className="text-xl font-bold text-gray-900">
          Craft narratives{" "}
          <span role="img" aria-label="writing hand">
            ✍️
          </span>{" "}
          that ignite inspiration{" "}
          <span role="img" aria-label="light bulb">
            💡
          </span>
          , knowledge{" "}
          <span role="img" aria-label="book">
            📚
          </span>
          , and entertainment{" "}
          <span role="img" aria-label="clapper board">
            🎬
          </span>
        </p>
      </section>
      <section className="mb-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <Image
            src="/jw_4.jpg"
            width={1000}
            height={1000}
            alt="John Wick: Chapter 4"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="mt-4 md:mt-0 md:w-1/2">
            <div className="flex items-center space-x-2 text-gray-500">
              <FaNetworkWired className="w-4 h-4" />
              <span>12 minutes ago</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Where To Watch &apos;John Wick: Chapter 4&apos;
            </h3>
            <p className="mt-2 text-gray-700">
              There&apos;s been no official announcement regarding John Wick:
              Chapter 4&apos;s streaming release. However, given it&apos;s a
              Lionsgate film, John Wick: Chapter 4 will eventually be released
              on Starz...
            </p>
            <div className="mt-2 text-red-600">Movies • 4 min read</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

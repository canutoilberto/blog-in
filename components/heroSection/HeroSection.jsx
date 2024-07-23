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
      <section className="mb-8">
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
              on Starz. There&apos;s been no official announcement regarding
              John Wick: Chapter 4&apos;s streaming release. However, given
              it&apos;s a Lionsgate film, John Wick: Chapter 4 will eventually
              be released on Starz, following the pattern of its predecessors.
              This anticipated sequel, which continues the relentless saga of
              the eponymous assassin played by Keanu Reeves, has fans eagerly
              awaiting its home viewing options. John Wick: Chapter 4, directed
              by Chad Stahelski, has already garnered significant buzz with its
              theatrical release. The film expands on the rich, action-packed
              universe of the John Wick franchise, offering more intense fight
              scenes, a deeper dive into the underworld of assassins, and the
              return of beloved characters. With its intricate choreography and
              gripping storyline, the movie has been a hit among critics and
              audiences alike, ensuring its place as a must-watch in the action
              genre. Lionsgate&apos;s strategic partnership with Starz means
              that viewers can expect John Wick: Chapter 4 to eventually make
              its way to the streaming platform, providing subscribers with an
              opportunity to enjoy the film from the comfort of their homes.
              This move aligns with Lionsgate&apos;s previous releases, where
              films such as John Wick: Chapter 3 – Parabellum also found their
              way to Starz after their initial theater run. While the exact date
              for the streaming release remains under wraps, the anticipation
              continues to build. Fans who may have missed the film in theaters
              or those who wish to experience the adrenaline-fueled action again
              are keeping a close eye on announcements from both Lionsgate and
              Starz.
            </p>
            <div className="mt-2 text-red-600">Movies • 4 min read</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaLongArrowAltRight, FaFigma, FaRegDotCircle } from "react-icons/fa";
import { IoBeakerOutline } from "react-icons/io5";

const MostRead = () => {
  return (
    <section className="mt-[50px] max-w-[1400px] mx-auto mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Most Read</h2>
        <a href="#" className="text-red-600">
          See all <FaLongArrowAltRight className="inline w-4 h-4" />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <Image
            width={1000}
            height={1000}
            src="/placeholder.svg"
            alt="News"
            className="w-full rounded-t-lg"
          />
          <CardContent>
            <div className="flex items-center space-x-2 text-gray-500">
              <FaFigma className="w-4 h-4" />
              <span>3 hours ago</span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              &apos;He deserves a lot more&apos; Verstappen backs Alonso
            </h3>
            <p className="mt-2 text-gray-700">
              Max Verstappen believes his fellow two-time world champion
              Fernando Alonso &quot;deserves a lot more&quot; victories in
              Formula 1 and has backed the Spaniar...
            </p>
            <div className="mt-2 text-red-600">Sport • 8 min read</div>
          </CardContent>
        </Card>
        <Card>
          <Image
            width={1000}
            height={1000}
            src="/placeholder.svg"
            alt="News"
            className="w-full rounded-t-lg"
          />
          <CardContent>
            <div className="flex items-center space-x-2 text-gray-500">
              <IoBeakerOutline className="w-4 h-4" />
              <span>12 hours ago</span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              Liverpool hammer Leeds for first win in five games
            </h3>
            <p className="mt-2 text-gray-700">
              Mohamed Salah and Diogo Jota both scored twice as Liverpool
              claimed a first league win in five games by inflicting a second
              successive home hammering o...
            </p>
            <div className="mt-2 text-red-600">Sport • 8 min read</div>
          </CardContent>
        </Card>
        <Card>
          <Image
            width={1000}
            height={1000}
            src="/placeholder.svg"
            alt="News"
            className="w-full rounded-t-lg"
          />
          <CardContent>
            <div className="flex items-center space-x-2 text-gray-500">
              <FaRegDotCircle className="w-4 h-4" />
              <span>April 17, 2023</span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              Papua: At least one killed in hunt for kidnapped NZ pilot...
            </h3>
            <p className="mt-2 text-gray-700">
              At least one Indonesian soldier has been killed in a rebel attack
              while searching for a kidnapped New Zealand pilot in the Papua
              region, officials say...
            </p>
            <div className="mt-2 text-red-600">Crime • 8 min read</div>
          </CardContent>
        </Card>
        <Card>
          <Image
            width={1000}
            height={1000}
            src="/placeholder.svg"
            alt="News"
            className="w-full rounded-t-lg"
          />
          <CardContent>
            <div className="flex items-center space-x-2 text-gray-500">
              <IoBeakerOutline className="w-4 h-4" />
              <span>April 15, 2023</span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              Jeremy Bowen: Israel&apos;s unclear road ahead
            </h3>
            <p className="mt-2 text-gray-700">
              Tensions between Israel and the Palestinians are on the rise once
              more, with hopes of peace and a two-state solution as far away as
              ever...
            </p>
            <div className="mt-2 text-red-600">Middle East • 8 min read</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MostRead;

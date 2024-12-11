import Navbar from "@/components/Navbar";
import TypeEffect from "@/components/TypeEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import profilePic from '../../public/profile.png';
export default function Home() {
  return (
      <div>
        <Navbar />
        <div className="overflow-hidden pt-[10vh] h-[100vh] bg-background-secondary">
          <div className="h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left p-4 pt-12 sm:pt-4 sm:pl-12 lg:pl-20 sm:w-1/2">
              <div className="text-xl sm:text-2xl text-gray-200 font-semibold pl-1.5">Hello! I&apos;m</div>
              <div className="text-4xl sm:text-6xl font-bold text-text-primary my-3">Sanyam Rana</div>
              <div className="text-xl sm:text-2xl text-gray-200 font-semibold mt-2 mb-4 sm:mb-8">Fullstack Developer based in India.</div>
              <TypeEffect />
              <div className="flex justify-center sm:block">
              <button className="flex mt-4 md:mt-12 border py-2 px-6 rounded-lg w-auto border-gray-200"><ArrowDownTrayIcon className="h-6 w-6 pr-1" />Resume</button>
              </div>
            </div>
            <div className="flex justify-end self-end sm:w-1/2">
              <div className="absolute sm:bottom-0 sm:relative pt-8 overflow-hidden">
                <Image src={profilePic} alt="Profile Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

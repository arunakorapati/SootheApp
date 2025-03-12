import { useState } from "react";
import { MessageCircle, Phone, Video, LogOut, Sun, Moon } from "lucide-react";
import SootheLogo from "../assets/SootheLogo.png";
import Communication from "../assets/communication.png";

export default function PatientDashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        {/* Logo */}
        <img src={SootheLogo} alt="Logo" className="w-40 h-20" />

        {/* Navigation + Actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block p-2 pl-4 pr-4 rounded-md font-semibold hover:bg-neutral-900 hover:cursor-pointer">
            About
          </button>
          <button className="hidden md:block p-2 pl-4 pr-4 rounded-md font-semibold hover:bg-neutral-900 hover:cursor-pointer">
            Team
          </button>
          <button className="hidden md:block p-2 pl-4 pr-4 rounded-md font-semibold hover:bg-neutral-900 hover:cursor-pointer">
            Learn
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-neutral-700 hover:cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Logout Button */}
          <button className="p-2 rounded-md hover:bg-neutral-700 hover:cursor-pointer">
            <LogOut size={20} />
          </button>
        </div>
      </header>
      <section className="w-full h-80 md:h-120">
        <div className="p-4 flex flex-col gap-4 w-full md:max-w-2/3">
          <span className="ml-2 md:ml-10 mt-10 text-lg md:text-4xl text-neutral-200">
            Need Someone to talk
          </span>
          <span className="ml-2 md:ml-10 text-xl md:text-6xl text-blue-300">
            Connect with a support volunteer
          </span>
          <span className="ml-2 md:ml-10 text-sm md:text-2xl text-neutral-300">
            Free confidential 24/7 support at your fingertips.
          </span>
          <div className="ml-2 md:ml-10 mt-2 md:mt-10 flex flex-row gap-4">
            {/* Text Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              <MessageCircle size={18} /> {/* Text icon */}
              <span className="hidden md:block">Text</span>
            </button>

            {/* Call Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
              <Phone size={18} /> {/* Call icon */}
              <span className="hidden md:block">Call</span>
            </button>

            {/* Video Button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
              <Video size={18} /> {/* Video icon */}
              <span className="hidden md:block">Video</span>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-100">
        <div className="p-4 w-full h-full flex flex-col-reverse items-center md:items-start md:flex-row md:justify-between">
          <div className="flex flex-col">
            <span className="ml-2 md:ml-10 text-2xl md:text-4xl text-blue-300">
              Consult SOOTHE today!
            </span>
            <p className="mt-2 md:mt-2 ml-2 md:ml-10 text-sm md:text-md text-neutral-300">
              Does your unit have an acute need for SOOTHE? No problem! Email us
              at <span className="font-semibold italic text-blue-100">SOOTHEOrg@jh.edu</span> to set up a visit today. Our volunteers are
              more than willing to come to any part of Johns Hopkins Hospital to
              visit a patient. We have filled 100% of all consults within 48
              business hours.
            </p>
          </div>

          <img src={Communication} alt="Logo" className="w-2/3 md:w-1/3 h-full" />
        </div>
      </section>
    </div>
  );
}

import { MessageCircle, Phone, Video } from "lucide-react";
import Communication from "../assets/communication.png";
import useThemeStore from "@/store/themeStore";
import { useState } from "react";
import ContactModal from "@/components/Modals/ContactModal";
import Header from  "@/components/Header";

export default function PatientDashboard() {
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      <Header />
      <section className="w-full h-80 md:h-100">
        <div className="p-4 flex flex-col gap-4 w-full md:max-w-2/3">
          <span
            className={`${
              theme === "dark" ? "text-neutral-200" : "text-black"
            } ml-2 md:ml-10 mt-10 text-lg md:text-4xl`}
          >
            Need Someone to talk
          </span>
          <span
            className={`${
              theme === "dark" ? "text-blue-300" : "text-blue-700"
            } ml-2 md:ml-10 text-xl md:text-6xl`}
          >
            Connect with a support volunteer
          </span>
          <span
            className={`${
              theme === "dark" ? "text-neutral-300" : "text-black"
            } ml-2 md:ml-10 text-sm md:text-2xl`}
          >
            Free confidential 24/7 support at your fingertips.
          </span>
          <div className="ml-2 md:ml-10 mt-2 md:mt-10 flex flex-row gap-4">
            <button
              className={`${
                theme === "dark"
                  ? "text-white border-blue-500 hover:bg-blue-600"
                  : "text-blue-500 border-blue-500 hover:bg-blue-600 hover:text-white"
              } flex items-center gap-2 px-4 py-2 border rounded-md transition-colors`}
            >
              <MessageCircle size={18} /> {/* Text icon */}
              <span className="hidden md:block">Text</span>
            </button>

            <button
              className={`${
                theme === "dark"
                  ? "text-white border-green-500 hover:bg-green-600"
                  : "text-green-500 border-green-500 hover:bg-green-600 hover:text-white"
              } flex items-center gap-2 px-4 py-2 border rounded-md transition-colors`}
            >
              <Phone size={18} /> {/* Call icon */}
              <span className="hidden md:block">Call</span>
            </button>

            <button
              className={`${
                theme === "dark"
                  ? "text-white border-purple-500 hover:bg-purple-600"
                  : "text-purple-500 border-purple-500 hover:bg-purple-600 hover:text-white"
              } flex items-center gap-2 px-4 py-2 border rounded-md transition-colors`}
            >
              <Video size={18} /> {/* Video icon */}
              <span className="hidden md:block">Video</span>
            </button>
          </div>
        </div>
      </section>
      <section className=" w-full h-100">
        <div className="p-4 w-full h-full flex flex-col-reverse md:gap-4 items-center md:items-start md:flex-row md:justify-evenly">
          <div className="flex flex-col">
            <span
              className={`${
                theme === "dark" ? "text-blue-300" : "text-black"
              } ml-2 md:ml-10 text-2xl md:text-4xl`}
            >
              Consult SOOTHE today!
            </span>
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-black"
              } mt-2 md:mt-4 ml-2 md:ml-10 text-sm md:text-md w-full md:w-1/2 font-sans`}
            >
              Does your unit have an acute need for SOOTHE? No problem! Email us
              at{" "}
              <span
                className={`${
                  theme === "dark" ? "text-blue-100" : "text-blue-700"
                } font-semibold italic`}
              >
                SOOTHEOrg@jh.edu
              </span>{" "}
              to set up a visit today. Our volunteers are more than willing to
              come to any part of Johns Hopkins Hospital to visit a patient. We
              have filled 100% of all consults within 48 business hours.
            </p>
          </div>
          <img
            src={Communication}
            alt="Logo"
            className="w-full h-full md:w-1/3"
          />
        </div>
      </section>
      {isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
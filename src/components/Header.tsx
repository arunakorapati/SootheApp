import { useState } from "react";
import useThemeStore from "@/store/themeStore";
import SootheLogo from "../assets/SootheLogo.png";
import { LogOut, Menu, Moon, Sun, X } from "lucide-react";
import { To, useNavigate } from "react-router";
import useUserStore from "@/store/userStore";
import { PatientTabState } from "@/types/types";

export default function Header() {
  const navigate = useNavigate();
  const { patientTab, setPatientTab } = useUserStore();
  const { theme, setTheme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (path: To, tab: PatientTabState) => {
    navigate(path);
    setPatientTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="p-6 flex justify-between items-center relative">
      <img src={SootheLogo} alt="Logo" className="w-40 h-20" />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => navigateTo("/patient", "Home")}
          className={`${
            theme === "dark" ? "" : "hover:bg-neutral-200"
          } ${
            patientTab === "Home"
              ? "border-b border-blue-600 shadow-lg"
              : ""
          } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
        >
          Home
        </button>
        <button
          onClick={() => navigateTo("/patient/about", "About")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-900" : " hover:bg-neutral-200"
          } ${
            patientTab === "About"
              ? "border-b border-blue-600 shadow-lg"
              : ""
          } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
        >
          About
        </button>
        <button
          onClick={() => navigateTo("/patient/team", "Team")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-200"
          } ${
            patientTab === "Team"
              ? "border-b border-blue-600 shadow-lg "
              : ""
          } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
        >
          Team
        </button>
        <button
          onClick={() => navigateTo("/volunteers", "Volunteers")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-200"
          } ${
            patientTab === "Volunteers"
              ? "border-b border-blue-600 shadow-lg "
              : ""
          } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
        >
          Volunteers
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
          } p-2 rounded-md hover:cursor-pointer`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className={`${
            theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
          } p-2 rounded-md hover:cursor-pointer`}
        >
          <LogOut size={20} />
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
          } p-2 rounded-md hover:cursor-pointer`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`${
            theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
          } p-2 rounded-md hover:cursor-pointer`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden ${theme === "dark" ? "bg-black/50" : "bg-gray-600/50"}`} onClick={() => setMobileMenuOpen(false)}>
          <div 
            className={`absolute right-0 top-0 h-screen w-64 shadow-lg ${theme === "dark" ? "bg-neutral-800" : "bg-white"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-md hover:cursor-pointer ${theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"}`}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => navigateTo("/patient", "Home")}
                  className={`${
                    theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
                  } ${
                    patientTab === "Home"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo("/patient/about", "About")}
                  className={`${
                    theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
                  } ${
                    patientTab === "About"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  About
                </button>
                <button
                  onClick={() => navigateTo("/patient/team", "Team")}
                  className={`${
                    theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
                  } ${
                    patientTab === "Team"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  Team
                </button>
                <button onClick={() => navigateTo("/volunteers", "Volunteers")}
          className={`${
            theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-200"
          } ${
            patientTab === "Volunteers"
              ? "border-b border-blue-600 shadow-lg "
              : ""
          } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
        >
          Volunteers
        </button>
                
                
                <div className="border-t my-4 border-gray-300 dark:border-gray-700"></div>
                
                <button
                  className={`${
                    theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
                  } p-2 pl-4 rounded-md font-semibold hover:cursor-pointer text-left flex items-center`}
                >
                  <LogOut size={18} className="mr-2" /> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
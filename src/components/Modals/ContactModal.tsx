
import useThemeStore from "@/store/themeStore";
import { Dialog } from "@headlessui/react";
import { MessageCircle, MessagesSquare, Phone, Video } from "lucide-react";

export default function ContactModal({ isOpen, setIsOpen }: any) {
  const { theme } = useThemeStore();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 "
    >
      <div className="relative border border-gray-400 bg-white rounded-2xl shadow-xl h-1/2 max-w-2xl w-full p-6 text-center flex flex-col">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <MessagesSquare className="text-blue-700" size={80} />
        </div>

        <h2 className="text-2xl font-bold">Need Soothe?</h2>
        <p className="mt-4 text-gray-700">
          Simply <b>text</b> or <b>Call</b> to reach a live volunteer Crisis
          Counselor.
        </p>
        <p className="mt-4 font-semibold">
          We are always here for you. Free, 24/7, confidential.
        </p>
        <p className="mt-4 text-xs">
          Message frequency varies. Message &amp; data rates may apply.{" "}
          <a className="underline text-blue-700 hover:cursor-pointer">Terms of Service &amp; Privacy Policy</a>.
        </p>

        {/* This div will push buttons to the bottom */}
        <div className="flex-grow"></div>

        {/* Buttons at the bottom */}
        <div className="ml-2 md:ml-10 mt-4 flex flex-row justify-center gap-4">
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
    </Dialog>
  );
}

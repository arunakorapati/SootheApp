import Header from "@/components/Header";
import useThemeStore from "@/store/themeStore";

export default function Learn() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      <Header />
    </div>
  );
}
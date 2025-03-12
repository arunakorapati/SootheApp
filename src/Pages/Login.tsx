import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import SootheLogo from "../assets/SootheLogo.png";
import useUserStore from "@/store/userStore";
import User from "@/types/types";
import { useNavigate } from "react-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useUserStore();
  const navigate = useNavigate();

  function handleLogin() {
    if (email === "patient@test.com" && password === "test") {
      let user: User = {
        email: email,
        type: "patient",
        isActive: true,
      };

      setCurrentUser(user);

      navigate("/patient");
    }else if(email === "nurse@test.com" && password === "test") {
      let user: User = {
        email: email,
        type: "nurse",
        isActive: true,
      };

      setCurrentUser(user);

      navigate("/volunteer");
    }  else if(email === "volunteers@test.com" && password === "test") {
      let user: User = {
        email: email,
        type: "volunteer",
        isActive: true,
      };

      setCurrentUser(user);

      navigate("/volunteers");
    }  
 else {
      alert("Invalid credentials!!");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="border flex min-h-svh w-full flex-col items-center justify-center p-4 md:p-10 gap-6">
        <div className=" w-full md:w-1/4 place-items-center">
          <motion.img
            src={SootheLogo}
            alt="Logo"
            className="w-80 h-40"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 10, -10, 0],
              y: [0, -10, 10, 0],
              x: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 15,
              y: -20,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -15,
            }}
          />
        </div>
        {/* Login Form */}
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className=" flex flex-col gap-6">
            <div className="rounded-xl border border-neutral-800 bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-2xl text-neutral-200">
                  Login
                </div>
                <div className="text-sm text-neutral-300">
                  Enter your email below to login to your account
                </div>
              </div>
              <div className="p-6 pt-0">
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input border-neutral-700 bg-transparent px-3 py-1 text-base text-neutral-200 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="email"
                        placeholder="m@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <label
                          className="text-sm text-neutral-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          itemType="password"
                        >
                          Password
                        </label>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm text-neutral-200 underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e: any) => setPassword(e.target.value)}
                          className="flex h-9 w-full rounded-md border border-input border-neutral-700 bg-transparent px-3 py-1 text-base text-neutral-200 shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          id="password"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2 text-neutral-400 hover:text-neutral-200"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>
                    <motion.button
                      className="inline-flex bg-gray-50 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:bg-primary/90 h-9 px-4 py-2 w-full hover:bg-gray-200 hover:cursor-pointer"
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogin}
                    >
                      Login
                    </motion.button>
                    <motion.button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-inherit text-neutral-200 border-neutral-700 hover:cursor-pointer hover:bg-stone-900"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login with Google
                    </motion.button>
                  </div>
                  <div className="mt-4 text-center text-sm text-neutral-200">
                    Don't have an account <span> </span>
                    <a href="#" className="underline underline-offset-4">
                      Sign up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

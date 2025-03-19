import Header from "@/components/Header";
import { motion } from "framer-motion";
import useThemeStore from "@/store/themeStore";

export default function Team() {
  const { theme } = useThemeStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      <Header />
      <section className="container mx-auto px-4 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Member 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/thumbnail_Headshot_ShreyaSriram.jpg"
                  alt="Shreya Sriram"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Shreya Sriram</h3>
              <p className="text-gray-600 mb-2">President &amp; Founder</p>
              <a
                target="_blank"
                href="https://soothe.jhmi.edu/team/shreya-sriram/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Bio
              </a>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/cropped-channels4_profile.jpg"
                  alt="Will ElNemer"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Will ElNemer</h3>
              <p className="text-gray-600 mb-2">Director</p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/Headshot.jpg"
                  alt="Lauren Russell"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">
                Lauren Russell
              </h3>
              <p className="text-gray-600 mb-2">Vice President</p>
              <a
                target="_blank"
                href="https://soothe.jhmi.edu/team/lauren-russell/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Bio
              </a>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/IMG_2719-scaled-e1725496903351.jpg"
                  alt="Keon Niknejad"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Keon Niknejad</h3>
              <p className="text-gray-600 mb-2">Vice President</p>
              <a
                target="_blank"
                href="https://soothe.jhmi.edu/team/keon-niknejad/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Bio
              </a>
            </div>
          </motion.div>

          {/* Team Member 5 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/channels4_profile.jpg"
                  alt="Jack Christian"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">
                Jack Christian
              </h3>
              <p className="text-gray-600 mb-2">Secretary</p>
            </div>
          </motion.div>

          {/* Team Member 6 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/Kenneth-Peng-Photo-2.jpg"
                  alt="Kenny Peng"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Kenny Peng</h3>
              <p className="text-gray-600 mb-2">Training Coordinator</p>
            </div>
          </motion.div>

          {/* Team Member 7 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="p-4">
              <motion.div className="w-full aspect-square overflow-hidden rounded-full mb-4">
                <motion.img
                  src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461Screenshot_20240313_004533_31305223_crop.png"
                  alt="Joon Soo Kim"
                  className="w-full h-full object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Joon Soo Kim</h3>
              <p className="text-gray-600 mb-2">Training Coordinator</p>
              <a
                href="https://soothe.jhmi.edu/team/joon-soo-kim/"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Bio
              </a>
            </div>
          </motion.div>

          {/* You can add the rest of the team members following the same pattern */}
        </motion.div>
      </section>
    </div>
  );
}
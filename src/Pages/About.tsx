import useThemeStore from "@/store/themeStore";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * ==============   Data   ================
 */

const food: [string,string,string][] = [
  ["June 2023 – Inception","Landmark study finds direct relationship between the physical symptoms of illness and social isolation.","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461pexelsphoto6129685_33213942_crop.png"],
  ["August 2023 – SOOTHE Founded","Thirty second-year medical students at Johns Hopkins School of Medicine establish SOOTHE and form the first volunteer cohort.","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461image001_3321283_crop.png"],
  ["November 2023 – First Patients Seen at JHH","Student volunteers begin seeing patients at the Weinberg Head & Neck unit and Sickle Cell Disease infusion center at the Johns Hopkins Hospital.","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461untitled_34173227_crop.png"],
  ["January 2024 -100 Patients Seen","A total of 100 patients seen by SOOTHE volunteers. Second-year students welcome incoming first-year volunteers!","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_460646174b582bf25cc6550f86eedda38e65327_332205_crop.png"],
  ["January 2024 – New Departments","SOOTHE pilots expansion into other units in the Johns Hopkins Hospital: Nelson 5 (Medicine) and Meyer 6 (Psychiatry).","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461IMG_1293_3322839_crop.png"],
  ["February 2024 - 150 Patients Seen","A total of 150 patients seen by SOOTHE volunteers. Volunteers start regularly seeing patients in Nelson 5 and Meyers 6.","https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461thumbnail_image001_34173615_crop.png"],
  ["March 2024 - SOOTHE Expansion","SOOTHE pilots efforts to expand to other medical schools!\n First chapter: Harvard Medical School!","https://soothe.jhmi.edu/wp-content/uploads/sites/10/Screenshot-2024-04-08-204348.png"],
  ["October 2024 - SOOTHE Featured in Hopkins Medicine News Article","Read the featured article from Katie Pierce!","	https://soothe.jhmi.edu/wp-content/uploads/sites/10/IMG_2632-1-scaled-e1731653112461.jpg"],
  ["November 2024 - 300 Patients Seen","A total of 300 patients seen by SOOTHE volunteers. Current students welcome incoming first-year volunteers!","https://soothe.jhmi.edu/wp-content/uploads/sites/10/IMG_1815-scaled-e1731653142392.jpg"],
  ["November 2025 - 500 Patients Seen","A total of 500 patients seen by SOOTHE volunteers. Volunteers made stuffed animals at a December event!","	https://soothe.jhmi.edu/wp-content/uploads/sites/10/thumbnail_image002-e1739166762562.jpg"],
];

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface CardProps {
  timeline: string;
  content:string;
  url : string;
  index : number;
}

function Card({ timeline,content,url,index }: CardProps) {
  return (
    <motion.div
      className={`w-full overflow-hidden flex justify-center relative p-4 -mb-10`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <motion.div
        variants={cardVariants}
        className="flex w-[80%] h-[400px] border border-neutral-200 rounded-md shadow-lg"
      >
        <div className="w-full h-full flex flex-col">
          <p className="p-4 ml-4 font-semibold text-2xl text-slate-700">
            {timeline}
          </p>
          <div className="ml-8 mt-4 border-b border-blue-600 w-30"></div>
          <div className={`ml-8 mt-4 flex ${index%2 === 0 ? "flex-row justify-around" : "flex-row-reverse justify-around"}`}>
            <p className="text-slate-600 w-[90%] md:w-1/3">
              {content}
            </p>
            <img src={url} className="hidden md:block w-100 h-60 mr-8 rounded-md"/>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      <Header />

      <div className="pb-10 w-full h-full">
        {food.map(([timeline,content,url], i) => (
          <Card key={i} index={i} timeline={timeline} content={content} url={url}/>
        ))}
      </div>
    </div>
  );
}
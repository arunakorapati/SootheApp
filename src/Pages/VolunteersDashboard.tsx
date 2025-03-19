import { Card, CardContent,CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";
import SootheLogo from "../assets/SootheLogo.png";
import useThemeStore from "@/store/themeStore";


export default function VolunteerDashboard() {
   const [darkMode, setDarkMode] = useState(true);
   const { theme } = useThemeStore();
   const [activeTab, setActiveTab] = useState("new");
   const [availability, setAvailability] = useState<{ title: string; start: string }[]>([]);
   const [volunteers, setVolunteers] = useState<{ name: string; type: "Medical" | "Non-Medical"; availability: string[] }[]>([]);
    useEffect(() => {
       setVolunteers([
           { name: "Alice Johnson", type: "Medical", availability: ["March 10", "March 12"] },
           { name: "Bob Smith", type: "Non-Medical", availability: ["March 11", "March 13"] },
           { name: "Charlie Davis", type: "Medical", availability: ["March 14", "March 15"] },
       ]);
   }, []);
   const handleDateClick = (info: DateClickArg) => {
       setAvailability((prevAvailability) => [
           ...prevAvailability,
           { title: "Available", start: info.dateStr },
       ]);
   };
   
       const [newVolunteer, setNewVolunteer] = useState({
         name: "",
         email: "",
         contact: "",
         trainingComplete: false,
       });
    
       // Handle Form Input
       const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
         setNewVolunteer({ ...newVolunteer, [e.target.name]: e.target.value });
       };
    
       // Handle Form Submission
       const handleSubmit = (e: { preventDefault: () => void; }) => {
         e.preventDefault();
         if (!newVolunteer.name || !newVolunteer.email || !newVolunteer.contact) {
           alert("Please fill out all fields.");
           return;
         }
         console.log("New Volunteer Submitted:", newVolunteer);
         alert(`Thank you, ${newVolunteer.name}! Your details have been submitted.`);
       };
    return (
        <div
              className={`${
                theme === "dark" ? "bg-black text-white" : "bg-white text-black"
              } min-h-screen overflow-auto`}
            >
          
   <div className="flex flex-col items-left p-2 bg-white">
       <CardHeader className="border-b border-gray-900">
         <h3 className="text-xl font-bold text-blue-900 pb-9">
         Volunteer Dashboard
         </h3>
       <img src={SootheLogo} alt="Logo" className="w-40 h-20" />
       </CardHeader>
     {/* Navigation + Actions */}
 <div className="max-w-l mx-auto p-6 md:p-10 bg-grey shadow-1xl rounded-10xl">
     {/* Tab Navigation */}
     <div className="flex justify-right gap-6 mb-6">
       <button
         className={`px-3 py-1 rounded-lg font-semibold ${
           activeTab === "new" ? "bg-blue-600 text-white" : "bg-gray-200"
         }`}
         onClick={() => setActiveTab("new")}
       >
         New Volunteer
       </button>
       <button
         className={`px-3 py-3 rounded-lg font-semibold ${
           activeTab === "existing" ? "bg-blue-600 text-white" : "bg-gray-200"
         }`}
         onClick={() => setActiveTab("existing")}
       >
         Existing Volunteer
       </button>
     </div>
     </div>
     </div>
  {/* New Volunteer Form */}
{activeTab === "new" && (
<section className="p-6 border rounded-lg shadow-md">
         <h2 className="text-xl font-bold text-blue-600 mb-3">Register as a New Volunteer</h2>
         <form onSubmit={handleSubmit} className="space-y-4">
           <input
             type="text"
             name="name"
             placeholder="Full Name"
             value={newVolunteer.name}
             onChange={handleInputChange}
             className="w- p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
             required
           />
           <br></br>
           <input
             type="email"
             name="email"
             placeholder="Email"
             value={newVolunteer.email}
             onChange={handleInputChange}
             className="w-half p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
             required
           />
           <br></br>
           <input
             type="tel"
             name="contact"
             placeholder="Contact Info"
             value={newVolunteer.contact}
             onChange={handleInputChange}
             className="w-half p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
             required
           />
           <br></br>
           <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="trainingComplete"
              checked={newVolunteer.trainingComplete}
              onChange={handleInputChange}
              className="w-5 h-5"
            />
            <label htmlFor="trainingComplete" className="text-gray-700">
              Training Completed
            </label>
          </div>
           <button
             type="submit"
             className="w-half bg-green-600 text-white p-3 rounded-lg hover:bg-green-400 transition transform hover:scale-105"
           >
             Submit
           </button>
         </form>
         <hr className="my-4 border-gray-300" />
        <p>
          If you are an incoming or current Hopkins medical student interested
          in volunteering, please email us at{" "}
          <a href="mailto:sootheorg@jh.edu" className="text-blue-600 underline">
            sootheorg@jh.edu
          </a>{" "}
          or attend our open training sessions.
        </p>
        <p>
          If you are a non-medical student, please reach out – we are currently
          considering possibilities for expanding SOOTHE outside of the medical
          school.
        </p>
    </section>
        )}
{activeTab === "existing" && (
           <Card className="w-full max-w-13xl p-8">
               <CardContent>
                   <p className="text-lg mb-4 text-blue-500">
                       Manage your availability for volunteer assignments. Click on a date to mark availability.
                   </p>
                   <div className="flex flex-row gap-5">
                       <div className="w-2/3">
                           <h2 className="text-2xl font-semibold mb-3 text-blue-500">Volunteers List</h2>
                           <ul className="list-disc pl-5">
                               {volunteers.map((volunteer, index) => (
                                   <li key={index} className="mb-2 text-blue-500">
                                       <span className={`font-medium ${volunteer.type === "Medical" ? "text-green-500" : "text-red-500"}`}>
                                           {volunteer.name} ({volunteer.type})
                                       </span>: {volunteer.availability.join(", ")}
                                   </li>
                               ))}
                           </ul>
                       </div>
                       <div className="w-2/3">
                           <FullCalendar
                               plugins={[dayGridPlugin, interactionPlugin]}
                               initialView="dayGridMonth"
                               events={availability}
                               dateClick={handleDateClick}
                               editable={true}
                               selectable={true}
                               eventContent={(eventInfo) => (
                                   <div className="bg-blue-500 text-white p-1 rounded text-sm">
                                       {eventInfo.event.title}
                                   </div>
                               )}
                               height="auto"
                           />
                       </div>
                   </div>
                   <div className="flex justify-center gap-4 mt-6">
                       <Button variant="default" className="flex items-center gap-2">
                           <Mail size={16} /> Contact Us
                       </Button>
                       <Button
                           variant="outline"
                           className="flex items-center gap-2"
                           onClick={() => window.location.reload()}
                       >
                           <Calendar size={16} /> Update Availability
                       </Button>
                   </div>
               </CardContent>
           </Card>
)}
       </div>
   );
  
   }




// "use client";
// import { useState } from "react";

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     name: "",
//     admissionNumber: "",
//     department: "",
//     contact: "",
//     email: "",
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
// const res = await fetch("https://backend-eta-five-43.vercel.app/api/register", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(form),
// });


//       const data = await res.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage("Error registering user");
//     }
//   };

//   return (
//     <div
//       id="register"
//       className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-gray-950 to-black py-12 px-4"
//     >
//       <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Left side - Heading and description */}
//         <div className="w-full lg:w-2/5 text-center lg:text-left">
//           <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
//             Register for Elevate
//           </h2>
//           <p className="text-lg text-gray-300 mb-4">
//             Join India's premier innovation and technology event
//           </p>
//           <div className="hidden lg:block mt-10">
//             <div className="grid grid-cols-3 gap-4 max-w-xs">
//               <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
//                 <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
//                   100+
//                 </div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">
//                   Teams
//                 </div>
//               </div>
//               <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
//                 <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
//                   20+
//                 </div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">
//                   Events
//                 </div>
//               </div>
//               <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
//                 <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
//                   25+
//                 </div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">
//                   Speakers
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side - Form */}
//         <div className="w-full lg:w-3/5">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700/40"
//           >
//             <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
//               Student Registration
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Name */}
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2 text-sm font-medium">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Suryanshi"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
//                   required
//                 />
//               </div>

//               {/* Admission Number */}
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2 text-sm font-medium">
//                   Admission Number
//                 </label>
//                 <input
//                   type="text"
//                   name="admissionNumber"
//                   placeholder="e.g. 2025BTCS999"
//                   value={form.admissionNumber}
//                   onChange={handleChange}
//                   pattern="[A-Za-z0-9]+"
//                   className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
//                   required
//                 />
//               </div>

//               {/* Department Dropdown */}
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2 text-sm font-medium">
//                   Department
//                 </label>
//                 <select
//                   name="department"
//                   value={form.department}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
//                   required
//                 >
//                   <option value="" disabled>
//                     Select Department
//                   </option>
//                   <option value="Applied Science">Applied Science</option>
//                   <option value="CSE">Computer Science (CSE)</option>
//                   <option value="The Uniques">The Uniques</option>
//                   <option value="Super 60">Super 60</option>
//                   <option value="BBA">BBA</option>
//                   <option value="MBA">MBA</option>
//                   <option value="ME">Mechanical Engineering (ME)</option>
//                   <option value="ECE">Electronics (ECE)</option>
//                   <option value="CE">Civil Engineering (CE)</option>
//                   <option value="Pharmacy">Pharmacy</option>
//                   <option value="BCA">BCA</option>
//                   <option value="MCA">MCA</option>
//                   <option value="LLB">LLB</option>
//                   <option value="B.COM">B.COM</option>
//                   <option value="Paramedical">Paramedical</option>
//                 </select>
//               </div>

//               {/* Contact Number */}
//               <div className="mb-4">
//                 <label className="block text-gray-300 mb-2 text-sm font-medium">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="contact"
//                   placeholder="e.g. 9876543210"
//                   value={form.contact}
//                   onChange={handleChange}
//                   pattern="[0-9]{10}"
//                   className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <label className="block text-gray-300 mb-2 text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Xyz123@gmail.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-[#20A97B]/20 transition-all duration-300 mt-2"
//             >
//               Register Now
//             </button>

//             {/* Message */}
//             {message && (
//               <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    admissionNumber: "",
    department: "",
    contact: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', text: '' });

  const showNotification = (type, text) => {
    setNotification({ show: true, type, text });
    setTimeout(() => setNotification({ show: false, type: '', text: '' }), 5000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://backend-eta-five-43.vercel.app/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);
      
      if (res.ok) {
        showNotification('success', data.message || 'Registration successful!');
        setForm({
          name: "",
          admissionNumber: "",
          department: "",
          contact: "",
          email: "",
        });
      } else {
        showNotification('error', data.message || 'Error registering user');
      }
    } catch (error) {
      setMessage("Error registering user");
      showNotification('error', 'Error registering user. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="register"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-gray-950 to-black py-12 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-6 right-6 z-50 max-w-sm rounded-lg shadow-lg p-4 text-white transition-all duration-300 ease-in-out ${
          notification.type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'
        }`}>
          <div className="flex items-center">
            <div className="mr-3">
              {notification.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </div>
            <div className="text-sm font-medium">{notification.text}</div>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side - Heading and description */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Register for Elevate
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Join India's premier innovation and technology event
          </p>
          <div className="hidden lg:block mt-10">
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:scale-105">
                <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
                  150+
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Teams
                </div>
              </div>
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:scale-105">
                <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
                  20+
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Events
                </div>
              </div>
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:scale-105">
                <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
                  25+
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Speakers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-3/5">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700/40 relative overflow-hidden"
          >
            {/* Form accent elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-teal-500/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Student Registration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Suryavanshi"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80 transition-all"
                    required
                  />
                </div>

                {/* Admission Number */}
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Admission Number
                  </label>
                  <input
                    type="text"
                    name="admissionNumber"
                    placeholder="e.g. 2025BTCS999"
                    value={form.admissionNumber}
                    onChange={handleChange}
                    pattern="[A-Za-z0-9]+"
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80 transition-all"
                    required
                  />
                </div>

                {/* Department Dropdown */}
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Department
                  </label>
                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80 transition-all"
                    required
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="Applied Science">Applied Science</option>
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="The Uniques">The Uniques</option>
                    <option value="Super 60">Super 60</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="ME">Mechanical Engineering (ME)</option>
                    <option value="ECE">Electronics (ECE)</option>
                    <option value="CE">Civil Engineering (CE)</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="LLB">LLB</option>
                    <option value="B.COM">B.COM</option>
                    <option value="Paramedical">Paramedical</option>
                  </select>
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    placeholder="e.g. 9876543210"
                    value={form.contact}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80 transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-6 md:col-span-2">
                  <label className="block text-gray-300 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Xyz123@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg transition-all duration-300 mt-2 flex items-center justify-center ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-[#20A97B]/40'
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Register Now'
                )}
              </button>

              {/* Message */}
              {message && (
                <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

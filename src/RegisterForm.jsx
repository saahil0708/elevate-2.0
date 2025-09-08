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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
const res = await fetch("https://backend-eta-five-43.vercel.app/api/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});


      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error registering user");
    }
  };

  return (
    <div
      id="register"
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-gray-950 to-black py-12 px-4"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
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
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
                <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
                  100+
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Teams
                </div>
              </div>
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
                <div className="text-2xl font-black bg-gradient-to-br from-[#20A97B] to-emerald-400 bg-clip-text text-transparent mb-1">
                  20+
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Events
                </div>
              </div>
              <div className="text-center bg-gray-900/50 p-4 rounded-xl border border-gray-700/40">
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
            className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700/40"
          >
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
                  placeholder="Suryanshi"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
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
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
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
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
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
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Xyz123@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-700/40 text-white focus:outline-none focus:ring-2 focus:ring-[#20A97B]/80"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#20A97B] via-emerald-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-[#20A97B]/20 transition-all duration-300 mt-2"
            >
              Register Now
            </button>

            {/* Message */}
            {message && (
              <p className="mt-4 text-center text-sm text-gray-300">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

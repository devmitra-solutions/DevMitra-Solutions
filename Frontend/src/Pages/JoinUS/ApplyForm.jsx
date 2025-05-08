import React, { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    resume: null,
  });

  const roles = [
    "UI/UX Designer (Intern)",
    "Front-End Developer (Freelancer)",
    "Backend Developer (Intern)",
    "Project Manager (Freelancer)",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex justify-center items-center py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-1">Apply Now</h2>
        <p className="text-center text-sm text-gray-200 mb-6">
          Apply Directly Through the Form Below
        </p>

        {/* Name */}
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black mb-4 outline-none"
          required
        />

        {/* Email */}
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black mb-4 outline-none"
          required
        />

        {/* Role */}
        <label className="block mb-2 text-sm font-medium">Select Role</label>
        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          className="w-full px-4 py-2 rounded-md text-black mb-4 outline-none"
          required
        >
          <option value="">-- Select --</option>
          {roles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>

        {/* Resume */}
        <label className="block mb-2 text-sm font-medium">Upload Resume</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md text-black mb-6 outline-none"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-white text-[#4c1241] font-semibold px-6 py-2 rounded-full w-full transition hover:bg-gray-200"
        >
          Apply
        </button>
      </form>
    </section>
  );
};

export default ApplyForm;

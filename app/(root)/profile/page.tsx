"use client";
import { useState } from "react";

const TabularForm = () => {
  const [activeTab, setActiveTab] = useState("doctor");

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 ${
            activeTab === "doctor" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("doctor")}
        >
          Doctor
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeTab === "patient" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("patient")}
        >
          Patient
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "admin" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("admin")}
        >
          Admin
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "doctor" && <DoctorForm />}
        {activeTab === "patient" && <PatientForm />}
        {activeTab === "admin" && <AdminForm />}
      </div>
    </div>
  );
};

const PatientForm = () => {
  const [formData, setFormData] = useState({
    diseases: "",
    weight: "",
    height: "",
    bloodGroup: "",
    allergies: "",
    currentMedications: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        setFormData({
          diseases: "",
          weight: "",
          height: "",
          bloodGroup: "",
          allergies: "",
          currentMedications: "",
          address: "",
        });
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({ type: "error", text: "An unexpected error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {message.text && (
        <div
          className={`p-4 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium">Diseases</label>
        <input
          type="text"
          name="diseases"
          value={formData.diseases}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          placeholder="e.g., Diabetes, Hypertension"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Weight (kg)</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          min="0"
          step="0.1"
          placeholder="e.g., 70.5"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Height (cm)</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          min="0"
          step="0.1"
          placeholder="e.g., 175.3"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Blood Group</label>
        <input
          type="text"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          placeholder="e.g., A+, O-"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Allergies</label>
        <input
          type="text"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          placeholder="e.g., Peanuts, Pollen"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Current Medications</label>
        <textarea
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          placeholder="e.g., Metformin, Lisinopril"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
          placeholder="e.g., 123 Main St, Springfield"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};


const DoctorForm = () => {
  const [formData, setFormData] = useState({
    departments: "",
    hospital: "",
    roomNumber: "",
    qualifications: "",
    experience: "",
    consultationFee: "",
    availability: "",
    bio: "",
    rating: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    const response = await fetch("/api/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">Departments</label>
        <input
          type="text"
          name="departments"
          value={formData.departments}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Hospital</label>
        <input
          type="text"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Room Number</label>
        <input
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Qualifications</label>
        <input
          type="text"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Consultation Fee</label>
        <input
          type="text"
          name="consultationFee"
          value={formData.consultationFee}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Availability</label>
        <input
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white bg-white "
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};


const AdminForm = () => {
  const [formData, setFormData] = useState({
    departments: "",
    hospital: "",
    roomNumber: "",
    qualifications: "",
    experience: "",
    consultationFee: "",
    availability: "",
    bio: "",
    rating: "",
  });

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    const response = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium">Departments</label>
        <input
          type="text"
          name="departments"
          value={formData.departments}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Hospital</label>
        <input
          type="text"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Room Number</label>
        <input
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Qualifications</label>
        <input
          type="text"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Consultation Fee</label>
        <input
          type="text"
          name="consultationFee"
          value={formData.consultationFee}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Availability</label>
        <input
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default TabularForm;

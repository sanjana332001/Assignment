import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new contact object
    if (firstName && lastName && status) {
      const newContact = {
        firstName,
        lastName,
        status,
      };
      console.log(newContact);
      dispatch({ type: "ADD_CONTACT", payload: newContact });
      // TODO: Save the contact or dispatch an action to store the data

      // Reset the form fields
      alert("Form submitted successfully!");
      setFirstName("");
      setLastName("");
      setStatus("active");
      navigate("/contact-list");
    } else {
      setError(alert("Please provide both first name and last name."));
    }
  };

  return (
    <div className="container mx-auto mt-16  ">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto border-black">
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="  w-60 flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-gray-200 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-slate-300"
          >
            Save Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

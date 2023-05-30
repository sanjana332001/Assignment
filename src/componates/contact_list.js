import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { deleteContact } from "../actions/contactActions";

import { deleteContact, editContact } from "./contactActions";
const ContactList = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("contacts: ", contacts);

  const handleEdit = (index) => {
    const newFirstName = prompt("Enter new first name:");
    const newLastName = prompt("Enter new last name:");
    const newStatus = prompt("Enter new status:");

    if (newFirstName && newLastName && newStatus) {
      const updatedContact = {
        ...contacts[index],
        firstName: newFirstName,
        lastName: newLastName,
        status: newStatus,
      };

      dispatch(editContact(index, updatedContact));
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteContact(index));
  };

  return (
    <div className="container mx-auto">
      <h2 className=" mt-10 text-4xl font-bold mb-4 text-zinc-950 text-center">
        Contact List
      </h2>
      <table className="mx-auto text-xl">
        <thead className="border-2">
          <tr className="text-black-500 ">
            <th className="px-4 py-2 border-2">First Name</th>
            <th className="px-4 py-2 border-2">Last Name</th>
            <th className="px-4 py-2 border-2">Status</th>
            <th className="px-4 py-2 border-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="text-black">
              <td className="border-2 px-1 py-1">{contact.firstName}</td>
              <td className="border-2 px-1 py-1">{contact.lastName}</td>
              <td className="border-2 px-1 py-1">{contact.status}</td>
              <td className="border-2 px-1 py-1">
                <button
                  className="bg-gray-800 hover:bg-gray-800 text-white py-1 px-1 rounded mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-gray-800 hover:bg-gray-800 text-white  py-1 px-1 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;

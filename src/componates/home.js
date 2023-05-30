import { Link } from "react-router-dom";
import ContactPage from "./contact";

function CreateContact() {
  return (
    <div className="flex justify-center mt-10">
      <Link
        to={"/contact-page"}
        className="w-60 flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-gray-200 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring active:bg-gray-300"
      >
        Create Contact
      </Link>
    </div>
  );
}

export default CreateContact;

import React, { useState } from "react";

const EmailNewsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [SuccessMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:8080/api/admin/newsletteremail/submite",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );

    if (response.ok) {
      setSuccessMessage("Email submitted successfully!");
      setErrorMessage();
    } else {
      setErrorMessage("Failed to submit email.");
      setSuccessMessage();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full">
        {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        {SuccessMessage && (
          <span className="text-lime-700">{SuccessMessage}</span>
        )}
        <div className="flex justify-start items-center self-stretch mt-2">
          <div className="self-stretch flex-grow bg-white">
            <input
              type="email"
              name="email"
              className="flex justify-start items-start w-full text-light-gray focus:text-black border focus:outline-none border-r-0 border-gray-200 focus:border-primary p-2 text-xs"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex justify-start items-center gap-1 border border-transparent cursor-pointer border-l-0 bg-violet-600 hover:border-gray-800 hover:bg-gray-700 px-4 py-2 text-xs"
          >
            <span className="text-center uppercase text-white">Subscribe</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailNewsletter;

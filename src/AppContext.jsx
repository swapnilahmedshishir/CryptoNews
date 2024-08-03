// AppContext.jsx
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ port: "http://localhost:8080" });
  const [audioFile, setAudioFile] = useState(null);
  return (
    <AppContext.Provider value={{ state, setState, audioFile, setAudioFile }}>
      {children}
    </AppContext.Provider>
  );
};

// Define prop types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [state] = useState({ port: "https://api.tojonews.com" });
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisodeId, setCurrentEpisodeId] = useState(null);

  return (
    <AppContext.Provider
      value={{
        state,
        audioFile,
        setAudioFile,
        isPlaying,
        setIsPlaying,
        currentEpisodeId,
        setCurrentEpisodeId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Define prop types for AppProvider
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

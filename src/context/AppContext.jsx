import {   createContext, useContext,  useEffect, useState} from "react";

const AppContext = createContext();

export const useApp  = () => {
   return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(() => {
    const savedTimeline = localStorage.getItem("timeline");

    return savedTimeline ? JSON.parse(savedTimeline) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "timeline",
      JSON.stringify(timeline)
    );
  }, [timeline]);

  // Add New Timeline Entry
  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [
      newEntry,
      ...prev,
    ]);
  };

  const value = {
    timeline,
    addEntry,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
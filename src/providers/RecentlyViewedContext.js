import React, { createContext, useContext, useState } from 'react';

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const addToRecentlyViewed = (file) => {
    setRecentlyViewed((prevFiles) => {
      const fileExists = prevFiles.find((f) => f.name === file.name);
      if (fileExists) {
        return [file, ...prevFiles.filter((f) => f.name !== file.name)];
      }
      return [file, ...prevFiles].slice(0, 5);
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => useContext(RecentlyViewedContext); 

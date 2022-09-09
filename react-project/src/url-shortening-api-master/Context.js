import React, { useState, useContext } from 'react';

// STUB: create global context hook to share state, functions
const AppContext = React.createContext();
const useGlobalContext = () => {
	return useContext(AppContext);
};

const AppProvider = ({ children }) => {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export { AppProvider, useGlobalContext };

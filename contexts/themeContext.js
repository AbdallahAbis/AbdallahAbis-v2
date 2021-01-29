import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isLight, setIsLight] = useState(false);

	return (
		<ThemeContext.Provider value={[isLight, setIsLight]}>
			{children}
		</ThemeContext.Provider>
	);
};

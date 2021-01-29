import { createContext, useState } from 'react';

export const AnimationsContext = createContext();

export const NoAnimationsProvider = ({ children }) => {
	const [noAnimations, setNoAnimations] = useState(false);

	return (
		<AnimationsContext.Provider value={[noAnimations, setNoAnimations]}>
			{children}
		</AnimationsContext.Provider>
	);
};

import React, { createContext, useEffect } from 'react';

// our function needs to be a string
export const blockingSetInitialColorMode = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
	function getInitialColorMode() {
		const persistedColorPreference = window.localStorage.getItem('theme');
		const hasPersistedPreference = typeof persistedColorPreference === 'string';

		/**
		 * If the user has explicitly chosen light or dark,
		 * use it. Otherwise, this value will be null.
		 */
		if (hasPersistedPreference) {
			return persistedColorPreference;
		}

		// If there is no saved preference, use a media query
		const mql = window.matchMedia('(prefers-color-scheme: dark)');
		const hasMediaQueryPreference = typeof mql.matches === 'boolean';

		if (hasMediaQueryPreference) {
			return mql.matches ? 'dark' : 'light';
		}

		// default to 'light'.
		return 'dark';
	}

	const colorMode = getInitialColorMode();

	const root = document.documentElement;
	root.style.setProperty('--initial-color-mode', colorMode);

	// add HTML attribute if light mode
	if (colorMode === 'light')
		document.documentElement.setAttribute('data-theme', 'light');
}

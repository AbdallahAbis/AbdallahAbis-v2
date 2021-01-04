// Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:
// Persisting layout between page changes
// Keeping state when navigating pages
// Custom error handling using componentDidCatch
// Inject additional data into pages
// Add global CSS

// This App component will allow us to import fonts and global styles.
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

import { useContext, useState, useEffect } from 'react';
import { Particles as TsParticles } from 'react-tsparticles';
import { ThemeProvider, ThemeContext } from '../../contexts/themeContext';

const Particles = () => {
	const [isLight, setIsLight] = useContext(ThemeContext);
	const [particlesColor, setParticlesColor] = useState('');

	useEffect(() => {
		setParticlesColor(!isLight ? '#0d1c2b' : '#e6ecf2');
	}, [isLight]);

	const particlesConfig = {
		autoPlay: true,
		backgroundMode: {
			enable: true,
			zIndex: -1,
		},
		detectRetina: true,
		fpsLimit: 60,
		particles: {
			color: {
				value: particlesColor || 'transparent',
			},
			links: {
				blink: false,
				color: {
					value: particlesColor || 'transparent',
				},
				consent: false,
				distance: 130,
				enable: true,
				frequency: 1,
				opacity: 0.8,
				width: 1,
				warp: false,
			},
			move: {
				enable: true,
				speed: 2,
			},
			number: {
				density: {
					enable: true,
					area: 600,
					factor: 1000,
				},
				value: 60,
			},
			opacity: {
				value: 0.5,
			},
			reduceDuplicates: true,
			size: {
				value: 2.5,
			},
		},
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
	};

	return (
		<div className='tsparticles'>
			<TsParticles height='100vh' width='100vw' params={particlesConfig} />
		</div>
	);
};

export default Particles;

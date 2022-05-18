module.exports = {
	// mode: 'jit',
	content: ['_site/**/*.html'],
	safelist: [],
	theme: {
		maxWidth: {
			'7xl': '80rem',
			'8xl': '90rem',
		},
		fontFamily: {
			sans: ['Inter var', 'system-ui', 'ui-sans-serif'],
			serif: ['Inter var', 'system-ui', 'ui-sans-serif'],
			display: ['Inter var', 'system-ui', 'ui-sans-serif'],
			body: ['Inter var', 'system-ui', 'ui-sans-serif'],
		},
		fontSize: {
			// 'xs': ['13px', '20px'],
			rxs: '0.65rem',
			xs: '0.75rem',
			rsm: '0.8rem',
			sm: '.845rem',
			rtiny: '0.875rem',
			tiny: '.9125rem',
			rbase: '.935rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'4xxl': '2.5rem',
			'5xl': '2.75rem',
			'6xl': '3rem',
			'7xl': '3.5rem',
		},
		active: 'currentColor',
		interFontFeatures: {
			default: ['calt', 'liga', 'kern'],
			numeric: ['tnum', 'salt', 'ss02'],
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				change: 'transparent',
			},
		},
	},
	plugins: [],
};

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					soft: 'hsl(var(--primary-soft))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-soft': 'var(--gradient-soft)',
				'gradient-background': 'var(--gradient-background)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'soft': 'var(--shadow-soft)',
				'glow': 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-complex': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg) scale(1)',
					},
					'25%': { 
						transform: 'translateY(-8px) rotate(1deg) scale(1.02)',
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(0deg) scale(1.05)',
					},
					'75%': { 
						transform: 'translateY(-8px) rotate(-1deg) scale(1.02)',
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.4), 0 0 40px hsl(var(--primary-glow) / 0.2)',
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--primary-glow) / 0.6), 0 0 60px hsl(var(--primary-glow) / 0.3), 0 0 80px hsl(var(--primary-glow) / 0.1)',
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-gentle': {
					'0%, 20%, 50%, 80%, 100%': {
						transform: 'translateY(0) scale(1)'
					},
					'40%': {
						transform: 'translateY(-10px) scale(1.05)'
					},
					'60%': {
						transform: 'translateY(-5px) scale(1.02)'
					}
				},
				'shimmer-logo': {
					'0%': { 
						transform: 'translateX(-100%) rotate(-45deg)',
						opacity: '0'
					},
					'50%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(100%) rotate(-45deg)',
						opacity: '0'
					}
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': { 
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': { 
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-complex': 'float-complex 4s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'shimmer-logo': 'shimmer-logo 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

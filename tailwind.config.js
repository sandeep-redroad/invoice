/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			'primary-red': '#cd233a',
			'primary-blue': '#2490ef',
			'input-bg':"#f4f5f6",
			'input-clr':"#d1d8dd"
		}
  	}
  },
}


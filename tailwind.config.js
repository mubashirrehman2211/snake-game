/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                },
                'pulse-zoom': {
                    '100%': {transform: 'scale(0.5)', opacity: 0},
                    '50%': {transform: 'scale(1)', opacity: 1},
                },
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                'pulse-zoom': 'pulse-zoom 750ms ease-in-out infinite',
            },
        },
    },

    plugins: [],
}


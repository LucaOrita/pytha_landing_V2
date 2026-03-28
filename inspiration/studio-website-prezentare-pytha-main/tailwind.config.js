/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'main': {
                    '50': '#fff1f2',
                    '100': '#ffe0e2',
                    '200': '#ffc7cb',
                    '300': '#ffa0a7',
                    '400': '#ff6974',
                    '500': '#f93a47',
                    '600': '#e71b29',
                    '700': '#c2131f',
                    '800': '#a1131d',
                    '900': '#8a1820',
                    '950': '#49060b',
                },
                'secondary': {
                    '50': '#edfcfe',
                    '100': '#d1f6fc',
                    '200': '#a9ecf8',
                    '300': '#6edcf2',
                    '400': '#2cc2e4',
                    '500': '#10a5ca',
                    '600': '#118ab2',
                    '700': '#146a8a',
                    '800': '#1a5770',
                    '900': '#1a485f',
                    '950': '#0b2f41',
                },

                'main-background': '#f8f8f8'
            },
        },
    },
    plugins: [],
}


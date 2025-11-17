/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Включаем 'class' стратегию для темного режима
    theme: {
        extend: {},
    },
    plugins: [],
}
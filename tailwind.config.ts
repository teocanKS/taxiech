import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2E7D32', // Green (Trust/Eco)
                action: '#F7C948',  // Taxi Yellow (Buttons)
            }
        }
    },
    plugins: [],
}

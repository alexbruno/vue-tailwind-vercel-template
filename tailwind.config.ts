import forms from '@tailwindcss/forms'

export default {
  darkMode: 'class',
  plugins: [forms()],
  content: ['./index.html', './src/**/*.{html,js,ts,vue}'],
}

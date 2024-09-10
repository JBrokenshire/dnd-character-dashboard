import { primaryColour } from './src/constants'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero-bg': "url('@/assets/img/hero/background.png')"
      },
      colors: {
        primary: primaryColour
      },
      brightness: {
        25: '.45'
      }
    }
  },
  plugins: []
}

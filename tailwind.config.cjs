import { primaryColour } from './src/constants'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-.075em'
      },
      backgroundImage: {
        'hero-bg': "url('@/assets/img/hero/background.png')"
      },
      colors: {
        primary: primaryColour,
        'cs-gray': {
          DEFAULT: '#a0a9af'
        }
      },
      brightness: {
        25: '.45'
      }
    }
  },
  plugins: []
}

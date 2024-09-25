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
          DEFAULT: '#a0a9af',
          dark: '#2b2b2a'
        },
        class: {
          barbarian: '#EB5118',
          bard: '#AA6DAB',
          'blood-hunter': '#C53131',
          cleric: '#92A2B3',
          druid: '#79853C',
          fighter: '#7E4F3D',
          monk: '#53A5C5',
          paladin: '#B59E54',
          ranger: '#4F7E61',
          rogue: '#555752',
          sorcerer: '#972E2E',
          warlock: '#8137AF',
          wizard: '#0045B7'
        }
      },
      brightness: {
        25: '.45'
      }
    }
  },
  plugins: []
}

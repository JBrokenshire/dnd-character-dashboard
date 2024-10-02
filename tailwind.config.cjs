import { primaryColour } from './src/constants'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-.05em'
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
          barbarian: { DEFAULT: '#EB5118', faded: '#EB511880' },
          bard: { DEFAULT: '#AA6DAB', faded: '#AA6DAB80' },
          'blood-hunter': { DEFAULT: '#C53131', faded: '#C5313180' },
          cleric: { DEFAULT: '#92A2B3', faded: '#92A2B380' },
          druid: { DEFAULT: '#79853C', faded: '#79853C80' },
          fighter: { DEFAULT: '#7E4F3D', faded: '#7E4F3D80' },
          monk: { DEFAULT: '#53A5C5', faded: '#53A5C580' },
          paladin: { DEFAULT: '#B59E54', faded: '#B59E5480' },
          ranger: { DEFAULT: '#4F7E61', faded: '#4F7E6180' },
          rogue: { DEFAULT: '#555752', faded: '#55575280' },
          sorcerer: { DEFAULT: '#972E2E', faded: '#972E2E80' },
          warlock: { DEFAULT: '#8137AF', faded: '#8137AF80' },
          wizard: { DEFAULT: '#0045B7', faded: '#0045B780' }
        }
      },
      brightness: {
        25: '.45'
      }
    }
  },
  plugins: []
}

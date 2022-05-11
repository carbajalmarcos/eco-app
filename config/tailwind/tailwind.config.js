const { fontFamily, colors, fontSize, ...theme } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/screens/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      ...fontSize,
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1.16' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
          '3xl': '1752px'
        }
      },
      colors: {
        white: 'white',
        black: 'black',
        primary: {
          25: '#FDF4FB',
          50: '#FFE4F5',
          100: '#fbc5e5',
          200: '#f8a5d3',
          300: '#f484be',
          400: '#e24894',
          500: '#E60088',
          600: '#c7006c',
          700: '#b00059',
          800: '#980047',
          900: '#820037',
          DEFAULT: '#E60088'
        },
        secondary: {
          200: '#AEC3EE',
          500: '#266DD3',
          900: '#364053',
          DEFAULT: '#266DD3'
        }
      },
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans]
      },
      backgroundImage: (theme) => ({
        chart: 'url(/assets/img/marketsChart.png)',
        hero: 'url(/assets/img/hero.png)'
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/line-clamp')
  ]
};

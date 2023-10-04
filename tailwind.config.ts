import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#151515',
        'dark-grey': '#242424',
        'light-grey': '#d9d9d9',
        'bright-green': '#4EE1A0',
        'warning-red': '#FF6F5B'
      },
      fontSize: {
        'customized-xxl': [
          '88px',
          {
            lineHeight: '88px',
            letterSpacing: '-2.5px',
            fontWeight: '700'
          }
        ],
        'customized-xl': [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '-1.5px',
            fontWeight: '700'
          }
        ],
        'customized-l': [
          '40px',
          {
            lineHeight: '40px',
            fontWeight: '700'
          }
        ],
        'customized-m': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '700'
          }
        ],
        'customized-s': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: '700'
          }
        ],
        'customized-xs': [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '500'
          }
        ]
      },
      transitionTimingFunction: {
        ease: 'ease'
      },
      screens: {
        desktop: '1440px',
        tablet: '768px',
        phone: '375px'
      },
      aspectRatio: {
        'project-card': '1.4 / 1'
      }
    }
  },
  plugins: []
};
export default config

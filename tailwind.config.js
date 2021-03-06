module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
        './*.html'
    ]
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'backboardW': '265px',
      },
      colors: {
        red:{
          sbtn: '#DF3940',
        },
        gray:{
          navalink: '#626161',
          slidertext: '#626161',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}}

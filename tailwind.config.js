/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'#0802A3',
        'titleblue':'#FF3EA5',
        
        /* 'bluetheme':'#E8FFFF', */
        'bluetheme':'white',
        'darkbluetheme':'#11009E',
        'red':'#ff0000',
        'greentheme':'#00DFA2',
        'cards':'#FFE5E5',
        'footer':'#4b91ad',
       'yellowtheme1':'#F6FA70', 
       'yellowfooter':'#FFCD4B',
       'yellowtheme':'#FF4B91',
        'goldtheme':'#FFEA20',

      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/pexels-kampus-production-7517699 (720p).mp4')",
        'team_work':"url('/src/images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg')",
        'social':"url('/src/images/senior-women-celebrating-friendship-park.jpg')",
        'personal':"url('/src/images/adult-male-waiting-recovery-session-start.jpg')"
      },

      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      },

      

      
    },
    
  },
  plugins: [require('flowbite/plugin'),
  require('tailwind-scrollbar-hide')],
}


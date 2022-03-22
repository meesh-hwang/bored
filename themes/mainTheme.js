const themePalette ={
    primary:'#ded000',
    primaryDarker:'#ded000',
    primaryLighter:'#ded000',
    alternate:'#ded000'
}

export const mainTheme = {

Button: {
    buttonStyle: {
        raised: true,
        borderRadius: 60,
        backgroundColor: themePalette.primary,
    },
    titleStyle: {
        color: themePalette.alternate,

    },
    icon:{
        color: themePalette.alternate,            
    },
    type: 'clear'
},
Text: { 
    h1Style: { 
      color: themePalette.primaryDarker, 
      fontWeight: 'bold', 
      fontWeight: 'normal', 
      fontSize: 100, 
    }, 
    h2Style: { 
      color: themePalette.primaryLighter, 
      fontWeight: 'normal', 
      fontSize: 26, 
      margin:10 
    }, 
    h3Style: { 
      color: themePalette.primaryLighter, 
      fontWeight: 'normal', 
      fontSize: 20, 
      margin:5 
    }, 
    style:{ 
      margin:5,             
    } 

  },

};
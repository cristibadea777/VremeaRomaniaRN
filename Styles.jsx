import { StyleSheet } from 'react-native';

const generareStiluri = ( temaCulori ) => {

  return StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      backgroundColor: "cyan",
    },

    containerSVG: {
        width: "100%", 
        height: "40%",
        marginTop: 3
    },

    containerInfo: {
        width: "100%",
        height: "15%",
        padding: 17,
    },
    
    textInfo: {
        fontSize: 25, 
        fontWeight: "bold"
    }

  });
}

export{
  generareStiluri,
}


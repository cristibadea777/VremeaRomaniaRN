import { StyleSheet } from 'react-native';

const generareStiluri = () => {

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
        height: "25%",
        padding: 17,
    },
    textInfo: {
        fontSize: 25, 
        fontWeight: "bold",
    },
    textInfo2: {
        fontSize: 25, 
        fontWeight: "bold",
        color: "white"
    },
    containerDescriere: {
        width: "100%", 
        height: "25%",
    },

  });
}

export{
  generareStiluri,
}


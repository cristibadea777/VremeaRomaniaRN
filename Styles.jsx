import { StyleSheet } from 'react-native';

const generareStiluri = ( temaCulori ) => {

  return StyleSheet.create({
    containerPrincipal: {
      flex: 1,
      backgroundColor: "cyan",
    },

    svgContainer: {
        width: "100%", 
        height: "40%",
    }

  });
}

export{
  generareStiluri,
}


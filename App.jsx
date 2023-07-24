import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { generareStiluri } from './Styles';
import HartaRomanieiSvg from './HartaRomanieiSvg';

export default function App() {

  const [styles,      setStyles]      = useState('')
  const [temaCulori,  setTemaCulori]  = useState('')  
  const [judetCurent, setJudetCurent] = useState('')
  
  useEffect(
    () => {
      setStyles(generareStiluri(temaCulori))
    }, []
  )

  //Nume curent judet, nume curent resedinta judet

  return (    
    <View style={styles.containerPrincipal}>
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>
      
      <View style={styles.svgContainer}>
        <HartaRomanieiSvg
          judetCurent     = {judetCurent}
          setJudetCurent  = {setJudetCurent}
        />
      </View>
      
    </View>
  )



}


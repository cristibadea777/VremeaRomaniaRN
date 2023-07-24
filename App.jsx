import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { generareStiluri } from './Styles';
import HartaRomanieiSvg from './HartaRomanieiSvg';

export default function App() {

  const [styles,            setStyles]            = useState('')
  const [temaCulori,        setTemaCulori]        = useState('')  
  const [judetCurent,       setJudetCurent]       = useState('')
  const [temperaturaJudet,  setTemperaturaJudet]  = useState('')
  const [resedintaCurenta,  setResedintaCurenta]  = useState('')

  useEffect(
    () => {
      setStyles(generareStiluri(temaCulori))
    }, []
  )
  
  useEffect(
    () => {
      setTemperaturaJudet('')
      setResedintaCurenta('')
    }, [judetCurent]
  )

  const handleClickJudet = (name) => {
    setJudetCurent(name)
    apeleazaApi()
  }

  const apeleazaApi = () => {

  }

  //TO DO
  //am doar 1000 api calls
  //posibil sa stochez valorile de temp pt judete intr-o baza de date  Firebase
  //cu valoare temp, judet, ora accesare 
  //daca ora accesare judet > 1 ora -> se poate face alt api call si se seteaza in bd -- altfel se ia valoare din bd firebase 

  return (    
    <View style={styles.containerPrincipal}>
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>
      
      <View style={styles.containerSVG}>
        <HartaRomanieiSvg
          judetCurent       = {judetCurent}
          handleClickJudet  = {handleClickJudet}
        />
      </View>
      <View style={styles.containerInfo}>
        {
        judetCurent ? (
          <>
          <Text style={styles.textInfo}>Județ selectat:      {judetCurent}</Text>
          <Text style={styles.textInfo}>Reședință județ:   {resedintaCurenta}</Text>
          <Text style={styles.textInfo}>Temperatură:         {temperaturaJudet}</Text>
          {
          //umiditate, vant, nori, etc....
          }
          </>
        ) : ( <></> )
        }

      </View>

    </View>
  )
}


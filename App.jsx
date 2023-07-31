import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { generareStiluri } from './Styles';
import HartaRomanieiSvg from './HartaRomanieiSvg';
import axios from 'axios';
import cheieApi from './CheieAPI';
import { Image } from 'react-native';

export default function App() {

  const [styles,            setStyles]            = useState('')
  const [judetCurent,       setJudetCurent]       = useState('')
  const [temperatura,       setTemperatura]       = useState('')
  const [resedintaCurenta,  setResedintaCurenta]  = useState('')
  const [umiditate,         setUmiditate]         = useState('')
  const [vant,              setVant]              = useState('')
  const [descriere,         setDescriere]         = useState('')
  const [imagine,           setImagine]           = useState('')

  useEffect(
    () => {
      setStyles(generareStiluri())
    }, []
  )
  
  useEffect(
    () => {
      try {
        apeleazaApi().then(
          raspunsAPI => {
            console.log(raspunsAPI)
            setTemperatura(Math.round(raspunsAPI.main.temp - 273.15))
            setUmiditate(raspunsAPI.main.humidity)
            setVant(raspunsAPI.wind.speed)
            setareDescriere(raspunsAPI.weather[0].description, raspunsAPI.weather[0].main)
          }
        ).catch( error => {console.log(error)} )
      } catch (error) {
        alert("Limită atinsă pentru azi")
        console.log(error)
      }
    }, [judetCurent]
  )

  const handleClickJudet = async (name, resedinta) => {
    setJudetCurent(name)
    setResedintaCurenta(resedinta)
  }

  const apeleazaApi = async () => {
    const raspuns = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${resedintaCurenta}&appid=${cheieApi}`)
    return raspuns.data
  }

  const setareDescriere = (desc, main) => {
    switch(desc){
      case 'clear sky':
        setDescriere("Cer senin")
        setImagine('https://i.imgur.com/ZYAkWby.png')
        break
      case 'few clouds':
        setDescriere("Puțini nori")
        setImagine('https://i.imgur.com/7i6QUQV.png')
        break
      case 'scattered clouds':
        setDescriere("Parțial noros")
        setImagine('https://i.imgur.com/eL30XFd.png')
        break
      case 'broken clouds':
        setDescriere("Însorit")
        setImagine('https://i.imgur.com/s0wfNIT.png')
        break
      case 'shower rain':
        setDescriere("Rafale de ploaie")
        setImagine('https://i.imgur.com/icyeqVa.png')
        break
      case 'rain':
        setDescriere("Ploaie")
        setImagine('https://i.imgur.com/WygJ7Is.png')
        break
      case 'thunderstorm':
        setDescriere("Furtună")
        setImagine('https://i.imgur.com/BHA3GBb.png')
        break
      case 'snow':
        setDescriere("Ninsoare")
        setImagine('https://i.imgur.com/cTOfRM4.png')
        break
      case 'mist':
        setDescriere("Ceață")
        setImagine('https://i.imgur.com/7M4Y494.png')
        break
      default:
        switch(main){
          case "Thunderstorm":
            setDescriere("Furtună") 
            setImagine('https://i.imgur.com/BHA3GBb.png')
            break
          case "Drizzle": 
            setDescriere("Burniță")
            setImagine("https://i.imgur.com/88ND4tV.png")
            break
          case "Clouds":
            setDescriere("Înnorat")
            setImagine("https://i.imgur.com/wgQi6BV.png")
            break
          case "Rain":
            setDescriere("Ploaie")
            setImagine('https://i.imgur.com/WygJ7Is.png')
            break
          case "Snow": 
            setDescriere("Ninsoare")
            setImagine('https://i.imgur.com/cTOfRM4.png')
            break
          case ("Mist" || "Smoke" || "Haze" || "Fog"):
            setDescriere("Încețoșat")
            setImagine("https://i.imgur.com/7M4Y494.png")     
            break     
          default:
            setDescriere("")
            setImagine("")
            break
        }
    }
  }

  //TO DO
  //am doar 1000 api calls
  //posibil sa stochez valorile de temp pt judete intr-o baza de date  Firebase
  //cu valoare temp, judet, ora accesare 
  //daca ora accesare judet > 1 ora -> se poate face alt api call si se seteaza in bd -- altfel se ia valoare din bd firebase 
  //sau ceva eveniment care sa updateze in firebase valorile la fiecare ora, si de aici doar se acceseaza bd pt numele judetului

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
          <View style={{flexDirection: "column", padding: 7}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.textInfo}>Județ:</Text>
              <Text style={styles.textInfo2}>{judetCurent}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.textInfo}>Reședință județ:</Text>
              <Text style={styles.textInfo2}>{resedintaCurenta}</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.textInfo}>Temperatură:</Text>
              <Text style={styles.textInfo2}>{temperatura} °C</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.textInfo}>Umiditate:</Text>
              <Text style={styles.textInfo2}>{umiditate}%</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text style={styles.textInfo}>Vânt:</Text>
              <Text style={styles.textInfo2}>{vant}km/h</Text>
            </View>
          </View>
        ) : ( <></> )
        }
      </View>
      <View style={styles.containerDescriere}>
        <View style={{width: "100%", height: "20%", justifyContent: "flex-start", alignItems: "center"}}> 
          <Text style={[styles.textInfo2, {fontSize: 33}]}>{descriere}</Text> 
        </View>
        {
        imagine ? (
          <Image
            style={{flex: 1}}
            source={{uri: imagine}}
            resizeMode={'contain'} 
          />
        ):( <></> ) 
        }
      </View>

    </View>
  )
}


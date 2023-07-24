import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import judeteSvg from "./JudeteSvg"

//transformat svg din xml in componenta jsx cu https://react-svgr.com/playground/?native=true

const HartaRomanieiSvg = ( {judetCurent, setJudetCurent} ) => {

    const handleClickJudet = (id) => {
        setJudetCurent(id)
    }

    return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 1000 700" 
        preserveAspectRatio="none" 
      >
        {
            judeteSvg.map( ({d, id, name}) => (
                <Path
                    key         = {id}
                    d           = {d}
                    id          = {id}
                    name        = {name}
                    onPress     = {() => handleClickJudet(id)}
                    fill        = {judetCurent === id ? "white" : "gold"}   
                    stroke      = {"black"}
                    strokeWidth = {2}
                />
            ))
        }
    
        <Circle cx={701.8} cy={293.1} />
        <Circle cx={589.2} cy={57.6} />
        <Circle cx={416.9} cy={151.6} />
      </Svg>
    )
}
export default HartaRomanieiSvg
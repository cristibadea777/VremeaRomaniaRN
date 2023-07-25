import * as React from "react"
import Svg, { Path } from "react-native-svg"
import judeteSvg from "./JudeteSvg"

const HartaRomanieiSvg = ( {judetCurent, handleClickJudet} ) => {

    return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 1000 700" 
        preserveAspectRatio="none" 
    >
    {
        judeteSvg.map( ({d, id, name, resedinta}) => (
            <Path
                key         = {id}
                d           = {d}
                id          = {id}
                name        = {name}
                resedinta   = {resedinta}
                onPress     = {() => handleClickJudet(name, resedinta)}
                fill        = {judetCurent === name ? "white" : "gold"}   
                stroke      = {"black"}
                strokeWidth = {2}
            />
        ))
    }
    </Svg>
    )
}
export default HartaRomanieiSvg
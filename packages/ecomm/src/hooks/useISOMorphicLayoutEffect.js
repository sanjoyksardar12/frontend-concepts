import { useEffect, useLayoutEffect } from "react";

const useISOMorphicLayoutEffect = ()=>{
    const type =  typeof window === "undefined"? useEffect: useLayoutEffect

    console.log("type", type,typeof window === "undefined" )
    return type
}

export default useISOMorphicLayoutEffect;
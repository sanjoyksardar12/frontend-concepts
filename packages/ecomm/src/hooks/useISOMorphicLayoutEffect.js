import { useEffect, useLayoutEffect } from "react";

const useISOMorphicLayoutEffect = ()=>{
    return typeof window === "undefined"? useEffect: useLayoutEffect
}

export default useISOMorphicLayoutEffect;
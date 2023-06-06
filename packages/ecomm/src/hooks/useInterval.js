import {useEffect} from 'react';

// function useInterval(callback, interval) {

//   const savedCallback = React.useRef(callback);
//   React.useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   React.useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (interval !== null) {
//       let id = setInterval(tick, interval);
//       return () => clearInterval(id);
//     }
//     return undefined;
//   })
// }


function useInterval(callback, interval) {
  useEffect(() => {
    function tick() {
      callback();
    }
    if (interval!== null) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
    return undefined;
  })
}

export default useInterval;
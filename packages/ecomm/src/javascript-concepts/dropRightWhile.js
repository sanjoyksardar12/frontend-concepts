const source = "https://www.greatfrontend.com/questions/javascript/drop-right-while";
/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropRightWhile(array, predicate) {
  let index; 
  for ( let i = array.length - 1; i>=0 ; i--){
    const value = array[i];
    if(predicate(value)){
      index = i;
    }else{
      break
    }
  }
  return array.slice(0, index)
}
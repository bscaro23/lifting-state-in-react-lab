// src/components/IngredientList.jsx
import { availableIngredients } from "../App";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
    const {addToStack,} = {...props}
    return <ul>{availableIngredients.map((ingredient, idx) => {
        return(
            <Ingredient key={idx} index={idx} {...ingredient} change={addToStack} />
        )
    })}</ul>;
  };
  
  export default IngredientList;
  
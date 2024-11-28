// `src/components/BurgerStack.jsx`
import Ingredient from "./Ingredient";

const BurgerStack = (props) => {
    const {stack, removeFromStack} = {...props}
    
    if (stack.length === 0) return <h1>Add Some Ingredients</h1>

    return <ul>{stack.map((ingredient, idx) => {
        return(
            
            <Ingredient key={idx} inBurger={true} index={idx} {...ingredient} change={removeFromStack} />
        )
    })}</ul>;
  };
  
  export default BurgerStack;
  
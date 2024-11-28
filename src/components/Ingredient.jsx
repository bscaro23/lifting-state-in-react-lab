const Ingredient = (props) => {
    const {color, name, inBurger, change, index} = {...props}


    return(
        <li style={{backgroundColor: color}}> {name} <button onClick={() => change(index)}>{inBurger ? '-' : '+'}</button></li>
    )
}

export default Ingredient
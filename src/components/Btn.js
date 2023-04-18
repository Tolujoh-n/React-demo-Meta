// function Btn() {
//     const clickHandler =() => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>Click Me</button>
//     )
// }

// export default Btn;

function Btn() {
    const clickHandler =() => console.log('Mouse Over')
    return (
        <button onMouseOver={clickHandler}>Click Me</button>
    )

    
}

export default Btn;

// Raw Javascript event handling
// const jsbutton = document.getElementById('js-btn')
// js-Btn.addEventListner('click', funcion() {
//     console.log('Clicked')
// })


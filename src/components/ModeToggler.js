function ModeToggler() {
    let darkModedOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function handleClick() {
        darkModedOn = !darkModedOn;
        if (darkModedOn === true) {
            console.log("Darkmode is On")
        } else {
            console.log("Lightmode is On")
        }
    }


    return (
        <div>
            {darkModedOn ? darkMode : lightMode}
            <button onClick={handleClick}>Clicl Me and check Console</button>
        </div>
    )
}

export default ModeToggler;
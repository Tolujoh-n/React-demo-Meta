function Main() {
    
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    const withoutArrow = function() {
        return Math.floor(Math.random() * 10) + 1
    }

    return (
        <div>
            <h2>Using raw javascript in tag</h2>
            <p>This is to confirm that HTML inside JS file are not HTML but JSX</p>
            
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "under 0.5"}</h1>
            <h1>Here's a randon numbers from 0 to 10: 
                { Math.floor(Math.random() * 10) + 1 }
            </h1>
            <h1>Here's a randon numbers from 0 to 10: { getRandomNum() }</h1>
            <h1>Here's a randon numbers from 0 to 10: { withoutArrow() }</h1>
        </div>
    )
}

export default Main;

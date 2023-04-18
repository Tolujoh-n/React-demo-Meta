function PromoHeading(props) { //child component
    return (
        <>
        <h1>{props.heading}</h1>
        <h2>{props.callToAction}</h2>
        </>
    )
}

export default PromoHeading;
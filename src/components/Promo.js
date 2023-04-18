import PromoHeading from './PromoHeading'
const data = {
    heading: "99% Off all Items!",
    callToAction: "90% Off all Items!"
}

function Promo() { //Parent component
    return (
        <div className="promo-section">
            <h1>Working on changing content dynamically</h1>
            <PromoHeading
                heading={data.heading}
                callToAction={data.callToAction} />
        </div>
    );
};

export default Promo;
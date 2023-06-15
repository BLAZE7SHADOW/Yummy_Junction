
// eslint-disable-next-line react/prop-types
const Section = ({ title }) => {
    return (
        <h1>{title}</h1>
    )
}







const Instamart = () => {
    return (
        <div className="instamart">
            <Section title={"About Instamart"} />
        </div>
    )
}

export default Instamart
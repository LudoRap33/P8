import { Link } from "react-router-dom"

const Card = ({ data }) => {
    const backgroundCardStyle = {
        backgroundImage: `url(${data.cover}), linear-gradient(
                180deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 0, 0, 0.5) 100%
              )`
    }

    return (
        <Link
            to={`/lodging/${data.id}`}
            className="card"
            style={backgroundCardStyle}
        >
            <span>{data.title}</span>
        </Link>

    )
}

export default Card
import { useState } from 'react'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'

const Dropdown = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)

    const description = (data) =>
        Array.isArray(data)
            ? (
                <p>
                    {data.map((element) => (
                        <span key={element}>
                            {element}
                            <br></br>
                        </span>
                    ))}
                </p>
            )
            : (
                <p>{data}</p>
            )

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <span>{data.title}</span>
                <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt="arrow"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {isOpen ? description(data.description) : ''}
        </div>
    )

}

export default Dropdown
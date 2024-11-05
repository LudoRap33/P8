import { useState } from 'react'
import arrowUp from '../assets/arrow-up.png'
import arrowDown from '../assets/arrow-down.png'

//propse 

const Dropdown = ({ data }) => {
// vrai ça apparer et faux ça disparer
// sert à actualiser la page
    const [isOpen, setIsOpen] = useState(false)

// distintion entre  les data

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
// affiche le nom qu'on veut afficher
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
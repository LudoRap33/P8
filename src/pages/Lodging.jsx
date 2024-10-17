import { useParams } from "react-router-dom"

const Lodging = () => {
    const { id } = useParams()


    return (
        <section id='lodging'>
            {id}
        </section>
    )
}

export default Lodging
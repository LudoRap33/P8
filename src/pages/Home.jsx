import Banner from "../components/Banner"
import image from '../assets/header-img.png'
import data from '../data/logements.json'
import Card from "../components/Card"

const Home = () => {
    return (
        <div className="home">
            <Banner img={image} text='Chez vous, partout et ailleurs'></Banner>
            <section className="gallery">
                {
                    data.map(item => (<Card data={item} key={item.id} />))
                }
            </section>
        </div>
    )
}

export default Home
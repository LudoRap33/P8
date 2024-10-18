import { useParams } from "react-router-dom"

const Lodging = () => {
    const { id } = useParams()


    return (
        <section id='lodging'>

            {id}
        <header class="container">
		    <h1>
			<img class="image" src="./packagge-lock.png" alt="Print it ! Impressions d'entreprises">

		</header>
		</div>

        <div id="banner">
			<img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
			<img class="arrow arrow_left" src="./assets/images/arrow_left.png" alt="arrow left">
			<img id="arrow_right" class="arrow arrow_right" src="./assets/images/arrow_right.png" alt="arrow right">
			<div class="dots">
			</div>
		</div>

        </section>
    )
}

export default Lodging
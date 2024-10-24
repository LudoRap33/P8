import { useParams } from "react-router-dom"
import data from '../data/logements.json'
import Carousel from "../components/Carousel"
import Tags from "../components/Tags"
import Ratings from "../components/Ratings"
import Dropdown from "../components/Dropdown"
import NotFound from "./NotFound"

const Lodging = () => {
	const { id } = useParams()

	// On récupére le logement en fonction de son id en paramètre de l'url
	const lodging = data.find(item => item.id === id)

	// On vérifie si l'id d'un logement existe
	if (!lodging) {
		// si il n existe pas dans ce cas on est renvoyé vers la page 404
		return <NotFound />
	}


	return (
		<section id='lodging'>
			<Carousel data={lodging} />
			<div className="container">
				<div className="header">
					<div className="title">
						<h1>{lodging.title}</h1>
						<h2>{lodging.location}</h2>
						<Tags tags={lodging.tags} />
					</div>
					<div className="sub-header">
						<div className="host">
							<span>{lodging.host.name}</span>
							<img src={lodging.host.picture} alt={lodging.host.name} />
						</div>
						<Ratings rating={lodging.rating} />
					</div>
				</div>
				<div className="dropdowns">
					<Dropdown
						data={{ title: 'Description', description: lodging.description }}
					/>
					<Dropdown
						data={{ title: 'Equipements', description: lodging.equipments }}
					/>
				</div>
			</div>
		</section>
	)
}

export default Lodging
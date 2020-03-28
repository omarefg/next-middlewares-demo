import axios from 'axios'
import Card from '../components/Card'
import Layout from '../components/Layout'

const Home = ({ cards }) => {
	console.log(cards)
    return (
      	<>
      		<Layout>
      			<main>
					<h1 className="title">Bienvenido a Platzi Master Cards</h1>
					<p className="description">Selecciona una carta</p>
					{!cards.length && <h1>No hubo respuesta</h1>}
					<div className="grid">
						{cards.map(card => <Card key={card.id} {...card}/>)}
					</div>
      			</main>
      		</Layout>
      		<style jsx>{`
				.title {
					margin: 0;
					line-height: 1.15;
					font-size: 2rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
				}

				main {
					padding: 5rem;
				}

				.grid {
					display: grid;
					grid-template-columns: repeat(4, 25%);
					grid-gap: 1rem;
				}
      		`}</style>
    	</>
  	)
}

Home.getInitialProps = async () => {
  const { data: cards } = await axios.get(`http://localhost:3000/api/cards`)
  return { cards }
}



export default Home

import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/Layout'

const CardDescription = ({ card }) => {
    const {
        imageUrl,
        name,
        setName,
        colors,
        rarity,
        artist
    } = card
    return (
        <>
            <Layout>
                <div className="container">
                    <Link href="/">
                        <button>Regresar</button>
                    </Link>
                    <div className="sub-container">
                        <div>
                            <img src={imageUrl}/>
                        </div>
                        <div className="text-container">
                            <h4>Nombre</h4>
                            <p>{name}</p>
                            <h4>Edición</h4>
                            <p>{setName}</p>
                            <h4>Rareza</h4>
                            <p>{rarity}</p>
                            <h4>Artista</h4>
                            <p>{artist}</p>
                            <h4>Colores</h4>
                            <ul>
                                {colors.map(color => <li key={color}>{color}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: calc(100vh - 100px);
                    align-items: center;
                }

                .sub-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                img {
                    box-shadow: 0 0 20px 0 ${colors[0] || '#e3e3e3'};
                }

                h4 {
                    margin: 2.5px 0;
                }

                button {
                    margin-top: 1rem;
                    padding: 8px 16px;
                    border-radius: 8px;
                    border: none;
                    background-color: #98CA3D;
                    color: white;
                    font-weight: bold;
                    text-transform: uppercase;
                    cursor: pointer;
                    box-shadow: 0 0 0px 0 #a5ff00;
                    transition: box-shadow 0.15s ease;
                    outline: none;
                }

                button:hover {
                    box-shadow: 0 0 5px 0 #a5ff00;
                    transition: box-shadow 0.15s ease;
                }

                .text-container {
                    padding: 32px;
                }
            `}</style>
        </>
    )
}

CardDescription.getInitialProps = async ({ query, res }) =>{
    try {
        const { id } = query
        const { data: card } = await axios.get(`http://localhost:3000/api/cards/${id}`, {
            headers: {
                Authorization: 'smellycat'
            }
        })
        return { card }
    } catch (error) {
        const { status } = error.response
        if (status === 401) {
            res.writeHead(303, {
                Location: '/shame'
            }).end()
        }
    }
}

export default CardDescription
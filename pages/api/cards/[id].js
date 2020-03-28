import axios from 'axios'

const API_URL = 'https://api.magicthegathering.io/v1/cards'

export default async (req, res) => {
    const { query } = req
    const { id } = query
    const { data: { card } } = await axios.get(`${API_URL}/${id}`)
    res.status(200).send(card)
}
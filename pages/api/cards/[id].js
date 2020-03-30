import axios from 'axios'
import API_URL from '../../../lib/magicApi'

export default async (req, res) => {
    const { query } = req
    const { id } = query
    const { data: { card } } = await axios.get(`${API_URL}/${id}`)
    res.status(200).send(card)
})
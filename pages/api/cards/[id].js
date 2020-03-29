import axios from 'axios'
import API_URL from '../../../lib/magicApi'
import authMiddleware from '../../../middlewares/auth'
import anotherMiddleware from '../../../middlewares/anotherMiddleware'

export default anotherMiddleware(authMiddleware(async (req, res) => {
    const { query } = req
    const { id } = query
    const { data: { card } } = await axios.get(`${API_URL}/${id}`)
    res.status(200).send(card)
}))
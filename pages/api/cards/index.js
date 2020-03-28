import axios from 'axios'
import API_URL from '../../../lib/magicApi'

function getRandomSlice(length) {
    const split = Math.floor(Math.random() * length) + 10
    return [split-12, split]
}

export default async (req, res) => {
    let { data: { cards } } = await axios.get(`${API_URL}`)
    cards = cards.filter(card => card.imageUrl)
    const [min, max] = getRandomSlice(cards.length)
    cards = cards.slice(min, max)
    res.status(200).send(cards)
}
export default (handler) => (req, res) => {
    console.log('Y yo después :(')
    const { headers: { authorization } } = req
    if(authorization !== 'smellycat') {
        return res.status(401).send('unathorized')
    }
    return handler(req, res)
}
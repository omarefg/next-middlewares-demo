export default (handler) => (req, res) => {
    console.log('Yo me llamé primero :D')
    return handler(req, res)
}
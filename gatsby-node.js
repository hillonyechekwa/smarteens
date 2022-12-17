const axios = require('axios')

const getData = async () => {
    try{
        const res = await axios.get("http://localhost:8888/api/sheets")
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

exports.createPages = async ({ actions, graphql }) => {
    const sayHello = await getData()

    console.log(sayHello)
}
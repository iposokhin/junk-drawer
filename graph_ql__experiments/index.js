const app = require('./server')

const port = process.env.PORT || 4000
app.listen( port, () => console.log('Now browse to localhost:4000/graphql') )

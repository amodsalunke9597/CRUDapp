const app = require('./app.js')

const port = process.env.port || 4001

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})

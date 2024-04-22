//1) import json-server library
const jsonServer = require('json-server')

//2) create server using create method inside json-server library
const mediaPlayerServer = jsonServer.create()

//3) create the path for db.json file - router() method is used to create path
const router = jsonServer.router('db.json')

//4) create a middleware to convert json to js
const middleware = jsonServer.defaults()

//5) server should use router and middleware - use() method is used
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//6) set a port to server
//process.env - to select the port that is available if 4000 is consumed or used by another developer
const PORT = 4000 || process.env

//7) run the server
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port ${PORT}`);
})
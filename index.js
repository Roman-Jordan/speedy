const express = require('express')
const server = express();
const helmet = require('helmet')

server.use(helmet())
server.use('/',(req,res)=>{
res.status(200).json({msg:'It\'s Alive'})	
})

server.listen(8080,()=>{
	console.log('server up');
})

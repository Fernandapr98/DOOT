const http = require('http')
const hostname = ‘127.0.0.1’
const port = 3000

const server = http.createServer((req, res) => {
res.statusCode = 200
res.setHeader(‘Content-Type’, ‘text/plain’)
res.end(‘Hello Worlddd people\n’)
})

server.listen(port, hostname, () => {
console.log(Server running at http://</span><span style="color:#e6db74">${</span><span style="color:#a6e22e">hostname</span><span style="color:#e6db74">}</span><span style="color:#e6db74">:</span><span style="color:#e6db74">${</span><span style="color:#a6e22e">port</span><span style="color:#e6db74">}</span><span style="color:#e6db74">/)
})

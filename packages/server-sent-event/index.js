// @credit https://web.dev/eventsource-basics/

var http = require('http');
// const sys = require('sys');
const fs  = require('fs');
const path = require('path');
const express = require('express');
const SseStream = require('ssestream').default;

const app = express();;




const html = `<!DOCTYPE html>
<html>

  <head>
    <meta charset="UTF-8" />
  </head>

  <body>
  <h1>SSE</h1>
    <script>
      var source = new EventSource("/events");
      source.onmessage = function (e) {
        document.body.innerHTML += e.data + "<br>"
      };
      var es = new EventSource("/sse");
      es.addEventListener('server-time', function (e) {
        console.log(e.data)
      })
    </script>
  </body>

</html>`



// http.createServer(function(req, res){

//   console.log("got request.................");
//   // debugheaders(req)
//   if(req.headers.accept && req.headers.accept==="text/event-stream"){
//     console.log("accepting event-stream....")
//     if(req.url=== "/events"){
//       sendSSE(req, res);
//     }else{
//       res.writeHead(404);
//       res.end();
//     }
//   }
//   else{
//     res.writeHead(200, {"Content-Type": "text/html"});;
//   // const content = fs.readFileSync(__dirname, "sse-node.html", { "encoding": 'utf8' });
//   // console.log("centent====>", content);  
//   res.write(html);
//   res.end();
//   }
// }).listen(4000);


function sendSSE(req, res) {
  res.writeHead(200, {
    "content-type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  var id = (new Date()).toLocaleTimeString();
  let timer = setInterval(() => {
    constructSSE(res, id, (new Date()).toLocaleTimeString())
  }, 5000);

  return timer
}

function constructSSE(res, id, data){
  console.log("sending event....")
  res.write(`id: ${id}\ndata: ${data}\n\n`);
}


// function debugheaders(req) {
//   sys.put("Url", req.url);
//   for(let key in req.headers){
//     sys.put(key + ": "  + req.headers[key])
//   }
//   sys.puts("\n\n");
// }



app.get("/", (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});;
  // const content = fs.readFileSync(__dirname, "sse-node.html", { "encoding": 'utf8' });
  // console.log("centent====>", content);  
  res.write(html);
  res.end();
})

app.get("/events", (req, res) => {
  let timer ;
  if(req.headers.accept && req.headers.accept==="text/event-stream"){
    console.log("accepting event-stream....")
    if(req.url=== "/events"){
      timer = sendSSE(req, res);
    }else{
      res.writeHead(404);
      res.end();
    }
  }

  res.on("close", ()=>{
    console.log("timer value...", timer)
    clearInterval(timer)
    console.log("timer value after clearing...", timer)
  })
})


app.get('/sse', (req, res) => {
  console.log('new connection')

  const sseStream = new SseStream(req)
  sseStream.pipe(res)
  const pusher = setInterval(() => {
    console.log("sending sse events data.............")
    sseStream.write({
      event: 'server-time',
      data: new Date().toTimeString()
    })
  }, 1000)

  // ⭐️connection is closing on browser shutdown
  res.on('close', () => {
    console.log('lost connection')
    clearInterval(pusher)
    sseStream.unpipe(res)
  })
})

app.listen(4000, (err, res)=>{
  console.log("server listening at 4000 port...");
})
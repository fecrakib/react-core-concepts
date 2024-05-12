const http = require("node:http");


const server = http.createServer(((req,res)=>{
    // res.end("Hello from server world !")
    
    if(req.url==='/home' && req.method==='GET'){
      res.writeHead(200,{
        "Content-type":"text/html",

      });
      res.end(`<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Voting System Dashboard</title>
          <!-- Include Tailwind CSS -->
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      
      <body class="bg-gray-100">
          <!-- Admin Sidebar -->
          <aside class="bg-gray-800 text-gray-100 h-screen w-64 fixed top-0 left-0 overflow-y-auto">
              <div class="p-4">
                  <h1 class="text-2xl font-bold">Admin Panel</h1>
                  <ul class="mt-4">
                      <li><a href="#" class="block py-2 px-4">Dashboard</a></li>
                      <li><a href="#" class="block py-2 px-4">Elections</a></li>
                      <li><a href="#" class="block py-2 px-4">Candidates</a></li>
                      <li><a href="#" class="block py-2 px-4">Voters</a></li>
                      <li><a href="#" class="block py-2 px-4">Results</a></li>
                  </ul>
              </div>
          </aside>
      
          <!-- Main Content -->
          <div class="ml-64 p-4"> <!-- Adjust margin-left to accommodate the sidebar -->
              <h1 class="text-3xl font-bold mb-8">Voting System Dashboard</h1>
              <!-- Your main content goes here -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                  <h2 class="text-xl font-semibold mb-4">Election Overview</h2>
                  <p>This is where you can display election-related information.</p>
              </div>
          </div>
      </body>
      
      </html>
       `)
    }else if(req.url ==='/posts' && req.method==="GET"){
       res.writeHead(200,{
        "Content-type":"text/plain",
        email:"rakibislam132575@gmail.com",
        phone:34525,
       })
       res.end("This i posts data")
    }else{
        res.end("Not found")
    }

    

}));
server.listen(5000,"127.0.0.1",()=>{
    console.log("sever is listening")
});
// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === '/home' && req.method === 'GET') {
//         res.writeHead(200, {
//             "Content-type": "text/plain"
//         });
//         res.end("This is home data");
//     } else if (req.url === '/posts' && req.method === "GET") {
//         res.writeHead(200, {
//             "Content-type": "text/plain",
//             "email": "rakibislam132575@"
//         });
//         res.end("This is posts data");
//     } else {
//         res.writeHead(404, {
//             "Content-type": "text/plain"
//         });
//         res.end("Not found");
//     }
// });

// server.listen(5000, "127.0.0.1", () => {
//     console.log("Server is listening on port 5000");
// });

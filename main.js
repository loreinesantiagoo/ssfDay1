//step 1:load path and express
const path = require('path');
const express = require('express');

//step 2: create an instance of express app
const app = express();

//step 3: define rules/routes

//serve resources from public
   
app.use(
    express.static(
        path.join(__dirname, 'angular')
    )
)    
app.use(
    express.static( //middleware
        path.join(__dirname, 'public')
    ) 
    )
app.use((req, resp) => {
    // resp.redirect('/404.html'); or resp.redirect('/'); --->good for telling user
    resp.status(404);
    resp.sendfile(path.join(__dirname, 'public', '404.html')) //--->good for telling the machine
})
//step 4:start the server
            //evaluaton order: cmd arg, env variable, default
            //start from commandline(the closest one), if cannot, find in env(2nd closest) (below), if still cannot use default (furthest)3000
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

console.log('port started', process.argv)

app.listen(PORT, () => {
    console.info(`App started on port ${PORT} at ${new Date()}`);
})


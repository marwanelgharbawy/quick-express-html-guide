const express = require("express")
const app = express()
const path = require("path")

// Server setup
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/about.html'))
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/profile.html'))
})

// Catch-all route
app.get('*', (req, res) => {
    res.send("Not available, fix your code bro")
})
# Quickly setup a server using express

Steps to create a local server to experiment with your static webpage/front-end project

## Requirements
These steps only require you to install node, you can postpone your understanding to express stuff later.

This will only show you how you can use express and what to modify so that you can view your static webpage on a local server.

## Step 1: Clone this repository
run `git clone <repository.git>` on your git bash terminal or if you're not familiar with git just download the ZIP file (you'll find a green "code" button)

## Step 2: Install packages
run the following command in the directory containing `package.json` (the main workspace) to install packages (in this case it's only express) it will create a `package-lock.json` and a `node_modules` directory (ignore them)
```bash
npm i
```

## Step 3: Configure `index.js` 

Since we're only working with GET requests, you'll need to specify each route and specify the HTML file you want to view.
For example here we want at `/karo` route to view the `karo.html` file, so you add the following function call:

```js
app.get('/karo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/karo.html'))
})
```
Do the same for the rest of the routes and for the rest of the files

## Step 4: Configure your HTML files path

Put your HTML files in the views directory.

## Step 5: Run node
run the following node file, it will create a server on http://localhost:3000 and now you can experiment with your files
```js
node index.js
```

## Step 6: Install nodemon (Bonus)
Install nodemon so that it restarts the node file everytime a change happens, it's much better and easier than keep restarting the server manually.
```
npm i nodemon -g
```

with that you can run `nodemon` instead of `node` in your terminal

```
nodemon index.js
```
or
```
nodemon
```

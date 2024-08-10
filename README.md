# Quickly setup a server using express

Steps to create a local server to experiment with your static webpage/front-end project

## Requirements
These steps only require you to install node, you can postpone your understanding to express stuff later.

This will only show you how you can use express and what to modify so that you can view your static webpage on a local server.

## Step 1: Clone this repository
Run `git clone <repository.git>` on your terminal, or just download the ZIP file and extract it.

## Step 2: Install packages
Run the following command in the directory containing `package.json` (the main workspace) to install packages, it will create a `package-lock.json` file and a `node_modules` directory (ignore them)

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

Put your HTML files in the views directory. The JS code checks files with the format `views/something.html` so it can be more organized. You can totally put the files wherever you want but you have to change the path in the code.

## Step 5: Run node
Run the following node file, it will create a server on http://localhost:3000 and now you can experiment with your files.

```js
node index.js
```

## Step 6: Install nodemon (Bonus)
Install nodemon so that it restarts the node file everytime a change happens, it's much better and easier than keep restarting the server manually.

```
npm i nodemon -g
```

With that, you can run `nodemon` instead of `node` in your terminal

```
nodemon index.js
```
or
```
nodemon
```

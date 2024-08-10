# Quickly setup a server using express to view your HTML files ANYWHERE.

Steps to create a local server to experiment with your static webpage/front-end project. This will allow you to have a server up and running on your local network. You can view it on your phone, tablet, or use port forwarding to view it from other devices on different networks.

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

The index.js file serves as a template for you to use right away, with slight modifications according to your routes and files. Since we're only working with GET requests, you'll need to specify each route and the corresponding HTML file you want to view.

**Example:** To view the `karo.html` file at the `/karo` route, add the following function call to `index.js`:

```js
app.get('/karo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/karo.html'))
})
```

Do the same for other routes and files.

## Step 4: Configure your HTML files path

Place your HTML files in the views directory. The JS code looks for files in the format views/something.html to keep things organized. You can put the files elsewhere but you must change the path in the code accordingly.

## Step 5: Run node
Run the following node file, it will create a server on `http://localhost:3000` and now you can experiment with your files.

```js
node index.js
```

## Step 6: Install nodemon (Bonus)
Install nodemon so that it restarts the node file everytime a change happens, it's much better and easier than keep restarting the server manually.

```
npm i nodemon -g
```

With that, you can run `nodemon` instead of `node` in your terminal:

```
nodemon index.js
```
or simply:
```
nodemon
```
## Viewing the webpage

### On a Local Network:

- The server runs on `http://localhost:3000`.
- "Localhost" resolves to your computer's IP address. To view the webpage on your phone or another device on the same network:
  1. Find your computer's IP address.
  2. Replace "localhost" with this IP address in the URL.

### On a Different Network:

You can use port forwarding to access the webpage from a different network. Port forwarding allows external devices to connect to services inside a private (local) network by redirecting traffic through a router.

#### Using VS Code:

1. **Start the Server**: Make sure your server is running.

2. **Open the VS Code Panel**:
   - Press `CTRL + J` to toggle the panel.
   - Switch to the `PORTS` tab.

3. **Forward a Port**:
   - Click on the "Forward a Port" button.
   - Note the Forwarded Address provided.

4. **Access the Webpage**:
   - Copy the Forwarded Address.
   - Use this address in any browser on any device to view the webpage.

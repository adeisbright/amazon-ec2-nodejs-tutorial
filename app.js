const { createServer } = require("http");
const PORT = 3000;
const requestListener = async (req, res) => {
    try {
        switch (req.url) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`<h1>Welcome to Nodejs on EC2</h1>`);
                break;
            case "/about":
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`<h1>Welcome to About</h1>`);
                break;
            default:
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(`<h1>ERROR 404: Not found</h1>`);
        }
    } catch (error) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write(`<h1>${error.message}</h1>`);
    }
};

createServer(requestListener).listen(PORT, () =>
    console.log(`The app is running on port ${PORT}`)
);

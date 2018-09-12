const path = require("path");

module.exports = {
    entry: "./sources/site/dist/main.js",
    output: {
        path: path.resolve(__dirname, "public/javascripts"),
        filename: "site.bundle.js"
    }
};


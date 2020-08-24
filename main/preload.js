// in preload scripts, we have access to node.js and electron APIs
// the remote web app will not, so this is safe
const { remote } = require("electron");

process.once("loaded", () => {
	window.remote = remote;
});

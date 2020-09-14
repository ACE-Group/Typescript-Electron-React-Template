const path = require("path");
const fs = require("fs");

const environment = Object.assign(
	{
		PRODUCTNAME: "Electron-Template", // Same as name in "package.json"
		PLATFORM: process.platform,
		ENV: process.env,
		current: process.env.NODE_ENV,
		ELECTRON_VERSION: process.versions.electron
	},
	process.env
);

function getAppData() {
	switch (environment.PLATFORM) {
		case "darwin": {
			return path.join(environment.ENV.HOME, "Library", "Application Support", environment.PRODUCTNAME);
		}
		case "win32": {
			return path.join(environment.ENV.APPDATA, environment.PRODUCTNAME);
		}
		case "linux": {
			return path.join(environment.ENV.HOME, `.${environment.PRODUCTNAME}`);
		}
		default: {
			console.error("Unsupported platform!");
			process.exit(1);
		}
	}
}

// App Path Config
const appPath = __dirname;
const appDataPath =
	!environment.current || environment.current === "production"
		? getAppData()
		: path.join(__dirname, "..", environment.PRODUCTNAME);

const appLogPath = path.join(appDataPath, "LOG");
const appMainPath = path.join(appPath, "..", "main");
const appRendererPath = path.join(appPath, "..", "bundle");
const appPackageJsonPath = path.join(appPath, "..", "package.json");

if (!fs.existsSync(appDataPath)) {
	fs.mkdirSync(appDataPath);
}

module.exports = {
	environment,
	appPath,
	appDataPath,
	appLogPath,
	appMainPath,
	appRendererPath,
	appPackageJsonPath
};

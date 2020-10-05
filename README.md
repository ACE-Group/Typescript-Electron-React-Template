# electron-typescript-react-template

**Clone and run for a quick way to see Electron in action.**

This is an Electron template for developing cross-platform app with *Typescript* + *React* + *Webpack*.
Fully configured for packaging and distribution. You can just follow the guides for packaing and publish.

**Main Project Structure**

- `pack-configuration` : Configurations for packaging.
- `config` : Webpack configuration and path resolver.
- `main` : Electron main process.
- `renderer` : Renderer process (React).
- `.env` : \
	APPLE_PWD=XXXX-XXXX-XXXX-XXXX (Apple app-specific password. You can genereate here https://appleid.apple.com. Will be used for notarization) \
	APPLE_ID=XXX@XXXX.XXX (Apple ID. You can also get this from https://appleid.apple.com)\
	PROVIDER=XXXXXXXXXX (Apple team ID)\
	PUBLIC_URL=./


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ACE-Group/Typescript-Electron-React-Template
# Go into the repository
cd Typescript-Electron-React-Template
# Install dependencies
npm install or yarn install
# Run the app in dev mode
npm run dev or yarn dev
# Run the app in prod mode
npm run prod or yarn prod
# Package the app
npm run build or yarn build
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

# MyCloset <img src="./client/src/img/$wagGorilla.jpg" align="right" alt="Logo Image" width="200"/>

  <div width="400">
  A closet application that can help virtually store and organize your clothes. Add, delete, update, save and group your clothes with this efficient and visual tool.
  Built with React frontend and Node JS backend connected to a local MySQL server (see `client` and `server` files).
  </div> 
  <img src="./img/frontEnd.png" alt="Frontend Image"/>

## Built with
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" width="100"/>
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" width="100"/>
* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="100"/>
* <img src="http://nodejs.org/images/logos/nodejs-dark.png" width="100"/>
* <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" width="100"/>
## Features
- CLOSET
  - Upload images of your clothes
  - Label your clothes with custom names
  - Describe your clothes or write down special notes
  - Categorize the clothing
  - Filter and search through your closet with a filter selector
  - Save your closet automatically to a local database
- SETS/OUTFITS
  - Create sets of clothes
  - One of each clothing type can be added to a set
  - Sets are displayed by displaying the image of each individual clothing from TOP -> OUTERWEAR -> BOTTOM -> FOOTWEAR -> ACCESSORY
  - Not all types of clothing are required
  - Save each set to a new MySQL table
- ACCOUNT SYSTEM
  - Sign in with a username and password to access your closet
    - Each user has their own individual data
    - Cannot access data from other accounts
  - Bcrypt powered password encryption
  - Cookie parsing for ease-of-use
 

## Demos
- Login: https://drive.google.com/file/d/1gZSV4XrzPF1r6ZjHVMsNwyjrlN8FQHv1/view?usp=share_link
- Add: https://drive.google.com/file/d/1CJwBPaHrQmrSOYoIjjYW2hrshZWmVTxG/view?usp=share_link
- Sets: https://drive.google.com/file/d/1hesk267QPrCes6pLNsU7w98a8Y_CZ-xY/view?usp=share_link
- Persistence: https://drive.google.com/file/d/1twzrBgEHesuPTewhBWYOSjuDeGAofUtE/view?usp=share_link

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node.js]: http://nodejs.org/images/logos/nodejs-dark.png

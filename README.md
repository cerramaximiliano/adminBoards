eThis project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Config routes
To set up the routes, you need to modify the navigationConfig.js file (/src/app/configs/navigationConfig.js). Within this file, you should alter the navigationConfig array, which contains objects with routes, icons, types, subtypes, etc.

Then, you need to modify the routesConfig.jsx file (/src/app/configs/routesConfig.jsx), within which the routeConfigs array contains the configuration files for each route that should be rendered. Add the desired configuration file for the route, for example: if the route dashboards.project is added in navigationConfig.js, you must include the previously imported DashboardsConfigs configuration file in routeConfigs.

These configuration files for each route component are located within the main folder.

After adding the navigation, route, and components, rendering errors should be avoided by adding the data request either to the external API or to the mock API.

If you wish to add the mock API version of data, navigate to the @mock-api folder and incorporate the necessary component controllers within the /api folder. For example, if you're configuring navigation and routes for dashboard components, include the dashboard controllers.

To ensure the normal and correct functioning of the mock API, it is necessary to include within the MockAdapterProvider.jsx file the importation of the files for each API incorporated in the /api folder. After the importation, those variables should be added within the array containing the setupAllMocks function, which will iterate the setup of the APIs.
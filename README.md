# weatherpage

A React web app pulling data from [weatherapi.com](https://www.weatherapi.com/).

## Description

This app was created as a mobile-friendly final project for my [JavaScript Front-End class](https://www.pce.uw.edu/courses/front-end-application-development-with-javascript). It queries weatherapi.com and renders the returned data as a three-day forecast (free weatherapi.com accounts are [limited to 3 days](https://www.weatherapi.com/pricing.aspx)). This API is used due to its high degree of flexibility in its location input; a zip/postal code, city, state, or country may be entered. This enhances user-friendliness without requiring a larger time investment or codebase, and possibly a second API call, to handle geolocation. Conversely, this means that weather data for larger areas may be less optimal than could be attained via in-app interpretation of user input.

### Technologies used:

- [react-router](https://www.npmjs.com/package/react-router) is used to built out the page's two views (a form and a forecast view).
  - `useParams` is used to pass the data for a particular day to a the WeatherCard.jsx component so it may be parsed.
  - `Link` provides functionality to return to the Form.jsx component.
  - `useNavigate` assigns the forecast view a URL using the user-supplied location.
- [Bootstrap](https://getbootstrap.com/) is used for the overall styling of the page.
- Additional CSS is used to provide finishing touches.

## Forking

### Prerequisites:

- `Node.js` and `npm` [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your system.

### Instructions:

After [forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and [cloning](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this repository, you will need to navigate inside the root `./weatherpage` directory, and run `npm install`. For example: if you cloned the repo to your Ubuntu Desktop, you would `$ cd ~/Desktop/weatherpage`, then enter `$ npm install`. This installation may take a while.

In order to succesfully run this project, once forked, an API key will be required. Browse to [weatherapi.com's signup page](https://www.weatherapi.com/signup.aspx) and create an account, then log in. Once logged in, you will find a "Regenerate key" button at the bottom of the weatherapi.com/my page. Use this to generate a key.

Create a `.env` file in the `./weatherpage` directory, and enter `REACT_APP_API_KEY="YOUR_KEY_HERE"` into this file, replacing the text `YOUR_KEY_HERE` with your new API key. Keep the quote marks.

From your `./weatherpage` directory, the command `npm start` or `npm run start` may be used to initialize a local web server hosting the `weatherpage` app. This should automatically open a browser window and auto-navigate to the app, however you may manually do so if necessary. The URL will likely be `http://localhost:3000`, unless your system is using a port other than 3000.

## User Interaction

The app itself is simple. The first page that appears will ask the user for a location. This may be a wide range of inputs, from text names of countries or cities, to numerical zip codes, to alphanumerical post codes. Once input and the "Enter" button pressed, the page switches to a forecast view. Pressing the "Enter a different location" button will return the view to the location form.

If an API connection error occurs, an error message will be displayed.

## Deploying your own weatherpage app

Deployment instructions vary based on the web host you've selected. Refer to their documentation for steps.

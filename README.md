
This platform is designed with the aim of providing an invaluable resource for students embarking on their journey into the realms of computer science, offering a structured and interactive learning experience. It is particularly useful for beginners looking to grasp basic concepts like variables, data types, and loops, etc. as well as more experienced learners who want to delve into complex topics such as sorting algorithms and data structures. Through a carefully curated blend of content, vivid and interactive visualizations, and engaging quizzes, the website fosters an environment where learners can actively engage with the material, thereby deepening their understanding and retention of these complex concepts. It stands as an educational tool, inviting students to not only learn but to truly comprehend and apply their knowledge in practical scenarios.


Installation instructions:


Please clone the repository, information about this is available here: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository.


Create a .nvm file and in it define three variables: 


MONGODB_URI, information about this variable, you can find in here: https://www.mongodb.com/docs/cloud-manager/tutorial/connect-to-mongodb/#connect-to-a-deployment-using-a-mongodb-driver.


AUTH_SECRET is used for the encoding of thecret token each user has. You can write a random string. Example: AUTH_SECRET='random-secret-for-the-token'.


The third variable is used for the final deployment, REACT_APP_API_URL="/api". You can just copy paste it.


Don't forget to add the .nvm file to the .gitignore, as it has the credentials for your database and secret token in it!


If you want to use the website without the server (database or user authentication), you can clone the git repository:  https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository, and the run the npm install command to install any eventually missing dependencies. After that you can run npm start.
# LearningByDoing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

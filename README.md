# 

### Register Admin ###

### Project Intention ###
* Server and User side CPF/CNPJ CRUD.

### Project Dependencies ###

 * Npm as package manager. (https://www.npmjs.com/)
 * Node.js as JavaScript runtime built. (https://nodejs.org/en/)
 * Express.js as Node.js web application framework. (https://expressjs.com/)
 * MongoDB as document data model. (https://www.mongodb.com/)
 * mLab as Database-as-a-Service for MongoDB. (https://mlab.com/)
 * React.js as the application library core. (https://reactjs.org/)
 * Redux as the predictable state container for JavaScript apps. (https://redux.js.org/)
 * Redux Thunk handle asynchronous calls. (https://github.com/reduxjs/redux-thunk)
 * Jest as the Javascript test framework. (https://jestjs.io/en/)
 * Enzyme as the JavaScript Testing utility for React. (https://airbnb.io/enzyme/)
 * Sass as the preprocessor and extension of CSS. (https://sass-lang.com)
 * Eslint to keep the airbnb code pattern. (https://eslint.org/)
 

### Compile and run the client ###

Go to the root folder end run the commands.

- cd client

- npm install (npm i)

- npm run start

### Compile and run the server ###

Open another terminal window abd go to the root folder end run the commands.

- cd server

- npm install (npm i)

- npm run server

### Compile and run the project with docker ###

Go to the root folder end run the commands.

- docker-compose build client

- docker-compose build server

- docker-compose up

### Running the tests ###

- cd client

- npm run test


### Development Description ###

After receiving the challenge, I choose the React library to handle the specifications. 

For the client side I use the create-react-app boilerplate to begin the development,and with Npm I add the dependencies and libraries to complete the task.

For the server side I install node and express and do the configuration by the documentation.

### Application details ###

Thinking about componentization and organization I follow the components pattern of singularity, each component is independent and have your complete structure in one place. 

Js, Styles and Test files are inside the specific component folder to become easier to debug, mantain and refactor.

In multidisciplinary teams, I think if someone else is going to work on a specific component if all off functionality are in one place is easy to understand and work on it.

Looking for code organization and reusability of code following the DRY principle, I normally create folders who handle specific things that are reusable. 

Config, helpers, and hocs (higher order components) folders are examples of reusability. 

On Config folder I reserve for files who have configurations and constants that are immutable and reusable in all parts of the system. In this particular case the API links.

The Helper folders I organize js and CSS files that have a specific utilization like label manipulation and CSS variables. were we can reuse on all the system.

Hocs folder as the same, I put all my Higher Order Functions  on the folder because by definition they are reusable.

The Pages folder is where I put the class extended components who will deal as the pages on the system and will handle to get the data necessary for the components who build the page.

And finally the Redux folder where I organize all the state management structure, the actions creators and reducers.

### Test Coverage ###

I cover the actions and the reducers, when I test my action I want to verify if my ajax call from my ajaxHelper file are dispatching the right actions. And for my reducers test I want to cover if the states of my application was what I expect.


### Notes and considerations about not delivered functionalities ###

First of all, it was very fun and challenging to perform this test. 
Thank you for the opportunity. 

One of the requirements you guys mention was "Conter uma rota de suporte (exemplo: http://127.0.0.1:8080/status) retornando as informações de uptime do servidor, quantidade de consultas realizadas desde o último restart."

Dorry for not deliver this point, I focus on the front end and I run out of time.

Other functionality was "Utilização de containers Docker para construção do ambiente (incluir Dockerfile e qualquer outra dependência para execução no projeto)"

In my local I receive an error about sass compilation because of my OS.

So I could not run the project trought the docker, only with npm.

Best regards.

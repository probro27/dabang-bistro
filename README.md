# Dabang-Bistro Website

## To Run

Download the code and then run ```npm install``` which will allow you to download all of the dependencies.

## Setting up EmailJS

I have used [EmailJS](https://www.emailjs.com/) for providing reservation confirmations and Contact Us forms. 
I have currently used my personal account details but it can be set up for the business account. 

![My service Page](https://ibb.co/NY8Rpkk)

In this I have set up a Gmail service in EmailJS. 

Now for the service you can set up templates to use in Each case. 

![The Templates List](https://ibb.co/L0hwkcJ)

This is the list of 2 separate templates I used. They can be identified with their template IDs.

To customize the EmailJS in the code please change the ContactUs.js file and BookTable.js file. In the sendForm function I have used my service Id, template ID and user ID. Please use your own to get the emails to the business email.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


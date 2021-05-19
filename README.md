# ShoppersPoint
ShoppersPoint is a E-Cart Front-end Application developed in angular which provides following functionalities:
- Login functionality(all Users can Access)
- View Product, Search Product & Product Details Page(all Users can Access)
- Cart & Checkout Functionality(only Logged in User can Access)
- Category Tree to look products via Categories(all Users can Access)
- Internationalization Support for 2 Languages.

## Authentication & Authorization
### Authentication
Login/Logout: Implemented login logout with only 2 users as authenticated Users:
Username – shivam
Password – shivam

Username – admin
Password - admin 
Also worked on persisting login, when session or browser is closed user will remain logged in until explicitly logged out of application.
On logout cart will be cleared & User can’t add items to cart without logging in.

### Authorization
Used Authguard to make sure only logged in user can access cart & checkout pages & will receive notification to login first if not already logged in.


## Backend
Used Json-server as backend of angular application where data is served from db.json file present in “api” folder of application. It contains all Users & Products information used in application. Application stores cart items in memory and not in any backend or persistent storage.

## Mobile Friendly
This application is responsive and can be used easily via a mobile device.

## Internationalization
Implemented Internationalization providing support for two languages:
•	Hindi
•	English

## Category Tree
User can look for Products via following Categories:
![image](https://user-images.githubusercontent.com/40798328/118410119-7e538e00-b6ab-11eb-8dcc-b33e720b6b2a.png)

## Run Locally
Inside Shopperspoint Project type following commands:
npm install

To Run application Locally:  
npm run dev

http://localhost:4200/

## Deployment
Application is deployed on netlify with continuous integration with Github :  

Application URL of Netlify:  
https://unruffled-kepler-5540ec.netlify.app




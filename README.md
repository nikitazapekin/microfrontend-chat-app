# This is a chat application thats which was created using react-js technology with redux-toolkit in conjunction with typescript and a <a href="https://github.com/nikitazapekin/golang-chat-app"> golang server </a>
## In order to start microfrontends use coomands: 
```bash
#use npm 
npm run start -w admin 
npm run start -w host
npm run start -w shop
```
## After starting the app you will be navigated at homepage: 
![image](./packages/shared/assets/Screenshot%20(2711).png)
## After click on start messaging you will be redirected at sign in page:
![image](./packages/shared/assets/Screenshot%20(2712).png)
![image](./packages/shared/assets/Screenshot%20(2713).png)
## After successful authorization, you will find yourself on a page where you are asked to select a chat
![image](./packages/shared/assets/Screenshot%20(2715).png)
![image](./packages/shared/assets/Screenshot%20(2716).png)
## A JWT token was used for authorization. If the refresh token expires, a modal window will pop up requiring you to log in again.
![image](./packages/shared/assets/photo_2024-05-08_23-08-09%20(2).jpg)
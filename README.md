<div align="center">  
  <h1>MyCloset <img src="./client/src/img/$wagGorilla.jpg" align="center" alt="Logo Image" width="200"/></h1>
</div>
A full stack closet application that virtually stores and organizes your clothes. Add, delete, update, save and group your clothes with this efficient and visual tool. Currently only available through a local database via SQL tables, but can be converted to a web host.

## Built with
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" width="100"/>
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" width="100"/>
* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="100"/>
* <img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-logo.png" width="100"/>
* <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" width="100"/>

## Features

<img src="./img/frontEnd.png" alt="Frontend Image"/>

### CLOSET
  - Upload images of your clothes.
  - Label your clothes with custom names.
  - Describe your clothes or write down special notes.
  - Categorize the clothing.
  - Filter and search through your closet with a filter selector.
  - Save your closet automatically to a local database.
### SETS/OUTFITS
  - Create sets of clothes.
  - One of each clothing type can be added to a set.
  - Sets are displayed by displaying the image of each individual clothing from TOP -> OUTERWEAR -> BOTTOM -> FOOTWEAR -> ACCESSORY.
  - Not all types of clothing are required.
  - Save each set to a new MySQL table.
### ACCOUNT SYSTEM
  - Sign in with a username and password to access your closet.
    - Each user has their own individual data.
    - Cannot access data from other accounts.
  - Bcrypt powered password encryption.
  - Cookie parsing for ease-of-use.

 

## Demos
### Login:

https://github.com/jinkim0517/MyCloset/assets/90814113/bebc7c95-e408-4d2c-adfa-fad16d0d6cf3

### Add:

https://github.com/jinkim0517/MyCloset/assets/90814113/25e5ae86-4a59-4868-849e-86820f3d29c4

### Sets/Outfits

https://github.com/jinkim0517/MyCloset/assets/90814113/8201663b-09d7-4664-b561-dc5ea9203efa

### Persistence

https://github.com/jinkim0517/MyCloset/assets/90814113/76d2c762-59f5-4f3c-86e9-33339425762c


## How to use
1. Clone this repository: `https://github.com/jinkim0517/MyCloset.git`.
2. Import the SQL schemas found in `SQLFiles` to your local database.
3. Change the information in the `db.js` file to your own host.
4. Install node packages by running `npm install`.
5. In both the `client` and `server` folders, run `npm start`.


# hapis-web-interface-gsoc2019

## __Welcome to the NVueJS Web Interface from Python Library For Real Time Data Visualization project__


This Application main function is to manage data from a NodeJs API and show it on the [Liquid Galaxy System](https://liquidgalaxy.org/)

This web interface is used with the next applications, three of them making part from the same project:

 * [Node.js API](https://github.com/LiquidGalaxyLAB/PythonLibraryForRealTimeDataVisualizationGSoC2019--API-nodeJs)
 
 * [Social Care Android Application](https://github.com/LiquidGalaxyLAB/Python-library-for-real-time-data-visualization--SocialCare-Android-App)
 
 ## __Google Summer Of Code 2019__
 
<p align="center"> 
 <img width="460" height="300" src="https://i.ibb.co/6YRpnjS/google-summer-of-code-2016.png">
</p>

This project is developed in a context of a scolarship in the program Google Summer Of Code 2019.


## __Wiki__
 
 You can find all the development process and more information about this project on the [Wiki](https://github.com/LiquidGalaxyLAB/Python-library-for-real-time-data-visualization----Web-Interface/wiki) 
 
  ## __Prerequisites__
 
 * [Ubuntu 16.04](http://releases.ubuntu.com/16.04/)
 * [Node.js](https://nodejs.org/en/)
 * [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
 * [Vuejs](https://vuejs.org/)
 * [Vuetifyjs](https://vuetifyjs.com/en/)


## __Getting Started__

The easiest way to get started is to clone the repository:
 ```
 # Get the latest version
 git clone https://github.com/LiquidGalaxyLAB/Python-library-for-real-time-data-visualization----Web-Interface.git
 
 #go to content folder
 cd Python-library-for-real-time-data-visualization----Web-Interface
 
 #before execute npm, make sure that monoDB and the nodeJs are running(explained below)
 sudo service mongod start
 
 #execute node to run
 npm run serve
 
 #if some package is missing install it with the fllow command
 npm install [package_name] --save
 
 #update project after installing package
 npm install -g npm
 
 # Open one browser and go to this URL
 localhost:8080
 ```
 
 ### Install and run nodeJS API
 
 ```
 # Get the latest version
 git clone https://github.com/LiquidGalaxyLAB/PythonLibraryForRealTimeDataVisualizationGSoC2019--API-nodeJs.git 
 
 #go to content folder
 cd PythonLibraryForRealTimeDataVisualizationGSoC2019--API-nodeJs
 
 #execute node to run
 node server.js
 
 #if some package is missing install it with the fllow command
 npm install [package_name] --save
 
 #update project after installing package
 npm install -g npm
 
 # Open one browser and go to this URL
 localhost:3000
 ```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


 ## __License__
  
 This Node.js API is used to make CRUD operations with three specific models, in order to use this data into a Web Interface and an Android Application to display the data into the Liquid Galaxy.

Copyright (C) 2019 Mihaela Claudia Diosan

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.




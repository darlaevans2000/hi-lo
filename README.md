<h1 align="center">🌤 hi-lo weather 🌤</h1>  

#### A Turing School of Software & Design Mod 3 Group Project - Stretch Tech

---

## Table of Contents
* [Introduction](#introduction)
* [Deploy](#Deploy)
* [Features](#features)
* [Technologies](#technologies)
* [Authors](#authors)

## Introduction
The primary goal of this project was to self teach TypeScript. We decided to create an application where a user can view weather in any city they wish. A user can then click on a city card on the home page to view a more in depth forecast for that city. The specifications for this project can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)


## Goals
* Self teach TypeScript
* Use OpenWeather API to recieve weather for current cities
* Use TDD - Cypress 
* Create a search bar with Google places suggestions
* Easy to navigate UI/UX  

## Deploy
[Use this deploy link!](https://hi-lo-weather.herokuapp.com/hi-lo)
---

## Features

#### Home Page
On load, the user sees a search bar where they can search cities, this will also show suggestions of cities to select from. User must select from suggestions. Once they click the "add" button a card for that cities weather for today will pop up. 
<p align = "center">
 <td><img src="https://media.giphy.com/media/DzkhGHufPLiZLKOgyl/giphy.gif?cid=790b761160c8501c0ee416f16b37f81fa0d3c55b873f24c0&rid=giphy.gif" alt="Demonstation of home page"
 width="700" height="auto" /></td>
</p>

#### City Forecast Page
Users can click on that city card from home page and view more details of that cities week forecast and more info about todays forecast. 
<p align = "center">
 <td><img src="https://media.giphy.com/media/oQuGOOgRZAzGSUoVFO/giphy.gif?cid=790b76114a79747c52505b5e42fdb4ac1c2c0428a20e72fa&rid=giphy.gif" alt="Demonstation of Forecast"
 width="700" height="auto" /></td>
</p>

#### Local Storage
Whenever users add a city card, it saves on loal storage. Users can refresh the page and it will still be there. Users can also delete the cities from local storage. 
<p align = "center">
 <td><img src="https://media.giphy.com/media/nqOXIXiozVYZ4tPodZ/giphy.gif?cid=790b7611bc035be24324bec2c9763ec1c2a5a3645c75dfa9&rid=giphy.gif" alt="Demonstation of Local storage"
 width="700" height="auto" /></td>
</p>


---

#### Future Additions
- Add a login page for users to add the cities they want to display on login.
- Add more responsive styling. 
- Add state onto city info when displayed to user. 
---

## Technologies
TypeScript, React, React Router, Fetch/Async, Cypress, JSON, HTML5, SASS, React-Places-Autocomplete

## Authors
<table display: inline;>
    <tr>
        <td> Darla Evans <a href="https://github.com/darlaevans2000">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/76928485?v=4" alt="Darla Evans GitHub Picture"
 width="150" height="auto" /></td>
  <tr>
        <td> Erica Spitz <a href="https://github.com/e-spitz">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/73204436?v=4" alt="Erica Spitz GitHub Picture"
 width="150" height="auto" /></td>
     <tr>
       <td> Natalie McIntyre <a href="https://github.com/nataliemcintyre2021">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/78229679?v=4" alt="Natalie McIntyre GitHub Picture"
 width="150" height="auto" /></td>
</table>  

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.edu/)
###### September 20th, 2021
**[Back to top](#table-of-contents)**
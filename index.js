const section = document.getElementById('data');
const section2 = document.getElementById('data2');
const section3 = document.getElementById('data3');
const section4 = document.getElementById('data4');
const section5 = document.getElementById('data5');
const section6 = document.getElementById('data6');
const section7 = document.getElementById('data7');
const section8 = document.getElementById('data8');
const section9 = document.getElementById('data9');
const section10 = document.getElementById('data10');
const section11 = document.getElementById('data11');
const section12 = document.getElementById('data12');





fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location')
.then(response => response.json())
.then(data => randomGen(data))
.catch(err => console.log(err));



function randomGen(data) {


const newData = data.results;
const name = newData.map( result => result.name.first + " " + result.name.last);
const email =newData.map( result => result.email);
const picture =newData.map( result => result.picture.large);
const country = newData.map(result => result.location.country);

section.innerHTML = `<h1 class="name">${name[0]}</h1>`; 
section.innerHTML += " " + `<div class="email"> ${email[0]} </div>` ;
section.innerHTML += " " + `<img src=${picture[0]} alt=pic>`;
section.innerHTML += " " + `<div class="country"> ${country[0]} </div>` ;




section2.innerHTML = `<h1 class="name">${name[1]}</h1>`  ; 
section2.innerHTML +=" " + `<div class="email"> ${email[1]} </div>` ;
section2.innerHTML += " " + `<img src=${picture[1]} alt=pic>`;
section2.innerHTML += " " + `<div class="country"> ${country[1]} <div>`;


section3.innerHTML = `<h1 class="name">${name[2]}</h1>`; 
section3.innerHTML +=" " + `<div class="email"> ${email[2]} </div>` ;
section3.innerHTML += " " + `<img src=${picture[2]} alt=pic>`;
section3.innerHTML += " " + `<div class="country"> ${country[2]} </div>` ;



section4.innerHTML = `<h1 class="name">${name[3]}</h1>`; 
section4.innerHTML +=" " + `<div class="email"> ${email[3]} </div>` ;
section4.innerHTML += " " + `<img src=${picture[3]} alt=pic>`;
section4.innerHTML += " " + `<div class="country"> ${country[3]} </div>` ;



section5.innerHTML = `<h1 class="name">${name[4]}</h1>`; 
section5.innerHTML +=" " + `<div class="email"> ${email[4]} </div>` ;
section5.innerHTML += " " + `<img src=${picture[4]} alt=pic>`;
section5.innerHTML += " " + `<div class="country"> ${country[4]} </div>` ;



section6.innerHTML = `<h1 class="name">${name[5]}</h1>`; 
section6.innerHTML +=" " + `<div class="email"> ${email[5]} </div>` ;
section6.innerHTML += " " + `<img src=${picture[5]} alt=pic>`;
section6.innerHTML += " " + `<div class="country"> ${country[5]} </div>` ;



section7.innerHTML = `<h1 class="name">${name[6]}</h1>`; 
section7.innerHTML +=" " + `<div class="email"> ${email[6]} </div>` ;
section7.innerHTML += " " + `<img src=${picture[6]} alt=pic>`;
section7.innerHTML += " " + `<div class="country"> ${country[6]} </div>` ;



section8.innerHTML = `<h1 class="name">${name[7]}</h1>`; 
section8.innerHTML +=" " + `<div class="email"> ${email[7]} </div>` ;
section8.innerHTML += " " + `<img src=${picture[7]} alt=pic>`;
section8.innerHTML += " " + `<div class="country"> ${country[7]} </div>` ;


section9.innerHTML = `<h1 class="name">${name[8]}</h1>`; 
section9.innerHTML +=" " + `<div class="email"> ${email[8]} </div>` ;
section9.innerHTML += " " + `<img src=${picture[8]} alt=pic>`;
section9.innerHTML += " " + `<div class="country"> ${country[8]} </div>` ;


section10.innerHTML = `<h1 class="name">${name[9]}</h1>`; 
section10.innerHTML +=" " + `<div class="email"> ${email[9]} </div>` ;
section10.innerHTML += " " + `<img src=${picture[9]} alt=pic>`;
section10.innerHTML += " " + `<div class="country"> ${country[9]} </div>` ;


section11.innerHTML = `<h1 class="name">${name[10]}</h1>`; 
section11.innerHTML += " " + `<div class="email"> ${email[10]} </div>` ;
section11.innerHTML += " " + `<img src=${picture[10]} alt=pic>`;
section11.innerHTML +=  " " + `<div class="country"> ${country[10]} </div>` ;

section12.innerHTML = `<h1 class="name">${name[11]}</h1>`; 
section12.innerHTML += " " + `<div class="email"> ${email[11]} </div>` ;
section12.innerHTML += " " + `<img src=${picture[11]} alt=pic>`;
section12.innerHTML +=  " " + `<div class="country"> ${country[11]} </div>` ;




return console.log(country);



}
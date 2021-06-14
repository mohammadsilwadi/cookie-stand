
'use strict';
const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('salesData');

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   agvCookie: 6.3,
//   cookiesPerHour: [],
//   total: 0,
//   getCustomer: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
//       this.cookiesPerHour.push(cookies);
//       this.total += cookies;
//     }

    
//   },
//   render: function() {
//     let h2 = document.createElement('h2');
//     parentElement.appendChild(h2);
//     h2.textContent = this.name;

//     let ul = document.createElement('ul');
//     parentElement.appendChild(ul);

//     for(let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     }

//     let total = document.createElement('li');
//       ul.appendChild(total);
//       total.textContent = `Total: ${this.total} cookies`;
//   }
// }


// seattle.getCustomer();
// seattle.render();
// function getRandomCustomer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

function Store(city, minCustomer, maxCustomer, avgCookies, opningTime, totalCookies) {
  this.location = city;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.opningTime = opningTime;
  this.numberPerHour = 0;
  this.totalCookies = totalCookies;
  this.cookiesPerHour = [];

    store.prototype.getCustomer=function(){
      for(let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
        this.cookiesPerHour.push(cookies);
        this.total += cookies;
      }
  
      
    },
    Store.prototype.render= function() {
      let h2 = document.createElement('h2');
      parentElement.appendChild(h2);
      h2.textContent = this.name;
  
      let ul = document.createElement('ul');
      parentElement.appendChild(ul);
  
      for(let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      }
  
      let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = `Total: ${this.total} cookies`;
    }
  }
  let Seattle = new Store('Seattle', 23, 65, 6.3, hour, 0);

seattle.getCustomer();
seattle.render();


  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

// let seattle = {
//   hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cityName: 'Seattle',
//   max: 65,
//   min: 23 ,
//   avg: 6.3,
//   results:[],
//   Total:0,
//   getRanCoustmer:function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getRanPerHour:function(){
//     let totalCookies=0;
//     for(let i=0;i<this.hour.length;i++){
//       Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
//       totalCookies+= this.avg*this.getRanCoustmer();
//       this.Total=totalCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);
//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.cityName;

//     let salesList = document.createElement('ul');
//     articleElement.appendChild(salesList);

//     for(let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       salesList.appendChild(listItem);
//       listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
//     }
//     let listItem = document.createElement('li');
//     salesList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//   }
// };
// seattle.getRanCoustmer();
// seattle.getRanPerHour();
// seattle.render();






// let Tokyo = {
//   hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cityName: 'Tokyo',
//   max: 24,
//   min: 3 ,
//   avg: 1.2,
//   results:[],
//   Total:0,
//   getRanCoustmer:function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getRanPerHour:function(){
//     let totalCookies=0;
//     for(let i=0;i<this.hour.length;i++){
//       Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
//       totalCookies+= this.avg*this.getRanCoustmer();
//       this.Total=totalCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);
//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.cityName;

//     let salesList = document.createElement('ul');
//     articleElement.appendChild(salesList);

//     for(let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       salesList.appendChild(listItem);
//       listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
//     }
//     let listItem = document.createElement('li');
//     salesList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//   }
// };
// Tokyo.getRanCoustmer();
// Tokyo.getRanPerHour();
// Tokyo.render();
// let Dubai = {
//   hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cityName: 'Dubai',
//   max: 38,
//   min: 11 ,
//   avg: 3.7,
//   results:[],
//   Total:0,
//   getRanCoustmer:function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getRanPerHour:function(){
//     let totalCookies=0;
//     for(let i=0;i<this.hour.length;i++){
//       Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
//       totalCookies+= this.avg*this.getRanCoustmer();
//       this.Total=totalCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);
//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.cityName;

//     let salesList = document.createElement('ul');
//     articleElement.appendChild(salesList);

//     for(let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       salesList.appendChild(listItem);
//       listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
//     }
//     let listItem = document.createElement('li');
//     salesList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//   }
// };
// Dubai.getRanCoustmer();
// Dubai.getRanPerHour();
// Dubai.render();
// let Paris = {
//   hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cityName: 'Paris',
//   max: 38,
//   min: 20 ,
//   avg: 2.3,
//   results:[],
//   Total:0,
//   getRanCoustmer:function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getRanPerHour:function(){
//     let totalCookies=0;
//     for(let i=0;i<this.hour.length;i++){
//       Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
//       totalCookies+= this.avg*this.getRanCoustmer();
//       this.Total=totalCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);
//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.cityName;

//     let salesList = document.createElement('ul');
//     articleElement.appendChild(salesList);

//     for(let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       salesList.appendChild(listItem);
//       listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
//     }
//     let listItem = document.createElement('li');
//     salesList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//   }
// };
// Paris.getRanCoustmer();
// Paris.getRanPerHour();
// Paris.render();
// let Lima = {
//   hour: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   cityName: 'Lima',
//   max: 16,
//   min: 2 ,
//   avg: 4.6,
//   results:[],
//   Total:0,
//   getRanCoustmer:function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   getRanPerHour:function(){
//     let totalCookies=0;
//     for(let i=0;i<this.hour.length;i++){
//       Math.floor( this.results.push(this.avg*this.getRanCoustmer()));
//       totalCookies+= this.avg*this.getRanCoustmer();
//       this.Total=totalCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);
//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.cityName;

//     let salesList = document.createElement('ul');
//     articleElement.appendChild(salesList);

//     for(let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       salesList.appendChild(listItem);
//       listItem.textContent = `${ this.hour[i]},${Math.floor(this.results[i])} cookies`;
//     }
//     let listItem = document.createElement('li');
//     salesList.appendChild(listItem);
//     listItem.textContent = `Total ${Math.ceil (this.Total)} cookies`;
//   }
// };
// Lima.getRanCoustmer();
// Lima.getRanPerHour();
// Lima.render();

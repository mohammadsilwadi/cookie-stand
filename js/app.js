
/* eslint-disable no-undef */

'use strict';
let parentElement = document.getElementById('salesData');
let operatingHours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let locationDetailsArray=[];
function LocationDetails(locationName, minCustomersHourly, avgPerCustHourly, maxCustomersHourly, cookiesSalesHourly, randomCustomersHourly, totalSalesDaily){
  this.locationName=locationName;
  this.minCustomersHourly=minCustomersHourly;
  this.maxCustomersHourly=maxCustomersHourly;
  this.avgPerCustHourly=avgPerCustHourly;
  this.cookiesSalesHourly=cookiesSalesHourly;
  this.randomCustomersHourly=randomCustomersHourly;
  this.totalSalesDaily=totalSalesDaily;
}
let location1= new LocationDetails('Seattle', 23, 6.3, 65, [], [], 0);
locationDetailsArray.push(location1);
let location2= new LocationDetails('Tokyo', 3, 1.2, 24, [], [], 0);
locationDetailsArray.push(location2);
let location3= new LocationDetails('Dubai',	11,	3.7, 38, [], [], 0);
locationDetailsArray.push(location3);
let location4= new LocationDetails('pairs',	20,	2.3, 38, [], [], 0);
locationDetailsArray.push(location4);
let location5= new LocationDetails('Lima',	2, 4.6,	16, [], [], 0);
locationDetailsArray.push(location5);

LocationDetails.prototype.calculateRandomCustomersHourly= function(){
  for (let i=0; i<operatingHours.length; i++){
    this.randomCustomersHourly.push(randomNumberGenerator(this.minCustomersHourly, this.maxCustomersHourly));
  }
};
LocationDetails.prototype.calculateCookiesSalesHourly= function(){
  for (let i=0; i<operatingHours.length; i++){
    let hourlySales= Math.ceil(this.randomCustomersHourly[i]*this.avgPerCustHourly);
    this.cookiesSalesHourly.push(hourlySales);
    this.totalSalesDaily += hourlySales;
  }
};
function randomNumberGenerator(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
let eachHourstotal=0;
let totalSalesHourly=[];
let salesTotalHourly = 0;
function calculateAllStoresHourly(){
  for(let i=0; i<operatingHours.length; i++){
    for (let j=0; j<locationDetailsArray.length; j++){
      eachHourstotal+=locationDetailsArray[j].cookiesSalesHourly[i];
    }
    totalSalesHourly.push(eachHourstotal);
    salesTotalHourly = salesTotalHourly + eachHourstotal;
    eachHourstotal=0;
  }
  totalSalesHourly.push(salesTotalHourly);
}
function handleInputs(event){
  event.preventDefault();
  let newStore =event.target.where.value;
  let minimumHourly=parseInt(event.target.min_sale.value);
  let maximumHourly=parseInt(event.target.max_sale.value);
  let averageHourly=parseInt(event.target.avg_sale.value);
  if(maximumHourly<minimumHourly){
    alert('Maximum number of cookies cannot be smaller than minimum number of cookies');
  }
  else{
    let newData= new LocationDetails(newStore, minimumHourly, averageHourly, maximumHourly, [], [], 0);
    locationDetailsArray.push(newData);
    report.innerHTML='';
    totalSalesHourly=[];
    salesTotalHourly = 0;
    newData.calculateRandomCustomersHourly();
    newData.calculateCookiesSalesHourly();
    calculateAllStoresHourly();
    timeHeader();
    fillWithCookies();
  }
}
let newStore=document.getElementById('new-store');
newStore.addEventListener('submit', handleInputs);
//With assistance from Dana
function timeHeader(){
  let trEl = document.createElement('tr');
  let thLocation= document.createElement('th');
  thLocation.textContent='Location';
  trEl.appendChild(thLocation);
  for (let i=0; i<operatingHours.length; i++){
    let thEl=document.createElement('th');
    thEl.textContent = operatingHours[i];
    trEl.appendChild(thEl);
  }
  let totalEachLocation=document.createElement('th');
  totalEachLocation.textContent='Total';
  trEl.appendChild(totalEachLocation);
  report.appendChild(trEl);
}
function fillWithCookies(){
  for (let i=0;i<locationDetailsArray.length;i++){
    let trEl= document.createElement('tr');
    let thLocation= document.createElement('th');
    thLocation.textContent=locationDetailsArray[i].locationName;
    trEl.appendChild(thLocation);
    for (let j=0;j<operatingHours.length;j++)
    {
      let tdEl= document.createElement('td');
      tdEl.textContent=locationDetailsArray[i].cookiesSalesHourly[j];
      trEl.appendChild(tdEl);
    }
    let totalCookies=document.createElement('td');
    totalCookies.textContent=locationDetailsArray[i].totalSalesDaily;
    trEl.appendChild(totalCookies);
    report.appendChild(trEl);
  }
  let trTotal = document.createElement('tr');
  let thTotal= document.createElement('th');
  thTotal.textContent='Total per hour';
  trTotal.appendChild(thTotal);
  report.appendChild(trTotal);
  for (let k=0;k<operatingHours.length+1;k++)
  {
    let tdTotalAcross= document.createElement('td');
    tdTotalAcross.textContent=totalSalesHourly[k];
    trTotal.appendChild(tdTotalAcross);
  }
}

let report= document.getElementById('salesData');
for (let i=0; i<locationDetailsArray.length; i++){
  locationDetailsArray[i].calculateRandomCustomersHourly();
  locationDetailsArray[i].calculateCookiesSalesHourly();
}
calculateAllStoresHourly();
timeHeader();
fillWithCookies();

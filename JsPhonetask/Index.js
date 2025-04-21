let phones = ["iphone x", "iphone 13" , "iphone 16"];
let prices = [500 , 700 , 1000];

function showPhones(){
    console.clear(); 
    console.log(phones);
    console.log(prices);
}

function addNewPhone(){
    let phoneName= prompt("Enter New Phone Name");
    let newPrice = +prompt("Enter new phone price");
    prices.push(newPrice);
    phones.push(phoneName);
    showPhones();
    
}

function deletePhone(){
    let phoneIndex= +prompt("Enter phone # to delete") -1;
    delete phones[phoneIndex];
    delete prices[phoneIndex];
    showPhones();
}

function editPhone(){
     let oldPhone = prompt("Enter the phone you would like to edit");
     let newPhone = prompt("Enter the new phone");
    
     let index = phones.indexOf(oldPhone);
    
    if (index !== -1){
    phones[index] = newPhone;
       showPhones();
     }
 }
 
 function editPrice(){
   let oldPrice= +prompt("Enter the price you would like to edit");
   let newPrice= +prompt("Enter the new price");
   let index=prices.indexOf(oldPrice);

   if(index >=0){
    prices[index] = newPrice;
    showPhones();
   }
   

 }
 
//     someProperty: 'some value'
//  }

//class Employee {

 //   eid;
  //  firstName;
  //  salary;

  //  getSalary = () => {
  //      return this.salary;
 //   }

////}

//let obj = new Employee();
//obj.eid = 101;
//obj.firstName = 'Sonu';
//obj.salary = 10.5;
//console.log(obj.getSalary());
//console.log(obj.firstName);


//class Product {
  //pid;
    //productName;
    //price;
    //constructor (pid, productName, price) {
      //  console.log(pid);
        //console.log(productName);
        //console.log(price);
    //}
//}

//let myProduct = new Product(1001, 'laptop', 10.5);

class Vaibhav{
    Age;
    height;
    weight;
    job;
    money;
     
    moneypay =() =>{
        return this.money;
    }
}
let His=new Vaibhav();
His.Age=24;
His.height=6 ;
His.weight= 70;
His.job="capgemini As salesforce Development";
His.money=150000;

console.log("vaibhav age is " + His.Age);
console.log( "vaibhav height is"+ His.height);
console.log( "vaibhav weight is"+ His.weight);
console.log("vaibhav work in "+  His.job);
console.log("vaibhav monthly salary is" + His.moneypay());



class Salesforce{
    Html;
    chapter;
    
    constructor(Html,chapter){
        console.log(Html);
        console.log(chapter);
       

    }
}

let course=new Salesforce('sunject',4);


class Product {
    pid;
    productName;
    price;

    sellProduct = () => {
        console.log('Sell the product at ' + this.price);
    }

    constructor(pid, productName, price) {
        this.pid = pid;
        this.productName = productName;
        this.price = price;
    }
}

let myProduct = new Product(1001, 'laptop', 10.5);
console.log(myProduct);
myProduct.sellProduct();
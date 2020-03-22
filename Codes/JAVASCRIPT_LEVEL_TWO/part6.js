var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    console.log(this.name.length);
  }
}

var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function(){
    alert("Name is " +this.name+ " Job is " +this.job+ "age is " +this.age)
  }
}
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1]);
  }
}

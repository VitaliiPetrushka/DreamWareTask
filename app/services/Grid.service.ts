const GridService = {
   controller: GridServiceController,
   selector: "GridService"
};

function GridServiceController($http, LogService) {
   const DataTypes = { Int: "number", String: "string", Date: "Date" };
   interface User {
      login: string;
      birthdate: Date;
      age: number;
   }

   var dataFormats = [
      {Name: "Login", DataType: DataTypes.String, IsRequired: true},
      {Name: "BirthDate", DataType: DataTypes.Date, IsRequired: true},
      {Name: "Age", DataType: DataTypes.Int, IsRequired: false, CalculateFrom: ["BirthDate"], Calculate: this.calculate_age}
   ];
   var data = [
      {login: "User1", birthdate: new Date("1996/03/14"), age: 20},
      {login: "User2", birthdate: new Date("1995/11/10"), age: 21},
      {login: "User3", birthdate: new Date("1996/10/05"), age: 20}
   ];

   this.getUsers = function():Array<User> {
      return data;
   };
   this.addUser = function(user: User):void {
      //data.push(user);
      LogService.info("adding new user");
      //API call: $http.post(url, body);
   };
   this.deleteUser = function(id: number):void {
      //data.splice(id, 1);
      LogService.alert("Deleting user");
      //API call: $http.delete(url);
   };
   this.modifyUser = function(id: number):void {
      //API call: $http.put(url, body);
   };
   this.calculate_age = function(birthdate:string):number {
      return Math.floor((Date.now() - new Date(birthdate).getTime()) / (1000 * 3600 * 24 * 365));
   };
}

GridServiceController.$inject = ["$http", "LogService"];

export default GridService;
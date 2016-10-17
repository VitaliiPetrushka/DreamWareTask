const GridService = {
   controller: GridServiceController,
   selector: "GridService"
};

function GridServiceController($http, LogService) {
   const DataTypes = { Int: "number", String: "string", Date: "Date" };
   interface User {
      _id: number;
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
      {_id: 1, login: "User1", birthdate: new Date("1996/03/14"), age: 20},
      {_id: 2, login: "User2", birthdate: new Date("1995/11/10"), age: 21},
      {_id: 3, login: "User3", birthdate: new Date("1996/10/05"), age: 20}
   ];

   this.getUsers = function():Array<User> {
      //API call: $http.get(url);
      return data;
   };
   this.addUser = function(user: User):void {
      if(user) {
         data.push(user);
         //API call: $http.post(url, body);
      } else {
         LogService.error("add new user error");
      }
   };
   this.deleteUser = function(id: number):void {
      if(LogService.confirm()) {
         //API call: $http.delete(url);
         data.forEach((value, index, arr) => {
            if(value._id == id) arr.splice(index, 1);
         });
      }
   };
   this.modifyUser = function(_id:number, user: User):void {
      //API call: $http.put(url, body);
   };
   this.calculate_age = function(birthdate:string):number {
      return Math.floor((Date.now() - new Date(birthdate).getTime()) / (1000 * 3600 * 24 * 365));
   };
}

GridServiceController.$inject = ["$http", "LogService"];

export default GridService;
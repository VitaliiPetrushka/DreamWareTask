const GridService = {
   controller: GridServiceController,
   selector: "GridService"
};

function GridServiceController($http, LogService) {

   //cat be any of structure
   var dataFormats = [
      {Name: "Login", DataType: "string", IsRequired: true},
      {Name: "BirthDate", DataType: "Date", IsRequired: true},
      {Name: "Age", DataType: "number", IsRequired: false}
   ];

   var data = [
      {_id: 1, Login: "User1", BirthDate: new Date("1996/03/14"), Age: 20},
      {_id: 2, Login: "User2", BirthDate: new Date("1995/11/10"), Age: 21},
      {_id: 3, Login: "User3", BirthDate: new Date("1996/10/05"), Age: 20}
   ];

   this.getData = function() {
      //API call: $http.get(url);
      return {
         dataFormats,
         data
      };
   };
   this.addNewField = function(field):void {
      if(field) {
         data.push(field);
         //API call: $http.post(url, body);
      } else {
         LogService.error("add new user error");
      }
   };
   this.deleteField = function(id: number):void {
      if(LogService.confirm()) {
         //API call: $http.delete(url);
         data.forEach((value, index, arr) => {
            if(value._id == id) arr.splice(index, 1);
         });
      }
   };
   this.modifyField = function(_id:number, user):void {
      //API call: $http.put(url, body);
   };
   //this.calculate_age = function(birthdate:string):number {
   //   return Math.floor((Date.now() - new Date(birthdate).getTime()) / (1000 * 3600 * 24 * 365));
   //};
}

GridServiceController.$inject = ["$http", "LogService"];

export default GridService;
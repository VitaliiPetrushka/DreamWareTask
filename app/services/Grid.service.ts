const GridService = {
   controller: GridServiceController,
   selector: "GridService"
};

function GridServiceController($http, LogService) {

   //cat be any of structure
   var dataFormats = [
      {Name: "Login", DataType: "String", IsRequired: true},
      {Name: "BirthDate", DataType: "Date", IsRequired: true},
      {Name: "Age", DataType: "Number", IsRequired: false}
   ];

   Date.prototype.toString = function() {
      return this.toDateString();
   };

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
   this.addNewField = function(obj) {
      if(obj && validate(obj)) {
         data.push(obj);
         return true;
      } else return false;
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
   function validate(obj) {
      try {
         dataFormats.forEach((field) => {
            let curr_field = obj[field.Name];
            if(curr_field) {
               if(!checkType(curr_field, field.DataType)) {
                  LogService.error("Type Error at " + field.Name + " : " + getType(curr_field) + " but expected " + field.DataType);
                  throw new TypeError();
               }
            }
            else if (field.IsRequired) {
               LogService.error(field.Name + " is required!");
               throw new FieldRequiredException();
            } else { curr_field = null; }
         });
      } catch (e) {
         return false;
      }

      //if everything's fine return true;
      return true;
   }
   function checkType(field, type) {
      return  getType(field) === type;
   }
   function getType(field) {
      return Object.prototype.toString.call(field).slice(8, -1);
   }
   //custom exceptions
   function FieldRequiredException(message = null) {
      Error.apply(this, arguments);
   }
   FieldRequiredException.prototype = Object.create(Error.prototype);
   //this.calculate_age = function(birthdate:string):number {
   //   return Math.floor((Date.now() - new Date(birthdate).getTime()) / (1000 * 3600 * 24 * 365));
   //};
}

GridServiceController.$inject = ["$http", "LogService"];

export default GridService;
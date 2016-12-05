import "./grid.scss";

const Grid = {
   templateUrl: "./components/grid/grid.html",
   controller: GridController,
   selector: "grid"
};

function GridController(GridService, LogService) {
   this.newField = {};
   this.data = GridService.getData();
   this.adding_data = false;
   this.addNewField = (valid):void => {
      //noinspection RedundantIfStatementJS
      if(this.adding_data && valid) {
         this.newField._id = this.data[this.data.length - 1]._id + 1;
         this.newField.age = GridService.calculate_age(this.newField.birthdate);
         this.newField.birthdate = new Date(this.newField.birthdate);
         GridService.addUser(this.newField);
         this.adding_data = false;
         this.newField = {};
      } else {
         this.adding_data = true;
      }
   };
   this.cancelAddNewField = ():void => { this.newField = {}; this.adding_data = false; }
}

GridController.$inject = ["GridService", "LogService"];

export default Grid;
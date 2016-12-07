import "./grid.scss";

const Grid = {
   templateUrl: "./components/grid/grid.html",
   controller: GridController,
   selector: "grid"
};

function GridController(GridService, LogService) {
   this.newField = {};
   this.data = GridService.getData().data;
   this.dataFormats = GridService.getData().dataFormats;
   this.adding_data = false;
   this.addNewField = (valid) => {
      //noinspection RedundantIfStatementJS
      if(this.adding_data) {
         this.newField._id = this.data[this.data.length - 1]._id + 1;
         console.log(this.newField);
         GridService.addNewField(this.newField);
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
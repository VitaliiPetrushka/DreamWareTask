const GridRow = {
   controller: GridRowFunction,
   selector: "gridRow"
};

function GridRowFunction() {
   return {
      restrict: "A",
      controller: GridRowController,
      controllerAs: "$rowCtrl",
      bindToController: {
         data_field: "<"
      },
   }
}

function GridRowController(GridService) {

   this.editing_field = false;
   this.edit = ():void => { this.editing_field = true; };
   this.applyEdit = ():void => {
      GridService.modifyUser();
      this.editing_field = false;
   };
   this.cancelEditing = ():void => { this.editing_field = false; };
   this.delField = ():void => {
      GridService.deleteUser(this.data_field._id);
   };
}

GridRowController.$inject = ["GridService"];

export default GridRow;

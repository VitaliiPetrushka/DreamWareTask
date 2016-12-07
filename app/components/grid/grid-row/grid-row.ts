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
         field: "="
      },
   }
}

function GridRowController(GridService) {

   this.editing_field = false;
   this.edit = ():void => { this.editing_field = true; };
   this.applyEdit = ():void => {
      GridService.modifyField();
      this.editing_field = false;
   };
   this.cancelEditing = ():void => { this.editing_field = false; };
   this.delField = () => {
      GridService.deleteField(this.field._id);
   };
}

GridRowController.$inject = ["GridService"];

export default GridRow;

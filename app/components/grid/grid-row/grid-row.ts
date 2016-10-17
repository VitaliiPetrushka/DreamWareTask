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
         user: "<"
      },
   }
}

function GridRowController(GridService) {

   this.editing_user = false;
   this.edit = ():void => { this.editing_user = true; };
   this.applyEdit = ():void => {
      GridService.modifyUser();
      this.editing_user = false;
   };
   this.cancelEditing = ():void => { this.editing_user = false; };
   this.delUser = ():void => {
      GridService.deleteUser(this.user._id);
   };
}

GridRowController.$inject = ["GridService"];

export default GridRow;

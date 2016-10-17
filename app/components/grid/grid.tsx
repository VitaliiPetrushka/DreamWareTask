import "./grid.scss";
import ILogService = angular.ILogService;
//import "../../services/Grid.service.ts";
//import "../../services/LogService.ts";

const Grid = {
   templateUrl: "./components/grid/grid.html",
   controller: GridController,
   selector: "grid"
};

function GridController(GridService) {
   var ctrl = this;
   ctrl.newUser = {};
   ctrl.users = GridService.getUsers();

   ctrl.adding_user = false;
   ctrl.editing_user = false;
   ctrl.addNewUser = function(user:any):void {
      //noinspection RedundantIfStatementJS
      if(ctrl.adding_user) {
         GridService.addUser(user);
         ctrl.adding_user = false;
      } else ctrl.adding_user = true;
   };
   ctrl.delUser = function(id:number):void {
      GridService.deleteUser(id);
   };
   //ctrl.editUserInfo = ():void => { ctrl.editing_user = true; };
   //ctrl.applyEditUserInfo = (event):void => { console.log(event.target.closest("tr").dataset.id); ctrl.editing_user = false; };
   ctrl.cancelAddNewUser = ():void => { ctrl.newUser = {}; ctrl.adding_user = false; }
}

export default Grid;
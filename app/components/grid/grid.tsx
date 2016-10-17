import "./grid.scss";

const Grid = {
   templateUrl: "./components/grid/grid.html",
   controller: GridController,
   selector: "grid"
};

function GridController(GridService, LogService) {
   this.newUser = {};
   this.users = GridService.getUsers();
   this.adding_user = false;
   this.addNewUser = (valid):void => {
      //noinspection RedundantIfStatementJS
      if(this.adding_user && valid) {
         this.newUser._id = this.users[this.users.length - 1]._id + 1;
         this.newUser.age = GridService.calculate_age(this.newUser.birthdate);
         this.newUser.birthdate = new Date(this.newUser.birthdate);
         GridService.addUser(this.newUser);
         this.adding_user = false;
         this.newUser = {};
      } else {
         this.adding_user = true;
      }
   };
   this.cancelAddNewUser = ():void => { this.newUser = {}; this.adding_user = false; }
}

GridController.$inject = ["GridService", "LogService"];

export default Grid;
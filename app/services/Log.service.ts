const LogService = {
   controller: LogServiceController,
   selector: "LogService"
};

function LogServiceController($log) {
   this.log = (message) => {
      $log.log(message);
   };
   this.info = (message) => {
      $log.info(message);
   };
   this.warn = (message) =>{
      $log.warn(message);
   };
   this.error = (message) =>{
      $log.error(message);
   };
   this.alert = (message) =>{
      window.alert(message);
   };
   this.confirm = () => {
     return window.confirm("Do you really want to delete user");
   }
}

LogServiceController.$inject = ["$log"];

export default LogService;
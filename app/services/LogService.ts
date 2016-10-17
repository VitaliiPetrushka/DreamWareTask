const LogService = {
   controller: LogServiceController,
   selector: "LogService"
};

function LogServiceController($log) {
   this.log = function(message) {
      $log.log(message);
   };
   this.info = function(message) {
      $log.info(message);
   };
   this.warn = function(message) {
      $log.warn(message);
   };
   this.error = function(message) {
      $log.error(message);
   };
   this.alert = function(message) {
      window.alert(message);
   }
}

LogServiceController.$inject = ["$log"];

export default LogService;
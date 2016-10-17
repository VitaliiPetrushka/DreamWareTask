describe("Testing grid main controller", function() {

   var GridService;
   beforeEach(angular.mock.module("grid-app"));
   beforeEach(inject(function(_GridService_) {
      GridService = _GridService_;
   }));

   it("should calculate age from birthdate input", function() {
      expect(GridService.calculate_age("1996/03/14")).toBe(20);
   });

});
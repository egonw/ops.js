describe("Map", function() {
  var searcher, appID, appKey, appUrl;

  beforeEach(function() {
      appID = $.url().param('app_id');
      appKey = $.url().param('app_key');
      appUrl = $.url().param('app_url');
      searcher = new Openphacts.MapSearch(appUrl, appID, appKey);
  });

  describe("list of mapped urls", function() {

    it("and return a response", function() {
      var this_success = null;
      var this_status = null;
      var this_result = null;
      var callback=function(success, status, response){
        this_success = success;
	    this_status = status;
        this_result = searcher.parseMapURLResponse(response);
      };
      waitsFor(function() {
        return this_result != null;
      });
      runs(function() {
	    expect(this_success).toBe(true);
	    expect(this_status).toBe(200);
        expect(this_result).toBeDefined();
        //mandatory
        expect(this_result).not.toBeNull();
        expect(this_result.length).toBeGreaterThan(0);
      });
      searcher.mapURL('http://rdf.ebi.ac.uk/resource/chembl/target/CHEMBL3622', null, null, null, callback);
    });
    it("and handle errors", function() {
      var this_success = null;
      var this_status = null;
      var callback=function(success, status){
        this_success = success;
	    this_status = status;
      };
      waitsFor(function() {
        return this_success != null;
      });
      runs(function() {
        expect(this_success).toEqual(false);
        expect(this_status).toEqual(400);
      });
      searcher.mapURL('sdfbgsg', null, null, null, callback);
    });
  });
});

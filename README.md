# OPS.js

OPS.js is a javascript based library for accessing the OpenPHACTS Linked Data API (LDA). It uses jquery to handle the asynchronous nature of the requests. OPS.js can be used to parse responses from the LDA.

## Dependencies
JQuery 1.9.1

## Using the library
JQuery must be loaded before the OPS.js library.

The following api calls can be executed:

1. concept/byTag
```javascript
var searcher = new ConceptWikiSearch("beta.openphacts.org");
var callback=function(response){
    searcher.parseResponse(response);
};
searcher.byTag(appID,appKey, 'Aspirin', '20', '4', '07a84994-e464-4bbf-812a-a4b96fa3d197', callback);
```
2. /compound
```javascript
var searcher = new CompoundSearch("https://ops2.few.vu.nl");
var callback=function(response){
    var compoundResult = searcher.parseCompoundResponse(response);
};
searcher.fetchCompound(appID, appKey, 'http://www.conceptwiki.org/concept/38932552-111f-4a4e-a46a-4ed1d7bdf9d5', callback);
```
3. /target
```javascript
var searcher = new TargetSearch("https://ops2.few.vu.nl");
searcher.fetchTarget(appID, appKey, 'http://www.conceptwiki.org/concept/b932a1ed-b6c3-4291-a98a-e195668eda49', callback);
var callback=function(response){
    var result = searcher.parseTargetResponse(response);
};
```

/**
 * Reseller API Documentation
 * For Resellers. <br> Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ResellerApiDocumentation);
  }
}(this, function(expect, ResellerApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest', function() {
    it('should create an instance of QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest', function() {
      // uncomment below and update the code to test QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be.a(ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest);
    });

    it('should have the property quoteNumber (base name: "quoteNumber")', function() {
      // uncomment below and update the code to test the property quoteNumber
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property bidNumber (base name: "bidNumber")', function() {
      // uncomment below and update the code to test the property bidNumber
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property endUserName (base name: "endUserName")', function() {
      // uncomment below and update the code to test the property endUserName
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property fromDate (base name: "fromDate")', function() {
      // uncomment below and update the code to test the property fromDate
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property toDate (base name: "toDate")', function() {
      // uncomment below and update the code to test the property toDate
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageIndex (base name: "pageIndex")', function() {
      // uncomment below and update the code to test the property pageIndex
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property recordsPerPage (base name: "recordsPerPage")', function() {
      // uncomment below and update the code to test the property recordsPerPage
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property sorting (base name: "sorting")', function() {
      // uncomment below and update the code to test the property sorting
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property sortingColumnName (base name: "sortingColumnName")', function() {
      // uncomment below and update the code to test the property sortingColumnName
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartySource (base name: "thirdPartySource")', function() {
      // uncomment below and update the code to test the property thirdPartySource
      //var instance = new ResellerApiDocumentation.QuoteListRequestQuoteSearchRequestRetrieveQuoteRequest();
      //expect(instance).to.be();
    });

  });

}));

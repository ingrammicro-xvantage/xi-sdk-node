/**
 * XI Sdk Resellers
 * For Resellers. Who are looking to Innovate with Ingram Micro's API SolutionsAutomate your eCommerce with our offering of APIs and Webhooks to create a seamless experience for your customers.
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.XiSdkResellers);
  }
}(this, function(expect, XiSdkResellers) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
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

  describe('QuoteDetailsQuoteDetailResponse', function() {
    it('should create an instance of QuoteDetailsQuoteDetailResponse', function() {
      // uncomment below and update the code to test QuoteDetailsQuoteDetailResponse
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsQuoteDetailResponse);
    });

    it('should have the property responsePreamble (base name: "responsePreamble")', function() {
      // uncomment below and update the code to test the property responsePreamble
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property retrieveQuoteResponse (base name: "retrieveQuoteResponse")', function() {
      // uncomment below and update the code to test the property retrieveQuoteResponse
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property quoteProductList (base name: "quoteProductList")', function() {
      // uncomment below and update the code to test the property quoteProductList
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalQuoteProductCount (base name: "totalQuoteProductCount")', function() {
      // uncomment below and update the code to test the property totalQuoteProductCount
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalExtendedMsrp (base name: "totalExtendedMsrp")', function() {
      // uncomment below and update the code to test the property totalExtendedMsrp
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalQuantity (base name: "totalQuantity")', function() {
      // uncomment below and update the code to test the property totalQuantity
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalExtendedQuotePrice (base name: "totalExtendedQuotePrice")', function() {
      // uncomment below and update the code to test the property totalExtendedQuotePrice
      //var instance = new XiSdkResellers.QuoteDetailsQuoteDetailResponse();
      //expect(instance).to.be();
    });

  });

}));

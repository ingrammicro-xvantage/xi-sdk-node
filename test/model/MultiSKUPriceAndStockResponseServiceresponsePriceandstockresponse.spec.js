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
    instance = new ResellerApiDocumentation.MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse();
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

  describe('MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse', function() {
    it('should create an instance of MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse', function() {
      // uncomment below and update the code to test MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse
      //var instance = new ResellerApiDocumentation.MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse();
      //expect(instance).to.be.a(ResellerApiDocumentation.MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse);
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new ResellerApiDocumentation.MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponse();
      //expect(instance).to.be();
    });

  });

}));

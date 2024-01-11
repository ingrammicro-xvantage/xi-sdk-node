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
    instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
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

  describe('PriceAndAvailabilityResponseInnerServiceFeesInner', function() {
    it('should create an instance of PriceAndAvailabilityResponseInnerServiceFeesInner', function() {
      // uncomment below and update the code to test PriceAndAvailabilityResponseInnerServiceFeesInner
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be.a(ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner);
    });

    it('should have the property conditionType (base name: "conditionType")', function() {
      // uncomment below and update the code to test the property conditionType
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new ResellerApiDocumentation.PriceAndAvailabilityResponseInnerServiceFeesInner();
      //expect(instance).to.be();
    });

  });

}));

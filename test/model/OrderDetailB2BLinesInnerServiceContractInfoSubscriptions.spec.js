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
    instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
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

  describe('OrderDetailB2BLinesInnerServiceContractInfoSubscriptions', function() {
    it('should create an instance of OrderDetailB2BLinesInnerServiceContractInfoSubscriptions', function() {
      // uncomment below and update the code to test OrderDetailB2BLinesInnerServiceContractInfoSubscriptions
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be.a(ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions);
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionTerm (base name: "subscriptionTerm")', function() {
      // uncomment below and update the code to test the property subscriptionTerm
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

    it('should have the property renewalTerm (base name: "renewalTerm")', function() {
      // uncomment below and update the code to test the property renewalTerm
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

    it('should have the property billingModel (base name: "billingModel")', function() {
      // uncomment below and update the code to test the property billingModel
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

    it('should have the property subcriptionStartDate (base name: "subcriptionStartDate")', function() {
      // uncomment below and update the code to test the property subcriptionStartDate
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

    it('should have the property subcriptionEndDate (base name: "subcriptionEndDate")', function() {
      // uncomment below and update the code to test the property subcriptionEndDate
      //var instance = new ResellerApiDocumentation.OrderDetailB2BLinesInnerServiceContractInfoSubscriptions();
      //expect(instance).to.be();
    });

  });

}));

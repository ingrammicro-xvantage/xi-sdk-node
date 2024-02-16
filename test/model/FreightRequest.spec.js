/**
 * XI SDK Resellers
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
    instance = new XiSdkResellers.FreightRequest();
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

  describe('FreightRequest', function() {
    it('should create an instance of FreightRequest', function() {
      // uncomment below and update the code to test FreightRequest
      //var instance = new XiSdkResellers.FreightRequest();
      //expect(instance).to.be.a(XiSdkResellers.FreightRequest);
    });

    it('should have the property billToAddressId (base name: "billToAddressId")', function() {
      // uncomment below and update the code to test the property billToAddressId
      //var instance = new XiSdkResellers.FreightRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipToAddressId (base name: "shipToAddressId")', function() {
      // uncomment below and update the code to test the property shipToAddressId
      //var instance = new XiSdkResellers.FreightRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipToAddress (base name: "shipToAddress")', function() {
      // uncomment below and update the code to test the property shipToAddress
      //var instance = new XiSdkResellers.FreightRequest();
      //expect(instance).to.be();
    });

    it('should have the property lines (base name: "lines")', function() {
      // uncomment below and update the code to test the property lines
      //var instance = new XiSdkResellers.FreightRequest();
      //expect(instance).to.be();
    });

  });

}));

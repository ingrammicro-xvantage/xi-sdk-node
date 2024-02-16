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
    instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
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

  describe('RenewalsSearchResponseRenewalsInner', function() {
    it('should create an instance of RenewalsSearchResponseRenewalsInner', function() {
      // uncomment below and update the code to test RenewalsSearchResponseRenewalsInner
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be.a(XiSdkResellers.RenewalsSearchResponseRenewalsInner);
    });

    it('should have the property renewalId (base name: "renewalId")', function() {
      // uncomment below and update the code to test the property renewalId
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property customerOrderNumber (base name: "customerOrderNumber")', function() {
      // uncomment below and update the code to test the property customerOrderNumber
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property endUser (base name: "endUser")', function() {
      // uncomment below and update the code to test the property endUser
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendor (base name: "vendor")', function() {
      // uncomment below and update the code to test the property vendor
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property renewalValue (base name: "renewalValue")', function() {
      // uncomment below and update the code to test the property renewalValue
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.RenewalsSearchResponseRenewalsInner();
      //expect(instance).to.be();
    });

  });

}));

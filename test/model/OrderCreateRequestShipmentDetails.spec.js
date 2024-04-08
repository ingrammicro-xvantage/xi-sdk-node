/**
 * XI Sdk Resellers
 * For resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of APIs and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
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

  describe('OrderCreateRequestShipmentDetails', function() {
    it('should create an instance of OrderCreateRequestShipmentDetails', function() {
      // uncomment below and update the code to test OrderCreateRequestShipmentDetails
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be.a(XiSdkResellers.OrderCreateRequestShipmentDetails);
    });

    it('should have the property carrierCode (base name: "carrierCode")', function() {
      // uncomment below and update the code to test the property carrierCode
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

    it('should have the property freightAccountNumber (base name: "freightAccountNumber")', function() {
      // uncomment below and update the code to test the property freightAccountNumber
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

    it('should have the property shipComplete (base name: "shipComplete")', function() {
      // uncomment below and update the code to test the property shipComplete
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

    it('should have the property requestedDeliveryDate (base name: "requestedDeliveryDate")', function() {
      // uncomment below and update the code to test the property requestedDeliveryDate
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

    it('should have the property signatureRequired (base name: "signatureRequired")', function() {
      // uncomment below and update the code to test the property signatureRequired
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

    it('should have the property shippingInstructions (base name: "shippingInstructions")', function() {
      // uncomment below and update the code to test the property shippingInstructions
      //var instance = new XiSdkResellers.OrderCreateRequestShipmentDetails();
      //expect(instance).to.be();
    });

  });

}));

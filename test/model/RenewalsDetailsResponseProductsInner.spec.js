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
    instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
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

  describe('RenewalsDetailsResponseProductsInner', function() {
    it('should create an instance of RenewalsDetailsResponseProductsInner', function() {
      // uncomment below and update the code to test RenewalsDetailsResponseProductsInner
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be.a(XiSdkResellers.RenewalsDetailsResponseProductsInner);
    });

    it('should have the property ingramLineNumber (base name: "ingramLineNumber")', function() {
      // uncomment below and update the code to test the property ingramLineNumber
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property productDescription (base name: "productDescription")', function() {
      // uncomment below and update the code to test the property productDescription
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property vendorPartNumber (base name: "vendorPartNumber")', function() {
      // uncomment below and update the code to test the property vendorPartNumber
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property ingramPartNumber (base name: "ingramPartNumber")', function() {
      // uncomment below and update the code to test the property ingramPartNumber
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerPartNumber (base name: "manufacturerPartNumber")', function() {
      // uncomment below and update the code to test the property manufacturerPartNumber
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

    it('should have the property isConsolidated (base name: "isConsolidated")', function() {
      // uncomment below and update the code to test the property isConsolidated
      //var instance = new XiSdkResellers.RenewalsDetailsResponseProductsInner();
      //expect(instance).to.be();
    });

  });

}));

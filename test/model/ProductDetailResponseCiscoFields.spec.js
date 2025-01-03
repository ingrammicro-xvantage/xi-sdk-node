/**
 * XI Sdk Resellers
 * For Resellers seeking to innovate with Ingram Micro's API solutions, automate your eCommerce experience with our array of API's and webhooks to craft a seamless journey for your customers.
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
    instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
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

  describe('ProductDetailResponseCiscoFields', function() {
    it('should create an instance of ProductDetailResponseCiscoFields', function() {
      // uncomment below and update the code to test ProductDetailResponseCiscoFields
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be.a(XiSdkResellers.ProductDetailResponseCiscoFields);
    });

    it('should have the property productSubGroup (base name: "productSubGroup")', function() {
      // uncomment below and update the code to test the property productSubGroup
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property serviceProgramName (base name: "serviceProgramName")', function() {
      // uncomment below and update the code to test the property serviceProgramName
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property itemCatalogCategory (base name: "itemCatalogCategory")', function() {
      // uncomment below and update the code to test the property itemCatalogCategory
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property configurationIndicator (base name: "configurationIndicator")', function() {
      // uncomment below and update the code to test the property configurationIndicator
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property internalBusinessEntity (base name: "internalBusinessEntity")', function() {
      // uncomment below and update the code to test the property internalBusinessEntity
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property itemType (base name: "itemType")', function() {
      // uncomment below and update the code to test the property itemType
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

    it('should have the property globalListPrice (base name: "globalListPrice")', function() {
      // uncomment below and update the code to test the property globalListPrice
      //var instance = new XiSdkResellers.ProductDetailResponseCiscoFields();
      //expect(instance).to.be();
    });

  });

}));

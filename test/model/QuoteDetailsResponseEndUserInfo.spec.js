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
    instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
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

  describe('QuoteDetailsResponseEndUserInfo', function() {
    it('should create an instance of QuoteDetailsResponseEndUserInfo', function() {
      // uncomment below and update the code to test QuoteDetailsResponseEndUserInfo
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be.a(XiSdkResellers.QuoteDetailsResponseEndUserInfo);
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // uncomment below and update the code to test the property addressLine3
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

    it('should have the property marketSegment (base name: "marketSegment")', function() {
      // uncomment below and update the code to test the property marketSegment
      //var instance = new XiSdkResellers.QuoteDetailsResponseEndUserInfo();
      //expect(instance).to.be();
    });

  });

}));

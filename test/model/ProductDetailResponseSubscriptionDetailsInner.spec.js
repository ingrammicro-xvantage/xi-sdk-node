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
    instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
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

  describe('ProductDetailResponseSubscriptionDetailsInner', function() {
    it('should create an instance of ProductDetailResponseSubscriptionDetailsInner', function() {
      // uncomment below and update the code to test ProductDetailResponseSubscriptionDetailsInner
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be.a(XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner);
    });

    it('should have the property planId (base name: "planId")', function() {
      // uncomment below and update the code to test the property planId
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property planName (base name: "planName")', function() {
      // uncomment below and update the code to test the property planName
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property planDescription (base name: "planDescription")', function() {
      // uncomment below and update the code to test the property planDescription
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionPeriod (base name: "subscriptionPeriod")', function() {
      // uncomment below and update the code to test the property subscriptionPeriod
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property billingPeriod (base name: "billingPeriod")', function() {
      // uncomment below and update the code to test the property billingPeriod
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property nextPage (base name: "nextPage")', function() {
      // uncomment below and update the code to test the property nextPage
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

    it('should have the property previousPage (base name: "previousPage")', function() {
      // uncomment below and update the code to test the property previousPage
      //var instance = new XiSdkResellers.ProductDetailResponseSubscriptionDetailsInner();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
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

  describe('OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner', function() {
    it('should create an instance of OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner', function() {
      // uncomment below and update the code to test OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be.a(ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner);
    });

    it('should have the property subordernumber (base name: "subordernumber")', function() {
      // uncomment below and update the code to test the property subordernumber
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

    it('should have the property statuscode (base name: "statuscode")', function() {
      // uncomment below and update the code to test the property statuscode
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

    it('should have the property holdreasoncode (base name: "holdreasoncode")', function() {
      // uncomment below and update the code to test the property holdreasoncode
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

    it('should have the property holdreason (base name: "holdreason")', function() {
      // uncomment below and update the code to test the property holdreason
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new ResellerApiDocumentation.OrderSearchResponseServiceResponseOrdersearchresponseOrdersInnerSubordersInner();
      //expect(instance).to.be();
    });

  });

}));

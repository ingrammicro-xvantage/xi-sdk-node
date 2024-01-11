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
    instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
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

  describe('OrderModifyResponseServiceresponseOrdermodifyresponse', function() {
    it('should create an instance of OrderModifyResponseServiceresponseOrdermodifyresponse', function() {
      // uncomment below and update the code to test OrderModifyResponseServiceresponseOrdermodifyresponse
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be.a(ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse);
    });

    it('should have the property responseflag (base name: "responseflag")', function() {
      // uncomment below and update the code to test the property responseflag
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be();
    });

    it('should have the property errortype (base name: "errortype")', function() {
      // uncomment below and update the code to test the property errortype
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be();
    });

    it('should have the property acktriggered (base name: "acktriggered")', function() {
      // uncomment below and update the code to test the property acktriggered
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be();
    });

    it('should have the property warncode (base name: "warncode")', function() {
      // uncomment below and update the code to test the property warncode
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be();
    });

    it('should have the property headerresponse (base name: "headerresponse")', function() {
      // uncomment below and update the code to test the property headerresponse
      //var instance = new ResellerApiDocumentation.OrderModifyResponseServiceresponseOrdermodifyresponse();
      //expect(instance).to.be();
    });

  });

}));

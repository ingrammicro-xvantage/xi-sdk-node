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
    instance = new XiSdkResellers.OrdersV5Api();
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

  describe('OrdersV5Api', function() {
    describe('deleteOrdersOrderNumber', function() {
      it('should call deleteOrdersOrderNumber successfully', function(done) {
        //uncomment below and update the code to test deleteOrdersOrderNumber
        //instance.deleteOrdersOrderNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrdersSearch', function() {
      it('should call getOrdersSearch successfully', function(done) {
        //uncomment below and update the code to test getOrdersSearch
        //instance.getOrdersSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV5OrdersDetails', function() {
      it('should call getV5OrdersDetails successfully', function(done) {
        //uncomment below and update the code to test getV5OrdersDetails
        //instance.getV5OrdersDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV5OrdersCreate', function() {
      it('should call postV5OrdersCreate successfully', function(done) {
        //uncomment below and update the code to test postV5OrdersCreate
        //instance.postV5OrdersCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

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

import ApiClient from '../ApiClient';
import MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner from './MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner';

/**
 * The MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner model module.
 * @module model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner
 * @version 1.0.0
 */
class MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner {
    /**
     * Constructs a new <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     * @alias module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner
     * @param retailprice {Number} MSRP Price 0.00
     */
    constructor(retailprice) { 
        
        MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.initialize(this, retailprice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, retailprice) { 
        obj['retailprice'] = retailprice;
    }

    /**
     * Constructs a <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner} obj Optional instance to populate.
     * @return {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner} The populated <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner();

            if (data.hasOwnProperty('itemstatus')) {
                obj['itemstatus'] = ApiClient.convertToType(data['itemstatus'], 'String');
            }
            if (data.hasOwnProperty('statusmessage')) {
                obj['statusmessage'] = ApiClient.convertToType(data['statusmessage'], 'String');
            }
            if (data.hasOwnProperty('ingrampartnumber')) {
                obj['ingrampartnumber'] = ApiClient.convertToType(data['ingrampartnumber'], 'String');
            }
            if (data.hasOwnProperty('vendorpartnumber')) {
                obj['vendorpartnumber'] = ApiClient.convertToType(data['vendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('globalskuid')) {
                obj['globalskuid'] = ApiClient.convertToType(data['globalskuid'], 'String');
            }
            if (data.hasOwnProperty('customerprice')) {
                obj['customerprice'] = ApiClient.convertToType(data['customerprice'], 'String');
            }
            if (data.hasOwnProperty('partdescription1')) {
                obj['partdescription1'] = ApiClient.convertToType(data['partdescription1'], 'String');
            }
            if (data.hasOwnProperty('partdescription2')) {
                obj['partdescription2'] = ApiClient.convertToType(data['partdescription2'], 'String');
            }
            if (data.hasOwnProperty('vendornumber')) {
                obj['vendornumber'] = ApiClient.convertToType(data['vendornumber'], 'String');
            }
            if (data.hasOwnProperty('vendorname')) {
                obj['vendorname'] = ApiClient.convertToType(data['vendorname'], 'String');
            }
            if (data.hasOwnProperty('cpucode')) {
                obj['cpucode'] = ApiClient.convertToType(data['cpucode'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('skustatus')) {
                obj['skustatus'] = ApiClient.convertToType(data['skustatus'], 'String');
            }
            if (data.hasOwnProperty('mediacpu')) {
                obj['mediacpu'] = ApiClient.convertToType(data['mediacpu'], 'String');
            }
            if (data.hasOwnProperty('categorysubcategory')) {
                obj['categorysubcategory'] = ApiClient.convertToType(data['categorysubcategory'], 'String');
            }
            if (data.hasOwnProperty('retailprice')) {
                obj['retailprice'] = ApiClient.convertToType(data['retailprice'], 'Number');
            }
            if (data.hasOwnProperty('newmedia')) {
                obj['newmedia'] = ApiClient.convertToType(data['newmedia'], 'String');
            }
            if (data.hasOwnProperty('enduserrequired')) {
                obj['enduserrequired'] = ApiClient.convertToType(data['enduserrequired'], 'String');
            }
            if (data.hasOwnProperty('backorderflag')) {
                obj['backorderflag'] = ApiClient.convertToType(data['backorderflag'], 'String');
            }
            if (data.hasOwnProperty('skuauthorized')) {
                obj['skuauthorized'] = ApiClient.convertToType(data['skuauthorized'], 'String');
            }
            if (data.hasOwnProperty('extendedvendorpartnumber')) {
                obj['extendedvendorpartnumber'] = ApiClient.convertToType(data['extendedvendorpartnumber'], 'String');
            }
            if (data.hasOwnProperty('warehousedetails')) {
                obj['warehousedetails'] = ApiClient.convertToType(data['warehousedetails'], [MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['itemstatus'] && !(typeof data['itemstatus'] === 'string' || data['itemstatus'] instanceof String)) {
            throw new Error("Expected the field `itemstatus` to be a primitive type in the JSON string but got " + data['itemstatus']);
        }
        // ensure the json data is a string
        if (data['statusmessage'] && !(typeof data['statusmessage'] === 'string' || data['statusmessage'] instanceof String)) {
            throw new Error("Expected the field `statusmessage` to be a primitive type in the JSON string but got " + data['statusmessage']);
        }
        // ensure the json data is a string
        if (data['ingrampartnumber'] && !(typeof data['ingrampartnumber'] === 'string' || data['ingrampartnumber'] instanceof String)) {
            throw new Error("Expected the field `ingrampartnumber` to be a primitive type in the JSON string but got " + data['ingrampartnumber']);
        }
        // ensure the json data is a string
        if (data['vendorpartnumber'] && !(typeof data['vendorpartnumber'] === 'string' || data['vendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `vendorpartnumber` to be a primitive type in the JSON string but got " + data['vendorpartnumber']);
        }
        // ensure the json data is a string
        if (data['globalskuid'] && !(typeof data['globalskuid'] === 'string' || data['globalskuid'] instanceof String)) {
            throw new Error("Expected the field `globalskuid` to be a primitive type in the JSON string but got " + data['globalskuid']);
        }
        // ensure the json data is a string
        if (data['customerprice'] && !(typeof data['customerprice'] === 'string' || data['customerprice'] instanceof String)) {
            throw new Error("Expected the field `customerprice` to be a primitive type in the JSON string but got " + data['customerprice']);
        }
        // ensure the json data is a string
        if (data['partdescription1'] && !(typeof data['partdescription1'] === 'string' || data['partdescription1'] instanceof String)) {
            throw new Error("Expected the field `partdescription1` to be a primitive type in the JSON string but got " + data['partdescription1']);
        }
        // ensure the json data is a string
        if (data['partdescription2'] && !(typeof data['partdescription2'] === 'string' || data['partdescription2'] instanceof String)) {
            throw new Error("Expected the field `partdescription2` to be a primitive type in the JSON string but got " + data['partdescription2']);
        }
        // ensure the json data is a string
        if (data['vendornumber'] && !(typeof data['vendornumber'] === 'string' || data['vendornumber'] instanceof String)) {
            throw new Error("Expected the field `vendornumber` to be a primitive type in the JSON string but got " + data['vendornumber']);
        }
        // ensure the json data is a string
        if (data['vendorname'] && !(typeof data['vendorname'] === 'string' || data['vendorname'] instanceof String)) {
            throw new Error("Expected the field `vendorname` to be a primitive type in the JSON string but got " + data['vendorname']);
        }
        // ensure the json data is a string
        if (data['cpucode'] && !(typeof data['cpucode'] === 'string' || data['cpucode'] instanceof String)) {
            throw new Error("Expected the field `cpucode` to be a primitive type in the JSON string but got " + data['cpucode']);
        }
        // ensure the json data is a string
        if (data['class'] && !(typeof data['class'] === 'string' || data['class'] instanceof String)) {
            throw new Error("Expected the field `class` to be a primitive type in the JSON string but got " + data['class']);
        }
        // ensure the json data is a string
        if (data['skustatus'] && !(typeof data['skustatus'] === 'string' || data['skustatus'] instanceof String)) {
            throw new Error("Expected the field `skustatus` to be a primitive type in the JSON string but got " + data['skustatus']);
        }
        // ensure the json data is a string
        if (data['mediacpu'] && !(typeof data['mediacpu'] === 'string' || data['mediacpu'] instanceof String)) {
            throw new Error("Expected the field `mediacpu` to be a primitive type in the JSON string but got " + data['mediacpu']);
        }
        // ensure the json data is a string
        if (data['categorysubcategory'] && !(typeof data['categorysubcategory'] === 'string' || data['categorysubcategory'] instanceof String)) {
            throw new Error("Expected the field `categorysubcategory` to be a primitive type in the JSON string but got " + data['categorysubcategory']);
        }
        // ensure the json data is a string
        if (data['newmedia'] && !(typeof data['newmedia'] === 'string' || data['newmedia'] instanceof String)) {
            throw new Error("Expected the field `newmedia` to be a primitive type in the JSON string but got " + data['newmedia']);
        }
        // ensure the json data is a string
        if (data['enduserrequired'] && !(typeof data['enduserrequired'] === 'string' || data['enduserrequired'] instanceof String)) {
            throw new Error("Expected the field `enduserrequired` to be a primitive type in the JSON string but got " + data['enduserrequired']);
        }
        // ensure the json data is a string
        if (data['backorderflag'] && !(typeof data['backorderflag'] === 'string' || data['backorderflag'] instanceof String)) {
            throw new Error("Expected the field `backorderflag` to be a primitive type in the JSON string but got " + data['backorderflag']);
        }
        // ensure the json data is a string
        if (data['skuauthorized'] && !(typeof data['skuauthorized'] === 'string' || data['skuauthorized'] instanceof String)) {
            throw new Error("Expected the field `skuauthorized` to be a primitive type in the JSON string but got " + data['skuauthorized']);
        }
        // ensure the json data is a string
        if (data['extendedvendorpartnumber'] && !(typeof data['extendedvendorpartnumber'] === 'string' || data['extendedvendorpartnumber'] instanceof String)) {
            throw new Error("Expected the field `extendedvendorpartnumber` to be a primitive type in the JSON string but got " + data['extendedvendorpartnumber']);
        }
        if (data['warehousedetails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['warehousedetails'])) {
                throw new Error("Expected the field `warehousedetails` to be an array in the JSON data but got " + data['warehousedetails']);
            }
            // validate the optional field `warehousedetails` (array)
            for (const item of data['warehousedetails']) {
                MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner.validateJSON(item);
            };
        }

        return true;
    }


}

MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.RequiredProperties = ["retailprice"];

/**
 * @member {String} itemstatus
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['itemstatus'] = undefined;

/**
 * @member {String} statusmessage
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['statusmessage'] = undefined;

/**
 * SKU number for the product for which order needs to be created with Ingram Micro
 * @member {String} ingrampartnumber
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['ingrampartnumber'] = undefined;

/**
 * Vendor Part number for the product
 * @member {String} vendorpartnumber
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendorpartnumber'] = undefined;

/**
 * @member {String} globalskuid
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['globalskuid'] = undefined;

/**
 * Customer specific price for the product, excluding taxes
 * @member {String} customerprice
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['customerprice'] = undefined;

/**
 * Description on the part number that is being requested
 * @member {String} partdescription1
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['partdescription1'] = undefined;

/**
 * Contuiation of description on the part number that is being requested
 * @member {String} partdescription2
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['partdescription2'] = undefined;

/**
 * Internal four digit code assigned by Ingram
 * @member {String} vendornumber
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendornumber'] = undefined;

/**
 * Name of the vendor
 * @member {String} vendorname
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['vendorname'] = undefined;

/**
 * Ingram internal code for a product
 * @member {String} cpucode
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['cpucode'] = undefined;

/**
 * Ingram Micro assigned product classification.
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.ClassEnum} class
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['class'] = undefined;

/**
 * Identifies if the SKU has been discontinued. Rules must be defined on the values to be sent out to partner.
 * @member {String} skustatus
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['skustatus'] = undefined;

/**
 * @member {String} mediacpu
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['mediacpu'] = undefined;

/**
 * Ingram's internal categorization of the product
 * @member {String} categorysubcategory
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['categorysubcategory'] = undefined;

/**
 * MSRP Price 0.00
 * @member {Number} retailprice
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['retailprice'] = undefined;

/**
 * Internal four-digit code assigned by Ingram to represent the item group
 * @member {String} newmedia
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['newmedia'] = undefined;

/**
 * Y - End user required N - Not required End user
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.EnduserrequiredEnum} enduserrequired
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['enduserrequired'] = undefined;

/**
 * Y- Allow Backorder Flag N- Not allowed
 * @member {module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.BackorderflagEnum} backorderflag
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['backorderflag'] = undefined;

/**
 * @member {String} skuauthorized
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['skuauthorized'] = undefined;

/**
 * @member {String} extendedvendorpartnumber
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['extendedvendorpartnumber'] = undefined;

/**
 * @member {Array.<module:model/MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInnerWarehousedetailsInner>} warehousedetails
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner.prototype['warehousedetails'] = undefined;





/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner['ClassEnum'] = {

    /**
     * value: "A-Stocked product in all IM warehouses"
     * @const
     */
    "A-Stocked product in all IM warehouses": "A-Stocked product in all IM warehouses",

    /**
     * value: "B-Limited stock in IM warehouses"
     * @const
     */
    "B-Limited stock in IM warehouses": "B-Limited stock in IM warehouses",

    /**
     * value: "C-Stocked in fewer wareshouses"
     * @const
     */
    "C-Stocked in fewer wareshouses": "C-Stocked in fewer wareshouses",

    /**
     * value: "D-Ingram discontinued"
     * @const
     */
    "D-Ingram discontinued": "D-Ingram discontinued",

    /**
     * value: "E-Planned to be phased out as per the vendor"
     * @const
     */
    "E-Planned to be phased out as per the vendor": "E-Planned to be phased out as per the vendor",

    /**
     * value: "F-Carried for specific customer as per the contract"
     * @const
     */
    "F-Carried for specific customer as per the contract": "F-Carried for specific customer as per the contract",

    /**
     * value: "N-New SKU"
     * @const
     */
    "N-New SKU": "N-New SKU",

    /**
     * value: "O-Discontinued to be liquidated"
     * @const
     */
    "O-Discontinued to be liquidated": "O-Discontinued to be liquidated",

    /**
     * value: "S-Order for specialized demand"
     * @const
     */
    "S-Order for specialized demand": "S-Order for specialized demand",

    /**
     * value: "V-Discontinued by vendor"
     * @const
     */
    "V-Discontinued by vendor": "V-Discontinued by vendor",

    /**
     * value: "X-Direct Ship products from vendor"
     * @const
     */
    "X-Direct Ship products from vendor": "X-Direct Ship products from vendor"
};


/**
 * Allowed values for the <code>enduserrequired</code> property.
 * @enum {String}
 * @readonly
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner['EnduserrequiredEnum'] = {

    /**
     * value: "Y-End user data required"
     * @const
     */
    "Y-End user data required": "Y-End user data required",

    /**
     * value: "N-End user data not required"
     * @const
     */
    "N-End user data not required": "N-End user data not required"
};


/**
 * Allowed values for the <code>backorderflag</code> property.
 * @enum {String}
 * @readonly
 */
MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner['BackorderflagEnum'] = {

    /**
     * value: "Y- Can be backordered"
     * @const
     */
    "Y- Can be backordered": "Y- Can be backordered",

    /**
     * value: "N-Cannot be backordered"
     * @const
     */
    "N-Cannot be backordered": "N-Cannot be backordered"
};



export default MultiSKUPriceAndStockResponseServiceresponsePriceandstockresponseDetailsInner;


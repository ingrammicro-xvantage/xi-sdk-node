# XiSdkResellers.OrderCreateV7RequestAdditionalAttributesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeName** | **String** | **allowPartialOrder:** Allow orders with failed lines.    **DpasRating:** DX rating by Department of Defense is the highest rating by the highest offices and meant to be top priority. DO any other gov offices at the federal level to priotize.    **DpasProgramId:** Identifies the actual agency that signed off on the DPAS priority.    **allowDuplicateCustomerOrderNumber:** Allow orders with duplicate customer PO numbers. Enables resellers to have the same PO number for multiple orders.     **euDepId:** DEP ID would be the &#39;End User DEP/ABM Organization ID&#39; up to 32 characters and is assigned by Apple.    **depOrderNbr:** depordernbr is &#39;End User PO to reseller&#39; Can appear in message lines or dedicated end user po#.    **govtProgramType:** Program type, “PA” for government orders, “ED” for education order.    **govtEndUserType:** Type of end user of the program. F &#x3D; Federal, S &#x3D; State, E &#x3D; Local, K &#x3D; K-12 school, and H &#x3D; Higher Education    **govtSolicitationNumber:** Education order’s contract number    **govtPublicPrivateCode:** Determines TAX / NO TAX.   &#39;P&#39; PUBLIC SECTOR,   &#39;R&#39; PRIVATE SECTOR.  Value needs only to be provided for EDUCATION order.    **govtEndUserData:** Name of the End user of the program. For example, STATE OF OHIO, CHICAGO SCHOOLDISTRICT etc.    **govtEndUserPostalCode:** 9 CHAR FIELD / Zip Code of the End user of the order.    **dynamicMessageLine1:** Custom Dynamic Message line 1.    **allowOrderOnCustomerHold:** Boolean value flag which allows a customer to create an order with the hold status. | [optional] 
**attributeValue** | **String** | The attribute field data. | [optional] 



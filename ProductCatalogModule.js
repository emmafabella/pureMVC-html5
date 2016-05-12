"use strict";
require([ '../modules/product/productcatalog/view/components/ProductCatalog',
        '../modules/product/productcatalog/view/components/ProductCatalogInitialView',
        '../modules/product/productcatalog/view/components/ProductCatalogDetailView',
        '../modules/product/productcatalog/view/ProductCatalogMediator',
        '../modules/product/productcatalog/model/ProductCatalogProxy',
        '../modules/product/productcatalog/model/ProdCatalogQueryListProxy',
        '../modules/product/productcatalog/controller/ProductCatalogInitialCommand',
        '../modules/product/productcatalog/controller/ProductCatalogQueryListCommand',
        '../modules/product/productcatalog/controller/ProductCatalogQueryCommand',
        '../modules/product/productcatalog/controller/ProductCatalogUpdateCommand',
        '../modules/product/productcatalog/controller/ProductCatalogCreateInitialCommand',
        '../modules/product/productcatalog/controller/ProductCatalogCreateCommand',
        '../modules/product/productcatalog/controller/ProductCatalogDeleteCommand',
        '../modules/product/productcatalog/ProductCatalogFacade', 
        '../modules/product/productcatalog/ProductCatalogConstant'], function() {
    var facade = ProductCatalogFacade.getInstance();
    facade.startup();
});

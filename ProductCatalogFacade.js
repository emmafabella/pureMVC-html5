"use strict";
var ProductCatalogFacade = Objs('ebs.modules.product.productcatalog.ProductCatalogFacade', CoreFacade, {
    startup : function() {
        this.initializeCustomView(ApplicationFacade.getInstance().getTempObject());
    },
    initializeController : function() {
        ProductCatalogFacade.$super.initializeController.call(this);
        this.registerCommand(ProductCatalogConstant.REQUEST_INITIAL, ProductCatalogInitialCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_QUERYLIST, ProductCatalogQueryListCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_QUERY, ProductCatalogQueryCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_UPDATE, ProductCatalogUpdateCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_CREATEINITIAL, ProductCatalogCreateInitialCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_CREATE, ProductCatalogCreateCommand);
        this.registerCommand(ProductCatalogConstant.REQUEST_DELETE, ProductCatalogDeleteCommand);
        this.registerProxy(new ProductCatalogProxy(ProductCatalogConstant.PROXY));
    },
    initializeCustomView : function(obj) {
        var screenID = obj.get('screenID');
        var productCatalog = new ProductCatalog(screenID);
        var mediator = new ProductCatalogMediator(screenID, productCatalog);
        this.registerMediator(mediator);
    },
    releaseMediator : function(screenID) {
        this.removeMediator(screenID);
    },
    release : function(screenID) {
        this.removeProxy(ProductCatalogConstant.PROXY);
        this.releaseMediator(screenID);
    }
});

ProductCatalogFacade.getInstance = function() {
    if (Facade.instanceMap[ProductCatalogConstant.MULTITONKEY] === 'undefined'
            || !Facade.instanceMap[ProductCatalogConstant.MULTITONKEY]) {
        Facade.instanceMap[ProductCatalogConstant.MULTITONKEY] = new ProductCatalogFacade(
                ProductCatalogConstant.MULTITONKEY);
    }
    UIUtil.registerFacadeKey(ProductCatalogConstant.MULTITONKEY);
    return Facade.instanceMap[ProductCatalogConstant.MULTITONKEY];
};
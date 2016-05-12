"use strict";
var ProductCatalogConstant = Objs('ebs.modules.product.productcatalog.ProductCatalogConstant', {});
ProductCatalogConstant.MULTITONKEY = 'ProductCatalog';
ProductCatalogConstant.MEDIATOR = 'productCatalogMediator';
ProductCatalogConstant.PROXY = 'productCatalogProxy';
ProductCatalogConstant.MODULE = 'ProductCatalog';

ProductCatalogConstant.INITIAL = 'ProdCatalogInitial';
ProductCatalogConstant.QUERYLIST = 'ProdCatalogQueryList';
ProductCatalogConstant.QUERY = 'ProdCatalogQuery';
ProductCatalogConstant.UPDATE = 'ProdCatalogUpdate';
ProductCatalogConstant.CREATEINITIAL='ProdCatalogCreateInitial';
ProductCatalogConstant.CREATE='ProdCatalogCreate';
ProductCatalogConstant.DELETE='ProdCatalogDelete';

ProductCatalogConstant.REQUEST_INITIAL = 'ProdCatalogInitial.Request';
ProductCatalogConstant.REQUEST_QUERYLIST = 'ProdCatalogQueryList.Request';
ProductCatalogConstant.REQUEST_QUERY = 'ProdCatalogQuery.Request';
ProductCatalogConstant.REQUEST_UPDATE = 'ProdCatalogUpdate.Request';
ProductCatalogConstant.REQUEST_CREATEINITIAL='ProdCatalogCreateInitial.Request';
ProductCatalogConstant.REQUEST_CREATE='ProdCatalogCreate.Request';
ProductCatalogConstant.REQUEST_DELETE='ProdCatalogDelete.Request';

ProductCatalogConstant.RESPONSE_INITIAL = 'ProdCatalogInitial.Response';
ProductCatalogConstant.RESPONSE_QUERYLIST = 'ProdCatalogQueryList.Response';
ProductCatalogConstant.RESPONSE_QUERY = 'ProdCatalogQuery.Response';
ProductCatalogConstant.RESPONSE_UPDATE = 'ProdCatalogUpdate.Response';
ProductCatalogConstant.RESPONSE_CREATEINITIAL='ProdCatalogCreateInitial.Response';
ProductCatalogConstant.RESPONSE_CREATE='ProdCatalogCreate.Response';
ProductCatalogConstant.RESPONSE_DELETE='ProdCatalogDelete.Response';

ProductCatalogConstant.MODE_UPDATE='Update';
ProductCatalogConstant.MODE_CREATE='Create';
ProductCatalogConstant.MODE_DELETE='Delete';

ProductCatalogConstant.PRODUCT_ORIGIN_AGENT="AGENT";
ProductCatalogConstant.PRODUCT_ORIGIN_OTHER_BANK="OTHER_BANK";
ProductCatalogConstant.PRODUCT_ORIGIN_OWN_BANK="OWN_BANK";
ProductCatalogConstant.PRODUCT_STATUS_ACTIVE="ACTIVE";


ProductCatalogConstant.PRODUCT_STATUS_DOMAIN='PRODUCT.PRODUCT_STATUS';
ProductCatalogConstant.PRODUCT_RISK_DOMAIN='PRODUCT.CLASSIFICATION_VALUE';
ProductCatalogConstant.PRODUCT_RISK_PARENTDOMAIN='PRODUCT.CLASSIFICATION_TYPE';
ProductCatalogConstant.PRODUCT_RISK_PARENTREFCODE='RISK_PROFILE';
ProductCatalogConstant.PRODUCT_ORIGAGENT_DOMAIN='PRODUCT.PRODUCT_AGENT';
package com.webshop.config;


import com.webshop.entitiy.Product;
import com.webshop.entitiy.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    @Override
    //Http metódusok letiltása(put,delete,post)
    public void configureRepositoryRestConfiguration( RepositoryRestConfiguration config ) {
        HttpMethod[] theUnSupportedActions={HttpMethod.POST,HttpMethod.DELETE,HttpMethod.PUT};
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(( metdata, httpMethods ) -> httpMethods.disable(theUnSupportedActions))
                .withCollectionExposure(( metdata, httpMethods ) -> httpMethods.disable(theUnSupportedActions));


        //Http metódusok letiltása(put,delete,post)
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(( metdata, httpMethods ) -> httpMethods.disable(theUnSupportedActions))
                .withCollectionExposure(( metdata, httpMethods ) -> httpMethods.disable(theUnSupportedActions));
    }
}

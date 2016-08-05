angular.module("productCategoryModule")
    .factory("productCategoryService", productCategoryService);

productCategoryService.$inject = ["$http", "$location"];

function productCategoryService($http, $location) {

    return {
        createProductCategory : function (productCategory) {

            return $http.post("/createProductCategory",

                {
                    DeckName : productCategory.DeckName,
                    Description : productCategory.Description,
                    AddedBy : productCategory.AddedBy,
                    Id : productCategory.productCategoryId
                })
        }

        ,

        getAllProductCategories : function (){
            console.log("calling getall")
            return $http.get("/getAllProductCategory");
        }

        ,

        getIdFromEndPoint: function(){

            var absoluteUrl = $location.absUrl();

            var segments= absoluteUrl.split("/");

            var productCategoryId = segments[segments.length-1];

            return productCategoryId;
        }

        ,


        getProductCategoryById : function (productCategoryId){
            console.log("im RETURNING")
            return $http.get("/getProductCategoryById/" + productCategoryId);
        }

        ,

        updateProductCategory : function(productCategory, productCategoryId){
            console.log(productCategoryId);
            console.log("THE ID!!!!!!!!!!!!!!!!!!!!!");
            return $http.post("/updateProductCategory",

                {
                    DeckName : productCategory.DeckName,
                    Description : productCategory.Description,
                    AddedBy : productCategory.AddedBy,
                    ProductCategoryId : productCategoryId
                });
        }
        ,
        deleteProductCategoryById : function (productCategoryId) {

            return $http['delete']("/deleteProductCategoryById/" + productCategoryId)


        }
        ,
        addDeckToUser : function (deck, username, on) {
            deck["Username"] = username;
            deck["On"] = on;

            return $http.post("/addDeckToUser",deck);

        }
        ,
        getAllUserDecks : function (username){
            
            return $http.get("/getAllUserDecks/" + username);
        }
        ,
        getCardsFromDeck : function (deckId, username) {

            return $http.post("/getCardsFromDeck",  {
                deckId : deckId,
                username : username
            });
        }
    }

    

}
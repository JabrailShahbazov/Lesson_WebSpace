$(function () {
    console.log($(".productRow"))
    const product1 = new Product(1, "Smoking", 2345, "model_1.jpg");
    const product2 = new Product(2, "Plter", 245, "model_1.jpg");
    const product3 = new Product(3, "Nebilim", 205, "model_1.jpg");
    const product4 = new Product(4, "Edfg", 11345, "model_1.jpg");
    const product5 = new Product(5, "asfhlskf", 234, "model_1.jpg");
    const product6 = new Product(6, "ASDKfhAS", 45, "model_1.jpg");


    let products = [product1, product2, product3, product4, product5, product6]
    function AddingProduct() {
        for (const product of products) {
            let Card = `
    <div class="col-md-6 col-lg-4 mb-5 m-auto" data-aos="fade-right" data-aos-offset="100"
    data-aos-easing="ease-in-sine">
    <div class="card " style="width: 18rem;" data-pruduct="${product.Id}>
        <img src="${'./images/' + product.Img}" class="card-img-top img-fluid" alt="model_1">
        <div class="card-body">
            <h3 class="card-title text-center"><a href="#">${product.Name}</a></h3>
            <div class="mb-3 text-center">
                <span class="mr-3 meta-icons-star">
                    <a href="#"><i class="fas fa-star"></i> 5.0</a>
                </span>
                <span class="mr-3 meta-icons">
                    <a href="#"><i class="fas fa-heart"></i>29</a>
                </span>
            </div>
            <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.
                <div class="text-right">${"Price" + product.price}</div>
            </p>
            <div class="text-center">
                <a href="#" class="adding btn btn-black mr-1 rounded-0">Cart</a>
                <a href="#" class="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
            </div>

        </div>
    </div>
</div>
    `
            $(".productRow").append(Card);
        }
    }

    AddingProduct()

    function SetLocalStorige() {
        $(".adding").click(function (e) {
            e.preventDefault();
            let productId = $(this).parents(".card").data("pruduct")

            console.log(productId)

            for (const product of products) {
                if (productId == product.Id) {


                    let userProduct = JSON.parse(localStorage.getItem("Products")) || []
                    let dublicated = false
                    for (const userProducts of userProduct) {
                        if (userProducts.Id == productId) {
                            dublicated = true;
                            console.log(dublicated)
                            break;

                        }
                    }
                    if (!(dublicated)) {
                        userProduct.push(product)
                        localStorage.setItem("Products", JSON.stringify(userProduct))
                    }
                    else {
                        alert("your product allredy exsist")
                    }

                }
            }
        });
    }

    SetLocalStorige()
})

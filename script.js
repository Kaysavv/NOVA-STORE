let cart = [];

function addToCart(product, price){

    cart.push({
        name: product,
        price: price
    });

    alert(product + " toegevoegd aan winkelwagen");

    console.log(cart);
}


function showCart(){

    if(cart.length === 0){
        alert("Je winkelwagen is leeg");
        return;
    }

    let text = "Winkelwagen:\n\n";

    let total = 0;

    cart.forEach(item => {

        text += item.name + " - €" + item.price + "\n";

        total += item.price;

    });

    text += "\nTotaal: €" + total;

    alert(text);
}
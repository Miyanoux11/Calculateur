function getPriceArticle() {
    var priceElement = document.getElementById("price");
    var quantityElement = document.getElementById("quantity");
    var price = priceElement ? parseFloat(priceElement.value) : 0;
    var quantity = quantityElement ? parseInt(quantityElement.value) : 0;
    return (price * quantity).toString();
}
function getTaxe() {
    var taxeElement = document.getElementById("taxeState");
    var taxeValue = 0;
    if (taxeElement.value == "NV") {
        taxeValue = 0.08;
    }
    else if (taxeElement.value == "TX") {
        taxeValue = 0.0625;
    }
    else if (taxeElement.value == "UT") {
        taxeValue = 0.0685;
    }
    else if (taxeElement.value == "AL") {
        taxeValue = 0.04;
    }
    else if (taxeElement.value == "CA") {
        taxeValue = 0.0825;
    }
    return taxeValue;
}
function getPrice() {
    var price = parseFloat(getPriceArticle());
    var taxe = getTaxe();
    return (price + price * taxe).toString();
}
function getDiscount(price) {
    if (parseFloat(price) > 1000) {
        if (parseFloat(price) > 5000) {
            if (parseFloat(price) > 7000) {
                if (parseFloat(price) > 10000) {
                    if (parseFloat(price) > 50000) {
                        return 0.15;
                    }
                    return 0.1;
                }
                return 0.0;
            }
            return 0.05;
        }
        return 0.03;
    }
    return 0;
}
function getTotalPrice() {
    return (parseFloat(getPrice()) - parseFloat(getPrice()) * getDiscount(getPrice())).toString();
}
function display() {
    var output = getTotalPrice();
    var formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });
    var outputFormatted = formatter.format(parseFloat(output));
    var displayElement = document.getElementById("output");
    if (displayElement) {
        displayElement.innerHTML = outputFormatted + "<br>" + "Réduction appliquée: " + (getDiscount(getPrice()) * 100).toString() + "%";
    }
}

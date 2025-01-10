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
function getTotalPrice() {
    var price = parseFloat(getPriceArticle());
    var taxe = getTaxe();
    return (price + price * taxe).toString();
}
function getDiscount(price) {
    if (parseFloat(price) > 1000) {
        return 0.03;
    }
    else if (parseFloat(price) > 5000) {
        return 0.05;
    }
    else if (parseFloat(price) > 7000) {
        return 0.07;
    }
    else if (parseFloat(price) > 10000) {
        return 0.1;
    }
    else if (parseFloat(price) > 50000) {
        return 0.15;
    }
    return 0;
}
function display() {
    var output = (parseFloat(getTotalPrice()) - parseFloat(getTotalPrice()) * getDiscount(getTotalPrice())).toString();
    var formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });
    var outputFormatted = formatter.format(parseFloat(output));
    var displayElement = document.getElementById("output");
    if (displayElement) {
        displayElement.textContent = outputFormatted;
    }
}

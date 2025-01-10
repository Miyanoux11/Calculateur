
function getPriceArticle() {
    const priceElement = document.getElementById("price") as HTMLInputElement;
    const quantityElement = document.getElementById("quantity") as HTMLInputElement;
    const price = priceElement ? parseFloat(priceElement.value) : 0;
    const quantity = quantityElement ? parseInt(quantityElement.value) : 0;
    return (price * quantity).toString();
}

function getTaxe() {
    const taxeElement = document.getElementById("taxeState") as HTMLInputElement;
    let taxeValue = 0;
    if (taxeElement.value == "NV") {
        taxeValue = 0.08;
    }
    else if(taxeElement.value == "TX") {
        taxeValue = 0.0625;
    }
    else if(taxeElement.value == "UT") {
        taxeValue = 0.0685;
    }
    else if(taxeElement.value == "AL") {
        taxeValue = 0.04;
    }
    else if(taxeElement.value == "CA") {
        taxeValue = 0.0825;
    }
    return taxeValue;
}

function getTotalPrice() {
    const price = parseFloat(getPriceArticle());
    const taxe = getTaxe();
    return (price + price * taxe).toString();
}

function getDiscount(price: string) {
    if(parseFloat(price) > 1000) {
        return 0.03;
    }
    else if(parseFloat(price) > 5000) {
        return 0.05;
    }
    else if(parseFloat(price) > 7000) {
        return 0.07;
    }
    else if(parseFloat(price) > 10000) {
        return 0.1;
    }
    else if(parseFloat(price) > 50000) {
        return 0.15;
    }
    return 0;
}

function display() {
    const output = (parseFloat(getTotalPrice()) - parseFloat(getTotalPrice()) * getDiscount(getTotalPrice())).toString();
    const formatter = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });
    const outputFormatted = formatter.format(parseFloat(output));
    const displayElement = document.getElementById("output");
    if (displayElement) {
        displayElement.textContent = outputFormatted;
    }
}

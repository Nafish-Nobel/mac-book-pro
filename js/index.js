//Variables Customizing
let memory = document.getElementById('memory')
let storage = document.getElementById('storage')
let delivery = document.getElementById('delivery')

//Pricing Calculation
let extraMemoryCost = document.getElementById('extraMemoryCost').lastElementChild.lastChild;
let extraStorageCost = document.getElementById('extraStorageCost').lastElementChild.lastChild;
let deliveryCharge = document.getElementById('deliveryCharge').lastElementChild.lastChild;
let totalPrice = document.getElementById('totalPrice').lastElementChild.lastChild;
let total = document.getElementById('total').lastElementChild
let promoCodeForm = document.getElementById('promoCodeForm')

//Event Listeners
memory.addEventListener('click', optionHandler)
storage.addEventListener('click', optionHandler)
delivery.addEventListener('click', optionHandler)

//Handleing
function optionHandler(e) {
    text = e.target.innerText;
    if (text.indexOf('memory') != -1) {
        extraMemoryCost.innerText = updatePrice(text)
    }
    else if (text.indexOf('storage') != -1) {
        extraStorageCost.innerText = updatePrice(text)
    }
    else {
        deliveryCharge.innerText = updatePrice(text)
    }

    let currentPrice = 1299 + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCharge.innerText)
    total.innerText = currentPrice
    totalPrice.innerText = currentPrice
}

//Updating Price
function updatePrice(text) {
    if (text.startsWith('16GB') || text.startsWith('1TB')) {
        return 180;
    }
    else if (text.includes('Aug 21')) {
        return 20;
    }
    else if (text.startsWith('512GB')) {
        return 100;
    }
    else {
        return 0;
    }
}

//Promo Code
let button = document.querySelector('.btn-danger')
promoCodeForm.addEventListener('submit',
    e => {
        let code = inputField.value.trim()
        if (code == '') {
            alert('Form Field Is Empty')
        }
        else if (code == 'stevekaku') {
            inputField.setAttribute('disabled', true);
            button.setAttribute('disabled', true);
            memory.removeEventListener('click', optionHandler)
            storage.removeEventListener('click', optionHandler)
            delivery.removeEventListener('click', optionHandler)
            total.innerText = parseInt(totalPrice.innerText) - parseInt(totalPrice.innerText) * 0.2
            alert(`${code} Applied Successfully`)
        }
        else {
            alert(`${code} Is Not Available`)
        }
        inputField.value = '';
        e.preventDefault();
    })
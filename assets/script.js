let amountTotal = document.querySelector('.total-quantity')
let amount = 1

const plusButton = document.querySelector('#quantity-up')
plusButton.addEventListener('click', function(){
    amount = amount + 1
    amountTotal.textContent = "Quantity: "+ amount
})

const minusButton = document.querySelector('#quantity-down')
minusButton.addEventListener('click', function(){
      if(amount > 0) {
          amount = amount - 1
          amountTotal.textContent = "Quantity: "+ amount
      }
})
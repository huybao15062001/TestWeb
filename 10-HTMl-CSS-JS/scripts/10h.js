function calFeeShip() {
                let total = 0
                const costOrder = Number(document.querySelector('.js-Input').value)
                if(costOrder>0){
                        if(costOrder<40){
                        total = costOrder + 10
                    }else{
                        total = costOrder
                    }
                    document.querySelector('.js-Result').classList.remove('less-then-0')
                    document.querySelector('.js-Result').innerHTML = `$${total}`
                }else {
                    document.querySelector('.js-Result').classList.add('less-then-0')
                    document.querySelector('.js-Result').innerHTML = 'Error: cost cannot be less than $0'
                }
                
            }

            function keyDown(event){
                if(event.key === 'Enter'){
                calFeeShip()
                }
            }
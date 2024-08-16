
let burgerMenu = function(){
    let burgerBtn = document.querySelector('.burger');
    let menuHidden = document.querySelector('.menu-hidden');
    let cross = document.querySelector('.menu-hidden__cross');

    burgerBtn.onclick = function(){
        menuHidden.classList.add('active')

    }
    cross.onclick = function(){
        if(menuHidden.classList.contains('active')){
            menuHidden.classList.remove('active')
        }
            
    }
}

burgerMenu()


///селектор 


let select = function(){
    
    let selectHeader = document.querySelectorAll('.select__header')
    let selectItem = document.querySelectorAll('.select__item')

    selectHeader.forEach(item=>{
        item.addEventListener('click',selectToggle)
    })
    selectItem.forEach(item=>{
        item.addEventListener('click', selectChoose )
    })

    function selectToggle(){
        this.parentElement.classList.toggle('select__active')
    }

    function selectChoose (){
        let text = this.innerText
        let select = this.closest('.select')
        let carrentText = select.querySelector('.select__current')
        carrentText.innerText = text
        select.classList.remove('select__active')
    }
}  

select()


//////счетчик//////


// const counters = document.querySelectorAll('.counter')

// if(counters){
//     counters.forEach(counter => {
//         counter.addEventListener('click' , e=> {
//             const target = e.target

//             if(target.closest('.counter-btn')){
//                 let value = parseInt(target.closect('.counter').querySelector('.counter__input').value);
//                 if(target.classList.contains('.counter-btn__plus')){
//                     value++;
//                 }else{
//                     --value;
//                 }
//                 target.closest('.counter').querySelector('.counter__input').value = value
//             }
//         })
//     })
// }



// const prodBtd = document.querySelectorAll('.product-descr__btn')
// const prodBox = document.querySelectorAll('.product-descr__box')
// const prodHide = document.querySelectorAll('.product-descr__hidden')

// prodBtd.forEach(item , function(){
//     item.onclick = function(){
//         prodHide.classList.remove('.hide')
//         if(prodHide.classList.contains('.hide' == false)){
//             prodBox.classList.add('.hide')
//         }
//     }  
// })

//////////слайдеры/////////
/////cart

new Swiper ('.looked__inner',{
    pagination: {
        el: '.swiper-scrollbar' ,

        type: 'progressbar'
    },

    slidesPreView: 1 ,
});

//////////productCard

new Swiper ('.product-card__slider-wrap',{
   thumbs: {

    swiper: {
        el: '.slider__mini-wrap', 

        slidesPreView: 5 ,

    } 
   },
   

    
});

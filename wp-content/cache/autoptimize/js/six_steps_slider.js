document.addEventListener('DOMContentLoaded', function() {
    let tabBtns = document.querySelectorAll('.six-steps-btn');
    let tabTexts = document.querySelectorAll('.six-steps-tab-content');

    tabBtns.forEach((item, index)=>{
        item.addEventListener('click', function(){
            document.querySelector('.six-steps-btn.active').classList.remove('active');
            item.classList.add('active');

            document.querySelector('.six-steps-tab-content.active').classList.remove('active');
            tabTexts[index].classList.add('active');
        })
    });

});
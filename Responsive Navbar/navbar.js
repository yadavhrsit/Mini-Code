document.getElementById('hamburger').addEventListener('click',function(){
    let a = this.nextElementSibling;
    a.classList.toggle('opened');
    document.getElementsByClassName('lines')[0].classList.toggle('open');
    document.getElementsByClassName('lines')[1].classList.toggle('open');
    document.getElementsByClassName('lines')[2].classList.toggle('open');
      
    
});
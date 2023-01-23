
/*НАЧАЛО ФУНКЦИИ ДЛЯ МОДАЛЬНОГО ОКНА */
function modal(){
    const m2=document.querySelectorAll('[data-btn]')
     for (let i of m2){
         i.addEventListener('click', function(){
            let btn=i.getAttribute('data-btn');
            let windov=document.querySelector("[data-windov='"+btn+"']");
            windov.style.display='flex';

            /* начало вставки для слайдера в модалке*/
            let beg=document.querySelector("[data-pervii='"+btn+"']");
            beg.style.display="flex";

        
            let sld=document.querySelector("[data-slider='"+btn+"']");
            console.log(sld)
            const dod2=sld.querySelector('.h5')
            const dod5=sld.querySelector('.h6')
            const dod3=sld.querySelector('.dod1')
            let dod4=dod3.querySelectorAll('div')
            let f=0;
            let f1=3

            dod2.onclick=function(){
            for(let i of dod4){
            i.style.display="none";}    
            dod4[f].style.display="flex";
            f++; 
            if(f==dod4.length){
            f=0}}
        
            dod5.onclick=function(){
            for(let i of dod4){
            i.style.display="none";}    
            dod4[f1].style.display="flex";
            f1--; 
            if(f1<0){
            f1=3}}
            /* конец вставки для слайдера в модалке*/

            let zkr=document.querySelector("[data-zkr='"+btn+"']");
            zkr.addEventListener('click',function(){
                windov.style.display='none';
            })
            document.onclick = event =>{
            if(event.target.classList.contains('mod1')){
            windov.style.display="none";
        }
    }
  }  )}}
modal();
/*КОНЕЦ ФУНКЦИИ ДЛЯ МОДАЛЬНОГО ОКНА */


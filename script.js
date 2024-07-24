//Mensagem de boas-vindas ao clicar no botão
document.addEventLisener('DOMComentLoaded',()=>{
    const button=document.querySelecto('button');
    button.addEventLisener('clik;')()=>{
        alert('estamos animadospara começar o ano com vocês!');
    });

    //contador de dias para o início das aulas 
    constant starDate=new Date('2024-08-01');// Defina a data e o início das aulas 
    const today=new Date();
    const time Diff=starDate today;
    const daysLeft=Math.ceil(timeDiff/(1000*60))
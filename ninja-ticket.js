



const firstTicketPlus = document.getElementById('plus').addEventListener('click', function(){
    ticketCounte( true);
});

const firstTicketMinus = document.getElementById('minus').addEventListener('click', function(){
    ticketCounte( false);
})


function ticketCounte( Incress){
    const counte = document.getElementById('counte');
    const countNumber = parseInt(counte.value);

   let counteValue = countNumber;
   if(Incress == true){
       counteValue = countNumber + 1;
   }
   if(Incress == false && counteValue > 0){
       counteValue = countNumber - 1;
   }
    counte.value = counteValue; 
  
    calculatorTicket();
}


const economyTicketPlus = document.getElementById('incress').addEventListener('click', function(){
    ticketCount(true);
});
const economyTicketMinus = document.getElementById('dicress').addEventListener('click', function(){
    ticketCount(false);
});


function ticketCount(Incress){
    const counte = document.getElementById('Counte');
    const countNumber = parseInt(counte.value);

   let counteValue = countNumber;
   if(Incress == true){
       counteValue = countNumber + 1;
   }
   if(Incress == false && counteValue > 0){
       counteValue = countNumber - 1;
   }
    counte.value = counteValue; 

    calculatorTicket();
}


function calculatorTicket(){
    const firstCounte = document.getElementById('counte');
    const firstCountNumber = parseInt(firstCounte.value);

    const economyCounte = document.getElementById('Counte');
    const economyCountNumber = parseInt(economyCounte.value)

    const totalTicketAmount = firstCountNumber*150 + economyCountNumber*100 ;
    document.getElementById('subTotal').innerText = totalTicketAmount;


    const tax = Math.round(totalTicketAmount*0.10);
    document.getElementById('tax').innerText = tax;

    const Total = totalTicketAmount + tax;
    document.getElementById('Total').innerText = Total;
}

//----------------------------------------After-Book-------------------------------------

const book = document.getElementById('book').addEventListener('click', function(){
    const body = document.getElementById('body');
    body.style.display = 'none';


    const afterBook = document.getElementById('main');
    afterBook.style.display = 'block';



    const BookCounte = document.getElementById('counte');
    const firstCountNumber = parseInt(BookCounte.value);


    const bookCounte = document.getElementById('Counte');
    const economyCountNumber = parseInt(bookCounte.value)


    const totalBook = firstCountNumber + economyCountNumber;


    document.getElementById('tickets').innerText =  totalBook;


    const totalAmountBook = firstCountNumber*150 + economyCountNumber*100;
    const totalTax =  Math.round(totalAmountBook*0.10);
    const cashAmount = totalAmountBook + totalTax;
    document.getElementById('ticketTaka').innerText = cashAmount;

});



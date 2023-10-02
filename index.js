let panel = JSON.parse( localStorage.getItem('panel'))||
{
    wins : 0,
    losses : 0,
    Tie : 0
};
    //  if (panel === null){
    //   panel =    {
            
    //  wins : 0,
    //  losses : 0,
    //  Tie : 0
 
    //     };
    // }
upd_panel();

document.querySelector('.r-btn').addEventListener('click',() =>{
    rslt('rock');
});
document.querySelector('.p-btn').addEventListener('click',() =>{
    rslt('paper');
});document.querySelector('.s-btn').addEventListener('click',() =>{
    rslt('scissors');
});


document.body.addEventListener('keydown',(event) =>{
    if(event.key === 'r'){
        rslt('rock');
    }
    else if(event.key === 'p'){
        rslt('paper');
    }
    else if (event.key=== 's'){
        rslt('scissors');
    }
});

document.querySelector('.panel-box-btn').addEventListener('click',()=>{
    panel.wins =0;
    panel.losses =0;
    panel.Tie =0;
    localStorage.removeItem('panel')
    upd_panel();
});

document.querySelector('.autoplay').addEventListener('click',()=>{
    autoplay();
});



let chance =true;
let isplay;
function autoplay(){
    
    if(chance){
     isplay =  setInterval(() => {
            const cosplay = complay();
            rslt(cosplay)
        } 
    ,1000);
         chance = false;
    } 
    else{
        clearInterval(isplay);
        chance = true;
    }


}

function complay(){
const randomno= Math.random();
    let computerplay='';
        if(randomno>= 0 && randomno < 1/3)
        {
            computerplay = 'rock'; 
        }
        else if(randomno>= 1/3 && randomno < 2/3)
        {
            computerplay = 'paper';
        }
        else if (randomno>= 2/3 && randomno < 1)
        {
            computerplay = 'scissors';
        }
                return computerplay;
            }

function rslt(cosplay){
    let computerplay =  complay()
    let result='';
        if(cosplay==='rock'){
            if (computerplay ==='rock')
            {
                result='tie';
            }
            else if (computerplay ==='paper')
            {
                result ='lose';
            }
            else if(computerplay === 'scissors')
            result ='win'
            }
        else if(cosplay==='paper'){
            if (computerplay ==='rock')
            {
            result='win';
            }
            else if (computerplay ==='paper')
            {
            result ='tie';
            }
            else if(computerplay === 'scissors')
            result ='lose'
                }
        else{
            if (computerplay ==='rock')
            {
            result='lose';
            }
            else if (computerplay ==='paper')
            {
            result ='win';
            }
            else if(computerplay === 'scissors')
            result ='tie'
                }

                if(result==='win'){
                    panel.wins +=1;
                }
                else if(result ==='lose'){
                    panel.losses +=1;
                }
                else if(result==='tie'){
                    panel.Tie += 1;
                }
                localStorage.setItem('panel',JSON.stringify(panel));

                upd_panel();

    // alert(`${cosplay},${computerplay}. ${result}
    // wins ${panel.wins},losses ${panel.losses},Tie ${panel.Tie}`);
    document.querySelector('.res')
        .innerHTML=result;
    document.querySelector('.play')
        .innerHTML =`You <img src="./images/${cosplay}.png" class="panel-icon">Computer<img src="./images/${computerplay}.png" class="panel-icon">`;
 }

 function upd_panel(){
    document.querySelector('.p-panel').
        innerHTML = `wins ${panel.wins}  losses ${panel.losses}  Tie ${panel.Tie}`;
}

    
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

    alert(`${cosplay},${computerplay}. ${result}
    wins ${panel.wins},losses ${panel.losses},Tie ${panel.Tie}`);
 }

 function upd_panel(){
    document.querySelector('.p-panel')
        .innerHTML = `wins ${panel.wins},losses ${panel.losses},Tie ${panel.Tie}`;
}

let board = [
    ['00', '02', '10', '12', '22', '31'],
    ['10', '20', '11', '12', '22', '13'],
    ['33', '11', '12', '00', '10', '23'],
    ['33', '23', '32', '01', '11', '12'],
    ['00', '02', '10', '12', '22', '31'],
    ['10', '23', '31', '33', '11', '22'],
    ['02', '03', '01', '30', '31', '32'],
    ['03', '12', '21', '30', '31', '32'],
    ['00', '21', '12', '03', '13', '23'],
    ['01', '12', '23', '32', '21', '33']
]
const $buttonContainer=document.getElementsByClassName('buttonContainer')[0];
const $interval=document.getElementById('interval');
const $message=document.getElementById('message');
const $playAgain=document.getElementsByClassName('playAgain')[0];
let elements;

function changeColor(color){
    const $rows = document.getElementsByClassName('row');
    for (let i = 0; i < $rows.length; i++) {
        for(let j=0;j<$rows[i].children.length;j++){
            if(elements.includes($rows[i].children[j].id)){
                $rows[i].children[j].style.backgroundColor=color;
            }
        }
    }
}
function compare(result){
    for(let i=0;i<elements.length;i++){
        if(!result.includes(elements[i]))
            return false;
    }
    return true;
}
function gameOn(){
    let result=[];
    $buttonContainer.addEventListener('click',(e)=>{
        if(result.length>=6 || e.target.tagName!=='BUTTON' || result.includes(e.target.id) || e.target.className==='playAgain'){
            return;
        }
        result.push(e.target.id)
        if(result.length===6){
            if(compare(result)){
                $message.innerText='You win';
            }else{
                $message.innerText='You lose'
            }
        }
    });
}
function start() {
    elements = board[Math.floor(Math.random() * 10)];
    changeColor('black');

    setTimeout(()=>{
        changeColor('beige');
        gameOn();
    },5*1000);

    const interval=setInterval(()=>{
        $interval.innerText-=1;
        if($interval.innerText<='0'){
            clearInterval(interval);
        }
    },1000);

}

$playAgain.addEventListener('click',(e)=>{
    $interval.innerText=5;
    $message.innerText="";
    start();
});

start();

let Keywords = [
    "Lewis Hamilton",
    "Max Verstappen",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = Keywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = "";
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick =selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    console.log("test");
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}
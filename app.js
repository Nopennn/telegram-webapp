let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

window.onload=function(){
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    if (btn1 == null) {
        console.log("We have a problem")
    }
    btn1.addEventListener("click", function(){
        console.log("Click1")
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 1!");
            item = "1";
            tg.MainButton.show();
        }
        btn1.style.visibility = "hidden"
    });

    btn2.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 2!");
            item = "2";
            tg.MainButton.show();
        }
    });

    btn3.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 3!");
            item = "3";
            tg.MainButton.show();
        }
    });

    btn4.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 4!");
            item = "4";
            tg.MainButton.show();
        }
    });

    btn5.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 5!");
            item = "5";
            tg.MainButton.show();
        }
    });

    btn6.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 6!");
            item = "6";
            tg.MainButton.show();
        }
    });
}






Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('sort')); // price_descending


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `Имя ${tg.initDataUnsafe.user.first_name}
фамилия ${tg.initDataUnsafe.user.last_name} `;

usercard.appendChild(p);
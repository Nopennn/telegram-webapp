let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

window.onload=function(){
    let item1 = 0;
    let item2 = 0;
    let item3 = 0;
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let add1 = document.getElementById("add1");
    let add2 = document.getElementById("add2");
    let add3 = document.getElementById("add3");
    let btnsubmit = document.getElementById("btnsubmit");
    if (btn1 == null) {
        console.log("We have a problem")
    }
    // btn1.addEventListener("click", function(){
    //     console.log("Click1")
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 1!");
    //         item = "1";
    //         tg.MainButton.show();
    //     }
    //     btn1.style.visibility = "hidden"
    // });
    //
    // btn2.addEventListener("click", function(){
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 2!");
    //         item = "2";
    //         tg.MainButton.show();
    //     }
    // });
    //
    // btn3.addEventListener("click", function(){
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 3!");
    //         item = "3";
    //         tg.MainButton.show();
    //     }
    // });
    //
    // btn4.addEventListener("click", function(){
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 4!");
    //         item = "4";
    //         tg.MainButton.show();
    //     }
    // });
    //
    // btn5.addEventListener("click", function(){
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 5!");
    //         item = "5";
    //         tg.MainButton.show();
    //     }
    // });
    //
    // btn6.addEventListener("click", function(){
    //     if (tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     }
    //     else {
    //         tg.MainButton.setText("Вы выбрали товар 6!");
    //         item = "6";
    //         tg.MainButton.show();
    //     }
    // });

    add1.addEventListener("click", function(){
        item1++;
        tg.MainButton.setText("Вы добавили товар 1!");
        tg.MainButton.show();
    });

    add2.addEventListener("click", function(){
        item2++;
        tg.MainButton.setText("Вы добавили товар 2!");
        tg.MainButton.show();
    });

    add3.addEventListener("click", function(){
        item3++;
        tg.MainButton.setText("Вы добавили товар 3!");
        tg.MainButton.show();
    });

    btnsubmit.addEventListener("click", function(){
        // let url = `https://chatter.salebot.pro/api/6554424364:AAG-4y8RpccZR71K8KAb_z0GCoFmUEVr94U/message?message=first ${item1} second ${item2} third ${item3}`
        let clientId = searchParams.get('id')
        let message = `Первый товар: ${item1} штук\nВторой товар: ${item2} штук\nТретий товар: ${item3} штук\n`
        let url = `https://chatter.salebot.pro/api/8dd2462fba9fe8d37202a4f99c16a577/message?message=${message}&client_id=${clientId}`
        tg.MainButton.setText("Отправка в бота.....");
        tg.MainButton.show();
        fetch(url).then(function(response) {
            console.log(response)
            tg.MainButton.setText("Готово!");
            tg.MainButton.show();
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    });





    let usercard = document.getElementById("usercard");
    if (usercard == null) {
        console.log("No usercard found")
    }

    let p = document.createElement("p");

    p.innerText = `Ваше имя: ${searchParams.get('name')}\nВаш номер: ${searchParams.get('phone')}`;

    usercard.appendChild(p);
}






Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get('sort')); // price_descending



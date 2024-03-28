let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';





window.onload=function(){
    let item1, item2, item3, item4, item5, item6;
    item1 = item2 = item3 = item4 = item5 = item6 = 0
    let item1Amount = document.getElementById("item1_amount")
    let item2Amount = document.getElementById("item2_amount")
    let item3Amount = document.getElementById("item3_amount")
    let item4Amount = document.getElementById("item4_amount")
    let item5Amount = document.getElementById("item5_amount")
    let item6Amount = document.getElementById("item6_amount")
    item1Amount.innerText = `${item1}`;
    item2Amount.innerText = `${item2}`;
    item3Amount.innerText = `${item3}`;
    item4Amount.innerText = `${item4}`;
    item5Amount.innerText = `${item5}`;
    item6Amount.innerText = `${item6}`;

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");

    let add1 = document.getElementById("add-btn1");
    let add2 = document.getElementById("add-btn2");
    let add3 = document.getElementById("add-btn3");
    let add4 = document.getElementById("add-btn4");
    let add5 = document.getElementById("add-btn5");
    let add6 = document.getElementById("add-btn6");

    let sub1 = document.getElementById("sub-btn1");
    let sub2 = document.getElementById("sub-btn2");
    let sub3 = document.getElementById("sub-btn3");
    let sub4 = document.getElementById("sub-btn4");
    let sub5 = document.getElementById("sub-btn5");
    let sub6 = document.getElementById("sub-btn6");
    let btnsubmit = document.getElementById("btnsubmit");
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
            item1 = 1;
            item1Amount.innerText = `${item1}`;
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
            item2 = 1;
            item2Amount.innerText = `${item2}`;
            tg.MainButton.show();
        }
        btn2.style.visibility = "hidden"
    });

    btn3.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 3!");
            item3 = 1;
            item3Amount.innerText = `${item3}`;
            tg.MainButton.show();
        }
        btn3.style.visibility = "hidden"
    });

    btn4.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 4!");
            item4 = 1;
            item4Amount.innerText = `${item4}`;
            tg.MainButton.show();
        }
        btn4.style.visibility = "hidden"
    });

    btn5.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 5!");
            item5 = 1;
            item5Amount.innerText = `${item5}`;
            tg.MainButton.show();
        }
        btn5.style.visibility = "hidden"
    });

    btn6.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.setText("Вы выбрали товар 6!");
            item6 = 1;
            item6Amount.innerText = `${item6}`;
            tg.MainButton.show();
        }
        btn6.style.visibility = "hidden"
    });

    add1.addEventListener("click", function(){
        item1++;
        item1Amount.innerText = `${item1}`;
        tg.MainButton.setText("Вы добавили товар 1!");
        tg.MainButton.show();
    });

    add2.addEventListener("click", function(){
        item2++;
        item2Amount.innerText = `${item2}`;
        tg.MainButton.setText("Вы добавили товар 2!");
        tg.MainButton.show();
    });

    add3.addEventListener("click", function(){
        item3++;
        item3Amount.innerText = `${item3}`;
        tg.MainButton.setText("Вы добавили товар 3!");
        tg.MainButton.show();
    });

    add4.addEventListener("click", function(){
        item4++;
        item4Amount.innerText = `${item4}`;
        tg.MainButton.setText("Вы добавили товар 4!");
        tg.MainButton.show();
    });

    add5.addEventListener("click", function(){
        item5++;
        item5Amount.innerText = `${item5}`;
        tg.MainButton.setText("Вы добавили товар 5!");
        tg.MainButton.show();
    });

    add6.addEventListener("click", function(){
        item6++;
        item6Amount.innerText = `${item6}`;
        tg.MainButton.setText("Вы добавили товар 6!");
        tg.MainButton.show();
    });

    sub1.addEventListener("click", function(){
        item1--;
        item1Amount.innerText = `${item1}`;
        tg.MainButton.setText("Вы убрали товар 1!");
        tg.MainButton.show();
    });

    sub2.addEventListener("click", function(){
        item2--;
        item2Amount.innerText = `${item2}`;
        tg.MainButton.setText("Вы убрали товар 2!");
        tg.MainButton.show();
    });

    sub3.addEventListener("click", function(){
        item3--;
        item3Amount.innerText = `${item3}`;
        tg.MainButton.setText("Вы убрали товар 3!");
        tg.MainButton.show();
    });

    sub4.addEventListener("click", function(){
        item4--;
        item4Amount.innerText = `${item4}`;
        tg.MainButton.setText("Вы убрали товар 4!");
        tg.MainButton.show();
    });

    sub5.addEventListener("click", function(){
        item5--;
        item5Amount.innerText = `${item5}`;
        tg.MainButton.setText("Вы убрали товар 5!");
        tg.MainButton.show();
    });

    sub6.addEventListener("click", function(){
        item6--;
        item6Amount.innerText = `${item6}`;
        tg.MainButton.setText("Вы убрали товар 6!");
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



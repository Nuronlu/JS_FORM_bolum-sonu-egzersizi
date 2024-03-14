// FORMLARLA CALISMAK: Bolum Sonu Egzersizi

/*
1: Formu Sec
2: Input Bilgisini UL icerisine Ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar
*/

// bilgilere ulasmak icin:
let userFormDOM = document.querySelector('#userForm');
// bilgiyi aldiktan sonra userForm'un event listener kismina submit islemi uyguluyoruz:
userFormDOM.addEventListener('submit', formHandler)

// asagida ekledigimiz ALERT'i HATALI GIRIS OLDUGUNDA ekrana cikarmak icin once asagidaki sekilde veriyi girip sonra formHandler fonksiyonundaki ELSE kismina isliyoruz:
const alertDOM = document.querySelector('#alert')

// index kismindaki ALERT id'li div'e iliskin STATIK OLARAK GETIRME ISLEMI-buradaki alert sablonunu bootstrap'teki alerts>dismissing kismindan aliyoruz-ayrica arrow functionla bunu bir fonksiyon haline getiriyoruz (ALERT bir deger alacak, arrow function ile bu deger geri donecek):
const alertFunction = (message) => `
    <div class="alert alert-warning" role="alert"> ${message} Hatali giris!
    </div>
`
// index kismindaki ALERT id'li div'e iliskin DINAMIK OLARAK GETIRME ISLEMI:


// sonra ilk fonksiyonumuzu hazirliyoruz VE BU FONKSIYONLA BILGILERI ALIYORUZ:
function formHandler(event) {
    // fonksiyonumuzun icine event ekleyerek sonrasinda onu gizli default hale getiriyoruz:
    event.preventDefault();
    // sonrasinda const ile birlikte querySelevtor kullanarak index'teki ilk bilgiyi id'si ile aliyoruz:
    const USER_NAME = document.querySelector('#userName')
    //ikinci bilgiyi de ayni sekilde aliyoruz:
    const SCORE = document.querySelector('#score')
    // NOT: bunu yaparken let yerine const(yani degistirilemez veri) girdigimiz icin adini buyuk harflerle tanimlamayi unutmuyoruz.

    // hem USER_NAME'in hem de SCORE'un VALUE'su varsa calissin istiyoruz, diger durumda "hatali giris" uyarisi versin:
    if (USER_NAME.value && SCORE.value) {
        // => (arrow function) ile hazirladigimiz veriyi bu fonksiyon alanina aliyoruz:
        addItem(USER_NAME.value, SCORE.value);
        // gonder'e bastiktan sonra USER_NAME ve SCORE kisimlarinin sifirlanmasi icin sunu yapiyoruz:
        USER_NAME.value=""; 
        SCORE.value="";
    } else {
        alertDOM.innerHTML = alertFunction ("Hatali giris!");
        // console.log("hatali giris!")
    }
}


// ikinci fonksiyonumuzu hazirliyoruz VE BU FONKSIYONLA DEGERLERI(VALUE) EKLIYORUZ:
// once index'te listeyle ilgili kisimda ul icinde userList diye id tanimladik ve simdi burada once o id'yi aliyoruz:
let userListDOM=document.querySelector('#userList')


// NOT: FUNCTION yerine ARROW FUNCTION(=>) ile de yapabiliriz:
    //     *****1.YONTEM*****function***** ile yaparsak:
    //     function addItem(userName, score) {
    //     ...    
    //     }

    //     *****2.YONTEM*****=>***** ile yaparsak:
    //     const addItem = (userName, score) => {
    //     ...
    //     }



// *****1.YONTEM*****
// function addItem(userName, score) {
//     // buraya once create ile "li" adinda bir oge ekleyecegiz, 
//     let liDOM=document.createElement('li')
// // sonra innerHTML ile, yukarda olusturdugumuz liDOM icine ternary(`${}`) yapisi kullanarak oge ekliyoruz. score bilgisini index kismindaki listeyle ilgili olan span ozelligi icinde eklememiz gerekiyor:
// liDOM.innerHTML=`${userName} 
//      <span class="badge badge-primary badge-pill">${score}</span>`
// // sonra class secenekleri ekliyoruz (class niteliklerine index kismindan bakabilirsin):
// liDOM.classList.add(
//     'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
// )
//     // sonra bu innetHTML ile ekledigimiz bilgilerin ul'nin neresine gelecegini soyleyecegiz:
//     userListDOM.append(liDOM)
// }


    
// *****2.YONTEM*****
const addItem = (userName, score) => {
    // buraya once create ile "li" adinda bir oge ekleyecegiz, 
    let liDOM=document.createElement('li');
    // sonra innerHTML ile, yukarda olusturdugumuz liDOM icine ternary(`${}`) yapisi kullanarak oge ekliyoruz. score bilgisini index kismindaki listeyle ilgili olan span ozelligi icinde eklememiz gerekiyor:
    liDOM.innerHTML=`${userName} 
        <span class="badge badge-primary badge-pill">${score}</span>`;
    // sonra class secenekleri ekliyoruz (class niteliklerine index kismindan bakabilirsin):
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    );
    // sonra bu innetHTML ile ekledigimiz bilgilerin ul'nin neresine gelecegini soyleyecegiz:
    userListDOM.append(liDOM);
}

// Bundan sonra "addItem'i iceri ekliyoruz(15.satirdaki 'function formHandler(event)' kisminda yani."



function main_menu () {
    
    

    let arr_main_name_food = ["Крылышки Баффало","Кордон Блю","Голень фаршированная",
    "Циплята-табака","Куриные кармашки","Курочка Ряба",
    "Шашлык из филе индейки","Филе куриное","Филе куриное с апельсином",
    "Курица по-дижонски"];
    let arr_price_food = [200,400,250,500,500,1000,480,400,430,430];
    var arr_gramm = [150,200,150,300,220,1000,300,220,220,220 ]; 
    let arr_about_food = {
        about0 : "Куринные крылышки в остром соусе",
        about1 : "Рулет из красного мяса курицы, грибы и сыр",
        about2 : "Голень фаршированная с грибами,сыром и зеленью",
        about3 : "Циплята-табака",
        about4 : "Филе курицы, грибы, овощисыр, зелень",
        about5 : "Тушка курицы, чесночный соус,специи, запеченная до хрустящей корочки",
        about6 : "Филе индейки под соусоб Барбекю, с лукои в лаваше",
        about7 : "Филе куриное в панировке с помидором, сыром",
        about8: "Филе куриное с апельсином",
        about9 : "Филе курицы, горчично-сливочный соус и сыр"
    };

     var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
             
    if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                deleteAll.remove(); 
                
                     } 
                } 
            }

    else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
            if (index>main.length) {
            var main2= document.getElementById("col_food_option_1");
            var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
            main2.innerHTML =  main2.innerHTML + str;   
                } 
                console.log (main2);
                    }
                        }
                            }  

        removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
       
            let count = 0;
            document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
            document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
            // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
            Object.keys(arr_about_food).forEach(function(key) {
        if (index==count){
             document.getElementById("about_food_".concat(index)).innerText = this[key];
         }
            count++;
        },  arr_about_food);
             document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
              
        }         
}


function pancakes() {
    

    let arr_main_name_food = ["Блины с маслом","Блины со сметаной","Блины с творожной массой","Блины со сгущенным молоком",
    "Блины с вареной сгущенкой","Блины 'Яблоко'","Блины 'Негретенок'","Блин 'День и Ночь'","Блины с вареной сгущенкой + орех","Блины с красной икрой",
    "Блины с ветчиной и сыром", "Блины с курицей и грибами", "Блин 'Сэндвич'","Блин 'Мясоед'" ,"Блин 'Мясоед деревенский'", "Блины с ананасом", "Блин с медом"];
    let arr_price_food = [45 , 55 ,55 ,50 ,50 ,75 ,70 ,75 ,70,190, 85, 95, 90, 105, 110, 110, 65];
    var arr_gramm = [150, 200, 200, 200, 200, 200, 200, 200, 200,200, 200, 200, 200, 200, 200, 200, 200,]; 
    let arr_about_food = {
        about0 : "Блины с маслом",
        about1 : "Блины со сметаной",
        about2 : "Блины с творожной массой",
        about3 : "Блины со сгущенным молоком",
        about4 : "Блины с вареной сгущенкой",
        about5 : "Блины 'Яблоко' с карамелью",
        about6 : "Блины 'Негретенок'",
        about7 : "Блин 'День и Ночь' ",
        about8 : "Блины с вареной сгущенкой + орех",
        about9 : "Блины с красной икрой",
        about10: "Блины с ветчиной и сыром",
        about11 : "Блины с курицей и грибами",
        about12 : "Блины с ветчиной, сыром, свежим помидором",
        about13 : "Блины со свининой, луком, морковью,болгарским перцем",
        about14 : "Блины с грибами",
        about15 : "Блины с курицей ананасом и сыром",
        about16 : "Блин с медом ",
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
       
            
    if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
            var deleteAll = document.getElementById("options".concat(index+1));
            deleteAll.remove(); 
                     } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                        } 
                     }
                        }
                              }  
 
    removePAge();
    for (let index = 0; index < arr_main_name_food.length; index++) {
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
          
    }                      
}

function dessert() {
    
    let arr_main_name_food = ["Апельсинчик-витаминчик","Фунтик","Мечта"];
    let arr_price_food = [250 , 250 , 250];
    var arr_gramm = [155, 150, 150]; 
    let arr_about_food = {
        about0 : "Фрукты и йогурт",
        about1 : "Фрукты и мороженое",
        about2 : "Фрукты, мороженое и взбитые сливки", 
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


        function removePAge() {
                
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                deleteAll.remove(); 
               
                    } 
                } 
            }

            else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
                for (let index = 0; index <= arr_main_name_food.length; index++){
                     if (index>main.length) {
                        var main2= document.getElementById("col_food_option_1");
                        var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                        main2.innerHTML =  main2.innerHTML + str;
                        
                    } 
                         }
                             }
                                  }  

        
        removePAge();


        for (let index = 0; index < arr_main_name_food.length; index++) {
       
            let count = 0;
            document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
            document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
            // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
            Object.keys(arr_about_food).forEach(function(key) {
        if (index==count){
             document.getElementById("about_food_".concat(index)).innerText = this[key];
         }
            count++;
        },  arr_about_food);
             document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
         

         
             
        }         
       
    
}

function dead_menu () {
  
    let arr_main_name_food = ["Поминальный обед стандарт"];
    let arr_price_food = [400];
    var arr_gramm = [500]; 
    let arr_about_food = {
        about0 : "Комплект поминального обеда, меню уточняйте у менеджера кафе"  
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


    function removePAge() {
            
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                 deleteAll.remove(); 
                         } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                } 
                     }
                         }
                              }  

    
    removePAge();


    for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб/чел";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
     

     
         
    }         
   
}

function pork_menu() {
    
    let arr_main_name_food = ["Палермо","Ришелье","Тропиканка",
    "Мясное раздолье","Мясо по-французски","Шашлык классический","Жаркое по- домашнему",
    "Манты по-сибирски"];
    let arr_price_food = [400,440,440,400,500,440,500,350];
    var arr_gramm = [220, 220, 220, 200, 400, 250, 450, 230 ]; 
    let arr_about_food = {
        about0 : "Запеченное мясо, сыр. помидор",
        about1 : "Запеченное мясо, сыр, лук, шампиньоны",
        about2 : "Мясо, запеченное с сыром, ананасом",
        about3 : "Классическое жаркое из свинины, нежный соус, шампиньоны",
        about4 : "Свиная вырезка, картофель,лук, сыр",
        about5 : "Шашлык классический",
        about6 : "Блюдо в горшочке.Мясо, картофель, грибы, овощи, сыр",
        about7 : "Манты по-сибирски 3шт",
        
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


    function removePAge() {
       
            
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                 deleteAll.remove(); 
                         } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                } 
                     }
                         }
                              }  

    
    removePAge();


    for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
     

     
         
    }         
        
    
}

function seafood_menu() {
    
    let arr_main_name_food = ["Семга по-фински","Горбуша по -французски","Горбуша по-царски",
    "Кальмар"];
    let arr_price_food = [600,400,1440,400];
    var arr_gramm = [220, 220, 1000, 225]; 
    let arr_about_food = {
        about0 : "Филе семги запеченное с овощами и сыром",
        about1 : "Филе горбуши запеченное с овощами и сыром",
        about2 : "Горбуша фаршированная овощами, сыром грибами и гр.орехом",
        about3 : "Кальмар под нежным соусом, фаршированный овощами и сыром.",
        
        
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


    function removePAge() {
            
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                 deleteAll.remove(); 
                         } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                } 
                     }
                         }
                              }  

    
    removePAge();

    for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
     

     
         
    }         
        
    
}

function ram_menu() {
    
    let arr_main_name_food = ["Жаркое из баранины","Шашлык"];
    let arr_price_food = [550,500];
    var arr_gramm = [220, 300]; 
    let arr_about_food = {
        about0 : "Жаркое из баранины в сливочном соусе с шампиньонами и овощами",
        about1 : "Шашалык на кости с маринованным луком и соусом",
         
        
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


    function removePAge() {
       
            
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                 deleteAll.remove(); 
                         } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                } 
                     }
                         }
                              }  

    
    removePAge();

    for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
     

     
         
    }         
        
    
}

function beef_menu() {
    
    let arr_main_name_food = ["Ростбиф по-венгерски","Жаркое из говядины",
    "Язык по - гасконски","Говядина в кисло-сладком соусе"];
    let arr_price_food = [550,450,550,550];
    var arr_gramm = [220, 220,180,220]; 
    let arr_about_food = {
        about0 : "Говядина с черносливом, кедровым орехом и сливочный соусом",
        about1 : "Говядина в сливочном соусом и шампиньонами",
        about2 : "Отварной гов. язык запеченный с чесноком под сырной шапкой",
        about3 : "Говядина с черносливом и клюквой от шефа",
        
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
       
            
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function coldeat_menu() {
    
    let arr_main_name_food = ["Рыбное удовольствие","Селедочка под водочку",
    "Плато мясное","Язык отварной",
    "Сальцо","Сырный фестиваль",
    "Домашние разносолы",
    "Овощное раздолье","Фруктовая тарелка",
    "Заливное #1","Заливное #2",
    "Рулет куриный","Лимонная нарезка"];
    
    let arr_price_food = [500,400,500,550 ,300,600,300,500,600,550,400,500,300];
    var arr_gramm = [200,300,250,160 ,100,305,300,300,500,300,300,300,250]; 
    let arr_about_food = {
        about0 : "Рыбное ассорти из 3 видов копченой рыбы",
        about1 : "Пряная сельдь, отварной картофель и маринованный лук",
        about2 : "Карбонат, грудинка, колбаса п\к, с\к",
        about3 : "Язык отварной с пряностями и горчицей",
        about4 : "Сальцо",
        about5 : "4 вида сыра с орехами и медом",
        about6 : "Домашние разносолы",
        about7 : "Ассорти из свежих вощей",
        about8 : "Ассорти по сезону",
        about9 : "Заливное из языка с горчицей",
        about10 : "Заливное из курицы с горчицей",
        about11 : "Куриное мясо с грибами, морковбю, маслом и луком",
        about12 : "Лимон, оливки"    
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
       
    
            
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function sandwich_menu() {
    
    let arr_main_name_food = ["Брускетта с помидором","Брускетта с рыбкой",
    "Брускетта с красной икрой","Тарталетки",
    "Профитроли","Канапе в ассортименте",
    "Яйца фаршированные",
    "Помидор фаршированный","Помидор с сыром"];
    
    let arr_price_food = [80,100,130,130 ,120,70,70,80,90];
    var arr_gramm = [50,50,50,40 ,50,50,80,80,80]; 
    let arr_about_food = {
        about0 : "Брускетта с помидором (сыр, чеснок, оливка, зелень)",
        about1 : "Брускетта с рыбкой ",
        about2 : "Брускетта с красной икрой, сл. маслм и киви",
        about3 : "Тарталетки с красной икрой и сл. маслом",
        about4 : "Профитроли с красной рыбкой, мягким сыром, зеленью",
        about5 : "Канапе в ассортименте",
        about6 : "Яйца фаршированные (сельдь слабосоленая, лук, зелень, сл. масло, майонез)",
        about7 : "Помидор фаршированный (яйцо, зеленый лук, майонез)",
        about8 : "Помидор с сыром (чеснок, сладкий перец, маслины, зелень, майонез)"    
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
       
  
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function salad_menu() {
    
    let arr_main_name_food = ["Салат-коктейль с курицей","Ярославна",
    "Подарок","Неженка",
    "Лакомка","Цезарь",
    "Арбузная долька",
    "Греческий","Царский","Наслаждение",
    "Морской бриз",
    "Русалочка","Орхидея",
    "Мужской каприз","Алиса",
    "Новогодний цветок","Оливье","Тбилиси",
    "Апельсин","От Тиффани",
    "Обжорка","Венеция",
    "Кавказкий с фасолью","Гнезда"];
    
    let arr_price_food = [200,240,200,180 ,200,200,200,240,250,220,220,220,200,240 ,240,220,200,220,200,220,200,190,200,220,220];
    var arr_gramm = [150,150,150,150 ,150,150,150,150,150,150,150,150,150,150 ,150,150,150,150,150,150,150,150,150,150,150]; 
    let arr_about_food = {
        about0 : "Курица отварная, огурец св., яйцо, чернослив, грецкий орех, майонез",
        about1 : "Язык отварной, грибы, яйцо, св. огурец, зел.горошек, грецкий орех, майонез",
        about2 : "Ветчина, ананас, кукуруза, помидор, св. огурец, маслины, чеснок, майонез",
        about3 : "Ветчина, яйцо, сыр, св. огурец, майонез",
        about4 : "Курица копч, яйцо, сыр, св. огурец, картофель и майонез",
        about5 : "Филе курицы, сыр, св. помидор, листья салата, сухарики , зелень, яйцо, соус",
        about6 : "Курица копч, сыр, св. помидор, огурец, маслины, яйцо, майонез",
        about7 : "Маслины ,св. помидор, св. огурец, сл. перец, листья салата, сыр, оливковое масло",
        about8 : "Кальмары, крабовое мясо, сыр, яйцо, креветки, чеснок, икра лосося, майонез",  
        about9 : "Кальмары, яйцо, сыр, св. огурец, чеснок,майонез",
        about10 : "Кальмары, яйцо, сыр, лук маринованный, зел. горошек",
        about11 : "Кальмары, св. помидор,сыр, сухарики",
        about12 : "Печень говяжья, морковь по-корейски, лук маринованный,зерна граната, майонез)",
        about13 : "Говядина отварная, сыр, яйцо, огурец.маринов, чеснок",
        about14 : "Говядина отварная, грибы, лук маринов, яичные блинчики, майонез",
        about15 : "Мясо отварное, яйцо, маринов.грибы, сыр, маринов. огурец, грецкий орех, майонез",
        about16 : "Оливье с отварным мясом",
        about17 : "Мясо отварное, перец сладкий,фасоль консервир., грецкий орех,бальзамический уксус ",  
        about18 : "Ветчина, морковь-по корейски, яйцо,картофель, св.огурец, грибы маринов., майонез",
        about19 : "Куринное филе, яйцо, сыр, гр.орех, чернослив, виноград, майонез",
        about20 : "Курица копч., морковь по-корейски, яичный блинчик, мякоть апельсина, майонез",
        about21 : "Колбаса п\к, яичный блинчик, лук, морковь,майонез",
        about22 : "Кур.филе, грибы шампиньоны, яйцо, отв.картофель, св.огурец, майонез",
        about23 : "Куринное филе, фасоль, сыр, кукуруза, огурец марин., чеснок, сухарики, соус",
        about24 : "Стручковая фасоль, морковь по-корейски, отварное филе, шампиньоны жареные, майонез"       
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
       
   
            
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function garnish_menu() {
    
    let arr_main_name_food = ["Картофельное пюре","Картофельное пюре запеченное",
    "Картофель запеченный","Картофель отварной",
    "Картофель фри","Картофель по-деревенски",
    "Ризотто","Соте",
    "Соусы"];
    let arr_price_food = [150,160,170,150,180,180,160,200,80];
    var arr_gramm = [180, 180,180,180,150,180,180,100,40]; 
    let arr_about_food = {
        about0 : "Картофельное пюре",
        about1 : "Картофельное пюре, запеченное под сыром",
        about2 : "Картофель, запеченный под сыром",
        about3 : "Картофель отварной с зеленью, сл. маслом",
        about4 : "Картофель фри",
        about5 : "Картофель по-деревенски",
        about6 : "Рис с овощами",
        about7 : "Овощи жаренные на масле",
        about8 : "Тар-Тар, чесночный, кетчуп, майонез, овощная добавка"
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
  
            
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function drinks() {
    
    let arr_main_name_food = ["Сок в ассортименте","Морс клюквенный",
    "Минеральная вода"];
    let arr_price_food = [150,200,80];
    var arr_gramm = [1000, 1000,1500]; 
    let arr_about_food = {
        about0 : "Сок в ассортименте",
        about1 : "Морс клюквенный",
        about2 : "Минеральная вода",
        
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');

    function removePAge() {
  
            
     if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
        for (let index = 0; index < main.length; index++){   
        if ( arr_main_name_food.length <= index) {
        var deleteAll = document.getElementById("options".concat(index+1));
        deleteAll.remove(); 
                 
                } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;  
                } 
                     }
                         }
                              }  

    
            removePAge();

        for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";       
        
    }          
}

function dead_menu_vip() {
    
    let arr_main_name_food = ["Солянка или рассольник","Второе на выбор",
    "Салат на выбор","Каша рисовая",
    "Рыба красная","Блин с маслом",
    "Кутья","Рыбная нарезка",
    "Рулет куриный","Нарезки",
    "Фруктовая нарезка","Печенье,",
    "Десерт на выбор","Напитки на выбор",
    "Хлеб"];
    let arr_price_food = [700 , 700 , 700 , 700 ,700 ,700 ,700 ,700 ,700 ,700,700 ,700 ,700 ,700 ,700  ];
    var arr_gramm = [250, 120, 80, 50, 50, 50, 100, 30, 35, 35, 50, 35, 50, 50]; 
    let arr_about_food = {
        about0 : "Солянка или рассольник",
        about1 : "Пюре картофельное",
        about2 : "Гуляш свиной, котлета, зразы с сыром, тефтели",
        about3 : "Салат со свежей капустой, свежие овощи",
        about4 : "Каша рисовая молочная с маслом",
        about5 : "Рыба красная жареная в кляре",
        about6 : "Блин с маслом",
        about7 : "Кутья (рис, изюм, мед)",
        about8:  "Рыбная нарезка",
        about9 : "Рулет куриный (нарезка)",
        about10 : "Нарезки (сыр, колбаса п/к)",
        about11 : "Фруктовая нарезка (яблоки, апельсины)",
        about12 : "Печенье, шоколадные конфеты",
        about13:  "Булочка или зефир в шоколаде",
        about14 : "Сок или компот",
        about15 : "Хлеб (2шт)"
    };

    var main= document.getElementById("col_food_option_1").querySelectorAll('div');


    function removePAge() {
       
  
            
        if (main.length > arr_main_name_food.length ) {  // 10 - main.length  and 5 arr_about_food.length 
            for (let index = 0; index < main.length; index++){   
            if ( arr_main_name_food.length <= index) {
                var deleteAll = document.getElementById("options".concat(index+1));
                 deleteAll.remove(); 
                         } 
            } 
        }

        else if (main.length < arr_main_name_food.length){ // 5 - main.length  and 10 arr_about_food.length 
            for (let index = 0; index <= arr_main_name_food.length; index++){
                 if (index>main.length) {
                    var main2= document.getElementById("col_food_option_1");
                    var str = '<div id="options'+(index)+'" class="options options'+(index)+'"><h2 class="main_name_food" id="main_name_food_'+(index-1)+'"></h2><br><p class="price_food" id="price_food_'+(index-1)+'">руб</p><br><span class="about_food" id="about_food_'+(index-1)+'"><br></span> <span class="gramm" id="gramm_'+(index-1)+'">грамм </span></div>';
                    main2.innerHTML =  main2.innerHTML + str;
                } 
                     }
                         }
                              }  
 
    removePAge();
    for (let index = 0; index < arr_main_name_food.length; index++) {
   
        let count = 0;
        document.getElementById("main_name_food_".concat(index)).innerText =arr_main_name_food[index];
        document.getElementById("price_food_".concat(index)).innerText =arr_price_food[index] + "руб/чел";
        // document.getElementById("about_food_".concat(index)).innerText = arr_about_food.about1.concat(index);
        Object.keys(arr_about_food).forEach(function(key) {
    if (index==count){
         document.getElementById("about_food_".concat(index)).innerText = this[key];
     }
        count++;
    },  arr_about_food);
         document.getElementById("gramm_".concat(index)).innerText = " " + arr_gramm[index]  + " грамм";          
    }         
}




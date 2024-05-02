"use strict";

let SelectedFlower = 0;
let SelectedSort = 0;

let Cell = new Array;
let CellIMG = new Array;
let CellNAME = new Array;
let CellsZone = document.createElement("div");
let OpenedLink = undefined;


let Flowers = [

    { // i=0
        type:[
            { //i=0, j=0
                Name: "Flower Name",
                Sort: "Flower Sort",
                Price: "10 рублей",
                IsSelling: false,
                Description: "Красный, с зелёным стеблем",
                ImgLink: "SRC to picture",
            },
            { //i=0, j=1
                Name: "Сортировка по цветку",
                Sort: "Flower Sort",
                Price: "10 рублей",
                IsSelling: false,
                Description: "Красный, с зелёным стеблем",
                ImgLink: "SRC to picture",
            },
        ]
    },
    { // i=0
        type:[
            { //i=0, j=0
                Name: "Flower Name",
                Sort: "Flower Sort",
                Price: "10 рублей",
                IsSelling: false,
                Description: "Красный, с зелёным стеблем",
                ImgLink: "SRC to picture",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Коралово-красная",
                Price: "10 рублей",
                IsSelling: true,
                Description: "Красного цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B1.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Желтая",
                Price: "8 рублей",
                IsSelling: false,
                Description: "желтого цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B2.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Солнышко",
                Price: "8 рублей",
                IsSelling: true,
                Description: "рыжего цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B3.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Красная-кружева",
                Price: "8 рублей",
                IsSelling: true,
                Description: "бело-красного цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B4.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Блинчик",
                Price: "8 рублей",
                IsSelling: true,
                Description: "желтого цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B5.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Белая-бордо",
                Price: "8 рублей",
                IsSelling: true,
                Description: "белого цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B6.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Белая",
                Price: "8 рублей",
                IsSelling: true,
                Description: "белого цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B7.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Спелое яблоко",
                Price: "8 рублей",
                IsSelling: true,
                Description: "белого цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B8.jpg",
            },
            { //i=0, j=1
                Name: "Бегония",
                Sort: "Лучик",
                Price: "8 рублей",
                IsSelling: true,
                Description: "желтого, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/B9.jpg",
            },
        ]
    },
    { // i=0
        type:[
            { //i=0, j=0
                Name: "Flower Name",
                Sort: "Flower Sort",
                Price: "10 рублей",
                IsSelling: false,
                Description: "Красный, с зелёным стеблем",
                ImgLink: "SRC to picture",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Королевская нежность",
                Price: "10 рублей",
                IsSelling: true,
                Description: "Розового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G2.png",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Резкий пурпур",
                Price: "8 рублей",
                IsSelling: false,
                Description: "фиолетового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G3.jpeg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Фиолетовое царство",
                Price: "8 рублей",
                IsSelling: true,
                Description: "фиолетового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G4.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Розовый тюльпан",
                Price: "8 рублей",
                IsSelling: true,
                Description: "рового цвета, кустовая, тюльпановидная, боится переливаний",
                ImgLink: "../media/G5.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Нежность",
                Price: "8 рублей",
                IsSelling: true,
                Description: "розового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G6.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Розовый выстрел",
                Price: "8 рублей",
                IsSelling: true,
                Description: "розового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G7.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Тьма",
                Price: "8 рублей",
                IsSelling: true,
                Description: "фиолетового цвета, кустовая, боится переливаний",
                ImgLink: "../media/G8.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "Спелое яблоко",
                Price: "8 рублей",
                IsSelling: true,
                Description: "Красного цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/G9.jpg",
            },
            { //i=0, j=1
                Name: "Герань",
                Sort: "нежная розочка",
                Price: "8 рублей",
                IsSelling: true,
                Description: "розового цвета, кустовая, розовидная, боится переливаний",
                ImgLink: "../media/G10.jpg",
            },
        ]
    },
    { // i=0
        type:[
            { //i=0, j=0
                Name: "Flower Name",
                Sort: "Flower Sort",
                Price: "10 рублей",
                IsSelling: false,
                Description: "Красный, с зелёным стеблем",
                ImgLink: "SRC to picture",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Прыск крови",
                Price: "10 рублей",
                IsSelling: true,
                Description: "красного цвета, кустовая, стойкая",
                ImgLink: "../media/P1.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Пурпур",
                Price: "8 рублей",
                IsSelling: false,
                Description: "фиолетового цвета, кустовая, стойкая",
                ImgLink: "../media/P2.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Фиолетовое полотенце",
                Price: "8 рублей",
                IsSelling: true,
                Description: "фиолетового цвета, кустовая, мохровая, стойкая",
                ImgLink: "../media/P3.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Синий знак",
                Price: "8 рублей",
                IsSelling: true,
                Description: "синего цвета, кустовая, боится переливаний",
                ImgLink: "../media/P4.jpeg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Красный знак",
                Price: "8 рублей",
                IsSelling: true,
                Description: "красного цвета, кустовая, боится переливаний",
                ImgLink: "../media/P5.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Розовый йогурт",
                Price: "8 рублей",
                IsSelling: true,
                Description: "розового цвета, кустовая, боится переливаний",
                ImgLink: "../media/P6.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Тьма",
                Price: "8 рублей",
                IsSelling: true,
                Description: "фиолетового цвета, кустовая, боится переливаний",
                ImgLink: "../media/P7.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Галактика",
                Price: "8 рублей",
                IsSelling: true,
                Description: "фиолетового цвета, кустовая, тенелюбивая, боится переливаний",
                ImgLink: "../media/P8.jpg",
            },
            { //i=0, j=1
                Name: "Петуния",
                Sort: "Брызги шампанского",
                Price: "8 рублей",
                IsSelling: true,
                Description: "розового цвета, кустовая, боится переливаний",
                ImgLink: "../media/P9.jpg",
            },
        ]
    },
]



function TrashPageCreator (j,i){
    OpenedLink = window.open();
    if (OpenedLink) {
        let linkStylesheetTrashPage = document.createElement('link');
            linkStylesheetTrashPage.rel = "stylesheet";
            linkStylesheetTrashPage.href = "../styles/TrashPage.css";
            linkStylesheetTrashPage.media = "all";
        let TitleHeadTrashPage = document.createElement('title');
            TitleHeadTrashPage.textContent = (Flowers[j].type[i].Name+" "+Flowers[j].type[i].Sort);
        OpenedLink.document.head.appendChild(TitleHeadTrashPage);
        OpenedLink.document.head.appendChild(linkStylesheetTrashPage);

        let headerTrashPage = document.createElement('header');
            let logotipeTrashPage = document.createElement('div');
                logotipeTrashPage.id = 'logotipe';
                let logoIMG = document.createElement('img');
                    logoIMG.src = "../media/Logo.jpg";
                logotipeTrashPage.appendChild(logoIMG)
            headerTrashPage.appendChild(logotipeTrashPage);
            let titleTrashPage = document.createElement('div');
                titleTrashPage.id = 'Title';
                titleTrashPage.textContent='Tsvetok.by';
            headerTrashPage.appendChild(titleTrashPage);
            let rusTitleTrashPage = document.createElement('div');
                rusTitleTrashPage.id = 'TitleRus';
                rusTitleTrashPage.textContent="Цветочный магазин";
            headerTrashPage.appendChild(rusTitleTrashPage);
        OpenedLink.document.body.appendChild(headerTrashPage);

        let CardTrashPage = document.createElement('div');
            CardTrashPage.id = "Card";
            let CardImageTrashPage = document.createElement('div');
                CardImageTrashPage.id = "ImageZone";
                let ImageTrashPage = document.createElement('img');
                    ImageTrashPage.id = "FlowerIMG";
                    ImageTrashPage.src = (Flowers[j].type[i].ImgLink);
                CardImageTrashPage.appendChild(ImageTrashPage);
            CardTrashPage.appendChild(CardImageTrashPage);
            let OptionsTrashPage = document.createElement('div');
                OptionsTrashPage.id = "Options";
                let FlowerTitleTrashPage = document.createElement('div');
                    FlowerTitleTrashPage.id = "FlowerTitle";
                    FlowerTitleTrashPage.textContent=(Flowers[j].type[i].Name)
                OptionsTrashPage.appendChild(FlowerTitleTrashPage);
                let FlowerSortNameTrashPage = document.createElement('div');
                    FlowerSortNameTrashPage.id = "FlowerSortName";
                    FlowerSortNameTrashPage.textContent = (Flowers[j].type[i].Sort)
                OptionsTrashPage.appendChild(FlowerSortNameTrashPage);
                let FlowerSortTrashPage = document.createElement('div');
                    FlowerSortTrashPage.id = "FlowerSort";
                    FlowerSortTrashPage.textContent = ("["+i+"]");
                OptionsTrashPage.appendChild(FlowerSortTrashPage);
                let FlowerPriceTrashPage = document.createElement('div');
                    FlowerPriceTrashPage.id = "FlowerPrice";
                    FlowerPriceTrashPage.textContent = (Flowers[j].type[i].Price);
                OptionsTrashPage.appendChild(FlowerPriceTrashPage);
                let FlowerIsSellingTrashPage = document.createElement('div');
                    if (!(Flowers[j].type[i].IsSelling)){
                        FlowerIsSellingTrashPage.textContent = "Нет в продаже!";
                        FlowerIsSellingTrashPage.id = "FlowerIsSellingNain";
                    }
                    else {
                        FlowerIsSellingTrashPage.textContent = "Есть в наличае!";
                        FlowerIsSellingTrashPage.id = "FlowerIsSellingYeah";
                    }
                OptionsTrashPage.appendChild(FlowerIsSellingTrashPage);
                let FlowerDescriptionTrashPage = document.createElement('div');
                    FlowerDescriptionTrashPage.id = "FlowerDescription";
                    FlowerDescriptionTrashPage.textContent = (Flowers[j].type[i].Description);
                OptionsTrashPage.appendChild(FlowerDescriptionTrashPage);
            CardTrashPage.appendChild(OptionsTrashPage);
        OpenedLink.document.body.appendChild(CardTrashPage);
        let NotPhone = document.createElement('div');
            NotPhone.textContent = "Не поддерживается на телефонах";
            NotPhone.id = "NotPhone";
        OpenedLink.document.body.appendChild(NotPhone);
    }
}


function buttonHandler(SelectedFlower,SelectedSort,CurrentSum,Cell,CellsZone){
    // Enter Sort Settings
    console.log("I'm from ButtonHandler");
    console.log("Flower:"+Flowers[SelectedFlower].type[1].Name);
    if (SelectedSort==0){
        console.log("Sort:"+"Сортировка по сорту");
    }
    else {
    console.log("Sort:"+SelectedSort);
    }
    //*
    if (CurrentSum!=0){
        console.log('More than 0 cells created');
        for (let i=1;i<CurrentSum;i++){
            CellsZone.removeChild(Cell[i]);
        }
    } else {
        console.log('CellZone is clear');
    }
    if ((SelectedFlower==0)&&(SelectedSort==0)){
        console.log("I'm create all Cells");
        CurrentSum=1;
        for (let j=1;j<Flowers.length;j++){
            for (let i=1;i<Flowers[j].type.length;i++){
                console.log(CurrentSum);
                Cell[CurrentSum] = document.createElement("div");
                Cell[CurrentSum].className="Cell";
                    CellIMG[i] = document.createElement("img");
                    CellNAME[i] = document.createElement("button");
                    CellNAME[i].addEventListener("click",function(e){


                        TrashPageCreator(j,i);


                    },false);
                    CellIMG[i].src = Flowers[j].type[i].ImgLink;
                    CellNAME[i].textContent= Flowers[j].type[i].Name+" ["+i+"] ["+Flowers[j].type[i].Sort+"]";
                    Cell[CurrentSum].appendChild(CellIMG[i]);
                    Cell[CurrentSum].appendChild(CellNAME[i]);
                CellsZone.appendChild(Cell[CurrentSum]);
                CurrentSum++;
            }
        }
    } else if ((SelectedFlower!=0)&&(SelectedSort==0)){
        console.log("I'm create Flower Cells");
        CurrentSum=1;
        for (let i=1;i<Flowers[SelectedFlower].type.length;i++){
            console.log(CurrentSum);
                Cell[CurrentSum] = document.createElement("div");
                Cell[CurrentSum].className="Cell";
                    CellIMG[i] = document.createElement("img");
                    CellNAME[i] = document.createElement("button");
                    CellNAME[i].addEventListener("click",function(e){


                        TrashPageCreator(SelectedFlower,i);


                    },false);
                    CellIMG[i].src = Flowers[SelectedFlower].type[i].ImgLink;
                    CellNAME[i].textContent= Flowers[SelectedFlower].type[i].Name+" ["+i+"] ["+Flowers[SelectedFlower].type[i].Sort+"]";
                    Cell[CurrentSum].appendChild(CellIMG[i]);
                    Cell[CurrentSum].appendChild(CellNAME[i]);
                CellsZone.appendChild(Cell[CurrentSum]);
                CurrentSum++;
        }
    } else if ((SelectedFlower==0)&&(SelectedSort!=0)){
        CurrentSum=1;
        console.log("I'm create Sort Cells");
        for (let j=1;j<Flowers.length;j++){
            if (Flowers[j].type.length>=SelectedSort){
                Cell[CurrentSum] = document.createElement("div");
                Cell[CurrentSum].className="Cell";
                    CellIMG[j] = document.createElement("img");
                    CellNAME[j] = document.createElement("button");
                    CellNAME[j].addEventListener("click",function(e){


                        TrashPageCreator(j,SelectedSort);


                    },false);
                    CellIMG[j].src = Flowers[j].type[SelectedSort].ImgLink;
                    CellNAME[j].textContent= Flowers[j].type[SelectedSort].Name+" ["+SelectedSort+"] ["+Flowers[j].type[SelectedSort].Sort+"]";
                    Cell[CurrentSum].appendChild(CellIMG[j]);
                    Cell[CurrentSum].appendChild(CellNAME[j]);
                CellsZone.appendChild(Cell[CurrentSum]);
                CurrentSum++;
            }
        }
    } else if ((SelectedFlower!=0)&&(SelectedSort!=0)){
        CurrentSum=1;
        console.log ("I'm create a single Cell");
        Cell[CurrentSum] = document.createElement("div");
            Cell[CurrentSum].className="Cell";
            CellIMG[1] = document.createElement("img");
            CellNAME[1] = document.createElement("button");
                    CellNAME[1].addEventListener("click",function(e){


                        TrashPageCreator(SelectedFlower,SelectedSort);


                    },false);
            CellIMG[1].src = Flowers[SelectedFlower].type[SelectedSort].ImgLink;
            CellNAME[1].textContent= Flowers[SelectedFlower].type[SelectedSort].Name+" ["+SelectedSort+"] ["+Flowers[SelectedFlower].type[SelectedSort].Sort+"]";
            Cell[CurrentSum].appendChild(CellIMG[1]);
            Cell[CurrentSum].appendChild(CellNAME[1]);
        CellsZone.appendChild(Cell[CurrentSum]);
        CurrentSum++;
    }
    // end of buttonHandler
    return(CurrentSum);
}


function LoadObject(){
    let MainMenu = document.getElementById("MainMenu");
    let SortMenu = document.createElement("div");


    SortMenu.className = "SortMenu";
        let SortByFlower = document.createElement("select");
        let SortBySort = document.createElement("select");
        SortByFlower.onchange = (e) => {
            SelectedFlower = SortByFlower.value;
            SelectedSort = SortBySort.value
            console.log(">Selected Flower: "+SelectedFlower);
            console.log(">Selected Sort: "+SelectedSort);
            CurrentSum = buttonHandler(SelectedFlower,SelectedSort,CurrentSum,Cell,CellsZone)
        }
            SortByFlower.className = "SelectFlower";
            
            console.log(">Uploading flowers from library");
            let fl = new Array;
            for (let i=0;i<Flowers.length;i++){
                console.log (">>Flower["+i+"] "+Flowers[i].type[1].Name);
                    fl[i] = document.createElement('option');
                    fl[i].value = i;
                    fl[i].textContent = (Flowers[i].type[1].Name);
                SortByFlower.appendChild(fl[i]);
            }
        SortMenu.appendChild(SortByFlower);

        
        //let SortBySort = document.createElement("select");
            SortBySort.onchange = (e) => {
                SelectedFlower = SortByFlower.value;
                SelectedSort = SortBySort.value
                console.log(">Selected Flower: "+SelectedFlower);
                console.log(">Selected Sort: "+SelectedSort);
                CurrentSum = buttonHandler(SelectedFlower,SelectedSort,CurrentSum,Cell,CellsZone)
            }
            SortBySort.className = "SelectSort";
            let maxTEMP = 0;
            console.log(">Checking, for max length of sorts")
            for (let i=0;i<Flowers.length;i++){
                console.log (">>Check Flower["+i+"]");
                if (maxTEMP<Flowers[i].type.length){
                    maxTEMP=Flowers[i].type.length;
                    console.log (">>>It is biggest sort length ["+maxTEMP+"]");
                } 
                else {
                    console.log(">>>It isn't max sort length");
                }
            }

            let sr = new Array;
            console.log(">Uploading sorts from library");
            for (let i=0;i<maxTEMP;i++){
                console.log(">>Sort |"+i)
                sr[i] = document.createElement('option');
                sr[i].value = i;
                if (i==0){
                    sr[i].textContent="Сортировка по сорту";
                } 
                else {
                    sr[i].textContent = i;
                }
            SortBySort.appendChild(sr[i]);
            }
        SortMenu.appendChild(SortBySort);
        

        let CurrentSum = 0;
        
    MainMenu.appendChild(SortMenu);
        CellsZone.id = "CellsZone";

        CurrentSum = buttonHandler(SelectedFlower,SelectedSort,CurrentSum,Cell,CellsZone);


    MainMenu.appendChild(CellsZone)
}
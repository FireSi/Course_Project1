"use strict";

let Contacts = [
    {
        Name:"personName",
        LastName:"personLastName",
        Age:1,
        Position:"personPosition",
        telephoneNumber:"personNumber",
        Description:"personDescription",
        personIMG:"../media/unknown.jpg",
    },
    {
        Name:"Ирина",
        LastName:"Луцевич",
        Age:40,
        Position:"продавец",
        telephoneNumber:"+375-33-349-28-60",
        Description:"Главный специалист в цветах, продавец на Комаровке.",
        personIMG:"../media/Ma.jpg",
    },
    {
        Name:"Алексей",
        LastName:"Луцевич",
        Age:45,
        Position:"инжинер-программист, разнорабочий",
        telephoneNumber:"+375-33-349-28-60",
        Description:"Водитель, строитель.",
        personIMG:"../media/unknown.jpg",
    },
    {
        Name:"Павел",
        LastName:"Луцевич",
        Age:18,
        Position:"инжинер-программист, разнорабочий",
        telephoneNumber:"+375-33-349-28-60",
        Description:"Создатель веб-сайта, рабочий в теплицах, продавец на Комаровке.",
        personIMG:"../media/me.png",
    },
]



function LoadObject(){
    let MainMenu = document.getElementById("MainMenu");
        let personCard = new Array
        let personName = new Array
        let personAge = new Array
        let personPosition = new Array
        let personTelephoneNumber = new Array
        let personDescription = new Array
        let personPersonIMG = new Array
        console.log(Contacts.length)
            for(let i=1;i<Contacts.length;i++){
                personCard[i] = document.createElement('div');
                    personPersonIMG[i] = document.createElement('img');
                    personPersonIMG[i].src = Contacts[i].personIMG;
                    personPersonIMG[i].id = "IMG"
                personCard[i].appendChild(personPersonIMG[i]);
                    personName[i] = document.createElement('div');
                    personName[i].textContent = Contacts[i].Name+"  "+Contacts[i].LastName;
                personCard[i].appendChild(personName[i]);
                    personAge[i] = document.createElement('div');
                    personAge[i].textContent = Contacts[i].Age+' лет ';
                personCard[i].appendChild(personAge[i]);
                    personPosition[i] = document.createElement('div');
                    personPosition[i].textContent = Contacts[i].Position;
                personCard[i].appendChild(personPosition[i]);
                    personTelephoneNumber[i] = document.createElement('div');
                    personTelephoneNumber[i].textContent = Contacts[i].telephoneNumber;
                personCard[i].appendChild(personTelephoneNumber[i]);
                    personDescription[i] = document.createElement('div');
                    personDescription[i].textContent = Contacts[i].Description;
                    personDescription[i].id = "Desc"
                personCard[i].appendChild(personDescription[i]);
                personCard[i].className = "personCard";
            MainMenu.appendChild(personCard[i]);
            }

}
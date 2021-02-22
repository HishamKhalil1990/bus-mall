'use strict'

let numberOfAttempt = 25;
let attemptCounter = 0;
let firstImage = document.getElementById('firstImage');
let secondImage = document.getElementById('secondImage');
let thirdImage = document.getElementById('thirdImage');
let firstImgIndex;
let secondImgIndex;
let thirdImgIndex;
let btu = document.getElementById('btu');
let unList = document.getElementById('unList');
let showedArray = [];
// let p1 = -1;
// let p2 = -1;
// let p3 = -1;
function Images(name, alt, source) {
    this.name = name;
    this.alt = alt;
    this.source = source;
    this.showed = false;
    this.vote = 0;
    this.seen = 0;
    Images.all.push(this);
    Images.allNames.push(this.name);
}
Images.allNames = [];
Images.all = [];
let allSeen = [];
let allVote = [];
new Images('bag', 'image1', 'img/bag.jpg');
new Images('banana', 'image2', 'img/banana.jpg');
new Images('bathroom', 'image3', 'img/bathroom.jpg');
new Images('boots', 'image4', 'img/boots.jpg');
new Images('breakfast', 'image5', 'img/breakfast.jpg');
new Images('bubblegume', 'image6', 'img/bubblegum.jpg');
new Images('chair', 'image7', 'img/chair.jpg');
new Images('cthulhu', 'image8', 'img/cthulhu.jpg');
new Images('dog-duck', 'image9', 'img/dog-duck.jpg');
new Images('dragon', 'image10', 'img/dragon.jpg');
new Images('pen', 'image11', 'img/pen.jpg');
new Images('pet-sweep', 'image12', 'img/pet-sweep.jpg');
new Images('scissors', 'image13', 'img/scissors.jpg');
new Images('shark', 'image14', 'img/shark.jpg');
new Images('sweep', 'image15', 'img/sweep.png');
new Images('tauntaun', 'image16', 'img/tauntaun.jpg');
new Images('unicorn', 'image17', 'img/unicorn.jpg');
new Images('usb', 'image18', 'img/usb.gif');
new Images('water-can', 'image19', 'img/water-can.jpg');
new Images('wine-glass', 'image20', 'img/wine-glass.jpg');
checkImages();
let section = document.getElementById("imageSec");
section.addEventListener('click', imagesControl);
function imagesControl(event){
    let index = clickedImage(event.target.alt);
    if (typeof index == "number"){
        Images.all[index].vote++;
        attemptCounter++
        checkImages();
        if (attemptCounter < numberOfAttempt){
        } else {
            section.removeEventListener('click', imagesControl);
            btu.addEventListener('click', showResults);
            btu.classList.add('blinkClass');
            setTimeout(blink, 750);
            btu.classList.add('btuClass');
            for (let i = 0; i < Images.all.length; i++){
                allSeen.push(Images.all[i].seen);
                allVote.push(Images.all[i].vote);
            }
        }
    }else {}
}
let chartSec = document.getElementById('chartSec');
let canvas = document.createElement('canvas');
canvas.setAttribute('id','myChart');
let on = false;
function showResults(event){
    // showing a list for results
    // if (unList.firstChild) {
    //     while (unList.firstChild) {
    //         unList.removeChild(unList.firstChild);
    //     }
    // } else {
    //     for (let i = 0; i < Images.all.length; i++) {
    //         let list = document.createElement('li');
    //         unList.appendChild(list);
    //         list.textContent = `${Images.all[i].name} had ${Images.all[i].vote} votes, and seen ${Images.all[i].seen} times`
    //     }
    // }

    // showing a chart
    if (on == true){
        while(chartSec.firstChild){
            chartSec.removeChild(chartSec.firstChild);
        }
        on = false;
    } else {
        chartSec.appendChild(canvas);
        addChart();
        on = true;
    }
}
function addChart(){
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: Images.allNames,
        datasets: [{
            label: 'seen',
            backgroundColor: 'rgb(153, 255, 255)',
            borderColor: 'rgb(153, 255, 255)',
            data: allSeen
        },
        {
            label: 'votes',
            backgroundColor: 'rgb(224, 224, 224)',
            borderColor: 'rgb(224, 224, 224)',
            data: allVote
        }]
    },

    // Configuration options go here
    options: {}
});
}
///////////////////////////////////////////////////////////////////////////
// images render function 1
function checkImages() {
    let notCheck1;
    let notCheck2;
    let notCheck3;
    let firstValue = true;
    let secondValue = true;
    let thirdValue = true;
    do {
        // change the index
        do {
            if (firstValue) {
                firstImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (secondValue) {
                secondImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (thirdValue) {
                thirdImgIndex = Math.floor(Math.random() * Images.all.length);
            }
        } while (firstImgIndex == secondImgIndex || firstImgIndex == thirdImgIndex || secondImgIndex == thirdImgIndex)
        // check if the three index if they are repeated 
        if (showedArray.includes(firstImgIndex,0)){
            notCheck1 = true;
        } else {
            notCheck1 = false;
            firstValue = false;
        }
        if (showedArray.includes(secondImgIndex,0)){
            notCheck2 = true;
        } else {
            notCheck2 = false;
            secondValue = false;
        }
        if (showedArray.includes(thirdImgIndex,0)){
            notCheck3 = true;
        } else {
            notCheck3 = false;
            thirdValue = false;
        }
    } while (notCheck1 || notCheck2 || notCheck3)
    // empty the showed array
    if (showedArray.length == 3){
        for (let i = 0; i < 3; i++){
            showedArray.pop();
        }
    }
    firstImage.src = Images.all[firstImgIndex].source;
    secondImage.src = Images.all[secondImgIndex].source;
    thirdImage.src = Images.all[thirdImgIndex].source;
    firstImage.alt = Images.all[firstImgIndex].alt;
    secondImage.alt = Images.all[secondImgIndex].alt;
    thirdImage.alt = Images.all[thirdImgIndex].alt;
    Images.all[firstImgIndex].seen++;
    Images.all[secondImgIndex].seen++;
    Images.all[thirdImgIndex].seen++;
    showedArray.push(firstImgIndex);
    showedArray.push(secondImgIndex);
    showedArray.push(thirdImgIndex);
    // check the function
    // if (p1 == firstImgIndex || p1 == secondImgIndex || p1 == thirdImgIndex){
    //     console.log('alert');
    // }
    // if (p2 == firstImgIndex || p2 == secondImgIndex || p2 == thirdImgIndex){
    //     console.log('alert');
    // }
    // if (p3 == firstImgIndex || p3 == secondImgIndex || p3 == thirdImgIndex){
    //     console.log('alert');
    // }
    // p1 = firstImgIndex;
    // p2 = secondImgIndex;
    // p3 = thirdImgIndex;
}

// images render function 2
function imagesRender(){
    let notCheck1;
    let notCheck2;
    let notCheck3;
    let firstValue = true;
    let secondValue = true;
    let thirdValue = true;
    do {
        // change the index
        do {
            if (firstValue) {
                firstImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (secondValue) {
                secondImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (thirdValue) {
                thirdImgIndex = Math.floor(Math.random() * Images.all.length);
            }
        } while (firstImgIndex == secondImgIndex || firstImgIndex == thirdImgIndex || secondImgIndex == thirdImgIndex)
        // check if the three index if they are repeated 
        if (Images.all[firstImgIndex].showed){
            notCheck1 = true;
        } else {
            notCheck1 = false;
            firstValue = false;
        }
        if (Images.all[secondImgIndex].showed){
            notCheck2 = true;
        } else {
            notCheck2 = false;
            secondValue = false;
        }
        if (Images.all[thirdImgIndex].showed){
            notCheck3 = true;
        } else {
            notCheck3 = false;
            thirdValue = false;
        }
    } while (notCheck1 || notCheck2 || notCheck3)
    // change the value of the previous index to false
    for (let i = 0; i < Images.all.length; i++){
        Images.all[i].showed = false;
    }
    firstImage.src = Images.all[firstImgIndex].source;
    secondImage.src = Images.all[secondImgIndex].source;
    thirdImage.src = Images.all[thirdImgIndex].source;
    firstImage.alt = Images.all[firstImgIndex].alt;
    secondImage.alt = Images.all[secondImgIndex].alt;
    thirdImage.alt = Images.all[thirdImgIndex].alt;
    Images.all[firstImgIndex].seen++;
    Images.all[secondImgIndex].seen++;
    Images.all[thirdImgIndex].seen++;
    Images.all[firstImgIndex].showed = true;
    Images.all[secondImgIndex].showed = true;
    Images.all[thirdImgIndex].showed = true;
    // check the function
    // if (p1 == firstImgIndex || p1 == secondImgIndex || p1 == thirdImgIndex){
    //     console.log('alert');
    // }
    // if (p2 == firstImgIndex || p2 == secondImgIndex || p2 == thirdImgIndex){
    //     console.log('alert');
    // }
    // if (p3 == firstImgIndex || p3 == secondImgIndex || p3 == thirdImgIndex){
    //     console.log('alert');
    // }
    // p1 = firstImgIndex;
    // p2 = secondImgIndex;
    // p3 = thirdImgIndex;
}

// what image is clicked
function clickedImage(alt){
    let index = '';
    if (alt) {
        switch (alt) {
            case 'image1':
                index = 0;
                break;
            case 'image2':
                index = 1;
                break;
            case 'image3':
                index = 2;
            case 'image4':
                index = 3;
                break;
            case 'image5':
                index = 4;
                break;
            case 'image6':
                index = 5;
                break;
            case 'image7':
                index = 6;
                break;
            case 'image8':
                index = 7;
                break;
            case 'image9':
                index = 8;
                break;
            case 'image10':
                index = 9;
                break;
            case 'image11':
                index = 10;
                break;
            case 'image12':
                index = 11;
                break;
            case 'image13':
                index = 12;
                break;
            case 'image14':
                index = 13;
                break;
            case 'image15':
                index = 14;
                break;
            case 'image16':
                index = 15;
                break;
            case 'image17':
                index = 16;
                break;
            case 'image18':
                index = 17;
                break;
            case 'image19':
                index = 18;
                break;
            default:
                index = 19;
                break;
        }
    }
    return index;
}
function blink(){
    btu.classList.remove('blinkClass');
}
///////////////////////////////////////////////////////////////////////////

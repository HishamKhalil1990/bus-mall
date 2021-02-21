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
}
Images.all = [];
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
imagesRender();
let section = document.getElementById("imageSec");
section.addEventListener('click', imagesControl);
function imagesControl(event) {
    if (event.target.alt) {
        switch (event.target.alt) {
            case 'image1':
                Images.all[0].vote++;
                break;
            case 'image2':
                Images.all[1].vote++;
                break;
            case 'image3':
                Images.all[2].vote++;
            case 'image4':
                Images.all[3].vote++;
                break;
            case 'image5':
                Images.all[4].vote++;
                break;
            case 'image6':
                Images.all[5].vote++;
                break;
            case 'image7':
                Images.all[6].vote++;
                break;
            case 'image8':
                Images.all[7].vote++;
                break;
            case 'image9':
                Images.all[8].vote++;
                break;
            case 'image10':
                Images.all[9].vote++;
                break;
            case 'image11':
                Images.all[10].vote++;
                break;
            case 'image12':
                Images.all[11].vote++;
                break;
            case 'image13':
                Images.all[12].vote++;
                break;
            case 'image14':
                Images.all[13].vote++;
                break;
            case 'image15':
                Images.all[14].vote++;
                break;
            case 'image16':
                Images.all[15].vote++;
                break;
            case 'image17':
                Images.all[16].vote++;
                break;
            case 'image18':
                Images.all[17].vote++;
                break;
            case 'image19':
                Images.all[18].vote++;
                break;
            default:
                Images.all[19].vote++;
                break;
        }
        attemptCounter++
        imagesRender();
        if (attemptCounter < numberOfAttempt) {

        } else {
            section.removeEventListener('click', imagesControl);
            btu.addEventListener('click', showResults);
            btu.classList.add('btuClass');
        }
    } else {

    }
}
function showResults(event) {
    if (unList.firstChild) {
        while (unList.firstChild) {
            unList.removeChild(unList.firstChild);
        }
    } else {
        for (let i = 0; i < Images.all.length; i++) {
            let list = document.createElement('li');
            unList.appendChild(list);
            list.textContent = `${Images.all[i].name} had ${Images.all[i].vote} votes, and seen ${Images.all[i].seen} times`
        }
    }
}
///////////////////////////////////////////////////////////////////////////
function checkImages(index1, index2, index3) {
    let whileValue1 = false;
    let whileValue2 = false;
    let whileValue3 = false;
    let firstValue = true;
    let secondValue = true;
    let thirdValue = true;
    do {
        do {
            if (firstValue == true) {
                firstImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (secondValue == true) {
                secondImgIndex = Math.floor(Math.random() * Images.all.length);
            }
            if (thirdValue == true) {
                thirdImgIndex = Math.floor(Math.random() * Images.all.length);
            }
        } while (firstImgIndex == secondImgIndex || firstImgIndex == thirdImgIndex || secondImgIndex == thirdImgIndex)
        switch (firstImgIndex) {
            case index1, index2, index3:
                whileValue1 = true;
                break;
            default:
                firstValue = false;
                whileValue1 = false;
        }
        switch (secondImgIndex) {
            case index1, index2, index3:
                whileValue2 = true;
                break;
            default:
                secondValue = false;
                whileValue2 = false;
        }
        switch (thirdImgIndex) {
            case index1, index2, index3:
                whileValue3 = true;
                break;
            default:
                thirdValue = false;
                whileValue3 = false;
        }
    } while (whileValue1 || whileValue2 || whileValue3)
    firstImage.src = Images.all[firstImgIndex].source;
    secondImage.src = Images.all[secondImgIndex].source;
    thirdImage.src = Images.all[thirdImgIndex].source;
    firstImage.alt = Images.all[firstImgIndex].alt;
    secondImage.alt = Images.all[secondImgIndex].alt;
    thirdImage.alt = Images.all[thirdImgIndex].alt;
    Images.all[firstImgIndex].seen++;
    Images.all[secondImgIndex].seen++;
    Images.all[thirdImgIndex].seen++;
}
///////////////////////////////////////////////////////////////////////////

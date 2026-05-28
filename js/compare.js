let carArr = [];

class Car {
   
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.modelo = modelo;
        this.preco = preco;
        this.altCacamba = alturaCacamba;
        this.altVeiculo = alturaVeiculo;
        this.altSolo = alturaSolo;
        this.capCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].modelo  === carClass.modelo)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length < 2) {
                carArr.push(carClass);
            } else {
                alert("Você só pode comparar 2 veículos por vez.");
                el.checked = false;
             }
        } else {
          let index = GetCarArrPosition(carArr, carClass);
          if(index > -1) {
            carArr.splice(index, 1);
          }
         } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        let car = carArr[i];
        
        // Injeta os dados nos IDs que existem no seu lancamento.html
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="150">`;
        document.getElementById(`compare_modelo_${i}`).innerText = car.modelo;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.altCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.altVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.altSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capCarga;
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
        document.getElementById(`compare_preco_${i}`).innerText = `R$ ${car.preco}`;
    }
}

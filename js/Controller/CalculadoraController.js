class CalculadoraController{

constructor(){
 this.dateEl = document.querySelector('.data');
 this.horaEl = document.querySelector('.hora');
 this.iniciar();

}

iniciar(){
    this.attData();
    setInterval(()=>{
        this.attData();
    },1000)
}

 attData(){
    let data = new Date ();

     this.dateEl.innerHTML = data.toLocaleDateString('pt-BR');
     this.horaEl.innerHTML = data.toLocaleTimeString('pt-BR');
 }

}
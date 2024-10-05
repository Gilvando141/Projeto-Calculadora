function Calculadora(){
    this.screen = document.querySelector(".screen");

    this.inicia = () =>{
        this.cliqueBoteos();
        this.pressionouEnter();
        this.screen.focus();
    };

    this.pressionouEnter = () =>{
        document.addEventListener('keyup', e=>{
            if(e.key ==="Enter"){
                this.realizaConta();
            }
        })
    };
    

    this.realizaConta = () =>{
        let conta = this.screen.value;

        try{
            conta = eval(conta);
            if(!conta){
                alert("Error na operação");
                return;
            }
            this.screen.value = String(conta);

        }catch(e){
            alert("Error na operação");
            return;
        }
    };

    this.limpaScreen = () => this.screen.value = " ";
    this.btnScreen = el => {
        this.screen.value += el;
        this.screen.focus();
    }
    this.apagaUm = () => this.screen.value = this.screen.value.slice(0, -1);

    this.cliqueBoteos = ()=> {
        document.addEventListener("click", e=>{
            const elem = e.target;

            if(elem.classList.contains("btn-num")){
                this.btnScreen(elem.value);
            }if(elem.classList.contains("apagaTudo")){
                this.limpaScreen();
            }if(elem.classList.contains("apagaUm")){
                this.apagaUm();
            }if(elem.classList.contains("igual")){
                this.realizaConta();
            }
        });
    };

}

const calc1 = new Calculadora();
calc1.inicia();
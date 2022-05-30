class contaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;

    }
    set saldo(valor){
        this._saldo = valor; 
    }

    sacar(valor){
        if (this._saldo < valor){
            this.saldo -= valor;
            return 'Saque efetuado com sucesso"'}
        return 'saldo insuficiente'
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia,numero,saldo);
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this.cartaoCredito+=valor;
        return this._cartaoCredito
    
    }
}    
    class contaCorrente extends contaBancaria {
        constructor(agencia, numero, saldo){
            super(agencia,numero,saldo);
            this.tipo = 'Poupanca'
        }
    }

    class contaUniversitaria extends contaBancaria{
        constructor(agencia, numero, saldo){
            super(agencia,numero,saldo);
            this.tipo = 'universitaria'
        }

        sacar(valor){
            if(valor > 500){
                return 'operação negada'
            }
            this._saldo -= valor;
        }
        
    }

function InputCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpf.replace(/\D+/g, '');
        }       
    });
}

InputCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const dig1 = this.criaDigito(cpfParcial);
    const dig2 = this.criaDigito(cpfParcial + dig1);
    const novoCPF = cpfParcial + dig1 + dig2;
    return novoCPF === this.cpfLimpo;
}

InputCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regCount = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regCount*Number(val));
        regCount--;     
        return ac;
    },0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : digito;
};

InputCPF.prototype.isSequence = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length)
}


const p = new InputCPF('111.111.111.11');
console.log(p.valida());


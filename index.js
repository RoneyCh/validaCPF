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
    
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const dig1 =    this.sum(cpfParcial);
    return true;
}

InputCPF.prototype.sum = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    cpfArray.reduce((ac,val) => ac += Number(val), 0);
}

const p = new InputCPF('111.111.111-55');
console.log(p.cpfLimpo);
console.log(p.sum());


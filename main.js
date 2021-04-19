/*
PLANTEAMIENTO DE PROBLEMA: Presupuesto familiar
En una familia todos los integrantes trabajan y aportan para los gastos en el hogar. 
Cada integrante tiene su ingreso y su gasto fijo mensual. 
Se requiere de un programa que determine para cada integrante el monto que dispone mensual, y para la familia también el monto total disponible.
FÍJENSE LO QUE PUEDEN HACER
> Toman el análisis y diseño que yo les entregué
> Realizan este nuevo análisis y diseño de manera ANÁLOGA
> Toman el código que yo realicé
> Realizan este programa de manera ANÁLOGA
1) Determinar (REQUERIMIENTOS)
RA Monto que dispone mensual cada integrante. 
RB Monto mensual disponible para la familia.
2) Se conoce de cada integrante
-ingreso
-gasto

Clases: Integrante y Familia
Integrante
-ingreso
-gasto
+Integrante(i,g)
(1)+montoDispInt()

Familia
(3)-montoDispFam
+Familia()
(2)+procesarIntegrante(int)

(1) ingreso-gasto
(2) montoDispFam+=int.montoDispInt()
(3) montoDispFam=∅
*/
class Cl_mIntegrante {
    constructor(n = '', i = 0, g = 0) {
        this._nombre = n
        this._ingreso = i
        this._gasto = g
    }
    get nombre() {
        return this._nombre
    }
    set nombre(n) {
        this._nombre = n
    }
    get ingreso() {
        return this._ingreso
    }
    set ingreso(i) {
        this._ingreso = parseFloat(i)
    }
    get gasto() {
        return this._gasto
    }
    set gasto(g) {
        this._gasto = parseFloat(g)
    }
    montoDispInt() {
        return this.ingreso - this.gasto
    }
}

class Cl_mFamilia {
    constructor() {
        this.montoDispFam = 0
    }
    get montoDispFam() {
        return this._montoDispFam
    }
    set montoDispFam(mDF) {
        this._montoDispFam = parseFloat(mDF)
    }
    procesarIntegrante(int) {
        this.montoDispFam += int.montoDispInt()
    }
}
class Cl_vFamilia {
    reportar(montoDispFam) {
        consola_salida.innerHTML += `<br>TOTAL MONTO DISPONIBLE: ${montoDispFam}<br>`
    }
}

class Cl_vIntegrante {
    reportar(int) {
        consola_salida.innerHTML += `${int.nombre.padEnd(10, '.')} ${String(int.ingreso).padEnd(10, '.')} ${String(int.gasto).padEnd(10, '.')} ${String(int.montoDispInt()).padEnd(10, '.')} <br>`;
    }

}


class Cl_controler {
    constructor() {
        this.mIntegrante = new Cl_mIntegrante()
        this.mFamilia = new Cl_mFamilia()
        this.vFamilia = new Cl_vFamilia()
        this.vIntegrante = new Cl_vIntegrante()
    }
    get mFamilia() {
        return this._mFamilia
    }
    set mFamilia(f) {
        this._mFamilia = f
    }
    get mIntegrante() {
        return this._mIntegrante
    }
    set mIntegrante(int) {
        this._mIntegrante = int
    }
    get vFamilia() {
        return this._vFamilia
    }
    set vFamilia(f) {
        this._vFamilia = f
    }
    get vIntegrante() {
        return this._vIntegrante
    }
    set vIntegrante(int) {
        this._vIntegrante = int
    }
    procesar() {
        consola_salida.innerHTML =
            'Nombre... Ingreso..... Gasto.... Monto Disponible<br>' +
            '==========================================<br>'
        let integrante1 = new Cl_mIntegrante('Luis', 50000, 10000, 40000)
        let integrante2 = new Cl_mIntegrante('Ana', 60000, 30000, 30000)
        let integrante3 = new Cl_mIntegrante('Carlos', 40000, 20000, 20000)
        let integrante4 = new Cl_mIntegrante('Mery', 70000, 15000, 65000)
        this.mFamilia.procesarIntegrante(integrante1)
        this.vIntegrante.reportar(integrante1)
        this.mFamilia.procesarIntegrante(integrante2)
        this.vIntegrante.reportar(integrante2)
        this.mFamilia.procesarIntegrante(integrante3)
        this.vIntegrante.reportar(integrante3)
        this.mFamilia.procesarIntegrante(integrante4)
        this.vIntegrante.reportar(integrante4)
        this.vFamilia.reportar(this.mFamilia.montoDispFam)
        consola_salida.innerHTML +=
            '==========================================<br><br>'
        this.procesar2()
    }
    procesar2() {
        let procesar = confirm('Procesar datos manualmente?'),
            nombre = '',
            ingreso = 0,
            gasto = 0
        if (procesar) {
            this.mFamilia.montoDispFam = 0
            consola_salida.innerHTML +=
                'Nombre... Ingreso..... Gasto.... Monto Disponible<br>' +
                '==========================================<br>'
            while (procesar) {
                this.mIntegrante.nombre = prompt('Indique nombre')
                this.mIntegrante.ingreso = prompt('Indique ingreso')
                this.mIntegrante.gasto = prompt('Indique gasto')
                this.mFamilia.procesarIntegrante(this.mIntegrante)
                this.vIntegrante.reportar(this.mIntegrante)
                procesar = confirm('Hay otro integrante?')
            }
            this.vFamilia.reportar(this.mFamilia.montoDispFam)
            consola_salida.innerHTML +=
                '==========================================<br>'
        }
    }
}
var controler = new Cl_controler()
controler.procesar()
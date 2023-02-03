
// TEMPERATURAS

function temperatura() {
    var kelvintxt = document.getElementById("kelvin")
    var celsiustxt = document.getElementById("celsius")
    var fahrenheittxt = document.getElementById("fahrenheit")
    var kelvinlength = kelvintxt.value.length
    var celsiuslength = celsius.value.length
    var fahrenheitlength = fahrenheittxt.value.length

    if (isNaN(kelvintxt.value) || isNaN(celsiustxt.value) || isNaN(fahrenheittxt.value)) {
        alert("Erro! Insira um valor válido.")

    } else {
        if (kelvinlength > 0) {
            var celsiusresult = kelvintxt.value - 273.15
            var fahrenheitresult = (kelvintxt.value - 273.15) * 9 / 5 + 32

            celsiustxt.value = ` ${celsiusresult.toFixed(2)} °C`
            fahrenheittxt.value = ` ${fahrenheitresult.toFixed(2)} °F`
            kelvintxt.value += ' K'


        } else if (celsiuslength > 0) {
            var kelvinresult = Number(celsiustxt.value) + 273.15
            var fahrenheitresult = (celsiustxt.value * 9 / 5) + 32

            kelvintxt.value = ` ${kelvinresult.toFixed(2)} K`
            fahrenheittxt.value = ` ${fahrenheitresult.toFixed(2)} °F`
            celsiustxt.value += " °C"

        } else if (fahrenheitlength > 0) {
            var kelvinresult = (fahrenheittxt.value - 32) * 5 / 9 + 273.15
            var celsiusresult = (fahrenheittxt.value - 32) * 5 / 9

            kelvintxt.value = ` ${kelvinresult.toFixed(2)} K`
            celsiustxt.value = ` ${celsiusresult.toFixed(2)} °C`
            fahrenheittxt.value += " °F"

        }
    }
}

function resettemperatura() {
    var kelvintxt = document.getElementById("kelvin")
    var celsiustxt = document.getElementById("celsius")
    var fahrenheittxt = document.getElementById("fahrenheit")
    kelvintxt.value = ""
    celsiustxt.value = ""
    fahrenheittxt.value = ""
}



// MOEDAS

function moedas() {
    var usdtxt = document.getElementById("usd")
    var brltxt = document.getElementById("brl")
    var btctxt = document.getElementById("btc")
    var usdlength = usdtxt.value.length
    var brllength = brltxt.value.length
    var btclength = btctxt.value.length
    var usdbrl = Number(5.37)
    var usdbtc = Number(0.000054)
    var brlusd = Number(0.19)
    var brlbtc = Number(0.0000100)
    var btcusd = Number(18570.50)
    var btcbrl = Number(99896.29)


    if (isNaN(usdtxt.value) || isNaN(brltxt.value) || isNaN(btctxt.value)) {
        alert("Erro! Insira um valor válido.")

    } else {
        if (usdlength > 0) {
            var brlresult = usdtxt.value * usdbrl
            var btcresult = usdtxt.value * usdbtc

            brltxt.value = ` ${brlresult.toFixed(2)} BRL`
            btctxt.value = ` ${btcresult.toFixed(7)} BTC` 
            usdtxt.value += " USD"


        } else if (brllength > 0) {
            var usdresult = brltxt.value * brlusd
            var btcresult = brltxt.value * brlbtc

            usdtxt.value = ` ${usdresult.toFixed(2)} USD`
            btctxt.value = ` ${btcresult.toFixed(7)} BTC` 
            brltxt.value += " BRL"


        } else if (btclength > 0) {
            var usdresult = btctxt.value * btcusd
            var brlresult = btctxt.value * btcbrl

            usdtxt.value = ` ${usdresult.toFixed(2)} USD`
            brltxt.value = ` ${brlresult.toFixed(2)} BRL`
            btctxt.value += " BTC"

        }
    }

}

function resetmoedas() {
    var usdtxt = document.getElementById("usd")
    var brltxt = document.getElementById("brl")
    var btctxt = document.getElementById("btc")
    usdtxt.value = ""
    brltxt.value = ""
    btctxt.value = ""
}



// DISTANCIAS

function distancia() {
    var kmtxt = document.getElementById("quilometros")
    var mtxt = document.getElementById("metros")
    var cmtxt = document.getElementById("centimetros")
    var kmlength = kmtxt.value.length
    var mlength = mtxt.value.length
    var cmlength = cmtxt.value.length

    if (isNaN(kmtxt.value) || isNaN(mtxt.value) || isNaN(cmtxt.value)) {
        alert("Erro! Insira um valor válido.")

    } else {
        if (kmlength > 0) {
            var mresult = kmtxt.value * 1000
            var cmresult = kmtxt.value * 100000

            mtxt.value = ` ${mresult} m`
            cmtxt.value = ` ${cmresult} cm`
            kmtxt.value += " km"

        } else if (mlength > 0) {
            var kmresult = mtxt.value / 1000
            var cmresult = mtxt.value * 100

            kmtxt.value = ` ${kmresult} km`
            cmtxt.value = ` ${cmresult} cm`
            mtxt.value += " m"

        } else if (cmlength > 0) {
            var kmresult = cmtxt.value / 100000
            var mresult = cmtxt.value / 100

            kmtxt.value = ` ${kmresult} km`
            mtxt.value = ` ${mresult} m`
            cmtxt.value += " cm"
        }
    }
}

function resetdistancia() {
    var kmtxt = document.getElementById("quilometros")
    var mtxt = document.getElementById("metros")
    var cmtxt = document.getElementById("centimetros")
    kmtxt.value = ""
    mtxt.value = ""
    cmtxt.value = ""
}



// TEMPO

function tempo() {
    var horastxt = document.getElementById("horas")
    var minutostxt = document.getElementById("minutos")
    var segundostxt = document.getElementById("segundos")
    var horaslength = horastxt.value.length
    var minutoslength = minutostxt.value.length
    var segundoslength = segundostxt.value.length

    if (isNaN(horastxt.value) || isNaN(minutostxt.value) || isNaN(segundostxt.value)) {
        alert("Erro! Insira um valor válido.")

    } else {
        if (horaslength > 0) {
           var minutosresult = horastxt.value * 60
           var segundosresult = horastxt.value * 3600

            minutostxt.value = ` ${minutosresult} m`
            segundostxt.value = ` ${segundosresult} s`
            horastxt.value += " h"

        } else if (minutoslength > 0) {
            horasresult = minutostxt.value / 60
            segundosresult = minutostxt.value * 60

            horastxt.value = ` ${horasresult.toFixed(3)} h`
            segundostxt.value = ` ${segundosresult} s`
            minutostxt.value += " m"

        } else if (segundoslength > 0) {
           var horasresult = segundostxt.value / 3600
           var minutosresult = segundostxt.value / 60

            horastxt.value = ` ${horasresult.toFixed(3)} h`
            minutostxt.value = ` ${minutosresult.toFixed(3)} m`
            segundostxt.value += " s"
        }
    }
}


function resettempo() {
    var horastxt = document.getElementById("horas")
    var minutostxt = document.getElementById("minutos")
    var segundostxt = document.getElementById("segundos")
    horastxt.value = ""
    minutostxt.value = ""
    segundostxt.value = ""
}
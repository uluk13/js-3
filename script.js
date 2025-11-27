function ColorFon (FonValue) {
    const value = prompt('введите цвет',FonValue)
    document.body.style.backgroundColor = value;
}

ColorFon()


function TraficColor (color) {
    const colorValue = prompt ('Введите цвет светафора',color )
    document.querySelector("div").style.backgroundColor = colorValue;
    if(colorValue == 'green') {
        document.querySelector("div").innerText = "GO"
    }
    else if (colorValue == 'red') {
        document.querySelector("div").innerText = "STOP"
    }
    else if (colorValue == 'yellow') {
        document.querySelector("div").innerText = "WAIT"
    }
    else document.querySelector('div').innerText = "Неверный цвет"
}
TraficColor()


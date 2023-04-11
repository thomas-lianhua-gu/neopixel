input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 9; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(30)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 9; index++) {
        strip.setPixelColor(9 - index, neopixel.colors(NeoPixelColors.Black))
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(30)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
	
})

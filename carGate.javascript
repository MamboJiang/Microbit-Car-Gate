powerbrick.RfidPresent(function () {
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # #
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    powerbrick.rgbConnect(powerbrick.Ports.PORT2)
    powerbrick.showRainbow(1, 360)
    powerbrick.Servo(powerbrick.Servos.S1, 90)
    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showString(powerbrick.RfidRead(powerbrick.RfidSector.S1, powerbrick.RfidBlock.B0))
    People += 1
    powerbrick.rgbClear()
    basic.showIcon(IconNames.Happy)
    powerbrick.Servo(powerbrick.Servos.S1, 0)
})
input.onButtonPressed(Button.AB, function () {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    People = 0
    basic.showString("People:0")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("People:")
    basic.showNumber(People)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
let People = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (powerbrick.Ultrasonic(powerbrick.Ports.PORT3) < 5) {
        basic.showLeds(`
            . # # # .
            # . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
    }
    while (powerbrick.Ultrasonic(powerbrick.Ports.PORT3) > 5) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    }
})
basic.forever(function () {
    powerbrick.RfidProbe()
    basic.pause(100)
    powerbrick.rgbPixRotate(1)
    basic.pause(100)
})

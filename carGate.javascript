powerbrick.RfidPresent(function () {
    Name = powerbrick.RfidRead(powerbrick.RfidSector.S1, powerbrick.RfidBlock.B0)
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
    powerbrick.MotorStopAll()
    powerbrick.MotorStopAll()
    powerbrick.Servo(powerbrick.Servos.S1, 90)
    powerbrick.showRainbow(1, 360)
    music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    basic.showString(Name)
    People += 1
    powerbrick.MotorStopAll()
    powerbrick.rgbClear()
    powerbrick.MotorStopAll()
    basic.showIcon(IconNames.Happy)
    powerbrick.MotorStopAll()
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
input.onButtonPressed(Button.B, function () {
    People += -1
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showString("People:")
    basic.showNumber(People)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
let People = 0
let Name = ""
powerbrick.Servo(powerbrick.Servos.S1, 2)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (powerbrick.Ultrasonic(powerbrick.Ports.PORT3) < 10) {
        powerbrick.Servo(powerbrick.Servos.S1, 90)
    }
    basic.pause(2000)
    while (powerbrick.Ultrasonic(powerbrick.Ports.PORT3) > 10) {
        powerbrick.Servo(powerbrick.Servos.S1, 2)
    }
})
basic.forever(function () {
    powerbrick.RfidProbe()
    basic.pause(100)
    powerbrick.rgbPixRotate(1)
    basic.pause(100)
})

function base () {
    basic.clearScreen()
    led.plot(0, 3)
    SuperBit.Servo(SuperBit.enServo.S5, 70)
    basic.pause(1000)
    led.plot(1, 3)
    SuperBit.Servo(SuperBit.enServo.S5, 60)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S5, 50)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S5, 40)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S5, 30)
    basic.pause(1000)
}
function elbow () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S6, 90)
    basic.pause(1000)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S6, 80)
    basic.pause(1000)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S6, 60)
    basic.pause(1000)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S6, 40)
    basic.pause(1000)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S6, 30)
    basic.pause(1000)
}
function frontarm () {
    basic.clearScreen()
    led.plot(0, 1)
    SuperBit.Servo(SuperBit.enServo.S7, 110)
    basic.pause(1000)
    led.plot(1, 1)
    SuperBit.Servo(SuperBit.enServo.S7, 100)
    basic.pause(1000)
    led.plot(2, 1)
    SuperBit.Servo(SuperBit.enServo.S7, 90)
    basic.pause(1000)
    led.plot(3, 1)
    SuperBit.Servo(SuperBit.enServo.S7, 80)
    basic.pause(1000)
    led.plot(4, 1)
    SuperBit.Servo(SuperBit.enServo.S7, 70)
    basic.pause(1000)
}
function wrist () {
    basic.clearScreen()
    led.plot(0, 0)
    SuperBit.Servo(SuperBit.enServo.S8, 0)
    basic.pause(1000)
    led.plot(1, 0)
    SuperBit.Servo(SuperBit.enServo.S8, 90)
    basic.pause(1000)
    led.plot(2, 0)
    SuperBit.Servo(SuperBit.enServo.S8, 180)
    basic.pause(1000)
    led.plot(3, 0)
    SuperBit.Servo(SuperBit.enServo.S8, 90)
    basic.pause(1000)
}
let range = SuperBit.RGB_Program().range(0, 3)
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(500)
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})

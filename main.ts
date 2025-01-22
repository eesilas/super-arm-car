function wristv () {
    basic.clearScreen()
    led.plot(0, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 0)
    basic.pause(1000)
    led.plot(1, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 90)
    basic.pause(1000)
    led.plot(2, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 180)
    basic.pause(1000)
    led.plot(3, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 90)
    basic.pause(1000)
}
function base () {
    basic.clearScreen()
    led.plot(0, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 0)
    basic.pause(1000)
    led.plot(1, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 5)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 10)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 15)
    basic.pause(1000)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 20)
    basic.pause(1000)
}
function elbow () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 20)
    basic.pause(1000)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 35)
    basic.pause(1000)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 50)
    basic.pause(1000)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 70)
    basic.pause(1000)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
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
	
}
function wristh () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 90)
    basic.pause(1000)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 80)
    basic.pause(1000)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 60)
    basic.pause(1000)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 40)
    basic.pause(1000)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 30)
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
basic.forever(function () {
    elbow()
    basic.showIcon(IconNames.Duck)
    basic.pause(5000)
})

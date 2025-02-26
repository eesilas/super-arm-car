function clamp () {
    for (let index = 0; index <= 180; index++) {
        SuperBit.Servo(SuperBit.enServo.S6, index)
        basic.pause(100)
    }
    for (let index = 0; index <= 180; index++) {
        SuperBit.Servo(SuperBit.enServo.S6, index)
        basic.pause(100)
    }
}
function wristv () {
    basic.clearScreen()
    led.plot(0, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 0)
    basic.pause(100)
    led.plot(1, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 90)
    basic.pause(100)
    led.plot(2, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 180)
    basic.pause(100)
    led.plot(3, 0)
    SuperBit.Servo(SuperBit.enServo.S5, 90)
    basic.pause(100)
}
function elbow_2 () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
    basic.pause(100)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 70)
    basic.pause(100)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 50)
    basic.pause(100)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 30)
    basic.pause(100)
    led.plot(4, 2)
}
function base () {
    basic.clearScreen()
    led.plot(0, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 0)
    basic.pause(100)
    led.plot(1, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 5)
    basic.pause(100)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 10)
    basic.pause(100)
    led.plot(3, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 15)
    basic.pause(100)
    led.plot(4, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 20)
    basic.pause(100)
}
function base_2 () {
    basic.clearScreen()
    led.plot(0, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 20)
    basic.pause(100)
    led.plot(1, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 15)
    basic.pause(100)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 10)
    basic.pause(100)
    led.plot(3, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 5)
    led.plot(4, 3)
    basic.pause(100)
}
function elbow () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 20)
    basic.pause(100)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 35)
    basic.pause(100)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 50)
    basic.pause(100)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 70)
    basic.pause(100)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
    basic.pause(100)
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
    SuperBit.Servo(SuperBit.enServo.S2, 165)
    basic.pause(100)
    led.plot(1, 2)
    led.plot(2, 2)
    led.plot(3, 2)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S2, 20)
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
SuperBit.Servo(SuperBit.enServo.S3, 70)
basic.forever(function () {
    elbow_2()
    basic.pause(1000)
    base_2()
    basic.pause(1000)
    clamp()
    basic.pause(1000)
    base()
    basic.pause(1000)
    elbow()
    basic.pause(1000)
})

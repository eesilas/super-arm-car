function clamp () {
    for (let index = 0; index <= 100; index++) {
        SuperBit.Servo(SuperBit.enServo.S6, index)
        led.toggle(0, 0)
        led.toggle(1, 0)
        led.toggle(2, 0)
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
function clamp_2 () {
    for (let index = 0; index <= 100; index++) {
        SuperBit.Servo(SuperBit.enServo.S6, 100 - index)
        led.toggle(3, 0)
        led.toggle(4, 0)
        basic.pause(100)
    }
}
function elbow_2 () {
    basic.clearScreen()
    led.plot(0, 1)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
    basic.pause(200)
    led.plot(1, 1)
    SuperBit.Servo(SuperBit.enServo.S1, 70)
    basic.pause(200)
    led.plot(2, 1)
    SuperBit.Servo(SuperBit.enServo.S1, 50)
    basic.pause(500)
    led.plot(3, 1)
    SuperBit.Servo(SuperBit.enServo.S1, 30)
    basic.pause(200)
    led.plot(4, 1)
}
function base () {
    basic.clearScreen()
    led.plot(0, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 35)
    basic.pause(200)
    led.plot(1, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 40)
    basic.pause(200)
    led.plot(2, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 50)
    basic.pause(500)
    led.plot(3, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 90)
    basic.pause(200)
    led.plot(4, 3)
    SuperBit.Servo(SuperBit.enServo.S3, 105)
    basic.pause(200)
}
function base_2 () {
    basic.clearScreen()
    led.plot(0, 4)
    SuperBit.Servo(SuperBit.enServo.S3, 55)
    basic.pause(200)
    led.plot(1, 4)
    SuperBit.Servo(SuperBit.enServo.S3, 45)
    basic.pause(200)
    led.plot(2, 4)
    SuperBit.Servo(SuperBit.enServo.S3, 35)
    basic.pause(500)
    led.plot(3, 4)
    SuperBit.Servo(SuperBit.enServo.S3, 30)
    led.plot(4, 4)
    basic.pause(200)
}
function elbow () {
    basic.clearScreen()
    led.plot(0, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 20)
    basic.pause(200)
    led.plot(1, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 35)
    basic.pause(200)
    led.plot(2, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 50)
    basic.pause(500)
    led.plot(3, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 90)
    basic.pause(200)
    led.plot(4, 2)
    SuperBit.Servo(SuperBit.enServo.S1, 100)
    basic.pause(500)
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
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    -255
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    255,
    SuperBit.enMotors.M4,
    255
    )
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M2,
    -255
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    255,
    SuperBit.enMotors.M4,
    255
    )
})
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
    . # # # .
    . . # . .
    . . # . .
    `)
basic.pause(100)
SuperBit.Servo(SuperBit.enServo.S3, 70)
basic.forever(function () {
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(200)
    basic.showNumber(1)
    elbow_2()
    basic.pause(1000)
    basic.showNumber(2)
    base_2()
    basic.pause(1000)
    basic.showNumber(3)
    base()
    basic.pause(1000)
    basic.showNumber(4)
    elbow()
    basic.pause(1000)
    basic.showIcon(IconNames.Silly)
    elbow_2()
    basic.pause(100)
    clamp()
    basic.pause(100)
    clamp_2()
    basic.pause(100)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M2,
    255
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -255,
    SuperBit.enMotors.M4,
    -255
    )
    basic.pause(500)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0,
    SuperBit.enMotors.M2,
    0
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    0,
    SuperBit.enMotors.M4,
    0
    )
})

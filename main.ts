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
basic.showString("X")
basic.clearScreen()
basic.forever(function () {
    SuperBit.Servo(SuperBit.enServo.S7, 100)
    basic.pause(1000)
    SuperBit.Servo(SuperBit.enServo.S7, 90)
    basic.pause(1000)
    SuperBit.Servo(SuperBit.enServo.S7, 80)
    basic.pause(1000)
})
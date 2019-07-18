// tests go here; this will not be compiled when this package is used as a library
let controller = smartboard.chipAddress("0x40")
input.onButtonPressed(Button.A, () => {
    smartboard.setServoPosition(smartboard.ServoNum.Servo1, 0, controller)
    basic.showString("A")
})
input.onButtonPressed(Button.B, () => {
    smartboard.setServoPosition(smartboard.ServoNum.Servo1, 180, controller)
    basic.showString("B")
})
input.onButtonPressed(Button.AB, () => {
    smartboard.setServoPosition(smartboard.ServoNum.Servo1, 90, controller)
    basic.showString("C")
})
basic.showNumber(controller)
smartboard.init(controller, 60)
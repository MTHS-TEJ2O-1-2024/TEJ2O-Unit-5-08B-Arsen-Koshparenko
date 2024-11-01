/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program Turn on step motors and stop when distance to object less than 10 cm
*/

//setup
let distance = 0
basic.showIcon(IconNames.Happy)

//button A is pressed
input.onButtonPressed(Button.A, function () {
    while (true) {
        distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)
        basic.showNumber(distance)
        if (distance > 10) {
            robotbit.MotorRunDual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, 150)
            robotbit.StpCarMove(10, 48)
        }
        else {
            robotbit.MotorStopAll()
            robotbit.StpCarMove(-10, 48)
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
            robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
            robotbit.MotorRunDual(robotbit.Motors.M1A, 150, robotbit.Motors.M2A, 150)
            robotbit.StpCarMove(10, 48)
        }
    }
})

enum RadioMessage {
    message1 = 49434
}
// Set radio group
// Function to handle Button A press
input.onButtonPressed(Button.A, function () {
    // Concatenate all letters into a single string
    message = "" + letter1 + letter2 + letter3 + letter4 + letter5 + letter6 + letter7
    radio.sendValue(message, 1)
    // Show the message on the micro:bit display
    basic.showString("Sent: " + message)
})
// Function to handle A+B button press
input.onButtonPressed(Button.AB, function () {
    // Save the current letter to the next available variable
    if (letter1 == "") {
        letter1 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("1")
        basic.showString("->")
        basic.showString(letter1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter2 == "") {
        letter2 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("2")
        basic.showString("->")
        basic.showString(letter2)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter3 == "") {
        letter3 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("3")
        basic.showString("->")
        basic.showString(letter3)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter4 == "") {
        letter4 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("4")
        basic.showString("->")
        basic.showString(letter4)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter5 == "") {
        letter5 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("5")
        basic.showString("->")
        basic.showString(letter5)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter6 == "") {
        letter6 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("6")
        basic.showString("->")
        basic.showString(letter6)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (letter7 == "") {
        letter7 = String.fromCharCode(currentIndex + 65)
        basic.showIcon(IconNames.Yes)
        basic.showString("7")
        basic.showString("->")
        basic.showString(letter7)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showString("You have reached the max character amount. To send, hit A.")
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
    }
})
// Function to handle Button B press
input.onButtonPressed(Button.B, function () {
    // Move to the next letter
    currentIndex += 1
    if (currentIndex > 25) {
        // Check if the index exceeds 25 (Z)
        // Reset to A
        currentIndex = 0
    }
    // Show the current letter (A-Z)
    basic.showString(String.fromCharCode(currentIndex + 65))
})
radio.onReceivedValue(function (name, value) {
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showString(name)
})
let currentIndex = 0
let letter7 = ""
let letter6 = ""
let letter5 = ""
let letter4 = ""
let letter3 = ""
let letter2 = ""
let letter1 = ""
let message = ""
// Variable for the seventh letter
// Set radio group
radio.setGroup(2)
// Forever loop, add any code you want to run continuously here
// Add any code that should run continuously
basic.forever(function () {
	
})

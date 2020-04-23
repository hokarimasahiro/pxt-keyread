/**
 * read key
 */
//% weight=100 color=#0fbc11 icon="\u2328"
namespace keyRead {
    /**
     * read key
     */
    //% blockId="readKey" block="read key"
    export function readKey(): string {
        const timeLimit = 5000;
        const longPress = 500;
        const clickInterval = 500;

        let startTime = input.runningTimeMicros() / 1000
        let lastKeyTime = 0;
        let keyData = "";
        let tempKey = "";

        while (input.runningTimeMicros() / 1000 < startTime + timeLimit && keyData == "") {
            if (input.buttonIsPressed(Button.AB)) {
                if (tempKey != "AB") {
                    lastKeyTime = input.runningTimeMicros() / 1000;
                }
                tempKey = "AB";
            } else if (input.buttonIsPressed(Button.A)) {
                if (tempKey != "A") {
                    lastKeyTime = input.runningTimeMicros() / 1000;
                }
                tempKey = "A";
            } else if (input.buttonIsPressed(Button.B)) {
                if (tempKey != "B") {
                    lastKeyTime = input.runningTimeMicros() / 1000;
                }
                tempKey = "B";
            } else if (input.isGesture(Gesture.Shake)) {
                if (tempKey != "S") {
                    lastKeyTime = input.runningTimeMicros() / 1000;
                }
                tempKey = "S";
            } else {
                if (tempKey != "") {
                    if (input.runningTimeMicros() / 1000 > lastKeyTime + longPress) {
                        keyData = "L-" + tempKey;
                    } else {
                        keyData = tempKey;
                    }
                }
            }
        }
        if (input.runningTimeMicros() / 1000 >= startTime + timeLimit) {
            return "";
        }
        return keyData;
    }
}

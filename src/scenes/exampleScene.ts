import { Scene } from 'phaser';

export default class ExampleScene extends Scene {
    create() {
        const text = this.add.text(200, 200, "Hello World !", {
            backgroundColor: "white",
            color: "blue",
            fontSize: 48
        });

        text.setInteractive({useHandCursor: true});

        text.on("pointerup", () => {
            console.log("Click");
        });
    }
}
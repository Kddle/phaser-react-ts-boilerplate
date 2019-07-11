import Phaser from 'phaser';
import ExampleScene from '../scenes/exampleScene';

import * as React from 'react';

export interface IGameProps {}

export default class IGame extends React.Component<IGameProps, any> {
    componentDidMount() {
        const config : Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 400,
            height: 400,
            parent: "game-container",
            scene: [ExampleScene]
        };

        new Phaser.Game(config);
    }

    shouldComponentUpdate() {
        return false;
    }

    public render() {
        return <div id="game-container"></div>
    }
}
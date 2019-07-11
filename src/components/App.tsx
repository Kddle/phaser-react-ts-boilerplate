import React from 'react';
import Game from './Game';

export default class App extends React.Component {
    public render() {
        return (
            <div id="app">
                <Game />
                <div>Hello World !</div>
            </div>
        )
    }
}
import React from 'react';
import { Key } from './Key.js';
import { Notes, validKeys,keyToNote } from '../global/constants.js';

class Piano extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          pressedKeys: [], /*hold pressed keys*/
            volume: 1, /*hold volume*/
        };
    }

    playNote = (note) =>{
        if (!this.state.pressedKeys.includes(note)){
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.currentTime = 0; /*Hold current time so for a key to be played again*/
            noteAudio.volume = this.state.volume;
            noteAudio.play();
        }
    };

    handleKeyDown = (e) =>{
        if (e.repeat){return}
        const key = e.key;
        if (!validKeys.includes(key)) {
            return; /*ignore keys other than mentioned in instructions*/
        }
        const updatedPressedKeys = [...this.state.pressedKeys];
        if(!updatedPressedKeys.includes(key) && validKeys.includes(key)){
            updatedPressedKeys.push(key);
        }
        this.setState({ pressedKeys: updatedPressedKeys });
        this.playNote(keyToNote[key]);
    };

    handleKeyUp = (e)=>{
        const index = this.state.pressedKeys.indexOf(e.key);
        if (index>-1){
            this.setState(state =>({
                pressedKeys: this.state.pressedKeys.splice(index,1) /*delete key when key up*/
            }));
        }
    }


    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    render(){
        /*declare keys*/
        const keys  = Notes.map((note,index)=>{
           return (<Key
            key={index}
            note={note}
            pressedKeys={this.state.pressedKeys}
           />);
        });

        /*declare audio files*/
        const audioFiles = Notes.map((note,index)=>{
            return (
              <audio
              id={note}
              key={index}
              src={`/noteAudio/${note}.mp3`}
              />);
        });

        return(
            <div className="piano-container">
                {/*info container holds header and volume*/}
                <div className="info-container">
                    <header className="header">React Piano</header>
                    <label htmlFor="volume" className="volume">Volume</label>
                    <input type="range"
                           id="volume"
                           min="0"
                           max="1"
                           step="0.1"
                           value={this.state.volume}
                           onChange={(e) => this.setState({volume: e.target.value})}
                    />
                </div>
                <div className="piano">{keys}</div>
                <div>{audioFiles}</div>
                <div className="instructions">
                    <p>Use "Z", "X", "C", "V", "B", "N", "M", for white piano keys</p>
                    <p>Use "S", "F", "G", "J", "K"  for black piano keys</p>
                </div>
            </div>
        )
    }
}

export {Piano};
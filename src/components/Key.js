import React from 'react';
import { noteToKey }   from '../global/constants.js';

class Key extends React.Component{
    blackKeyBetween = (note) =>{
        return note.includes("f");
    }

    keyIsPressed = (note,pressedKeys)=>{
        return pressedKeys.includes(noteToKey[note]);
    }


    render(){
        /*double letter keys are the black ones between*/
        let keyClassName = "key";
        const blackKeyBetween = this.blackKeyBetween(this.props.note);
        if(blackKeyBetween){keyClassName += " black"}
        /*check if a key is pressed*/
        const keyIsPressed = this.keyIsPressed(this.props.note,this.props.pressedKeys);
        if(keyIsPressed){keyClassName += " pressed"}

        let key;
        /*declare black without letters and whites with letters*/
        if(blackKeyBetween) {
            key = <div className={keyClassName}></div>
        }else{
            key = (<div className={keyClassName}>
                <div className="key-text">
                    {this.props.note.toUpperCase()}
                </div>
            </div>);
        }
        return key;
    }
}

export { Key };
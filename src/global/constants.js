/*notes with f letter in them represent "flat "black keys*/
const Notes = ["c","cf","d","df","e","eph","ephf","g","gf","a","af","b"];

const validWhiteKeys = ["z","x","c","v","b","n","m"];
const validBlackKeys = ["s","f","g","j","k"];

const validKeys = [...validWhiteKeys, ...validBlackKeys];

const keyToNote = {
    z:"a",
    s:"af",
    x:"b",
    c:"c",
    f:"cf",
    v:"d",
    g:"df",
    b:"e",
    n:"eph",
    j:"ephf",
    m: "g",
    k: "gf",
};

const noteToKey = {
    a:"z",
    af:"s",
    b:"x",
    c:"c",
    cf:"f",
    d:"v",
    df:"g",
    e:"b",
    eph:"n",
    ephf:"j",
    g: "m",
    gf: "k",
};

export { Notes, keyToNote, noteToKey, validKeys };
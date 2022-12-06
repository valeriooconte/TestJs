const prompt = require("prompt-sync")({sigint:true});

const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  };

class Block {
    //Proprietà
    hash;
    data;
    previous_hash;

    //Costruttore
    constructor(hash, data, previous_hash) {
        this.hash = hash;
        this.data = data;
        this.previous_hash = previous_hash;
    }

    //Getter
    getHash() {
        return this.hash;
    }

    getData() {
        return this.data;
    }

    getPreviousHash() {
        return this.previous_hash;
    }

    //Setter
    setHash(new_hash) {
        this.hash = new_hash;
    }

    setData(new_data) {
        this.data = new_data;
    }

    setPreviousHash(new_previousHash) {
        this.previous_hash = new_previousHash;
    }
}

function init_block_zero(block) {
    block.setPreviousHash(0);
    block.setData('Blocco 0');
    block.setHash(cyrb53(block.getData()));
}

function init_block(block, dataToStore, prev_hash) {
    block.setPreviousHash(prev_hash);
    block.setData(dataToStore);
    block.setHash(cyrb53(block.getData()));
}

let NUM_BLOCKS = prompt("Inserisci il numero di blocchi che vuoi creare: ") - 1;
let i, prev;
let info;
let blocks = [ ];

let b_zero = new Block;
init_block_zero(b_zero); 

blocks[0] = new Block;
info = 'Blocco 1';
init_block(blocks[0], info, b_zero.getHash());   

for (i = 1; i < NUM_BLOCKS; i++) {
    prev = i - 1;
    info = `Blocco ${i + 1}`;
    blocks[i] = new Block;
    init_block(blocks[i], info, blocks[prev].getHash());   
}

console.log('Informazione blocco: ' + b_zero.getData());
console.log('Hash blocco: ' + b_zero.getHash());
console.log('Hash blocco precedente: ' + b_zero.getPreviousHash());
console.log(' ');

for (i = 0; i < NUM_BLOCKS; i++) {
    console.log('Informazione blocco: ' + blocks[i].getData());
    console.log('Hash blocco: ' + blocks[i].getHash());
    console.log('Hash blocco precedente: ' + blocks[i].getPreviousHash());
    console.log(' ');
}

console.log("prova commit branch");

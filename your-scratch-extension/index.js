const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Cloud {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
          // unique ID for your extension
          id: 'cloud',
      
          // name displayed in the Scratch UI
          name: 'Cloud',
      
          // colours to use for your extension blocks
          color1: '#000099',
          color2: '#660066',
      
          // your Scratch blocks
          blocks: [
            {
              // function where your code logic lives
              opcode: 'writeToCloud',
      
              // type of block
              blockType: BlockType.COMMAND,
      
              // label to display on the block
              text: 'Write [text] To Cloud On Line [line]',
      
              // arguments used in the block
              arguments: {
                text: {
                  defaultValue: "Hello, world!",
      
                  // type/shape of the parameter
                  type: ArgumentType.STRING
                },
                line: {
                  defaultValue: "",
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'fetchCloudData',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: 'Fetch Cloud Data From Line [line]',

              // arguments used in the block
              arguments: {
                line: {
                  defaultValue: "",
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'cloudLines',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: 'Cloud Lines',
            },
          ]
        };
      }

    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
writeToCloud ({ }) {
  return;
}

fetchCloudData ({ }) {
  return;
}

cloudLines ({ }) {
  return;
}
}

module.exports = Cloud;

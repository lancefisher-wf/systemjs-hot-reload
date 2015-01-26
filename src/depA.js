//import { content } from './depC';
var depC = require('depC');
var content = depC.content;

console.log('loaded depA 2: ', content);

//export var name = 'depA';
exports.name = 'depA updated';
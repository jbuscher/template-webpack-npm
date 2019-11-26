import HelloGenerator from './some-class';

let hello = new HelloGenerator().getHello();
document.getElementById("anchor-div").innerText = hello;
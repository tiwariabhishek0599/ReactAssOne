


let root=document.querySelector(".root");

let heading=React.createElement("h1",null,"Learn Web Development");
let para1=React.createElement("p",null,"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

let anchor=React.createElement("a",{href:"#" , id:"link"},"the rest of MDN");
let para2=React.createElement("p",null,`The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from `,anchor,", and other intermediate to advanced resources that assume a lot of previous knowledge.");

let para3=React.createElement("p",null,"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")

ReactDOM.render([heading,para1,para2,para3],root);
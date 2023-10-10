 const parser = new DOMParser();

 const xmlString = ` <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;


const xmlDOM = parser.parseFromString(xmlString,"text/xml");

const list = xmlDOM.querySelector("list");
const students = xmlDOM.querySelectorAll("student");
let result = { list:[] };
students.forEach(element=>{
      result.list.push({
          name: `${element.querySelector("first").textContent} ${element.querySelector("second").textContent}`, 
          age: `${element.querySelector("age").textContent}`,
          prof: `${element.querySelector("prof").textContent}`,
          lang: `${element.querySelector("name").getAttribute("lang")}`
})

})
/*
const student1Node = listNode.querySelector("student");
const nameNode = listNode.querySelector("name");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

const student2Node = listNode.querySelector("student");
const name2Node = listNode.querySelector("name");
const first2Node = listNode.querySelector("first");
const second2Node = listNode.querySelector("second");
const age2Node = listNode.querySelector("age");
const prof2Node = listNode.querySelector("prof");


const langAttr = listNode.getAttribute("lang");
const lang2Attr = listNode.getAttribute("lang");



const studentResult1 = {
    lang: langAttr,
    name: nameNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent
}

const studentResult2 = {
    lang: lang2Attr,
    name: name2Node.textContent,
    first: first2Node.textContent,
    second: second2Node.textContent,
    age: Number(age2Node.textContent),
    prof: prof2Node.textContent
}

const resultObj = {
  list: [studentResult1,studentResult2]
}

console.log(resultObj)
*/
console.log(result);
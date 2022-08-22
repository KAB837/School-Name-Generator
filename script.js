
// Logo generator

let crest1Path =  "images/crest-1.png";
let crest2Path =  "images/crest-2.png";
let crest3Path =  "images/crest-3.png";
let crest4Path =  "images/crest-4.png";
let crest5Path =  "images/crest-5.png";
let crest6Path =  "images/crest-6.png";
let crest7Path =  "images/crest-7.png";
let crest8Path =  "images/crest-8.png";
let crest9Path =  "images/crest-9.png";
let crest10Path =  "images/crest-10.png";
let crest11Path =  "images/crest-11.png";
let crest12Path =  "images/crest-12.png";
let crest13Path =  "images/crest-13.png";


const getLogo = () => {
  let crests = [crest1Path, crest2Path, crest3Path, crest4Path, crest5Path, crest6Path, crest7Path, crest8Path, crest9Path, crest10Path, crest11Path, crest12Path, crest13Path];
  let i = Math.floor(Math.random() * 13);
  return crests[i];
  };


// School Name Generator code

const getWord1 = () => {
  let wordlist1 = ['International', 'Global', 'Worldwide', 'Intercontinental', 'Universal', 'World', 'Intergalactic'];
  let i = Math.floor(Math.random() * 7);
  return wordlist1[i];
};


const getWord2 = () => {
  let wordlist2 = ['English', 'Language', 'Conversation', 'Communication', 'Gibberish', 'Polyglot', 'Lexicon', 'TEFL', 'TESL', 'TESOL', 'Lingua'];
  let i = Math.floor(Math.random() * 11);
  return wordlist2[i];
};

const getWord3 = () => {
  let wordlist3 = ['Instruction', 'Coaching', 'Teaching', 'Training', 'Tutoring', 'Trainer', 'Tutor', 'Assistance']
  let i = Math.floor(Math.random() * 8);
  return wordlist3[i];
};


const getWord4 = () => {
  let wordlist4 = ['School', 'College', 'Academy', 'Institute', 'Organization', 'Association', 'University', 'Seminary', 'Club']
let i = Math.floor(Math.random() * 9);
return wordlist4[i];
};

const generateName = () => {
  return getWord1() + ' ' + getWord2() + ' ' + getWord3()  + ' ' + getWord4();
 };


// Click button to generate school name and display school name within div

let eventTarget = document.getElementById('button');

function showSchoolName() {
  let nameDiv = document.getElementById('name');
  nameDiv.innerHTML = generateName();
};

function showLogo() {
  document.querySelector('img').src = getLogo();
};

eventTarget.addEventListener('click', showSchoolName);
eventTarget.addEventListener('click', showLogo);


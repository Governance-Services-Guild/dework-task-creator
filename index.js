const repo2 = "";
const assignees = ["Nadim Karam", "Miroslav Rajh", "Tevo Saks", "JP", "Peter Wolcott", "Stephen Whitenstall", "Vanessa Cardui", "Nori Nishigaya", "Felix Weber", "André Diamond"];
let assignees3 = [];
let tags = ["operation", "Weekly meeting", "Facilitate meeting", "Note Taking"];
let tags3 = [];
//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
}

function validate(name) {
  if (document.getElementById(name).checked) {
      return true;
  } else {
      return false;
  }
}

function getAssignees() {
  assignees3 = [];
  let nori = validate('nori')
  let nadim = validate('nadim')
  let miro = validate('miro')
  let tevo = validate('tevo')
  let stephen = validate('stephen')
  let vanessa = validate('vanessa')
  let jp = validate('jp')
  let peter = validate('peter')
  let andre = validate('andre')
  let felix = validate('felix')
  const assignees2 = [nadim, miro, tevo, jp, peter, stephen, vanessa, nori, felix, andre];
  for (i in assignees2) {
    if (assignees2[i] == true) {
      assignees3.push(nameAssign(assignees[i]))
      console.log("true", i)
    } else {
      console.log("false", i);
    }
  }
  console.log("final", String(assignees3))
}
function getTags() {
  tags3 = [];
  let operation = validate('operation')
  let wMeeting = validate('wMeeting')
  let facilitate = validate('facilitate')
  let noteTaking = validate('noteTaking')
  const tags2 = [operation, wMeeting, facilitate, noteTaking];
  for (i in tags2) {
    if (tags2[i] == true) {
      tags3.push(tags[i])
      console.log("true", i)
    } else {
      console.log("false", i);
    }
  }
  console.log("final", String(tags3))
}

//getAssignees();

function nameAssign(name) {
  var gitName = "";
    switch(name) {
      case 'Miroslav Rajh':
        gitName = "miroslavrajh";
        break;
      case 'Nori Nishigaya':
        gitName = "xeeban";
        break; 
      case 'Tevo Saks':
        gitName = "whitevo";
        break;
      case 'Nadim Karam':
        gitName = "NaiiDz";
        break;
      case 'JP':
        gitName = "JP-Canada";
        break;
      case 'Peter Wolcott':
        gitName = "sirwolcott";
        break;
      case 'Stephen Whitenstall':
        gitName = "stephen-rowan";
        break;
      case 'Vanessa Cardui':
        gitName = "VanCardui";
        break;
      case 'Felix Weber':
        gitName = "FelixfromSwarm";
        break;
      case 'André Diamond':
        gitName = "Andre-Diamond";
        break;
      default:
        gitName = "";
        break;
    }
  return gitName;
}

function assignAssignees() {
  return String(assignees3)
}

function tagList() {
  return String(tags3)
}

function processTitle() {
  const title = getValue('title')
  const ada = getValue('ada')
  const gmbl = getValue('gmbl')
  const agix = getValue('agix')
  let text = `${title} - Earn `
  if (ada > 0) {
    text = text + ada + " ada "
  } 
  if (gmbl > 0) {
    text = text + gmbl + " gimbal "
  }
  if (agix > 0) {
    text = text + agix + " agix "
  }
  return text;
}
  
function validateSubmission() {
    //save all the input values
  //const budgetB = getValue('budgetB')
  const description = getValue('description')
  
  getAssignees();
  getTags()
  
    
    //Generate a string mimicing the file structure
    //Indentation is important here
  let fileText = `
${new Date().toUTCString()}
${description}
`
    
  //Encode string to URI format
  const encodedIssueText = encodeURIComponent(fileText)
  //Generate a github link with query parameter
    
  //Open in a new tab
  window.open(`https://github.com/Governance-Services-Guild/Project-Board/issues/` + `new?assignees=${assignAssignees()}&title=${processTitle()}&labels=${tagList()}&body=` + encodedIssueText);  
}

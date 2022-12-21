var  Checked = [];    
for (var i = 0; i < 5; i++) {
  Checked.push(false);
}

localStorage.setItem("check",JSON.stringify(Checked));

function shownotes() {
  let notes = localStorage.getItem("notes");
  let Ch = localStorage.getItem("check");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  Checked= JSON.parse(Ch);
  let html = `
    <p id="name">Enter the Unique Id of the Student :</p>
    <input type="text" id="show">
    <button id="btn" onclick="func2()">submit</button>`;
  notesObj.forEach(function (element, index) {
    html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5  > ${index}</h5>
                          <h5 > ${element.title}</h5>
                          <p > ${element.text}</p>
                          `
                          if(Checked[index]===false)
                          {
                            html+=`
                            <button onclick="add(${index})">issue</button>
                            `
                          }
                          
                     html +=`
                      </div>
                  </div>
                  `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

var tem;


function func2() {
  var temp = localStorage.getItem("relation");
  console.log("Entering into here");

  if ((temp == null)) {
    tempObj = [];
  } else {
    tempObj = JSON.parse(temp);
  }
  var text1 = document.getElementById("show");
  var button = document.getElementById("button");

  let myObj = {
    stud: text1.value,
    book: tem,
  };

  tempObj.push(myObj);

  localStorage.setItem("relation",JSON.stringify(tempObj));

  text1.style.display = "none";
  button.style.display = "none";
  
};

function add(_num) {
  tem = _num;
  console.log(tem);
  Checked[_num]=true;
  localStorage.setItem("check",JSON.stringify(Checked));
  var text = document.getElementById("show");
  var button = document.getElementById("btn");
  var t = document.getElementById("name");
 

  if (text.style.display == "") {
    text.style.display = "block";
    button.style.display = "block";
    t.style.display = "block";
  }
}

shownotes();

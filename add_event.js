
let addBtn2= document.getElementById('addBtn')

addBtn2.addEventListener('click',function(e){
	let Txtarea= document.getElementById("addTxt");
	let addTitle= document.getElementById("addTitle");

	let notes= localStorage.getItem("notes");

	if(notes==null)
	{
		notesObj=[]
	}else{
		notesObj=JSON.parse(notes)
	}

	let myobj={
		title: addTitle.value,
		text:Txtarea.value
	}

	notesObj.push(myobj)
	localStorage.setItem("notes",JSON.stringify(notesObj))
	console.log(notesObj)
	Txtarea.value=""
	addTitle.value=""
	 

})
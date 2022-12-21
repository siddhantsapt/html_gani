function showRegistered()
{
  let users = localStorage.getItem("user");
  if (users == null) {
    userObj = [];
    console.log("object not found");
  } else {
    userObj = JSON.parse(users);
    console.log("object found");
  }

  let html = "";
  let books="";

  let book = localStorage.getItem("relation");

  all_books = JSON.parse(book);

  let book_name = localStorage.getItem("notes");

  all_books_name = JSON.parse(book_name);

  userObj.forEach(function (element, index) {

    all_books.forEach(function(element2,index){

      if(element.name==element2.stud)
      {
        books =element2.book;
      }

    })
    html += `
      <div class=" style="width: 18rem;">
              <div class=" ">
                  <h5 class="card-title"> ${element.name}</h5>
                  <p class="card-text"> ${element.email}</p>
                  <p class="card-text"> ${element.dep}</p>
                  <p class="card-text"> ${all_books_name[books]?.title}</p>
              </div>
          </div>`;
          // console.log(all_books_name[books]);
          books=-1;
        
  });

  let UserElement = document.getElementById("users");

  if (userObj.length != 0) {
    UserElement.innerHTML = html;
  } else {
    UserElement.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

showRegistered();

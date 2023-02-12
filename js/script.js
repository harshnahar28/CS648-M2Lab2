window.addEventListener("load",()=>
{
    "use strict";   

    window.document.getElementById("formForEmployee").addEventListener("submit", (obj)=> 
    {
        obj.preventDefault();
        window.console.log("The ID is " + window.document.getElementById("id").value);
        window.console.log("The Name is " + window.document.getElementById("name").value);
        window.console.log("The Extension is " + window.document.getElementById("extension").value);
        window.console.log("The Email is " + window.document.getElementById("email").value);
        window.console.log("The Department is " + window.document.getElementById("department").value);      
    });
  });

/* Using arrow functions, you can check this output in the console in a browser. */

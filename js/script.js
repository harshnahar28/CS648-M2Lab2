window.addEventListener("load",()=>
{
    "use strict";   

    window.document.getElementById("formForEmployee").addEventListener("submit", (e)=> 
    {
        e.preventDefault();
        window.console.log("The ID is " + window.document.getElementById("ID").value);
        window.console.log("The Name is " + window.document.getElementById("Name").value);
        window.console.log("The Extension is " + window.document.getElementById("Extension").value);
        window.console.log("The Email is " + window.document.getElementById("Email").value);
        window.console.log("The Department is " + window.document.getElementById("Department").value);      
    });
  });

/* You can check this output in the console in a browser. */

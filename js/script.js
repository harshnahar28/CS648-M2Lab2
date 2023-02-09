window.addEventListener("load",()=>
{
    "use strict";   

    window.document.getElementById("empForm").addEventListener("submit", (e)=> 
    {
        e.preventDefault();
        window.console.log("The ID is " + window.document.getElementById("id").value);
        window.console.log("The Name is " + window.document.getElementById("name").value);
        window.console.log("The Extension is " + window.document.getElementById("ext").value);
        window.console.log("The Email is " + window.document.getElementById("email").value);
        window.console.log("The Department is" + window.document.getElementById("department").value);      
    });
  });

/* You can check this output in the console in a browser. */

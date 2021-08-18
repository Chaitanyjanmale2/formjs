   function validate(e){
           let namePipex=document.getElementById("namePipe").value;//1st input field
           let projectIdx=document.getElementById("projectId").value;//2nd input field
           let bucketNamex=document.getElementById("bucketName").value;//3rd input field
           let fileNamex=document.getElementById("fileName").value;//4th input field
           let gcsCredx=document.getElementById("gcsCred").value;//5th input field
           let timeMinx=document.getElementById("timeMin").value;//6th input field
           let pattern=/^[\w][^\+_\-\W]{4,4}$/g 
  

        if(!(pattern.test(namePipex)||pattern.test(projectIdx)||pattern.test(bucketNamex)||pattern.test(fileNamex)||pattern.test(gcsCredx)||pattern.test(timeMinx)))
        {
             alert("no empty field and dont put special char,+ -_ any special char and also input should be min 5 of length ")
                    return false
        }      
     else{                                        
                    return true;
         }
 
}

document.getElementById("formSubmit").onsubmit=(e)=>{ 


    e.preventDefault()                                                    
    if(validate(e)){ 
                  
          
        alert("submitteeddd!!!!!")
        
     
    } 

document.getElementById("formSubmit").reset()






} 



   function validate(){
           let namePipex=document.getElementById("namePipe").value;//1st input field
            let projectIdx=document.getElementById("projectId").value;//2nd input field
           let bucketNamex=document.getElementById("bucketName").value;//3rd input field
           let fileNamex=document.getElementById("fileName").value;//4th input field
           let gcsCredx=document.getElementById("gcsCred").value;//5th input field
           let timeMinx=document.getElementById("timeMin").value;//6th input field
           let pattern=/^[a-zA-Z0-9]*[^\+_\-\s\W]$/ ; 
          
 
    /* if((((pattern.test(namePipex))||(pattern.test(projectIdx))||(pattern.test(bucketNamex))||(pattern.test(fileNamex))||(pattern.test(gcsCredx))||(pattern.test(timeMinx)))==false)&&(namePipex.length||gcsCredx.length||bucketNamex.length||timeMinx.length||fileNamex.length||projectIdx.length)==0)
        {
             alert("NO SPACES"+"=="+"MIN LENGTH 5"+"=="+"NO SPECIAL CHAR"+"=="+"NO START WITH +,-,_")
                    return false;
       
        } */
  
        if(
            ((
            (pattern.test(namePipex))&&(pattern.test(projectIdx))&&(pattern.test(bucketNamex))&&(pattern.test(fileNamex))&&(pattern.test(gcsCredx))&&(pattern.test(timeMinx))
            
            )==true)
            
            &&
            ((namePipex.length<=5)&&(gcsCredx.length<=5)&&(bucketNamex.length<=5)&&(timeMinx.length<=5)&&(fileNamex.length<=5)&&(projectIdx.length<5))==true

            )
    {
       
        return true
    }
    else{ 
        alert("NO SPACES"+"=="+"MIN LENGTH 5"+"=="+"NO SPECIAL CHAR"+"=="+"NO START WITH +,-,_")
        return false
       
    }

            
           
    
 
}

document.getElementById("formSubmit").onsubmit=(e)=>{ 


    e.preventDefault()//prevent subimisstion after click submit 
                                                   
    if(validate()){ 
                  
          
        alert("submitteeddd!!!!!")
        
     
    } 

document.getElementById("formSubmit").reset()






} 



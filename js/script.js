//Declaring some variables
let rain = " * ";
let grain = 50;
let regularFert = 1.1;
let premiumFert = 1.15;
let tooMuchRain = 0.90;
let tooLittleRain = 0.80;

//prompt one - "How many inches of rain?" and console.log(repeating *)

var rainfall = window.prompt("How many inches of rain fell?");   //initializing "rainfall" variable
console.log(rain.repeat(rainfall));   // printing * based on the amount of rainfall
                          
//if-else statements that calculate the rainfall/impact on crop yield

if(rainfall>=20){                         //initialized "cropYield" & "fertilizer" variables
  var cropYield = grain * tooMuchRain;   //if "rainfall" is >= 20 then "grain"(50) is multiplied by "tooMuchRain"(0.9)
  var fertilizer = window.prompt("Did you use fertilizer?");   //cropYield is decreased by 10% & second prompt
                                                             
}else                                     
                                          
if(rainfall<10){
  var cropYield = grain * tooLittleRain;    //if "rainfall" < 10, then "grain"(50) is multiplied by "tooLitleRain"(0.8)
  var fertilizer = window.prompt("Did you use fertilizer?");    //cropYield decreased by 20% & second prompt

}else

if(rainfall>=10 && rainfall<=19){        //if "rainfall" = 10, then nothing is decreased & prompt 2
  var cropYield = grain;
  var fertilizer = window.prompt("Did you use fertilizer?");
  }

//prompt two - "Did you use fertilizer?"
//sets up window prompt #2 - asking if fertilizer was used (yes or no)
//if yes, we move onto prompt 3(which kind of fertilizer?)

if(fertilizer == "yes" || fertilizer == "Yes" || fertilizer == "y"){
  var fertilizerType = window.prompt("Did you use regular or premium fertilizer?");
}

else{
                                                                          
if(fertilizer == "No" || fertilizer == "no" || fertilizer == "n"){   //if no, we print the cropYield to the console
  console.log("The yield should be " + cropYield.toFixed() + " bushels per acre.");   //added .toFixed() to round the number printed
  }
}
 
//prompt 3 - "Premium or regular fertilizer?" and initializing "fertilizerType" and "bushels" variables
// if "premium" used, then "cropYield" multiplied by "premiumFert"(1.15). This increases the cropYield (15%) & the new amount is stored in "bushels"
//if "regular" was used, then "cropYield" is multiplied by "regularFert" - this increases the crop yield (10%) & the new amount is stored in "bushels"

if(fertilizerType == "premium" || fertilizerType == "Premium"){          
  var bushels = cropYield * premiumFert;   
  console.log("The yield should be " + bushels.toFixed() + " bushels per acre.");        
                                                                          
}else                                                                 
    
if(fertilizerType == "regular" || fertilizerType == "Regular"){        
  var bushels = cropYield * regularFert;                               
  console.log("The yield should be " + bushels.toFixed() + " bushels per acre."); 
}

 

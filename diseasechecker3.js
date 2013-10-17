

Disease = new Meteor.Collection("disease");

/*
        Disease.insert({name: "Hepa A", symptom: "1"});
		Disease.insert({name: "Hepa A", symptom: "2"});
        Disease.insert({name: "Hepa A", symptom: "3"});
        Disease.insert({name: "Hepa E", symptom: "1"});
        Disease.insert({name: "Hepa E", symptom: "4"});
      
	*/  
	  
	  
	  Disease.insert({name: "Hep. A", symptom: "Extreme tiredness"});	
	  Disease.insert({name: "Hep. A", symptom: "Loss of appetite"});	
	  Disease.insert({name: "Hep. A", symptom: "Muscle Pain"});	
	  Disease.insert({name: "Hep. A", symptom: "Vomiting"});

	  
	  
	  Disease.insert({name: "Hep. E", symptom: "Fever"});	
	  Disease.insert({name: "Hep. E", symptom: "Nausea"});	
	  Disease.insert({name: "Hep. E", symptom: "Muscle Pain"});	
	  Disease.insert({name: "Hep. E", symptom: "Vomiting"});


	  
	Disease.insert({name: "Typhoid", symptom: "Rose-Coloured Spots"});	
	Disease.insert({name: "Typhoid", symptom: "Loss of appetite"});	
	Disease.insert({name: "Typhoid", symptom: "Head Ache"});	
	Disease.insert({name: "Typhoid", symptom: "Vomiting"});	

	Disease.insert({name: "Malaria", symptom: "Fever"});	
	Disease.insert({name: "Malaria", symptom: "Nausea"});	
	Disease.insert({name: "Malaria", symptom: "Sweats"});	
	Disease.insert({name: "Malaria", symptom: "Vomiting"});	
	Disease.insert({name: "Malaria", symptom: "Muscle Pain"});


	Disease.insert({name: "Dengue", symptom: "Fever"});	
	Disease.insert({name: "Dengue", symptom: "Loss of appetite"});	
	Disease.insert({name: "Dengue", symptom: "Head Ache"});	
	Disease.insert({name: "Dengue", symptom: "Muscle Pain"});	
	Disease.insert({name: "Dengue", symptom: "Pain Behind Eyes"});


	Disease.insert({name: "Plague", symptom: "Fatigue"}); 	
	Disease.insert({name: "Plague", symptom: "Diarrhea"}); 	
	Disease.insert({name: "Plague", symptom: "Head Ache"});	
	Disease.insert({name: "Plague", symptom: "Bleeding from your mouth"});	
	Disease.insert({name: "Plague", symptom: "Muscle Pain"});

	Disease.insert({name: "Schistosomiasis", symptom: "Fever"});	
	Disease.insert({name: "Schistosomiasis", symptom: "Frequent Urination"});	
	Disease.insert({name: "Schistosomiasis", symptom: "Heavy infestation"});		

	Disease.insert({name: "Rabies", symptom: "Extreme tiredness"});	
	Disease.insert({name: "Rabies", symptom: "Sore Throat"});	
	Disease.insert({name: "Rabies", symptom: "Head Ache"});	
	Disease.insert({name: "Rabies", symptom: "Vomiting"});

	Disease.insert({name: "Chikungunya", symptom: "Extreme tiredness"});	
	Disease.insert({name: "Chikungunya", symptom: "Rash"});	
	Disease.insert({name: "Chikungunya", symptom: "Muscle Pain"});	
	Disease.insert({name: "Chikungunya", symptom: "Joint Pain"});	

	Disease.insert({name: "Yellow fever", symptom: "Jaundice"}); 	
	Disease.insert({name: "Yellow fever", symptom: "Joint Pain"});	
	Disease.insert({name: "Yellow fever", symptom: "Vomiting"});	
	Disease.insert({name: "Yellow fever", symptom: "Bleeding from your mouth"});	
							

	  
	  
	  
	  
	  

var addedSymptoms = new Array();
var count=0;
if (Meteor.isClient) {


   
   
   
   
  Template.addSymptom1.symptom1 = function () {
    return "";
  };

  Template.addSymptom1.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      
	  var e=document.getElementById("add1");
	 var flag=false;
	 for(var i=0;i<count;i++)
		if(addedSymptoms[i]==e.options[e.selectedIndex].text)
			flag=true;
			
	if(flag==false)
	{
		addedSymptoms[count]=e.options[e.selectedIndex].text;
		count++;
	}
	refreshSymptoms();
	
	}
  });
   
 
 Template.addSymptom3.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      
	   var e2=document.getElementById("addByTyping");
	   
	   var e2value=e2.value;
	   e2value=e2value.trim();
	   
	 var flag2=false;
	 for(var i=0;i<count;i++)
		if(addedSymptoms[i]==e2value)
			flag2=true;
			
	if(e2value=="")
	flag2=true;
	if(flag2==false)
	{
		addedSymptoms[count]=e2value;
		count++;
	}
	e2.value="";
	refreshSymptoms();
	
	}
  });
   
 



 Template.diagnosisFinal.events({
    'click input' : function (){
	
	

document.getElementById("diagnosis").innerHTML="";
var bimari = new Array();


/*
bimari[0]="Hepa A"
bimari[1]="Hepa E";
*/

bimari[0]="Hep. A";
bimari[1]="Hep. E";
bimari[2]="Typhoid";
bimari[3]="Malaria"; 
bimari[4]="Dengue"; 
bimari[5]="Plague"; 
bimari[6]="Schistosomiasis"; 
bimari[7]="Rabies"; 
bimari[8]="Chikungunya"; 
bimari[9]="Yellow fever";








var bimariCounter = 0;
while(bimariCounter<bimari.length){
var topPosts = Disease.find({name: bimari[bimariCounter]}, {sort: {name: 1}});
var countx = 0;

var tempCol = new Array();
var countCol = 0;
topPosts.forEach(function (disease) {
	
	var flag=false;
	 for(var i=0;i<countCol;i++)
		if(tempCol[i]==disease.symptom)
			flag=true;
	
	if(flag==false)
	{
	
	
		tempCol[countCol]=disease.symptom;
		countCol++;
		
		
	for(var i=0;i<count;i++)
		if(addedSymptoms[i]==disease.symptom)
			countx += 1;
			
	}
	
	
	

  
  
});
if(countx/countCol>=0.6&&countx/countCol<=0.8)
document.getElementById("diagnosis").innerHTML+=" likely " + bimari[bimariCounter]+" , ";

else

if(countx==countCol)
document.getElementById("diagnosis").innerHTML+=bimari[bimariCounter]+" , ";

  bimariCounter++;
}
  
  
  
  
	}
	});



	
}


	function refreshSymptoms(){
		var temp="";
		for(var i=0;i<count;i++)
			temp+=addedSymptoms[i]+"<br/>";
		
		document.getElementById("addSymptom4").innerHTML=temp;
	
	
	//symptoms suggestions
	
	
	

document.getElementById("addSymptom2").innerHTML="";


var suggestionSymptoms = new Array();
var suggestionSymptomsCounter = 0;
var suggestionCounter = 0;
while(suggestionCounter<addedSymptoms.length){

var topPosts = Disease.find({symptom: addedSymptoms[suggestionCounter]}, {sort: {name: -1},limit: 25});


topPosts.forEach(function (disease) {
	
	var topPosts2 = Disease.find({name: disease.name}, {sort: {name: -1},limit: 25});
		topPosts2.forEach(function (disease) {
			
			
			 var flag=false;
				for(var i=0;i<suggestionSymptomsCounter;i++)
					if(suggestionSymptoms[i]==disease.symptom)
					flag=true;
	
				for(var i=0;i<count;i++)
					if(addedSymptoms[i]==disease.symptom)
					flag=true;
					
			if(flag==false){
				suggestionSymptoms[suggestionSymptomsCounter]=disease.symptom;
				
				document.getElementById("addSymptom2").innerHTML+=suggestionSymptoms[suggestionSymptomsCounter]+"<br/>";
				suggestionSymptomsCounter++;
				
			}
		});
  
  
}
);
suggestionCounter++;

}




	
	
	}
	

	
	
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
	
	if (Disease.find().count() === 0) {
      
	  
	  
	  
	}
	
	
  });
}

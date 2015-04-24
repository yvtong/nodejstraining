// Another implementation:

/* underscore is a very powerful library   
   REFERENCE: https://github.com/jashkenas/underscore 
			   http://underscorejs.org/ 

*/
var _ = require('underscore');

var mathScores = [{name:'Emma',mathScore:84},{name:'Hailey',mathScore: 90},{name:'Isabella',mathScore: 91},{name:'Jada',mathScore: 65},{name:'Matilda',mathScore: 87},{name:'Maya',mathScore: 55},{name:'Olivia',mathScore: 72},{name:'Scarlett',mathScore: 98},{name:'Carter',mathScore: 95},{name:'Christopher',mathScore: 42}], 
    englisScores = [{name:'Christopher',englishScore: 92},{name:'Hailey',englishScore: 91},{name:'Maya',englishScore: 91},{name:'Jada',englishScore: 65},{name:'Matilda',englishScore: 87},{name:'Isabella',englishScore: 95},{name:'Olivia',englishScore: 72},{name:'Scarlett',englishScore: 68},{name:'Carter',englishScore: 93},{name:'Emma',englishScore:74},],
    topScorers = [], scoreLimit = 90;
 
//TODO : Find students whose scores are equal or more  than 90 in both math and english.
var mathTopScorers = [];

for (i=0; i<mathScores.length; i++)
{
	if(mathScores[i].mathScore>=scoreLimit){    //comparing scores of mathscores
		mathTopScorers.push(mathScores[i].name);
	}
}
console.log(mathTopScorers);

var englishTopScorers = [];
for(j=0;j<englisScores.length;j++){		//matching names

	if(englisScores[j].englishScore >=scoreLimit){    //comparing scores of mathscores
		englishTopScorers.push(englisScores[j].name);
	}
	
}
console.log(englishTopScorers);

console.log(_.intersection(englishTopScorers,mathTopScorers));


//TODO.



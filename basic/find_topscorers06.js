// show how to use underscore function union and groupBy

var _ = require('underscore');

// for convenence , using same field name in two arrays 
var scores = [{name:'Emma',score:84},{name:'Hailey',score: 90},{name:'Isabella',score: 91},{name:'Jada',score: 65},{name:'Matilda',score: 87},{name:'Maya',score: 55},{name:'Olivia',score: 72},{name:'Scarlett',score: 98},{name:'Carter',score: 95},{name:'Christopher',score: 42}], 
    englisScores = [{name:'Christopher',score: 92},{name:'Hailey',score: 91},{name:'Maya',score: 91},{name:'Jada',score: 65},{name:'Matilda',score: 87},{name:'Isabella',score: 95},{name:'Olivia',score: 72},{name:'Scarlett',score: 68},{name:'Carter',score: 93},{name:'Emma',score:74},],
    topScorers = [], scoreLimit = 90;


var allScores = _.union(scores,englisScores)
console.log(allScores);

var students = _.groupBy(allScores, function(student){ return student.name; });
console.log(students);

_.each(students,function(student){
	var i;
	console.log(student);
	for (i=0; i < student.length; i++) {
		if (student[i].score < scoreLimit ) break; 
	}

	if ( i == student.length)
		topScorers.push(student[0].name);	
});

console.log(topScorers);











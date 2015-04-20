var scores = [{name:'Emma',score:84},{name:'Hailey',score: 99},{name:'Isabella',score: 91},{name:'Jada',score: 65},{name:'Matilda',score: 87},{name:'Maya',score: 55},{name:'Olivia',score: 72},{name:'Scarlett',score: 68},{name:'Carter',score: 95},{name:'Christopher',score: 42}], 
topScorers = [], scoreLimit = 90;
 
for (i=0; i<scores.length; i++)
{
    if (scores[i].score >= scoreLimit)
    {
        topScorers.push(scores[i]);
    }
}
 
console.log(topScorers);

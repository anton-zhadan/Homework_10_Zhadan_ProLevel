sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

summer_sports = sports.slice (5);

winter_sports = sports.slice (0,5);

fruits = summer_sports.splice (2,2).concat(winter_sports.splice(2,1));

console.log (`*** Summer sports ***`);
for (i=0; i<summer_sports.length; i++) {
	console.log (summer_sports[i].join(`: `));
}
console.log (`*** Winter sports ***`);
for (i=0; i<winter_sports.length; i++) {
	console.log (winter_sports[i].join(`: `));
}
console.log (`*** Fruits ***`);
for (i=0; i<fruits.length; i++) {
	console.log (fruits[i].join(`: `));
}
db.user.drop();

users = [ {
	'email': 'mary@demo.org',
	"firstname" : "Mary",
	"lastname" : "Davis",
	"age" : 12
}, {
	'email': 'wendy@abc.com',
	"firstname" : "Wendy",
	"lastname" : "Chan",
	"age" : 33
}, {
	'email': 'dustin@demo.org',
	"firstname" : "Dustin",
	"lastname" : "Light",
	"age" : 35
}, {
	'email': 'luke@demo.org',
	"firstname" : "Luke",
	"lastname" : "Smith",
	"age" : 47
}, ];

db.user.insert(users);
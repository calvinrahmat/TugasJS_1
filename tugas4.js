let data = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
};
//Ubahlah data  tersebut menggunakan spread operator
let newData = { ...data, hobby: 'futsal' };
newData.name = 'calvin rahmat';
newData.email = 'calvin.rahmat@gmail.com';

console.log(newData);

//Ambilah data “street dan city” tersebut menggunakan destructuring
let { street, city } = data.address;
console.log(street + ' ' + city);

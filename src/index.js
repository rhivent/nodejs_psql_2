import app from './app';

async function main(){
	await app.listen(3000);
	console.log('Server run on port 3000');
}

main();
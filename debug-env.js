require('dotenv').config();

console.log('--- DEBUG ENV ---');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
console.log('All keys:', Object.keys(process.env).filter(k => !k.startsWith('npm_') && !k.startsWith('Program')));
console.log('-----------------');

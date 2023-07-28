//hello Didier ceci est un programme de l'Horoscope
const phrase = ['Attendez vous à une journée merveilleuse. Un voyage professionel risque de mal tourné. Une bonne gestion de vos finances est garantit'];

//cette fonction genère un message d'horoscope
const randomHoroscope = signHoroscope =>{
    const phraseIndex = Math.floor(Math.random()*phrase.length);

    console.log(`${signHoroscope} : ${phrase[phraseIndex]}`)
};
//Le signe de l'utilisateur doit être remplacé par son propre signe
let sign = 'Scorpion';
randomHoroscope(sign);


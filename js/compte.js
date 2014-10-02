function compte_a_rebours(){

date_stop = new Date("Oct 22 18:00:00 2014");
total_secondes = (date_stop - new Date()) / 1000;

jour = Math.floor(total_secondes/(24*3600));
jourdizaine=Math.floor(jour/10);
jourunite=jour-jourdizaine*10

heure =  Math.floor((total_secondes-jour*(24*3600))/3600);
heuredizaine=Math.floor(heure/10);
heureunite=heure-heuredizaine*10

minute =  Math.floor((total_secondes-jour*(24*3600)-heure*3600)/(60));
minutedizaine=Math.floor(minute/10);
minuteunite=minute-minutedizaine*10;


document.getElementById('dizaineJ').innerHTML=jourdizaine;
document.getElementById('dizaineH').innerHTML=heuredizaine;
document.getElementById('dizaineM').innerHTML=minutedizaine;
document.getElementById('uniteJ').innerHTML=jourunite;
document.getElementById('uniteH').innerHTML=heureunite;
document.getElementById('uniteM').innerHTML=minuteunite;



}

compte_a_rebours();
setInterval(function(){compte_a_rebours()}, 1500);
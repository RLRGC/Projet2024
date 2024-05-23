function precise(x) {
	return x.toPrecision(4);
  }
function Cabine1(){
	alert("CABINE 1 \n \n Salle occupé : True/False \n Température : 23°C \n Taux de CO2 : 0.08%");
}
function Cabine23(){
	alert("CABINE 2 ET 3 \n \n Salle occupé : True/False \n Température : 23°C \n Taux de CO2 : 0.08%");
}
function Cabine45(){
	alert("CABINE 4 ET 5 \n \n Salle occupé : True/False \n Température : 22.99°C \n Taux de CO2 : 0.0788889987%");
}
function Cabine5(){
	alert("CABINE 5 \n Salle occupé : True \n Température : 22.05 \n Taux de CO2 : 0.08999999999");
}
function Cabine34(){
	alert("CABINE 3 ET 4 \n \n Salle occupé : True/False \n Température : 23°C \n Taux de CO2 : 0.08%");
}
function ReeducationKine2(){
	alert("Salle de Réeducation Kinésithérapeute \n \n Personnes dans la salle : 9 personnes \n Température : 23°C \n Taux de CO2 : 0.08%")
}
function Terrasse(){
	let personnes = Math.floor(Math.random() * 6);
	alert("Terrasse \n \n Personnes : " + personnes );
}
function Kinésithérapeute2(){
	alert("Salles d'attentes \n  Personnes : " + Math.floor(Math.random() * 7) + " \n Temperature : 22.07°C \n Taux de C02 : 0.068");
}
function Osteopathe(){
	alert("Salle Ostéo \n Personnes : " + Math.floor(Math.random()*3) + " \n Température : " + precise(Math.floor(20+Math.random() * 4)+Math.random(5)) +  "°C \n Taux de CO2 : 0.070" )
}
function EspaceDetentePerso(){
	alert("Espace de détente perso \n Personnes : " + Math.floor(Math.random()*13) + "\n Température : "  + precise(Math.floor(20+Math.random() * 4)+Math.random(5)) + "°C \n Taux de CO2 : 0.072" )
}
function Infirmier(){
	alert("Infirmier \n Personne : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Température : " + precise(Math.floor(20+Math.random() * 4)+Math.random(5)) + "°C \n Taux de CO2 : 0.071" );
}
function Sophrologue(){
	alert("Sophrologue \n Personne : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Température : " + precise(Math.floor(20+Math.random() * 4)+Math.random(5)) + "°C \n Taux de CO2 : 0.071" );
}

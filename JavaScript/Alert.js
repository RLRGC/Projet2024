function variables(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	return Temperature;
}
function precise(x) {
	return x.toPrecision(4);
  }
function Cabine1(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Cabine 1 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Cabine 1 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function Cabine23(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Cabine 2 et 3 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Cabine 2 et 3 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function Cabine45(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Cabine 4 et 5 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Cabine 4 et 5 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function Cabine5(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Cabine 5 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Cabine 5 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function Cabine34(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Cabine 3 et 4 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Cabine 3 et 4 \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function ReeducationKine2(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5))
	if (Temperature >= 23){
		alert("Réeducation Kiné \n Personnes : " + Math.floor(Math.random()*8) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072 \n ⚠ IL FAIT TROP CHAUD !!!" )
	}
	else {
		alert("Réeducation Kiné \n Personnes : " + Math.floor(Math.random()*8) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072")
	}
}
function Terrasse(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5))
	if (Temperature >= 23){
		alert("Terrasse \n Personnes : " + Math.floor(Math.random()*6) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072 \n ⚠ IL FAIT TROP CHAUD !!!" )
	}
	else {
		alert("Terrasse \n Personnes : " + Math.floor(Math.random()*6) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072")
	}
}
function Kinésithérapeute2(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5))
	if (Temperature >= 23){
		alert("Salle d'attente Kiné \n Personnes : " + Math.floor(Math.random()*7) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072 \n ⚠ IL FAIT TROP CHAUD !!!" )
	}
	else {
		alert("Salle d'attente Kiné \n Personnes : " + Math.floor(Math.random()*7) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072")
	}}
function Osteopathe(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5))
	if (Temperature >= 23){
		alert("Osthéopathe \n Personnes : " + Math.floor(Math.random()*3) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072 \n ⚠ IL FAIT TROP CHAUD !!!" )
	}
	else {
		alert("Osthéopathe \n Personnes : " + Math.floor(Math.random()*3) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072")
	}
}
function EspaceDetentePerso(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5))
	if (Temperature >= 23){
		alert("Espace de détente perso \n Personnes : " + Math.floor(Math.random()*13) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072 \n ⚠ IL FAIT TROP CHAUD !!!" )
	}
	else {
		alert("Espace de détente perso \n Personnes : " + Math.floor(Math.random()*13) + "\n Température : "  + Temperature + "°C \n Taux de CO2 : 0.072")
	}
	
}
function Infirmier(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Ostheopathe \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Ostheopathe \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}
function Sophrologue(){
	let Temperature = precise(Math.floor(20+Math.random() * 4)+Math.random(5));
	if (Temperature >= 23){
		alert("Sophrologue \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n  ⚠ IL FAIT TROP CHAUD !!!")
	}	
	else{
		alert("Sophrologue \n Personnes : " + Boolean(Math.floor(Math.random()*3)-1) + "\n Temperature : " + Temperature + "°C \n Taux de CO2 : 0.071 \n ")
	}
}

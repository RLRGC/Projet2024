function Information(){
    document.querySelector('#Informations').style.display= 'inherit';
}

function RDC(){
	document.querySelector('#RDC').style.display= 'inherit';
	document.querySelector('#Etage1').style.display= 'none';
	document.querySelector('#Etage2').style.display= 'none';
	
}
function Etage1(){
	document.querySelector('#Etage1 tbody').style.display= 'inherit';	
	document.querySelector('#RDC').style.display= 'none';
	document.querySelector('#Etage2').style.display= 'none';
}
function Etage2(){
	document.querySelector('#Etage2').style.display= 'inherit';	
	document.querySelector('#Etage1').style.display= 'none';
	document.querySelector('#RDC').style.display= 'none';
}


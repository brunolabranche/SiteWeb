<!--    A script to display the date on which the document was last modified    -->
<!-- Hide script from older browsers
//-------------------------------------------
// Création 2007-02-25, Bruno Labranche
// Mise à jour 2018-01-02, Bruno Labranche
// Mise à jour 20220-12-14, BL, caractères accentués en code HTML pour site sur github
// à: &agrave;
// é: &eacute;
// è: &egrave;
// û: &ucirc;
//-------------------------------------------
// Begin
// Liste des jours de la semaine
var days = new Array(8);
days[1] = "dimanche";
days[2] = "lundi";
days[3] = "mardi";
days[4] = "mercredi";
days[5] = "jeudi";
days[6] = "vendredi";
days[7] = "samedi";
// Liste des mois
var months = new Array(13);
months[1] = "janvier";
months[2] = "f&eacute;vrier";
months[3] = "mars";
months[4] = "avril";
months[5] = "mai";
months[6] = "juin";
months[7] = "juillet";
months[8] = "ao&ucirc;t";
months[9] = "septembre";
months[10] = "octobre";
months[11] = "novembre";
months[12] = "d&eacute;cembre";

// Date d'aujourd'hui
    var date = new Date();
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var NomMois = months[mois];
    var datejour = date.getDate();
    var joursemaine = date.getDay();
    var NomJour = days[joursemaine+1];
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var strDate =  NomJour + ', ' + annee + '-';
    if (mois < 10)
	strDate = strDate + '0';
    strDate = strDate + mois + '-';
    if (datejour < 10)
	strDate = strDate + '0';
    strDate = strDate + datejour + ', ';
    if (heures < 10)
	strDate = strDate + '0';
    strDate = strDate + heures + ':';
    if (minutes < 10)
	strDate = strDate + '0';
    strDate = strDate + minutes;
    document.write(strDate)
    //document.write('<br>')
    document.write('&nbsp&nbsp&nbsp&nbsp----&nbsp&nbsp&nbsp&nbsp')

// Date de mise à jour
var dateObj = new Date(document.lastModified);
var wday = days[dateObj.getDay() + 1];
var lmonth = months[dateObj.getMonth() + 1];
var daydate = dateObj.getDate();
var fyear = dateObj.getFullYear();
//if (navigator.appName == 'Netscape') {
//	var fyear = 1900 + dateObj.getFullYear()
//} else {
//	var fyear = dateObj.getFullYear()
//}
var hours = dateObj.getHours();
var minutes = dateObj.getMinutes();
var seconds = dateObj.getSeconds();
document.write("Derni&egrave;re mise &agrave; jour le " + wday + " " + daydate + " " + lmonth + " " + fyear)
document.write(" &agrave; " + hours + ":")
if (minutes <10)
	document.write("0")
document.write(minutes + ":")
if (seconds<10)
	document.write("0")
document.write(seconds)
    //document.write('<br>')


// Stop hiding the script -->
<!--    End of the last modified script    -

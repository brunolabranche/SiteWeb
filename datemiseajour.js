<!--    A script to display the date on which the document was last modified    -->
<!-- Hide script from older browsers
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
months[2] = "février";
months[3] = "mars";
months[4] = "avril";
months[5] = "mai";
months[6] = "juin";
months[7] = "juillet";
months[8] = "août";
months[9] = "septembre";
months[10] = "octobre";
months[11] = "novembre";
months[12] = "décembre";
var dateObj = new Date(document.lastModified)
var wday = days[dateObj.getDay() + 1]
var lmonth = months[dateObj.getMonth() + 1]
var date = dateObj.getDate()
var fyear = dateObj.getFullYear()
//if (navigator.appName == 'Netscape') {
//	var fyear = 1900 + dateObj.getFullYear()
//} else {
//	var fyear = dateObj.getFullYear()
//}
var hours = dateObj.getHours()
var minutes = dateObj.getMinutes()
var seconds = dateObj.getSeconds()
document.write("Dernière mise à jour le " + wday + " " + date + " " + lmonth + " " + fyear)
document.write(" à " + hours + ":")
if (minutes <10)
	document.write("0")
document.write(minutes + ":")
if (seconds<10)
	document.write("0")
document.write(seconds)
// Stop hiding the script -->
<!--    End of the last modified script    -
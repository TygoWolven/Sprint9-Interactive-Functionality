// Function for 'Initiatieven'
function showList(val) {
    if(val==1) {
        document.getElementById('listVraag').style.display='flex'
        document.getElementById('listAanbod').style.display='none'
    } if(val==2) {
        document.getElementById('listVraag').style.display='none'
        document.getElementById('listAanbod').style.display='flex'
    }
}
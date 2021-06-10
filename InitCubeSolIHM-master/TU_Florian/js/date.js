function genererDateCourante() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var hh = today.getHours();
    var mn = today.getMinutes();
    var ss = today.getSeconds();
    today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + mn + ':' + ss;
    return today;
};
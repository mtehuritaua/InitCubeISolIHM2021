var $sub = $('select.sub');

$('select').first().change(function () {    
    $sub.hide();
    if (this.selectedIndex > 0)
       $sub.eq(this.selectedIndex - 1).show();
}).change();
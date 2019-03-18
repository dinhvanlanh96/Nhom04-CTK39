function showNavigation(type) {
    if(type) {
        $(".topbar-navigation").show(500);
    } else {
        $(".topbar-navigation").hide(500);
    }
}

function toggleNavigation() {
    $(".topbar-navigation").toggle(500);
}

function showModal(modalId, isShow) {
    if (isShow) {
        $('#' + modalId).modal('show');
    }
    else {
        $('#' + modalId).modal('hide');
    }
}

var homeBtn = $('#home');
var aboutBtn = $('#about');
var howItWorksBtn = $('#how-it-works');
var packagesBtn = $('#packages');
var themesBtn = $('#themes');
var addOnsBtn = $('#add-ons');
var poshPiecesBtn = $('#posh-pieces');
var bookingBtn = $('#booking');
var bookingInfoBtn = JSON.parse(localStorage.getItem('bookingInfo')) || [];

$(document).ready(function () {
    homeBtn.click(function () {
        location.href = 'index.html';
    });
});

$(document).ready(function() {
    aboutBtn.click(function() {
        location.href = 'about.html';
    });
});

$(document).ready(function () {
    howItWorksBtn.click(function () {
        location.href = 'howitworks.html';
    });
});
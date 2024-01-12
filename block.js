

function init() 
{
    setTimeout(function () {
        action();
    }, 3000);
}

function action()
{
    hide_all();
}

function hide_all()
{
    var t = document.body;
    while(t.length > 0) {
        t.pop();
    }
    document.body.innerHTML = "<br /><br /><center><H2>PLEASE CONTACT DEVELOPER FOR SUPPORT</H2></center>";
}

init();
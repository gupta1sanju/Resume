var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
for (var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var targetsectionId = this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetsectionId);
        var interval =setInterval(function()
        {
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
var progressBar=document.querySelectorAll('.skills-progress>div');;
var skillsContainer=document.getElementById('skills-container');
var animationDone=false;
window.addEventListener('scroll',checkscroll);
function initialBars()
{
    for(let bar of progressBar)
    {
        bar.style.width=0+'%';
    }
}
initialBars();
function fillbars()
{
    for(let bar of progressBar)
    {
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function()
        {
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },3);
    }
}
function checkscroll()
{
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top<=window.innerHeight)
    {
        animationDone=true;
        //console.log('Skill container visible');
        fillbars();
    }
    else if(coordinates.top>window.innerHeight)
    {
        animationDone=false;
        initialBars();
    }
}
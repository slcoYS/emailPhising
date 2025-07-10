function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BcSkC4GxD8":
        Script1();
        break;
      case "5a2oTruf594":
        Script2();
        break;
      case "5y9vfMTlh26":
        Script3();
        break;
      case "5g6nPqZF088":
        Script4();
        break;
      case "5qiFgBTvOaw":
        Script5();
        break;
      case "5aTDAMMZDIn":
        Script6();
        break;
      case "5jz4m16ZMGR":
        Script7();
        break;
      case "647DO7SLnVJ":
        Script8();
        break;
      case "5wYYKtyEAQB":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6jPh7CxVupc');
const duration = 2000;
const easing = 'ease-out';
const id = '5jaGywsze1d';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6jPh7CxVupc');
const duration = 2000;
const easing = 'ease-out';
const id = '6b9HCMsxDxb';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6jPh7CxVupc');
const duration = 2000;
const easing = 'ease-out';
const id = '5jaGywsze1d';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6FZuTHKppuw');
const duration = 2000;
const easing = 'ease-out';
const id = '68JYB0ltAnE';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('6FZuTHKppuw');
const duration = 2000;
const easing = 'ease-out';
const id = '6fcjqBaLPQP';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6FZuTHKppuw');
const duration = 2000;
const easing = 'ease-out';
const id = '68JYB0ltAnE';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5uplFY22sqG');
const duration = 2000;
const easing = 'ease-out';
const id = '6ZGW2XcpEOD';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('5uplFY22sqG');
const duration = 2000;
const easing = 'ease-out';
const id = '6G252d9UTeR';
const shrinkAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5uplFY22sqG');
const duration = 2000;
const easing = 'ease-out';
const id = '6ZGW2XcpEOD';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};

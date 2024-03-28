let tip = 15;
function tip1()
{
    tip = 5
}
function tip2()
{
    tip = 10
}function tip3()
{
    tip = 15
}function tip4()
{
    tip = 25
}function tip5()
{
    tip = 50
}
function calculate()
{
    let amt = parseFloat(document.getElementById('amt').value);
    let num = parseInt(document.getElementById('num').value)
    let tot1 = amt * (tip * 0.01)
    let tot2 = tot1 / num
    if(parseInt(document.getElementById('custom').value) != 0){
    
        tip = parseInt(document.getElementById('custom').value)
        tot1 = amt * (tip * 0.01)
        tot2 = tot1 / num
    }
document.getElementById('sp1').innerHTML = tot2.toFixed(3)
document.getElementById("sp2").innerHTML = tot1.toFixed(3)
}
function reset()
{
    document.getElementById('sp1').innerHTML = ''
document.getElementById("sp2").innerHTML = ''
}

function validate()
{
    var height = Number(document.forms.height.value);
    var weight = Number(document.forms.weight.value);
    var age = Number(document.forms.age.value);
    console.log({1:height, 2:weight, 3:age})
    if(age<18)
    {
        alert("You're are not above Age 18+");
        return false;
    }
    else if(height<130 || height>230)
    {
        alert("Please enter your valid Height");
        return false;
    }
    else if(weight<40 || weight>200)
    {
        alert("Please enter your valid Weight");
        return false;
    }
    else
    {
        return true;
    }
}
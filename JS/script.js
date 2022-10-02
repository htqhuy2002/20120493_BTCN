function isSelectedMenu (classname, position) {
    var list = document.getElementsByClassName(classname);
    var i;
    for (i = 0; i < list.length; ++i) {
        list[i].classList.remove(classname + "-active");
    }
    list[position].classList.add(classname + "-active");
}

function isSelectedSubject (idname)
{
    var sub = document.getElementById(idname);
    if(sub.classList.contains('subject-selected') === false)
    {
        sub.classList.add('subject-selected');
    }
    else
    {
        sub.classList.remove('subject-selected')
    }
}

function isOpenClose (idname1, idname2) {
    var a = document.getElementById(idname1);
    var content = document.getElementById(idname2);
    if (content.style.display === "block")
    {
        content.style.display = "none";
        a.classList.add('news-title-close');
    }
    else
    {
        content.style.display = "block";
        a.classList.remove('news-title-close');
    }
}

function checkNameandAddress(name_id) 
{
    const temp = document.getElementById(name_id).value;
    let regex =/[A-Z][a-z]*/
    const nameArray= temp.split(" ");
    if (nameArray.length < 2)
    {
        return false;
    }
    for (let name of nameArray){
        if(!regex.test(name))
        {
            return false;
        }
    }        
    return true;
}

function checkPhoneNumber(name_id) 
{
    const temp = document.getElementById(name_id).value;
    let regex = /^0\d{9}$/;
    return regex.test(temp);
}

function checkEmail(name_id) 
{
    const temp = document.getElementById(name_id).value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(temp);
}

function checkCode(name_id)
{
    const temp = document.getElementById(name_id).value;
    let regex = /^(1[7-9]|2[0-2])\d{6}$/;
    return regex.test(temp);
}

function Validation (idname) {
    if (idname === "Ma_so")
    {
        if (checkCode(idname) === false)
        {
            document.getElementById(idname).classList.add('highlight-input');
        }
        else
        {
            document.getElementById(idname).classList.remove('highlight-input');
        }
    }
    else if (idname === "Ho_ten" || idname === "Dia_chi") 
    {
        if (checkNameandAddress(idname) === false)
        {
            document.getElementById(idname).classList.add('highlight-input');
        }
        else
        {
            document.getElementById(idname).classList.remove('highlight-input');
        }
    }
    else if (idname === "Dien_thoai")
    {
        if (checkPhoneNumber(idname) === false)
        {
            document.getElementById(idname).classList.add('highlight-input');
        }
        else
        {
            document.getElementById(idname).classList.remove('highlight-input');
        }
    }
    else if (idname === "Email")
    {
        if (checkEmail(idname) === false)
        {
            document.getElementById(idname).classList.add('highlight-input');
        }
        else
        {
            document.getElementById(idname).classList.remove('highlight-input');
        }
    }
}

function Validation_btn () {
    Validation("Ma_so");
    Validation("Ho_ten");
    Validation("Dia_chi");
    Validation("Dien_thoai");
    Validation("Email");
}

// function pressLeft ()
// {
//     var listSubSelected = document.getElementsByClassName('subject-selected');
//     var boxpicked = document.getElementsByClassName('subject-picked-box')[0];
//     var i;
//     for (i = 0; i < listSubSelected.length; ++i)
//     {
//         if (listSubSelected[i])
//     }
// }

// function pressRight ()
// {
    
// }

function pressDoubleLeft ()
{
    var a = document.getElementsByClassName('subject-picked-box')[0];
    a.innerHTML = "";
}

function pressDoubleRight ()
{
    var listSub = document.getElementsByClassName('subject');
    var boxpicked = document.getElementsByClassName('subject-picked-box')[0];
    var list_temp = "";
    var i;
    boxpicked.innerHTML = "";
    for (i = 0; i < listSub.length; ++i)
    {
        list_temp = list_temp + "<div " + "id='" + "00" + i + `' class='subject subject-picked' onclick='isSelectedSubject(` + `"` + `00` + i + `")'>` + listSub[i].innerHTML + "</div>";
        list_temp = list_temp + '\n';
    }
    boxpicked.innerHTML = list_temp;
}
let aish=document.createElement("p");
aish.textContent="Iam chitti";
aish.innerHTML="Meamory 1 -Tera Byte";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
setTimeout(() =>
{
    let re=document.getElementsByClassName("list")[4];
    if(re)
    {
        re.remove();
    }
}, 2000);
let newheading=document.createElement("h2");
newheading.innerHTML="this is a new heading tag added by js";
newheading.style.color="pink";
document.body.appendChild(newheading);
setTimeout(()=>
{
    let newtext=document.createElement("p");
    newtext.textContent="this text is added after 3 sec";
    newtext.style.color="violet";
    document.body.appendChild(newtext);
},3000);
  

let tagText=document.createElement("p");
tagText.textContent="this text is appended to the tag!";
tagText.style.color="orange";
document.getElementById("vasi").appendChild(tagText);


let mylist = document.createElement("ul");
for(let i=0;i<3;i++)
{
    let listitems=document.createElement("li");
    listitems.textContent="item"+i;
    listitems.style.color="yellow";
    mylist.appendChild("li");
    document.body.appendChild(mylist);
}
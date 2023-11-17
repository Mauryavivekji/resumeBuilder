let btn = document.querySelector(".divbtn");
let wETextArea = document.querySelector(".wETextArea")
btn.addEventListener('click', () => {
    let textarea = document.createElement("textarea");
    textarea.classList.add("mt-2");
    textarea.classList.add('weField');
    textarea.setAttribute("rows", 1);
    textarea.setAttribute("placeholder", "Enter your Another experience");
    textarea.classList.add("form-control");
    // wETextArea.appendChild(textarea)
    wETextArea.insertBefore(textarea,btn);

})

// for academic qulification
let btn2 = document.querySelector(".aQbtn");
let aQTextArea = document.querySelector(".aQTextArea")
btn2.addEventListener('click', () => {
    let textarea = document.createElement("textarea");
    console.log("botton was clicked")
    textarea.classList.add("mt-2");
   
    textarea.setAttribute("rows", 1);
    textarea.setAttribute("placeholder", "Enter your Another qulification");
    textarea.classList.add("form-control");
    textarea.classList.add("aQField");
    // aQTextArea.appendChild(textarea)
    aQTextArea.insertBefore(textarea,btn2);

})



// skill
let btn3= document.querySelector(".sbtn");
let sTextArea = document.querySelector(".sTextArea")
btn3.addEventListener('click', () => {
    let textarea = document.createElement("textarea");
    textarea.classList.add("mt-2");
   
    textarea.setAttribute("rows", 1);
    textarea.setAttribute("placeholder", "Enter Your Another skill");
    textarea.classList.add("form-control");
    textarea.classList.add("sField");
    // aQTextArea.appendChild(textarea)
sTextArea.insertBefore(textarea,btn3);

})
// project
// skill
let btn4= document.querySelector(".pbtn");
let pTextArea = document.querySelector(".pTextArea")
btn4.addEventListener('click', () => {
    let textarea = document.createElement("textarea");
    textarea.classList.add("mt-2");
   
    textarea.setAttribute("rows", 1);
    textarea.setAttribute("placeholder", "Enter Your Another skill");
    textarea.classList.add("form-control");
    textarea.classList.add("pField");
    // aQTextArea.appendChild(textarea)
pTextArea.insertBefore(textarea,btn4);

})

// generating  resume 
let generate_btn=document.querySelector(".clk-generate");
generate_btn.addEventListener("click",()=>{
    // name
let name=document.querySelector("#name").value;
let name_t=document.querySelector("#name_t");
let heading_name=document.querySelector(".heading-name");
name_t.innerHTML=name;
heading_name.innerHTML=name;

// contact
let number=document.querySelector("#number").value;
let contact_t=document.querySelector("#contact");
contact_t.innerHTML=number;

// adress
let adress=document.querySelector("#adress").value;
let adress_t=document.querySelector("#adress_t");
adress_t.innerHTML=adress;
// important link
 document.querySelector("#flink_t").innerHTML=document.querySelector("#facebook_link").value;
 document.querySelector("#ilink_t").innerHTML=document.querySelector("#instagram_link").value;
 document.querySelector("#llink_t").innerHTML=document.querySelector("#linkedin_link").value;
//  Hobbies
document.querySelector("#hob-1_t").innerHTML=document.querySelector("#hob_1").value;
document.querySelector("#hob-2_t").innerHTML=document.querySelector("#hob_2").value;
document.querySelector("#hob-3_t").innerHTML=document.querySelector("#hob_3").value;

// objectives
document.querySelector("#objective-t").innerHTML=document.querySelector("#objective").value;
// work experiences
// let wEt= document.querySelector("#wEt");
// let li_t=document.createElement("li");
// wEt.appendChild(li_t);
// li_t.innerText=document.querySelector("#expirience").value;

// // add work experiences

// li_t.innerText=textarea.value
let wes=document.querySelectorAll(".weField");
let str="";
for( let e of wes){
str=str+`<li>${e.value}</li>`;
} 
document.querySelector("#wEt").innerHTML=str;


// add academic qulification

let aQ=document.querySelectorAll(".aQField");
let str1="";
for(let e of aQ){
    str1=str1+`<li>${e.value}</li>`
}
document.querySelector("#aQT").innerHTML=str;

// add skilll 
let sField=document.querySelectorAll(".sField");
let str2="";
for(let e of sField){
    str2=str2+`<li>${e.value}</li>`
}
document.querySelector("#s_T").innerHTML=str2;

// projects
let pField=document.querySelectorAll(".pField");
let str3="";
for(let e of pField){
    str3=str3+`<li>${e.value}</li>`
}
document.querySelector("#p_T").innerHTML=str3;

// set image
let file=document.querySelector("#photo").files[0];
let reader= new FileReader();
reader.readAsDataURL(file);
reader.onload=function(){
    document.querySelector('.pro-img').src=reader.result;
}
// for hiding form
document.querySelector(".form").style.display="none";

// for hiding template
document.querySelector(".template").style.display="block";


}) 




//  for print
// let print=document.querySelector(".print");
// print.addEventListener("click",()=>{
// window.print();}
// )

// edit your form
document.querySelector(".btn-Edit")
    .addEventListener("click",()=>{
        document.querySelector(".form").style.display="block";
        document.querySelector(".template").style.display="none";
    })


// for download
// window.onload=function(){
//     let print=document.querySelector(".print")
//    print.addEventListener("click",()=>{
// let page =this.document.querySelector(".template");
// html2pdf().from(page).save();
//     })
// }
let btn_download=document.querySelector(".btn_download");
let page =this.document.querySelector(".template");
btn_download.addEventListener("click",()=>{
    console.log("hi hello")
    html2pdf().from(page).save();
})
function search() {
	let input = document.getElementById("searchbar").value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName("fd");
	let slogic = true;
	for (i = 0; i < x.length; i++) {
	  if (!x[i].innerHTML.toLowerCase().includes(input)) {
		x[i].style.display = "none";
	  } else {
		slogic = false;
		x[i].style.display = "block";
	  }
	}
	if (slogic) {
	  document.getElementById("notresult").style.display = "block";
	} else {
	  document.getElementById("notresult").style.display = "none";
	}
  }
  



let selected = 0; 
let javascript = document.getElementById("javascript");
let CSharf = document.getElementById("CSharf");
let figma = document.getElementById("figma");
let html = document.getElementById("html");
let css = document.getElementById("css");
let scss = document.getElementById("scss");

function alll() {
  javascript.style.display = 'table';
  CSharf.style.display = 'table';
  figma.style.display = 'table';
  html.style.display = 'table';
  css.style.display = 'table';
  scss.style.display = 'table';
};

function front() {
  javascript.style.display = 'table';
  CSharf.style.display = 'none';
  figma.style.display = 'none';
  html.style.display = 'table';
  css.style.display = 'table';
  scss.style.display = 'table';
};

function back() {
  javascript.style.display = 'table';
  CSharf.style.display = 'table';
  figma.style.display = 'none';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};

function design() {
  javascript.style.display = 'none';
  CSharf.style.display = 'none';
  figma.style.display = 'table';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};

function data() {
  javascript.style.display = 'none';
  CSharf.style.display = 'none';
  figma.style.display = 'none';
  html.style.display = 'none';
  css.style.display = 'none';
  scss.style.display = 'none';
};






if (selected === 0){
    javascript.style.display = 'none';
    CSharf.style.display = 'none';
    figma.style.display = 'none';
    html.style.display = 'none';
    css.style.display = 'none';
    scss.style.display = 'none';
}
else if(selected === 1){
    javascript.style.display = 'table';
    CSharf.style.display = 'none';
    figma.style.display = 'none';
    html.style.display = 'none';
    css.style.display = 'none';
    scss.style.display = 'none';
}
else if(selected === 2){
    javascript.style.display = 'none';
    CSharf.style.display = 'table';
    figma.style.display = 'none';
    html.style.display = 'none';
    css.style.display = 'none';
    scss.style.display = 'none';
}
else if(selected === 3){
    javascript.style.display = 'none';
    CSharf.style.display = 'none';
    figma.style.display = 'table';
    html.style.display = 'none';
    css.style.display = 'none';
    scss.style.display = 'none';
}
else if (selected === 4){
    javascript.style.display = 'none';
    CSharf.style.display = 'none';
    figma.style.display = 'none';
    html.style.display = 'table';
    css.style.display = 'none';
    scss.style.display = 'none';
}

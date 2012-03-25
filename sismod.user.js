// ==UserScript==
// @name               RIT SIS Modifications
// @description        Adds enhancements to the RIT SIS system such as an RIT color theme
// @namespace          demeo.rit.sismod
// @author             Thomas DeMeo
// @author			   Dan Fenton
// @include            http://mycampus.rit.edu/*
// @include            https://mycampus.rit.edu/*
// @icon               http://development.garnishmobile.com/TriSigma/background_tile.jpg
// @version            0.1
// ==/UserScript==

var alphaCodes = new Array("ACCT", "MGMT", "ESCB", "FINC", "MKTG", "DECS", "BLEG", "MGIS", "INTB", "CFIN", "EEEE", "EGEN", "ISEE", "MECE", "MCEE", "CMPE", "CQAS", "MCSE", "CHME", "BIME", "LADA", "CRIM", "ENGL", "ENGL", "FNRT", "HUMA", "HIST", "STSO", "PHIL", "ANTH", "ECON", "SOCS", "POLS", "PSYC", "SOCI", "GENS", "ITDA", "ITDL", "PUBL", "WGST", "INGS", "MLAR", "MLAS", "MLCH", "MLFR", "MLGR", "MLIT", "MLJP", "MLPO", "MLRU", "MLSP", "URCS", "SPSY", "MCLS", "CRST", "COMM", "HONL", "ENGT", "PACK", "CVET", "EEET", "MCET", "TCET", "MFET", "CPET", "HSPS", "NUTR", "FOOD", "HOTL", "TRAV", "HSPT", "SERQ", "HRDE", "INST", "ESHS", "FCMG", "SFTE", "DEMT", "HLTH", "ROTC", "AERO", "EMET", "ACBS", "BUSI", "QLTM", "GLSO", "TCOM", "MTSC", "GEOT", "SECU", "CMDS", "PROF", "NACC", "NAST", "NBUS", "NACN", "NACS", "NACT", "NCAR", "NCIM", "NSVP", "MSSE", "NCAR", "NAIS", "NGRD", "NGRP", "INTP", "NLST", "NCOM", "NHSS", "NHSS", "NHSS", "NENG", "NMTH", "NSCI", "NASL", "NCAR", "NCAD", "NAUT", "BIOL", "BIOG", "BIOG", "ENVS", "CHMA", "CHMB", "CHEM", "CHMG", "CHMI", "CHMO", "CHMP", "CHEN", "MATH", "STAT", "PHYS", "GSCI", "CMPM", "CHMC", "MEDS", "MTSE", "CHPO", "DMSO", "PHYA", "PMED", "CLRS", "IMGS", "HOSM", "ASTP", "BIOE", "ITDS", "WVAR", "WCLB", "WHWS", "WDAN", "WFIT", "WHLS", "WREC", "WINT", "WMAR", "WMIL", "FACW", "ELCE", "CRPP", "ACSC", "FYEP", "ITDI", "NMDE", "GRDE", "ARED", "ARDE", "FDTN", "CMGD", "INDE", "ILLS", "ILLM", "FNAS", "IDDE", "ADGR", "ARTH", "CCER", "CGLS", "CMTJ", "CWTD", "CWFD", "CGEN", "CEXT", "PHFA", "PHBM", "SOFA", "PHGR", "PHAR", "IMSM", "IMPT", "PRTM", "PRTT", "GMEP", "NMEP", "USPC", "CMPR", "ISTE", "CSCI", "ISTE", "CSCI", "MEDI", "SWEN", "SWEN", "CINT", "CISC", "NSSA", "NSSA", "IGME", "IGME", "ISUS");
var numericCodes = new Array("0101", "0102", "0103", "0104", "0105", "0106", "0110", "0112", "0113", "0116", "0301", "0302", "0303", "0304", "0305", "0306", "0307", "0308", "0309", "0310", "0500", "0501", "0502", "0504", "0505", "0506", "0507", "0508", "0509", "0510", "0511", "0512", "0513", "0514", "0515", "0517", "0519", "0520", "0521", "0522", "0524", "0525", "0525", "0525", "0525", "0525", "0525", "0525", "0525", "0525", "0525", "0526", "0527", "0531", "0533", "0535", "0550", "0606", "0607", "0608", "0609", "0610", "0614", "0617", "0618", "0619", "0620", "0621", "0622", "0623", "0624", "0625", "0626", "0627", "0630", "0632", "0633", "0634", "0635", "0640", "0650", "0660", "0680", "0681", "0684", "0685", "0688", "0692", "0693", "0696", "0697", "0699", "0801", "0804", "0804", "0805", "0805", "0805", "0806", "0813", "0826", "0835", "0853", "0855", "0855", "0855", "0875", "0879", "0880", "0880", "0881", "0882", "0883", "0884", "0885", "0886", "0887", "0890", "0891", "1001", "1004", "1005", "1006", "1008", "1009", "1010", "1011", "1012", "1013", "1014", "1015", "1016", "1016", "1017", "1018", "1022", "1023", "1026", "1028", "1029", "1030", "1032", "1040", "1050", "1051", "1055", "1060", "1070", "1099", "1103", "1106", "1107", "1108", "1109", "1110", "1111", "1112", "1113", "1114", "1115", "1701", "1715", "1716", "1720", "2001", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2019", "2020", "2021", "2035", "2037", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2060", "2061", "2065", "2066", "2067", "2068", "2076", "2080", "2081", "2082", "2083", "3002", "4001", "4002", "4003", "4004", "4005", "4006", "4010", "4011", "4020", "4040", "4050", "4055", "4080", "4085", "5001");

var ritImageDataURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAABmCAYAAAB7lQKZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwQ0NDREU5NkUxQzExRTE5MTk1QkJCMDY3ODM2Q0RGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwQ0NDREVBNkUxQzExRTE5MTk1QkJCMDY3ODM2Q0RGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjBDQ0NERTc2RTFDMTFFMTkxOTVCQkIwNjc4MzZDREYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjBDQ0NERTg2RTFDMTFFMTkxOTVCQkIwNjc4MzZDREYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rOjB1AAAKhklEQVR42uydv1IbSRCH1ypC6wFQ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";


var ritOrange = "#F36E21";
var ritBrown = "#513127";
var bgColor = "#F8F7ED";
var boxBGColor = "#CBCAAC";

loadFunc = function loadFunc() {
    sisColorMod();
    removeAlpha();
    addLogos();
    addMouseOver();
    changeInputLimit();
  //  fixExpandedSearch();
    //selectZeroDepartmentNumber();

   // selectZeroDepartmentNumber();

    convertLetterCodeToNumber();
}

function validateNumberInput(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function changeInputLimit() {
    var courseNumberInput = document.getElementById("CLASS_SRCH_WRK2_CATALOG_NBR$72$");
    if(courseNumberInput)
	{	
		courseNumberInput.setAttribute('maxlength', '3');    
		courseNumberInput.onkeypress = validateNumberInput;
	}
	
    var minUnitInput = document.getElementById("CLASS_SRCH_WRK2_UNITS_MINIMUM");
    if(minUnitInput)
	{
		minUnitInput.onkeypress = validateNumberInput;
		minUnitInput.setAttribute('maxlength', '1');
	}
	
    var maxUnitInput = document.getElementById("CLASS_SRCH_WRK2_UNITS_MAXIMUM");
    if(maxUnitInput)
	{
		maxUnitInput.onkeypress = validateNumberInput;
		maxUnitInput.setAttribute('maxlength', '1');
    }
	
    var classNumberInput = document.getElementById("CLASS_SRCH_WRK2_CLASS_NBR$112$");
    if(classNumberInput)
	{
		classNumberInput.onkeypress = validateNumberInput;
	}
}




function addMouseOver() {
    var units = document.getElementById("CLASS_SRCH_WRK2_UNITS_MINIMUM_LBL");
    var maxUnits = document.getElementById("CLASS_SRCH_WRK2_UNITS_MAXIMUM_LBL");
    if (units) {
		units.style.cursor = "help";
		units.setAttribute('title',"Credits are now Units");
    }
    if (maxUnits) {
		maxUnits.style.cursor = "help";
		maxUnits.setAttribute('title',"Credits are now Units");
    }
    
}

function addLogos() {
    var searchClasses = document.getElementById("DERIVED_CLSRCH_SS_TRANSACT_TITLE");
    if (searchClasses) {
        searchClasses.innerText = "";
    }
    var ritImage = document.getElementById('RIT_logo');
    if (!ritImage) {
        ritImage = document.createElement("img");
        ritImage.setAttribute('id', 'RIT_logo');
        ritImage.setAttribute('src', ritImageDataURI);
        ritImage.setAttribute('alt', 'RIT');
        ritImage.setAttribute('height', '102');
        ritImage.setAttribute('width', '341');
        ritImage.style.position = "fixed";
        ritImage.style.top = "250px";
        ritImage.style.left = "10px";
        ritImage.style.zIndex = "-1";

        document.body.appendChild(ritImage);
    }
} 

function sisColorMod() {
    var headers = document.getElementsByClassName("PSGROUPBOXLABEL");	
	var body = document.getElementsByClassName("PSPAGECONTAINER");
	if(body)
	{
		for(i = 0; i < body.length; i++)
		{
            body[i].style.cssText = "margin: 0 auto";
			body[i].style.backgroundColor = bgColor;
            body[i].style.width = "600px";
            
		}
        var bodyContainer = document.getElementsByClassName("PSPAGE");
        if (bodyContainer[0]) {
            bodyContainer[0].style.backgroundColor = bgColor;
        }
        	var page = document.getElementById("PAGECONTAINER");
           	var pageHeader = document.getElementById("DERIVED_CLSRCH_SSR_CLASS_LBL_LBL");
			if(pageHeader){
				if(!(pageHeader.innerText == "Search Results")){
					if (page) {
						page.style.cssText = "margin: 0 auto";
						page.style.backgroundColor = bgColor;          
						page.style.width = "600px";

					}
				}else {
                    var searchBar = document.getElementsByClassName("PSLEVEL1GRIDLABEL");
                    searchBar[0].style.backgroundColor = ritBrown;
                }
			}
	}
	

	
	
	var labels = document.getElementsByClassName("PSEDITBOXLABEL");
	var dropDownLabels = document.getElementsByClassName("PSDROPDOWNLABEL");
	if(labels && dropDownLabels)
	{
		for(i=0;i<labels.length;i++)
		{
			labels[i].style.color = ritBrown;
		}
		
		for(i = 0; i < dropDownLabels.length; i++)
		{
			dropDownLabels[i].style.color = ritBrown;
		}
		
	}
    var headers = document.getElementsByClassName("PSGROUPBOXLABEL");
    if (headers) {
	for (i = 0; i < headers.length; i++) {
	    headers[i].style.backgroundColor = ritOrange;
	    headers[i].style.borderColor = ritBrown;
	}
	//console.log("SIS Mod");
    }
	
	var pageHeader = document.getElementById("DERIVED_CLSRCH_SSR_CLASS_LBL_LBL");
    if (pageHeader) {
        if(pageHeader.innerText == "Enter Search Criteria"){
            pageHeader.innerText = "Search For Classes";
        }
        pageHeader.style.color = ritBrown;
	}

	var institution = document.getElementById("win0div$ICField46");
	if(institution){
		institution.parentNode.removeChild(institution);
	}
	
	var addSrcCrit = document.getElementsByClassName("SSSMSGSUCCESSFRAME");
	var addSrcCritFrame = document.getElementsByClassName("SSSMSGSUCCESSFRAMEWBO");
	var click = document.getElementById("DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$81$");
	if(click){
		click.style.color = "#FFFFFF";
	}
	
	if(addSrcCrit)
	{
		for(i = 0; i < addSrcCrit.length; i++)
		{
			addSrcCrit[i].style.backgroundColor = ritBrown;
			addSrcCritFrame[i].style.backgroundColor = ritBrown;
			addSrcCritFrame[i].style.borderColor = ritBrown;
		}
	}
	
	
	
	var tableHeader = document.getElementsByClassName("PSLEVEL1GRIDCOLUMNHDR");
	if(tableHeader)
	{
		for(i = 0; i < tableHeader.length; i++)
		{
			tableHeader[i].style.color = "#545446";
			tableHeader[i].style.borderRightWidth = "0px";
			tableHeader[i].style.borderTopWidth = "0px";
			tableHeader[i].style.borderBottomWidth = "0px";
			tableHeader[i].style.backgroundColor = "#DFDECB";
		}
	}
	
}

function removeAlpha() {
    var alphaTable = document.getElementsByClassName("PSFRAME");
    if (!alphaTable) {
	alphaTable[0].style.display = 'none';
	//console.log("Remove Alpha");

	console.log("Remove Alpha");

    }
}
/*
function fixExpandedSearch() {
    var advancedSearch = document.getElementById("win0divDERIVED_CLSRCH_SSR_EXPAND_COLLAPS$80$");
    var array = advancedSearch.childNodes();
    for(var i = 0; i < array.length; i++){

		array.item(i).click();
    }

    //console.log("Fix Expanded Search");

	array.item(i).click();
    }
   // console.log(advancedSearch[1].innerText);
/*
    var selectionDiv = document.getElementById("win0divDERIVED_CLSRCH_GROUP4");
    selectionDiv.style.display = 'none';

    console.log("Fix Expanded Search");


}
*/

function selectZeroDepartmentNumber() {
    submitAction_win0(document.win0,'SSR_CLSRCH_WRK2_SSR_ALPHANUM_0');

    //console.log("Select Zero");
   console.log("Select Zero");

}

function convertLetterCodeToNumber() {
    var letterCode = document.getElementsByClassName("PSEDITBOX");
    if (letterCode[0]) {
    for(var i = 0; i < alphaCodes.length; i++){
        if (letterCode[0].value == alphaCodes[i]) {
            letterCode[0].value = numericCodes[i];

        }
    }
    }
}

setInterval("loadFunc()", 500);

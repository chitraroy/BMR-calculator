    var measureUnitSelected = "metric";
    function changeMeasureUnit(unit) {
        measureUnitSelected = unit;
		formReset(unit);
        var metricform = document.getElementById("metricform");
        var imperialform = document.getElementById("imperialform");

        //console.log("Mesurement selected");
        if (measureUnitSelected == "metric") {
            metricform.style.display = 'block';
            imperialform.style.display = 'none';
        }
        else {
            metricform.style.display = 'none';
            imperialform.style.display = 'block';
        }

    }


    function calculateYourBmr() {
		
		
		var bmr;
        var v_age = document.getElementById("ageVal").value;
        var v_gender = document.getElementById("gender").value;
        if (measureUnitSelected == "imperial" && v_gender == "M") {
            var ftheight = document.getElementById("ftVal").value;
            var incheight = document.getElementById("incVal").value;
            var stweight = document.getElementById("stVal").value;
            var lbweight = document.getElementById("lbVal").value;

            var final_height = parseInt(incheight) + parseInt(ftheight * 12);
            var final_weight = parseInt(lbweight) + parseInt(stweight * 14);

            bmr = Math.round(66 + (6.2 * final_weight) + (12.7 * final_height) - (6.76 * v_age));
        }

        else if (measureUnitSelected == "imperial" && v_gender == "F") {
            var ftheight = document.getElementById("ftVal").value;
            var incheight = document.getElementById("incVal").value;
            var stweight = document.getElementById("stVal").value;
            var lbweight = document.getElementById("lbVal").value;

            var final_height = parseInt(incheight) + parseInt(ftheight * 12);
            var final_weight = parseInt(lbweight) + parseInt(stweight * 14);

            bmr = Math.round(655.1 + (4.35 * final_weight) + (1.85 * final_height) - (4.67 * v_age));
        }

        else if (measureUnitSelected == "metric" && v_gender == "M") {
            var mtrheight = document.getElementById("mtrVal").value;
            var cmheight = document.getElementById("cmVal").value;
            var kgweight = document.getElementById("kgVal").value;
           

            var final_height = parseInt(cmheight) + parseInt(mtrheight * 100);
            var final_weight = parseInt(kgweight);

            bmr = Math.round(66.5 + (13.75 * final_weight) + (5.003 * final_height) - (6.755 * v_age));
        }

        else if (measureUnitSelected == "metric" && v_gender == "F") {
            var mtrheight = document.getElementById("mtrVal").value;
            var cmheight = document.getElementById("cmVal").value;
            var kgweight = document.getElementById("kgVal").value;
           

            var final_height = parseInt(cmheight) + parseInt(mtrheight * 100);
            var final_weight = parseInt(kgweight);

            bmr = Math.round(655 + (9.563 * final_weight) + (1.85 * final_height) - (4.676 * v_age));
        }
		 var calorie = calculatePerCalorie(bmr);
		 
		 
        document.getElementById("convert").innerHTML = "Your BMR : " + bmr.toFixed(2) + "  Kcal/Day";
		document.getElementById("calorie").innerHTML = "Your Calorie Requirement : " + calorie.toFixed(2) + "  Kcal/Day";
		
		
    }
    document.getElementById("button").addEventListener("click", calculateYourBmr, false);
	//document.getElementById("reset").addEventListener("click", formReset, false);

function calculatePerCalorie(bmr) {
    var v_calorie = 1;
    var v_radio = document.getElementsByName("optSelect");
    for (var i = 0; i < v_radio.length; i++) {
        if (v_radio[i].checked) {
            v_calorie = v_radio[i].value * bmr;
            return v_calorie;
        }
    }

}

function formReset(unit){
	
	   document.getElementById("BMR_CALC_FORM").reset();
	   document.getElementById("convert").innerHTML = "";
    document.getElementById("calorie").innerHTML = "";
	  	  
}
 
 

        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let array = input.split('')
            let beforemid ='';
            let aftermid = '';
            let result = "";
            let finalaftermid = '';
            let midpoint = Math.round((0 + (array.length - 1)) / 2);
            console.log(midpoint, "Mid Point of Indexs");
            console.log(array[0],"First Element of Array");
            console.log(array[array.length -1], "Last Element Of Arrray");
            console.log(array.length , "Length of An Array");
            console.log(array , "Whole Array");
            console.log(0, "First Index of Array");
            console.log(array.length-1, "Last Index of Array");
            console.log(midpoint, "Mid point of any array");
                if ((array.length-1) % 2 == 0) {
                    
                    for(let j=0; j<=midpoint; j++){
                        beforemid += array[j];
                       console.log(beforemid,"this is array beforemid");
                    }
                    for(let i=midpoint; i<=(array.length-1); i++){
                         aftermid += array[i];
                         console.log(typeof(aftermid), "type of aftermide pointin theloop");
                         console.log(midpoint, 'aftermide loop'
                         );
                         let aftermidarray = aftermid.split("")
                         console.log(aftermidarray, "aftermid from string to array");
                         let arrayreverse = aftermidarray.reverse();
                         console.log(arrayreverse, "aftermid reversing");
                         aftermid
                         let aftermidarraytostring = arrayreverse.join("");
                         console.log(aftermidarraytostring, "aftermid array to string");
                        finalaftermid = aftermidarraytostring;
                    }
                    if(beforemid == finalaftermid){
                       result = `This is Palindrome ${input}`
                    }
                    else{
                        result = "This is not Palindrome"
                    }
                }
                else {
                    let odd = "Mid Point is Odd."
                    console.log(odd);
                    for(let j=0; j<=midpoint; j++){
                        beforemid += array[j];
                       console.log(beforemid,"this is array beforemid");
                    }
                    for(let i=midpoint-1; i<=(array.length-1); i++){
                         aftermid += array[i];
                         console.log(typeof(aftermid), "type of aftermide pointin theloop");
                         console.log(midpoint, 'aftermide loop'
                         );
                         let aftermidarray = aftermid.split("")
                         console.log(aftermidarray, "aftermid from string to array");
                         let arrayreverse = aftermidarray.reverse();
                         console.log(arrayreverse, "aftermid reversing");
                         aftermid
                         let aftermidarraytostring = arrayreverse.join("");
                         console.log(aftermidarraytostring, "aftermid array to string");
                        finalaftermid = aftermidarraytostring;
                    }
                    if(beforemid == finalaftermid){
                        document.getElementById("output").style.background = "black"
                       result = `This is Palindrome ${input}`
                    }
                    else{
                         document.getElementById("output").style.background = "red"
                        result = "This is not Palindrome"
                       
                    }

                }
                 document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   

function useApi(){
    function createNode(element) {
        return document.createElement(element);
      }
  
      function append(parent, el) {
        return parent.appendChild(el);
      }
    }

function calculate() {
  
          let fname = document.getElementById("fname").value;
          let lname = document.getElementById("lname").value;
          
          console.log(fname+" "+lname);
          
          let url = "https://api.diversitydata.io/?fullname="+fname+"%20"+lname
          console.log(url);
          
          
           fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {
              // Create and append the li's to the ul
              console.log(data)
              console.log(data.fullname)
  
  
              let output = document.getElementById("outputBox")
              
              while(output.firstChild){
                  output.removeChild(output.firstChild);
              }
  
              let node = createNode("h3");
              node.innerHTML = data.fullname;
              append(output,node)
              
              node = createNode("h3");
              node.innerHTML = data.gender +": "+data["gender probability"];
                append(output,node)
  
  
              node = createNode("h3");
              node.innerHTML = data.ethnicity +": "+data["ethnicity probability"];
              append(output,node)
  
  
              })
           
            .catch(function(error) {
              // If there is any error you will catch them here
              console.log(error);
            }); 
            
      }
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeTable() {
  
  let table = document.getElementById("pixel_canvas");     
   $("#pixel_canvas").empty();
    for( let row = 0; row < $('#input_height').val() ; row++){
          
         let tablerow = document.createElement("tr");
         
        for( let col = 0; col < $('#input_width').val() ; col++){
            
            let tablecolum = document.createElement("td");
            
            tablerow.appendChild(tablecolum);
        }
        table.appendChild(tablerow);
    }
    

}
        
$("#grid-tabel").click(()=>{
    
    makeTable();
    
    $(document).ready(()=>{
        
         $(document).on("click",'td',( event ) => {
        
        let color = $("#colorPicker").val(); //gey color for the pixels
        
        $(event.target).css("background-color",color); // set style for tabel
        
    });
    })
    
});
                       


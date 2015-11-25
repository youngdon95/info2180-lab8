window.onload = function(){
 
   document.getElementById("controls").innerHTML+='<input type="checkbox" name="Country" value=" ">';
    getData();
}

function getData(){
    $('lookup').observe('click', function(){
 var search = document.getElementById("term").getValue();
     new Ajax.Request("world.php", {
               method : 'get',
      parameters : {lookup : search},
               onSuccess: function(message) {
                var text = message.responseText ||
                "no countries";
                   $('result').update(text);
                   alert(text)
              },
              onFailure: function() { alert('No such file here!!'); }        
     });
   });

}                         
   

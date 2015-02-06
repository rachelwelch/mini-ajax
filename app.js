$(document).ready(function() {
   $('#getUsers').on('click', function() {
       return $.ajax({
       method: 'GET',
       url: 'http://reqr.es/api/users?page=1',
       success: function(data) {
         console.log(data);  
       },
     })
   });
});
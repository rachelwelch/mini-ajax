$(document).ready(function() {
    
    // GET request to get user data
   $('#getUsers').on('click', function() {
       return $.ajax({
       method: 'GET',
       url: 'http://reqr.es/api/users?page=1',
       success: function(res) {
         insertData(res.data);  
       },
     })
   });
    
    // Create a new user using POST method
    $('#addUser').on('click', function(e) {
        e.preventDefault();
       var userName = $('#name').val();
       var userJob = $('#job').val();
       return $.ajax({
           url: 'http://reqr.es/api/users',
           method: 'POST',
           data: {
             name: userName,
             job: userJob
           },
           success: function(res) {
            $('#recentUser').html(
            '<li>' +
                'name: ' + res.name +
            '</li>' +
            '<li>' +
                'job: ' + res.job +
            '</li>' +
            '<li>' +
                'id: ' + res.id +
            '</li>' +
            '<li>' +
                'created at: ' + res.createdAt +
            '</li>'
        )
      }
    })
  });
    
    // Add info from the GET request into the DOM
    var insertData = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      $('#userInfo' + (i + 1)).html('<div>' +
        'User Info:' +
        '<li>' +
        'First name: ' + arr[i].first_name +
        '</li>' +
        '<li>' +
        'Last name: ' + arr[i].last_name +
        '</li>' +
        '<hr>' +
        '</div>'
      )
    };
  };
    
});
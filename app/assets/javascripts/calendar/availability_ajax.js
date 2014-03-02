$(document).ready(function() {
  $("#create_availabilities").on("click", function(event) {
    console.log("hello");
    $.ajax({
      data: {data: modifiedEvents, spaceId: $("#create_availabilities").data().spaceId},
      type: 'post',
      url: '/availabilities',
      dataType: "json",
      success: function(response) {
        console.log(response);
        window.location = "/payments/new";
      },
      error: function(xhr, error) {
        alert("there was an error");
      }
    });
  });

   $("#edit_availabilities").on("click", function(event) {
      console.log("hello");
      $.ajax({
        data: {data: modifiedEvents, spaceId: $("#edit_availabilities").data().spaceId},
        type: 'post',
        url: '/spaces/availabilities/update',
        dataType: "json",
        success: function(response) {
          console.log(response);
          window.location = "/users/" + $("#edit_availabilities").data().userId + "/manage";
        },
        error: function(xhr, error) {
          alert("there was an error");
        }
    });
  });
});

$(function() {
  $("#root").append("<ul id='root_list'></ul>");
  $("#root_list").append("<li id='first_task'></li>");
  $("#first_task").append(
    "<span id='first_task_text'>Сделать задание #3 по web-программированию</span>");
  $("#first_task").append(
    "<button id='delete_first_task'>Удалить</button>"
  );
  $("#delete_first_task").click(function () {
    $("#first_task").remove();
  });
  $("#root").append("<input type='text' id='add_task_input'>");
  $("#root").append("<button id='add_task'>Добавить</button>");
  $("#add_task").click(function() {
    var task_name = $("#add_task_input").val();
    var el = $('<li></li>');
    $(el).append("<span>" + task_name + "</span>");
    $(el).append("<button>Удалить</button>");
    $('#root ul').append(el);
    $('button', el).click(function(){
      $(this).parent().remove()
    });
    $("#add_task_input").val("");
  });
});

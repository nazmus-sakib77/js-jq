$( function() {
    $( "#draggable" ).draggable();
    $( "#resizable" ).resizable();
    $( "#selectable" ).selectable();
  } );



  $( function() {
    $( "ul.droptrue" ).sortable({
      connectWith: "ul"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: "ul",
      dropOnEmpty: false
    });
 
    $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
  } );



  $( function() {
    $( "#accordion" ).accordion();
  } );



  $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );
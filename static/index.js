

// create socketio
var socket = io.connect('/');

// update page very 2 sec (send message to server)
setInterval(function(){

    // send message to server
    socket.emit('update data', {

    })
},3000)


// capture message
socket.on('server message', function(msg){
    //console.log(msg)
    update_chart(msg)
})


function update_chart(chart_data){
    console.log(chart_data)
    var ul = document.getElementById("my_list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(chart_data));
      ul.appendChild(li);
}
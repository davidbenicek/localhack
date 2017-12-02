function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  
  var base64 = getBase64Image(document.getElementById("img"));
  var xhr = new XMLHttpRequest();
  var url = "/image";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  var data = JSON.stringify({"name":"test","data": base64 });
  xhr.send(data);
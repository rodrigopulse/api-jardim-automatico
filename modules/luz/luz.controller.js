exports.luzStatus = async (req, res) => {
  var date = new Date();
  var hora = date.getHours() - 3;
  var minutos = date.getMinutes();
  let status = ''
  if(hora >= 7 && hora <= 19) {
    status = 1;
  } else {
    status = 0
  }
  return res.status(200).json({ status: 200, statusLuz: status, hora: hora, minutos: minutos });
}
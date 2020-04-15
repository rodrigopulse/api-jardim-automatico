exports.dataAtual = async (req, res) => {
  var date = new Date();
  var hora = date.getHours();
  var minutos = date.getMinutes();
  return res.status(200).json({ status: 200, hora: hora, minutos: minutos });
}
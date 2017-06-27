var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/', function(req, res) {
  var msg = '';	
  if ((req.body.nome === null || req.body.nome === '') || 
		  (req.body.cpf === null || req.body.cpf === '') || 
		  (req.body.endereco === null || req.body.endereco === '') || 
		  (req.body.telefone === null || req.body.telefone === '') || 
		  (req.body.email === null || req.body.email === '') ||
		  (req.body.senha === null || req.body.senha === '')) {
	  res.send('Todos os campos devem ser informados!');
  } else if (isNaN(req.body.cpf)) {
	  res.send('O campo cpf deve ser numerico!');
  } else if (isNaN(req.body.telefone)) {
	  res.send('O campo telefone devem ser numerico!');
  } else {
	  res.send('Adicionado com sucesso!');
  }
});

/* GET users listing. */
router.get('/login', function(req, res) {
	 if ((req.body.cpf === null) || (req.body.cpf === ''))  {
		 res.send('Informe o CPF');
	 } else {
		 res.send('0K');
	 }
});

module.exports = router;

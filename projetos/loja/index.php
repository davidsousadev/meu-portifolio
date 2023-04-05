<html>
<head>
  <title>PDF</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
  <style type="text/css">
body{
  font-size:12px;
  font-family:Verdana, Geneva, sans-serif;
}
#contato_form{
  width:500px;
  min-height:175px;
  color:#999;
  margin:auto;
}
.asteristico{
  color:#F00;
}
</style>
</head>
<body>
    <div id="contato_form">
      <form action="enviar.php" name="form_contato" method="post" >
      <p class="titulo">Formulário <small class="asteristico">*Campos Obrigatorios</small></p>
        <table align="center">
          <tr>
            <td>Nome:<sup class="asteristico">*</sup></td>
            <td>
              <input type="text" name="nome" maxlength="40" />
            </td>
          </tr>
          <tr>
            <td>E-mail:<sup class="asteristico">*</sup></td>
            <td>
              <input type="email" name="email" maxlength="30" />
            </td>
          </tr>
          <tr>
            <td>Telefone:<sup class="asteristico">*</sup></td>
            <td>
              <input type="text" name="telefone" maxlength="14" />
            </td>
          </tr>
          <tr align="right";>
            <td colspan="2">
              <input type="reset" class="campo_submit" value="Limpar" />
              <input type="submit" class="campo_submit" value="Enviar" />
            </td>
          </tr>
          <tr>
            <td colspan="2" align="right"><small class="asteristico">* Campos obrigatorios</small></td>
          </tr>
        </table>
      </form>
    </div>
</body>
</html>
//<![CDATA[  
$(document).ready(function () { 
  var license = $('#license-code').text(),
          myLicense = atob(license),
      tpllc = $('#myIdBlog').text(),
      second = 10;
      console.log(myLicense);
    if (myLicense == tpllc) {
        return false
    } else {
        $('body').append('<style>body{background:#000!important;overflow:hidden}#atencao span{font-size:50px}#atencao{z-index:999999999;position:fixed;top:0;right:0;left:0;padding:20% 0;height:100%;text-align:center;background:rgba(248,40,40,0.97);color:#fff}}</style><div id="atencao"><h4>Ative o Tema</h4><p>Por favor entre em contato através do formulário de contato do site www.templatebras.com para obter a licença do seu template.</p><span id="ativar">'+second+'</span></div>');
        setInterval(function () {
      second <= 1 ? window.location.href = "https://www.templatebras.com/" : $('#ativar').text(--second);
    }, 1e3)
    }
});
   //]]> 
$(document).ready(function () {
  // var specialElementHandlers = {
  //   "#editor": function (element, renderer) {
  //     return true;
  //   },
  // };
  // function imprimirpdf() {
  //   debugger
  //   var doc = new jsPDF();
  //   var prueba =document.getElementById("menu")
  //   doc.fromHTML(prueba.html(), 15, 15, {
  //     width: 170,
  //     elementHandlers: specialElementHandlers,
  //   });
  //   doc.save("test.pdf");
  // }
  // function screenshot() {
  //   debugger;
  //   html2canvas(document.body).then(function (canvas) {
  //     document.body.appendChild(canvas);
  //     var imgdata = canvas.toDataURL("image/png");
  //     var doc = new jsPDF();
  //     doc.addImage(imgdata,"PNG",10,10)
  //     doc.save("sample.pdf");
  //   });
  // }
  // $("#botonimprimir").click(function () {
  //   screenshot();
  //   //imprimirpdf();
  // });
  // $('#botonimprimir').click(function(){
  //   let div=document.getElementById("slider")
  //   let title="Test"
  //   debugger
  //   printDiv(div,title)
  // })
  // export default function printDiv({divId,title}){
  //   debugger
  //   let mywindow=window.open('','PRINT','height=650,width=900,top=100,left=150')

  //   mywindow.document.write(`<html><head><title>${title}</title>`)
  //   mywindow.document.write(`</head><body>`)
  //   mywindow.document.write(document.getElementById(divId).innerHTML)
  //   mywindow.document.write(`</body></html>`)

  //   mywindow.document.close()
  //   mywindow.focus()
  //   mywindow.print()
  //   mywindow.close()
  //   return true
  // }
  /*Slider*/
  if (window.location.href.indexOf("index") > -1) {
    $(".galeria").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1300,
      pager: false,
    });
  }

  //Posts
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date:
          "Publicado el " +
          moment().date() +
          " del mes" +
          moment().format(" MM ") +
          "del año" +
          moment().format(" YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat massa, tempus et ornare sit amet, aliquet in leo. Aenean mollis lorem tortor, et efficitur nisl aliquet in. Donec et ullamcorper tortor, sit amet dapibus lectus. Morbi sollicitudin condimentum tellus, pellentesque sodales purus lobortis at. Praesent vel nunc quis nibh fermentum tincidunt. Nam ornare, magna vel aliquet tincidunt, dolor enim vestibulum nibh, eu iaculis turpis lectus quis leo. Sed in lacus eu diam auctor elementum at ut lacus. Nulla leo eros, tristique et ultrices eu, imperdiet eu nisl. Aenean quis efficitur risus, non pretium nulla. Fusce cursus risus dui, nec elementum neque varius commodo. Cras aliquet sem congue felis pharetra tempor. Fusce sit amet convallis augue, nec ultricies arcu. Integer vel ligula condimentum nulla euismod bibendum et sit amet odio.",
      },
      {
        title: "Prueba de titulo 2",
        date:
          "Publicado el " +
          moment().date() +
          " del mes" +
          moment().format(" MM ") +
          "del año" +
          moment().format(" YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat massa, tempus et ornare sit amet, aliquet in leo. Aenean mollis lorem tortor, et efficitur nisl aliquet in. Donec et ullamcorper tortor, sit amet dapibus lectus. Morbi sollicitudin condimentum tellus, pellentesque sodales purus lobortis at. Praesent vel nunc quis nibh fermentum tincidunt. Nam ornare, magna vel aliquet tincidunt, dolor enim vestibulum nibh, eu iaculis turpis lectus quis leo. Sed in lacus eu diam auctor elementum at ut lacus. Nulla leo eros, tristique et ultrices eu, imperdiet eu nisl. Aenean quis efficitur risus, non pretium nulla. Fusce cursus risus dui, nec elementum neque varius commodo. Cras aliquet sem congue felis pharetra tempor. Fusce sit amet convallis augue, nec ultricies arcu. Integer vel ligula condimentum nulla euismod bibendum et sit amet odio.",
      },
      {
        title: "Prueba de titulo 3",
        date:
          "Publicado el " +
          moment().date() +
          " del mes" +
          moment().format(" MM ") +
          "del año" +
          moment().format(" YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat massa, tempus et ornare sit amet, aliquet in leo. Aenean mollis lorem tortor, et efficitur nisl aliquet in. Donec et ullamcorper tortor, sit amet dapibus lectus. Morbi sollicitudin condimentum tellus, pellentesque sodales purus lobortis at. Praesent vel nunc quis nibh fermentum tincidunt. Nam ornare, magna vel aliquet tincidunt, dolor enim vestibulum nibh, eu iaculis turpis lectus quis leo. Sed in lacus eu diam auctor elementum at ut lacus. Nulla leo eros, tristique et ultrices eu, imperdiet eu nisl. Aenean quis efficitur risus, non pretium nulla. Fusce cursus risus dui, nec elementum neque varius commodo. Cras aliquet sem congue felis pharetra tempor. Fusce sit amet convallis augue, nec ultricies arcu. Integer vel ligula condimentum nulla euismod bibendum et sit amet odio.",
      },
      {
        title: "Prueba de titulo 4",
        date:
          "Publicado el " +
          moment().date() +
          " del mes" +
          moment().format(" MM ") +
          "del año" +
          moment().format(" YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat massa, tempus et ornare sit amet, aliquet in leo. Aenean mollis lorem tortor, et efficitur nisl aliquet in. Donec et ullamcorper tortor, sit amet dapibus lectus. Morbi sollicitudin condimentum tellus, pellentesque sodales purus lobortis at. Praesent vel nunc quis nibh fermentum tincidunt. Nam ornare, magna vel aliquet tincidunt, dolor enim vestibulum nibh, eu iaculis turpis lectus quis leo. Sed in lacus eu diam auctor elementum at ut lacus. Nulla leo eros, tristique et ultrices eu, imperdiet eu nisl. Aenean quis efficitur risus, non pretium nulla. Fusce cursus risus dui, nec elementum neque varius commodo. Cras aliquet sem congue felis pharetra tempor. Fusce sit amet convallis augue, nec ultricies arcu. Integer vel ligula condimentum nulla euismod bibendum et sit amet odio.",
      },
      {
        title: "Prueba de titulo 5",
        date:
          "Publicado el " +
          moment().date() +
          " del mes" +
          moment().format(" MM ") +
          "del año" +
          moment().format(" YYYY"),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer erat massa, tempus et ornare sit amet, aliquet in leo. Aenean mollis lorem tortor, et efficitur nisl aliquet in. Donec et ullamcorper tortor, sit amet dapibus lectus. Morbi sollicitudin condimentum tellus, pellentesque sodales purus lobortis at. Praesent vel nunc quis nibh fermentum tincidunt. Nam ornare, magna vel aliquet tincidunt, dolor enim vestibulum nibh, eu iaculis turpis lectus quis leo. Sed in lacus eu diam auctor elementum at ut lacus. Nulla leo eros, tristique et ultrices eu, imperdiet eu nisl. Aenean quis efficitur risus, non pretium nulla. Fusce cursus risus dui, nec elementum neque varius commodo. Cras aliquet sem congue felis pharetra tempor. Fusce sit amet convallis augue, nec ultricies arcu. Integer vel ligula condimentum nulla euismod bibendum et sit amet odio.",
      },
    ];

    posts.forEach((item, index) => {
      let post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <button class="button-more">Leer más</button>
                </article>`;
      $("#posts").append(post);
    });
  }

  //Selector de Tema
  var theme = $("#theme");
  $(document).ready(function () {
    let tema = localStorage.getItem("tema");
    cambiar_Tema(tema);
  });

  $("#to_green").click(function () {
    cambiar_Tema("verde");
  });
  $("#to_red").click(function () {
    cambiar_Tema("rojo");
  });
  $("#to_blue").click(function () {
    cambiar_Tema("azul");
  });

  function cambiar_Tema(tema) {
    if (tema == "verde") {
      theme.attr("href", "css/green.css");
      localStorage.setItem("tema", "verde");
    } else if (tema == "rojo") {
      theme.attr("href", "css/red.css");
      localStorage.setItem("tema", "rojo");
    } else if (tema == "azul") {
      theme.attr("href", "css/blue.css");
      localStorage.setItem("tema", "azul");
    }
  }
  //Scroll arriba

  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
  //Login Falso
  $("#login form").submit(function () {
    let nombre = $("#nombre_form").val();
    let correo = $("#email_form").val();
    let password = $("#password_form").val();

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  });

  var formname = localStorage.getItem("nombre");
  if (formname != null && formname != undefined) {
    let about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Bievenido, " + formname + "</strong>");
    about_parrafo.append("<br><a href=# id='logout'>Cerrar sesion</a>");
    $("#login").css("display", "none");

    $("#logout").click(function () {
      localStorage.removeItem("nombre");
      location.reload();
    });
  }
  //Cargar acordeon
  if (window.location.href.indexOf("about") > -1) {
    $("#acordeon").accordion();
  }
  //Cargar reloj
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function () {
      let reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
  }
  //Validacion
  if (window.location.href.indexOf("contact") > -1) {
    $("form input[name='date']").datepicker({
      dateFormat: "dd-mm-yy",
    });

    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true,
    });
  }
});

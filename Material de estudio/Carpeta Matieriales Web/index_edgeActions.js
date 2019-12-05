/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
/*favicon*/
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
/*favicon*/
/*css*/
var cssId = 'myCss';
      if (!document.getElementById(cssId))
      {
          var head  = document.getElementsByTagName('head')[0];
          var link  = document.createElement('link');
          link.id   = cssId;
          link.rel  = 'stylesheet';
          link.type = 'text/css';
          link.href = 'css/style.css';
          link.media = 'all';
          head.appendChild(link);
      }
/*end-css*/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         sym.$("titulo2")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();
         sym.getSymbol("intro-mc").play(1);
         sym.getSymbol("mm-mc").stop("intro");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         var ctema = sym.getVariable("tema");
         
         if (ctema == "") {
         	sym.playReverse();
         	sym.getSymbol("mm-mc").stop(0);
         } else if (ctema == "intro") {
         	sym.play("intro");
         } else if (ctema == "html") {
         	sym.play("html");
         } else if (ctema == "css") {
         	sym.play("css");
         } else if (ctema == "js") {
         	sym.play("js");
         } else if (ctema == "fw") {
         	sym.play("fw");
         } else if (ctema == "seguridad") {
         	sym.play("seguridad");
         }
         sym.getSymbol("intro-mc").$("introduccion2")[0].currentTime = 0;
         sym.getSymbol("intro-mc").$("introduccion2")[0].pause();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-intro}", "click", function(sym, e) {
         sym.setVariable("tema","intro");
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();
         sym.getSymbol("html-mc").play(1);
         sym.getSymbol("mm-mc").stop("html");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         if (sym.getVariable("tema") != "") {
         	sym.getSymbol("mm-mc").play(1);
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();
         sym.getSymbol("css-mc").play(1);
         sym.getSymbol("mm-mc").stop("css");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();
         sym.getSymbol("js-mc").play(1);
         sym.getSymbol("mm-mc").stop("js");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();
         sym.getSymbol("fw-mc").play(1);
         sym.getSymbol("mm-mc").stop("fw");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();
         sym.getSymbol("seguridad-mc").play(1);
         sym.getSymbol("mm-mc").stop("seguridad");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6950, function(sym, e) {
         sym.playReverse("puntos");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mm-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_intro}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","intro");
         sym.getComposition().getStage().getSymbol("intro-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("intro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_html}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","html");
         sym.getComposition().getStage().getSymbol("html-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_css}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","css");
         sym.getComposition().getStage().getSymbol("css-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("css");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_js}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","js");
         sym.getComposition().getStage().getSymbol("js-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("js");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_fw}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","fw");
         sym.getComposition().getStage().getSymbol("fw-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("fw");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mm_seguridad}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","seguridad");
         sym.getComposition().getStage().getSymbol("seguridad-mc").stop(0);
         sym.getComposition().getStage().playReverse();
         sym.getComposition().getStage().getSymbol("tm-breadcrumb").stop("seguridad");

      });
      //Edge binding end

   })("mm-mc");
   //Edge symbol end:'mm-mc'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'opciones-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger}", "click", function(sym, e) {
         if (sym.getPosition() == 0 ) { sym.play(); }
         else { sym.playReverse(); }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${op_op-trigger-a}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_mapa}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("mapa/index.html", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_ad}", "click", function(sym, e) {
         window.open("actividad/index.html", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_bibliografia}", "click", function(sym, e) {
         window.open("materiales/bibliografia.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_glosario}", "click", function(sym, e) {
         window.open("materiales/glosario.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_oa}", "click", function(sym, e) {
         window.open("oa.zip", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${opciones_pdf}", "click", function(sym, e) {
         window.open("materiales/AP06_OA_IntDisWeb.pdf", "_blank");

      });
      //Edge binding end

   })("opciones-mc");
   //Edge symbol end:'opciones-mc'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'tm-breadcrumb'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn-home}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${inicio}", "click", function(sym, e) {
         sym.getComposition().getStage().setVariable("tema","");
         sym.getComposition().getStage().playReverse();
         sym.stop("inicio");

      });
      //Edge binding end

      

      

      

      

      

      

   })("tm-breadcrumb");
   //Edge symbol end:'tm-breadcrumb'

   //=========================================================
   
   //Edge symbol: 'intro-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("intro-mc");
   //Edge symbol end:'intro-mc'

   //=========================================================
   
   //Edge symbol: 'html-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         sym.getSymbol("html-bsm-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getSymbol("html-browser-sm").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-2}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-archivo-tabla1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("html-archivo-tabla1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         if (sym.getPosition() == 2000 || sym.getPosition() == 3250 || sym.getPosition() == 5000) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         if (sym.getPosition() == 2250 || sym.getPosition() == 3500 || sym.getPosition() == 5250) {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-fed-ill1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("html-fed-ill1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-fed2-ill1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("html-fed2-ill1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-novedades-formularios-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("html-novedades-formularios");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-novedades-etiquetas-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("html-novedades-etiquetas");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-archivo-etiquetas-but}", "click", function(sym, e) {
         window.open("materiales/html-etiquetas.pdf", "_blank");

      });
      //Edge binding end

   })("html-mc");
   //Edge symbol end:'html-mc'

   //=========================================================
   
   //Edge symbol: 'html-bsm-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_browser}", "click", function(sym, e) {
         sym.stop("browser");
         sym.getComposition().getStage().getSymbol("html-mc").play("browser");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_archivo}", "click", function(sym, e) {
         sym.stop("archivo");
         sym.getComposition().getStage().getSymbol("html-mc").play("archivo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_evd}", "click", function(sym, e) {
         sym.stop("evd");
         sym.getComposition().getStage().getSymbol("html-mc").play("evd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_fed}", "click", function(sym, e) {
         sym.stop("fed");
         sym.getComposition().getStage().getSymbol("html-mc").play("fed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_hpd}", "click", function(sym, e) {
         sym.stop("hpd");
         sym.getComposition().getStage().getSymbol("html-mc").play("hpd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_maquetado}", "click", function(sym, e) {
         sym.stop("maquetado");
         sym.getComposition().getStage().getSymbol("html-mc").play("maquetado");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-bsm_novedades}", "click", function(sym, e) {
         sym.stop("novedades");
         sym.getComposition().getStage().getSymbol("html-mc").play("novedades");

      });
      //Edge binding end

   })("html-bsm-mc");
   //Edge symbol end:'html-bsm-mc'

   //=========================================================
   
   //Edge symbol: 'html-browser-sm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_iu}", "click", function(sym, e) {
         sym.stop("iu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_mb}", "click", function(sym, e) {
         sym.stop("mb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_md}", "click", function(sym, e) {
         sym.stop("md");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_redes}", "click", function(sym, e) {
         sym.stop("redes");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_siu}", "click", function(sym, e) {
         sym.stop("siu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_ijs}", "click", function(sym, e) {
         sym.stop("ijs");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${html-browser-sm-btn_ad}", "click", function(sym, e) {
         sym.stop("ad");

      });
      //Edge binding end

   })("html-browser-sm");
   //Edge symbol end:'html-browser-sm'

   //=========================================================
   
   //Edge symbol: 'p1-mc'
   (function(symbolName) {   
   
   })("p1-mc");
   //Edge symbol end:'p1-mc'

   //=========================================================
   
   //Edge symbol: 'css-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         sym.getSymbol("css-bsm-mc").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-reglas-selectores-but}", "click", function(sym, e) {
         window.open("materiales/css-selectores-metodos.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bw}", "click", function(sym, e) {
         if (sym.getPosition() == 3750 || sym.getPosition() == 4500) {
         	sym.playReverse();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fw}", "click", function(sym, e) {
         if (sym.getPosition() == 3500 || sym.getPosition() == 4250) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-2}", "click", function(sym, e) {
         sym.play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-concepto-herencia-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-conceptos-herencia");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-concepto-box-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-conceptos-box");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-concepto-estilos-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-conceptos-estilo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-otros-border-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-otros-border");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-otros-tabla1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-otros-tabla1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-otros-tabla2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-otros-tabla2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-otros-tabla3}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-otros-tabla3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-otros-pagweb-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-otros-pagweb");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-formularios-cuadro1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-formularios-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-formularios-tabla1}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-formularios-2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-formularios-cuadro2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-formularios-3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-formularios-ill2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc").play("css-formularios-4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-ejemplos-but}", "click", function(sym, e) {
         window.open("materiales/css-ejemplo-maquetacion.pdf", "_blank");

      });
      //Edge binding end

   })("css-mc");
   //Edge symbol end:'css-mc'

   //=========================================================
   
   //Edge symbol: 'js-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${js-pdf-but1}", "click", function(sym, e) {
         window.open("materiales/javascript.pdf", "_blank");

      });
      //Edge binding end

   })("js-mc");
   //Edge symbol end:'js-mc'

   //=========================================================
   
   //Edge symbol: 'fw-mc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${fw-jquery-lib-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc2").play("fw-jquery");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-angular-lib-but}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("popups-mc2").play("fw-angular");

      });
      //Edge binding end

   })("fw-mc");
   //Edge symbol end:'fw-mc'

   //=========================================================
   
   //Edge symbol: 'seguridad-mc'
   (function(symbolName) {   
   
   })("seguridad-mc");
   //Edge symbol end:'seguridad-mc'

   //=========================================================
   
   //Edge symbol: 'css-bsm-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_reglas}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("reglas");
         sym.getComposition().getStage().getSymbol("css-mc").play("reglas");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_conceptos}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("conceptos");
         sym.getComposition().getStage().getSymbol("css-mc").play("conceptos");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_librerias}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("librerias");
         sym.getComposition().getStage().getSymbol("css-mc").play("librerias");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_ejemplo}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("ejemplo");
         sym.getComposition().getStage().getSymbol("css-mc").play("ejemplo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_otros}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("otros");
         sym.getComposition().getStage().getSymbol("css-mc").play("otros");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-bsm_formularios}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("css-mc").getSymbol("css-bsm-mc").stop("formularios");
         sym.getComposition().getStage().getSymbol("css-mc").play("formularios");

      });
      //Edge binding end

   })("css-bsm-mc");
   //Edge symbol end:'css-bsm-mc'

   //=========================================================
   
   //Edge symbol: 'popups-mc'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6200, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${css-conceptos-box-modelo-but}", "click", function(sym, e) {
         sym.stop(7250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("popups-mc");
   //Edge symbol end:'popups-mc'

   //=========================================================
   
   //Edge symbol: 'popups-mc_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn-cerrar-popup}", "click", function(sym, e) {
         if (sym.getPosition() == 1500) {
         	sym.playReverse(999);
         } else if (sym.getPosition() >= 2750) {
         	sym.playReverse(2749);
         } else {
         	sym.playReverse();
         }

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1950, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-jquery1-tabla1}", "click", function(sym, e) {
         if (sym.getPosition() == 1000) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-jquery1-2-tabla1}", "click", function(sym, e) {
         if (sym.getPosition() == 1500) {
         	sym.play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-angular_btn-data}", "click", function(sym, e) {
         sym.stop("data");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-angular_btn-enrutamiento}", "click", function(sym, e) {
         sym.stop("enrutamiento");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-angular_btn-vf}", "click", function(sym, e) {
         sym.stop("vf");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${fw-angular_btn-ibd}", "click", function(sym, e) {
         sym.stop("ibd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_fww}", "click", function(sym, e) {
         sym.stop(1500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${pagination_bww}", "click", function(sym, e) {
         sym.stop(1000);

      });
      //Edge binding end

      })("popups-mc2");
   //Edge symbol end:'popups-mc2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-345223770");
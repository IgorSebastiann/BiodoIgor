function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    /* pegar a tag img*/
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.png")
    }
  }

  jQuery(document).ready(function ($) {
    if (cssTarget != "img.") {
      // first check if custom class field is not empty

      jQuery(cssTarget).each(function () {
        var $img = jQuery(this)
        var imgID = $img.attr("id")
        var imgClass = $img.attr("class")
        var imgURL = $img.attr("src")

        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg")

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID)
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg")
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a")

            // Replace image with new SVG
            $img.replaceWith($svg)
          },
          "xml"
        )
      })
    } else {
      // use the default class if field was empty

      jQuery("img.style-svg").each(function () {
        var $img = jQuery(this)
        var imgID = $img.attr("id")
        var imgClass = $img.attr("class")
        var imgURL = $img.attr("src")

        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg")

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID)
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg")
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a")

            // Replace image with new SVG
            $img.replaceWith($svg)
          },
          "xml"
        )
      })
    }
  })
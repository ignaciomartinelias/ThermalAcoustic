// Carga de Productos al Showcase
// Seteo de Background Image de Cada Product Showcase

$.getJSON("/productos.json", function(data) {
  var items = [];
  $.each(data, function(key, val) {
    items.push(val);
  });

  for (let i = 0; i < items.length; i++) {
    let html = `
                    <div class="collection-item w-dyn-item w-col w-col-3" data-ix="fade-in-bottom-scroll-in" style="opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px); transition: opacity 1000ms ease 0s, transform 1500ms ease 0s;">
                        <div class="div-block-2" id="${i}">
                            <div class="div-block-8">
                                <h5 class="heading-2">${items[i].Name}</h5>
                            </div>
                        </div>
                    </div>
                `;

    $(".collection-list.w-dyn-items.w-row").append(html);
  }

  for (let i = 0; i < items.length; i++) {
    $(`#${i}`).css("background-image", `url(${items[i].Imagen})`).on("click", function(){
        let imagen = items[i].Imagen;

        $(".image-10").attr("src", imagen.substring(3));
        $(".heading-6").text(items[i].Name);
        $(".bold-text-2").html(items[i].Descripcion);

        $(".modal-wrapper").css("display", "flex");
    });
  }
});

$(".text-block-7, .button-2").on("click", function(){
    $(".modal-wrapper").css("display", "none");    
});


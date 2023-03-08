$(document).ready(function(){
    //serve para inicializar o conteudo apenas depois do documento for carregado
        $('#carousel-imagens').slick({
            autoplay: true, //faz com que o carousel mude sozinho
        });

        $('.menu-hamburguer').click(function(){
            $('nav').slideToggle();//Faz com que o menu apareça e desapareça ao apertar o menu
        })

        //Como colocar mascara nos campos 
        $('#telefone').mask('(00) 00000-0000',{
            placeholder: '(__)_____-____'
        })

        $('form').validate({
            rules:{
                nome: {
                    required: true
                },
                email: {
                    required: true, 
                    email:true
                },
                telefone: {
                    required: true
                },
                mensagem: {
                    required: true,
                },
                veiculoInteresse:{
                    required: false,
                }
            },
            messages:{
                nome: 'Por favor, insira o seu nome'
            },
            submitHandler: function(form){
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
                if(camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        })
        $('.lista-veiculos button').click(function(){
            const destino = $('#contato');

            const nomeVeiculo = $(this).parent().find('h3').text();

            $('#veiculo-interesse').val(nomeVeiculo); 

            $('html').animate({
                scrollTop: destino.offset().top //vai até a area selecionada quando clica no botao tenho interesse
            }, 1000)
        })
})
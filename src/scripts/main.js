$(document).ready(function() {

    $('#confirmation-form').on('submit', function(e) {
        e.preventDefault();
        validaForm();
        
    });

    //Adicionando a função de mascara jquery
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    $('#valor').mask('0000000', {
        placeholder: '20'
    });
    
    //validação do formulário
    function validaForm(){

        // Atribuição das variáveis
        const noErrorNome = $('#nomeError');
        const noErrorCel = $('#celError');
        
        const checkEmail = $('#email-option');
        const noErrorEmail = $('#emailError');
        
        const checkAcpt= $('#item-1');
        const noErrorAcpt = $('#acptError');

        const checkFilhos= $('#item-2');
        const noErrorFilho1 = $('#filhoError1');
        const noErrorFilho2 = $('#filhoError2');
        const noErrorFilho3 = $('#filhoError3');
        const noErrorFilho4 = $('#filhoError4');

        const success = $('#successMessage');
        const error = $('#errorMessage');
        
        //validação dos campos

        validaNome();
        validaTel();


        if(checkEmail.css('display') === 'flex'){
            validaEmail();
        }
        
        if(checkAcpt.css('display') === 'flex'){
            validaAcpt();
        }

        if(checkFilhos.css('display') === 'flex'){
            identificaItens();
        }      

        //Retorno para o usuário
        if(noErrorNome.css('display') === 'flex' || noErrorCel.css('display') === 'flex'){
            
            success.css('display', 'none');
            error.css('display', 'flex');
            error.html('Formulário incompleto!');

        }else if(checkEmail.css('display') === 'flex' && noErrorEmail.css('display') === 'flex'){
            
            error.css('display', 'flex');    
            error.html('Preencha o campo E-mail ou retire a seleção!');
            
        }else if(checkAcpt.css('display') === 'flex' && noErrorAcpt.css('display') === 'flex'){
                
            error.css('display', 'flex');    
            error.html('Preencha o campo Acompanhante ou retire a seleção!'); 
            
        }else if((checkFilhos.css('display') === 'flex') && 
                (noErrorFilho1.css('display') === 'flex' ||
                noErrorFilho2.css('display') === 'flex' ||
                noErrorFilho3.css('display') === 'flex' ||
                noErrorFilho4.css('display') === 'flex')){
                
            success.css('display', 'none');
            error.css('display', 'flex');    
            error.html('Preencha o campo Filho ou retire a seleção!'); 
            
        }else {
            
            success.css('display', 'flex');
            error.css('display', 'none');
            success.html('Presença confirmada!');
            limparFormulario();
            
        }
                
                

        
    }

    //VALIDAÇÃO DO CAMPO NOME
    function validaNome(){
        const nome = $('#nome').val();
        const nomeCompleto = nome.split(' ');
        const nomeError = $('#nomeError');
    
        if (nome === "") {
            nomeError.css('display', 'flex');
            nomeError.html('Campo Obrigatório!');
        }else {
            if (nomeCompleto.length < 2) {
                nomeError.html('Nome Completo, por favor!');
            }else{
                nomeError.css('display', 'none');
            }
        }
    }
    
    //VALIDAÇÃO DO CAMPO CELULAR
    function validaTel(){
        const tel = $('#telefone').val();
        const celError = $('#celError');
        
        if (tel === "") {
            celError.css('display', 'flex');
            celError.text('Campo Obrigatório!');

        }else {
            if (tel.length < 15) {
                celError.html('Números faltando!');
            }else{
                celError.css('display', 'none');
            }
        }
    }

    //VALIDAÇÃO DO CAMPO EMAIL
    function validaEmail(){
        const email = $('#email').val();
        const emailError = $('#emailError');
    
        if (email === "") {
            emailError.css('display', 'flex');
            emailError.text('Campo Obrigatório!');
        }else {
            emailError.css('display', 'none');

        }
    }
    
    //VALIDAÇÃO DO CAMPO Acompanhante
    function validaAcpt(){
        const acpt = $('#acompanhante-nome').val();
        const nomeCompleto = acpt.split(' ');
        const acptError = $('#acptError');
        
        if (acpt === "") {
            acptError.css('display', 'flex');
            acptError.text('Favor, preencher o nome do acompanhante ou retirar a seleção para prosseguir!');
        }else {
            if (nomeCompleto.length < 2) {
                acptError.html('Nome Completo, por favor!');
            }else{
                acptError.css('display', 'none');

            }
        }
    }

     //IDENTIFICANDO O ITEM FILHO ATIVO
    function identificaItens() {
        for (let i = 3; i <= 6; i++) {
            const checkItem = $(`#item-${i}`);
    
            if (checkItem.css('display') === 'block') {
                validaFilho(i - 2); // Ajusta o número do filho baseado no número do item
            }
        }
    }
    //VALIDAÇÃO DOS CAMPOS FILHO
    function validaFilho(numeroFilho){
        const filho = $(`#filho${numeroFilho}-nome`).val();
        const nomeCompleto = filho.split(' ');
        const filhoError = $(`#filhoError${numeroFilho}`);
    
        if (filho === "") {
            filhoError.css('display', 'flex');
            filhoError.text('Favor, preencher o nome do filho ou retirar a seleção para prosseguir!');
        }else {
            if (nomeCompleto.length < 2) {
                filhoError.html('Nome Completo, por favor!');
            }else{
                filhoError.css('display', 'none');
            }
        }
    }

    /*function identificaItens(){
        const checkFilho1 = $('#item-3');
        const checkFilho2 = $('#item-4');
        const checkFilho3 = $('#item-5');
        const checkFilho4 = $('#item-6');

        if(checkFilho1.css('display') === 'block'){
            validaFilho(1);
        }
        if(checkFilho2.css('display') === 'block'){
            validaFilho(2);
        }
        if(checkFilho3.css('display') === 'block'){
            validaFilho(3);
        }
        if(checkFilho4.css('display') === 'block'){
            validaFilho(4);
        }
    }*/
    /*function validaFilho(){
    
    
    const filho = $('#filho1-nome').val();
    const nomeCompleto = filho.split(' ');
    const filhoError = $('#filhoError');
    
    if (filho == "") {
        filhoError.text('Favor, preencher o nome do acompanhante ou retirar a seleção para prosseguir!');
    }else {
        if (nomeCompleto.length < 2) {
            filhoError.html('Nome Completo, por favor!');
        }else{
            filhoError.html('');
        }
    }
    }*/

    //selecionando todos os inputs com o type checkbox
    $('input[type="checkbox"]').change(function(){
        
        //verificando o checkbox ativo
        var label = $(this).siblings('label');
        if($(this).is(':checked')){
            label.text('Sim');
        } else {
            label.text('Não');
        }

        // Exibir ou ocultar o bloco email com base no estado do checkbox
        if ($(this).is('#email-check')) {
            $('#email-option').slideToggle(
                //callback, para manter o item com display flex
                function() {
                    if ($(this).is(':visible')) {
                        $(this).css('display', 'flex');
                    }
                }
            );
        }

        // Exibir ou ocultar o bloco acompanhante com base no estado do checkbox
        if ($(this).is('#acompanhante-check')) {
            $('#item-1').slideToggle(
                //callback, para manter o item com display flex
                function() {
                    if ($(this).is(':visible')) {
                        $(this).css('display', 'flex');
                    }
                }
            );
        }
        // Exibir ou ocultar o bloco filhos com base no estado do checkbox
        if ($(this).is('#filho-check')) {
            $('#item-2').slideToggle(
                function() {
                    if ($(this).is(':visible')) {
                        $(this).css('display', 'flex');
                    }
                }
            );

            $('input[name="qtd"]').change(function(){
                // Checa qual radio button está selecionado e mostra os itens correspondentes
                var selected = $('input[name="qtd"]:checked').attr('id');
        
                switch(selected){
                    case 'qtd-1':
                        $('#item-3').slideDown();
                        $('#item-4').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError2').css('display', 'none');
                            }
                        });
                        $('#item-5').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError3').css('display', 'none');
                            }
                        });
                        $('#item-6').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError4').css('display', 'none');
                            }
                        });
                        break;
                    case 'qtd-2':
                        $('#item-3').slideDown();
                        $('#item-4').slideDown();
                        $('#item-5').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError3').css('display', 'none');
                            }
                        });
                        $('#item-6').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError4').css('display', 'none');
                            }
                        });
                        break;
                    case 'qtd-3':
                        $('#item-3').slideDown();
                        $('#item-4').slideDown();
                        $('#item-5').slideDown();
                        $('#item-6').slideUp(
                            function() {
                            if (!$(this).is(':visible')) {
                                $('#filhoError4').css('display', 'none');
                            }
                        });
                        break;
                    case 'qtd-4':
                        $('#item-3').slideDown();
                        $('#item-4').slideDown();
                        $('#item-5').slideDown();
                        $('#item-6').slideDown();
                        break;         
                }
            });
        }
        
    });
    
    function limparFormulario() {
        //selecionando todos os inputs do formulário
        const inputs = $('form input');
    
        //limpa o valor de cada input
        inputs.val('');

        // Desmarcar checkboxes
        $('input[type="checkbox"]').prop('checked', false);
    }    
    
    $('#lm-btn').click(function(){
        const donationConfirm = $('#lm-message');
        const donationValue = $('#valor') .val();

        donationConfirm.html(`Código pix no valor de: R$${donationValue},00 gerado e enviado para o seu whatsapp!`);
    });
});    


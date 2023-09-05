// Crie uma sessão de pagamento
const createPaymentSession = async () => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Produto Exemplo',
              },
              unit_amount: 2000, // Valor em centavos (por exemplo, $20.00)
            },
            quantity: 1, // Quantidade do produto
          },
        ],
        mode: 'payment',
        success_url: 'https://seusite.com/sucesso',
        cancel_url: 'https://seusite.com/cancelamento',
      });
  
      return session;
    } catch (error) {
      console.log('Erro ao criar sessão de pagamento:', error);
      return null;
    }
  };
  
  // Inicie o processo de pagamento quando necessário
  const iniciarPagamento = async () => {
    const session = await createPaymentSession();
  
    if (session) {
      // Redirecione o usuário para a página de pagamento
      window.location.href = session.url;
    } else {
      // Lida com o erro caso ocorra algum problema na criação da sessão de pagamento
      console.log('Ocorreu um erro ao iniciar o pagamento.');
    }
  };
  
  // Chame a função iniciarPagamento quando necessário, por exemplo, ao clicar em um botão
  seuBotao.addEventListener('click', iniciarPagamento);
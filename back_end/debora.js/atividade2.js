parte-1 
Obsever o código:

   @app.route('/perfil')
   def perfil():
     if usuario_logado:
       return 'Bem-Vindo'
      else: 
        return ' Acesso negado '

Responda:
1- Qual rota é privada?

A rota e privada quando o usuário faz o seu login

2- O que acontece se o usuário não estiver logando?

O usuário não consegue acessar o site 

3- Qual mensagem aparece?

Acesso negando 

parte-2 

situação real 

1- Explique como os aplicativos de banco impendem que outra pessoa acesse sua conta?

Fazendo a verificação correta e vendo se as informações em que o usuário colocou são afirmativas verdadeiras 

parte-3 

Fluxo de autenticação 

Complete e explique 

usuário => login => verificação => acesso liberando 

primeiro o usuário entra, após isso ele entra com as infomações de seu perfil, o site verifica as informações se estão corretas e após isso ele mostra a mensagem acesso liberado 

parte-4

   from flask import Flask
   app = Flask(__name__)

   usuario_logado = False

   app.route('/NutriPet/login')
   def inicio():
        return ' Seja bem-vindo ao o NutriPet. Faça seu login'
    @app.route('/login')
    def login():
       global usuario_logado 
       usuario_logado - True 
       return 'Usuário logado com sucesso'
    @app.route('/NutriPet/perfil')
    def perfil():
       if usuario_logando:
            return 'Bem-vindo ao seu perfil de monitoramento de seu comedouro '
       else:
            return 'Que pena acesso negado'
    app.run(debug=true

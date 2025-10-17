👥 Grupo: Allan Guilherme, Mateus Augusto e Anna Luísa Delconte
🚀 Projeto: WhatsHub
📖 Matéria: Desenvolvimento Web 2
👨‍🏫 Professor: Rafael Liberato

<---------//---------//---------//---------//---------//---------//---------//---------//--------->

🧭 O que é o WhatsHub?

O WhatsHub é um site e extensão para navegador que tem como objetivo organizar sua agenda de contatos e gerar links rápidos para qualquer conversa a qualquer momento.
Com sua responsividade, o WhatsHub também suporta acesso remoto pelo celular, sendo uma ótima opção para quem vive com a agenda bagunçada.

⚡ Por que usar o WhatsHub?

Porque ele torna sua comunicação mais ágil e organizada.
O WhatsHub elimina a necessidade de procurar contatos manualmente com sua opção de pesquisa e filtragem, gera links prontos e funcionais para qualquer conversa e inicia tópicos mais facilmente com as mensagens automáticas. E com sua responsividade, WhatsHub permite acesso de qualquer dispositivo.
Além disso, pode ser instalado como extensão do Google Chrome, tornando o acesso ainda mais rápido e integrado à sua navegação diária.
É praticidade e produtividade em um só clique.

🌐 Acesse em:

🔗 https://whats-hub-dw-2.vercel.app/

💻 Ou baixe como extensão seguindo o passo a passo:

1- Acesse o repositório hospedado: https://github.com/All4mn/WhatsHubDW2

2- Baixe os arquivos e pastas presentes.

3- Abra os arquivos no Visual Studio Code e crie um arquivo chamado “.env”. Dentro dele, crie duas variáveis:

    VITE_SUPABASE_URL="https://cmiqfrksphslfqcfwaar.supabase.co"

    VITE_SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaXFmcmtzcGhzbGZxY2Z3YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTkxNDQsImV4cCI6MjA3MzUzNTE0NH0.ZTFyBe2NEP9-VPp4zp9UU3coy1PM1FnCc_gKsuxkbac"


(Ambas estão presentes no projeto criado em: https://supabase.com/dashboard/project/cmiqfrksphslfqcfwaar)

4 -Abra o terminal, localize a pasta do projeto e execute o comando:

    npm run build


5- Após isso, uma pasta chamada “dist” (ou “build”) será criada. Arraste os arquivos manifest.json e background.js para dentro dessa pasta.
(se essa pasta ja vier com os arquivos baixados, apenas confira quais arquivos vem dentro dela)

6- Abra seu navegador (Opera GX ou Chrome). Na barra de pesquisa, digite:

    chrome://extensions


7- Ative o Modo de desenvolvedor (Developer Mode) no canto superior direito da página.

8- Clique em “Carregar sem compactação” e selecione a pasta do projeto.

9- Pronto! Sua nova extensão está funcional. ✅

<---------//---------//---------//---------//---------//---------//---------//---------//--------->

🖥️ Caso queira rodar o site localmente na sua máquina:

1- Acesse o repositório hospedado: https://github.com/All4mn/WhatsHubDW2

2- Baixe os arquivos e pastas presentes.

3- Crie um arquivo chamado .env, Dentro dele cole as variaveis de ambiente:

    VITE_SUPABASE_URL="https://cmiqfrksphslfqcfwaar.supabase.co"

    VITE_SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaXFmcmtzcGhzbGZxY2Z3YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTkxNDQsImV4cCI6MjA3MzUzNTE0NH0.ZTFyBe2NEP9-VPp4zp9UU3coy1PM1FnCc_gKsuxkbac"


3- Abra os arquivos no Visual Studio Code, localize a pasta no terminal e execute o comando:

    npm run dev


➜ Se o erro persistir, execute o comando abaixo e repita o passo 3:

    npm i
# Portfólio — Sophia Marina

Site estático (HTML, CSS e JavaScript puro). Não precisa de build, servidor ou dependências.

## Estrutura
- `index.html` (início), `sobre.html`, `servicos.html` (serviços e valores), `portfolio.html`, `contato.html`
- `style.css` — identidade visual e responsividade
- `script.js` — navegação, WhatsApp e imagens (configuração no topo do arquivo)
- `assets/` — favicon e `assets/img/` (imagens)

## Testar localmente
Dê duplo clique em `index.html` e navegue pelas páginas ou, na pasta, rode `python3 -m http.server` e abra http://localhost:8000.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `portfolio-sophia`).
2. Envie todos os arquivos desta pasta (botão **Add file > Upload files** ou `git push`), com `index.html` na raiz.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`. Salve.
5. Aguarde 1 a 2 minutos e acesse `https://usuario.github.io/repositorio/`.
6. Para atualizar: edite os arquivos e envie novamente (commit). O site se atualiza sozinho.

Todos os caminhos são relativos, então funcionam em subdiretórios.

## Como substituir imagens
Coloque os arquivos em `assets/img/` com os nomes listados em `IMAGES` no topo do `script.js` (ou altere os nomes lá).
Enquanto uma imagem não existir, aparece um espaço reservado elegante. Principais arquivos:
`sophia.jpg` e `sophia-2.jpg` (fotos profissionais),
`moda.jpg`, `institucional.jpg`, `captacao.jpg`, `trabalho-1.jpg` a `trabalho-6.jpg`, `qrcode-whatsapp.png`, `og.jpg` (compartilhamento, 1200x630).
Use somente imagens suas ou com licença para uso comercial.

## QR Code
Gere um QR Code do link `https://wa.me/5511977539348` em um gerador de sua confiança, salve como `assets/img/qrcode-whatsapp.png`.

## Editar textos, métricas e estudo de caso
Os textos estão em cada página HTML (valores do plano em `servicos.html`). O estudo de caso em `portfolio.html` é só um modelo: preencha apenas com dados reais e verificáveis.

## Alterar o WhatsApp
No topo do `script.js` (`WHATSAPP` e `MESSAGE`) e, para quem abrir sem JavaScript, nos links `https://wa.me/...` das páginas HTML.

## Teclado
Navegue com Tab e Enter; o menu funciona também no celular.

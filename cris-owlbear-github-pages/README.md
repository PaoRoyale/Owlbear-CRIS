# C.R.I.S. para Owlbear Rodeo — pronto para GitHub Pages

## Antes de publicar
Edite `manifest.json` e `public/manifest.json`: substitua `SEU-USUARIO` pelo seu usuário GitHub e `SEU-REPOSITORIO` pelo nome do repositório. O URL precisa ficar assim:
`https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

Os campos que precisam apontar para esse endereço são `icon`, `action.icon` e `action.popover`.

## Publicação simples no GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. Em Settings > Pages, configure a publicação a partir da branch `main`, pasta `/ (root)`.
4. Aguarde o GitHub Pages publicar.
5. No Owlbear Rodeo, adicione a extensão usando:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/manifest.json`

## Importante sobre o C.R.I.S.
O `index.html` tenta abrir `https://crisordemparanormal.com/` em um iframe. Se o site bloquear incorporação por cabeçalhos de segurança (CSP `frame-ancestors` ou `X-Frame-Options`), o navegador não permitirá exibi-lo dentro do Owlbear. Não há como contornar isso pelo código da extensão.

## Privacidade
A extensão não usa broadcast nem metadata compartilhada do Owlbear. A janela e o endereço da ficha ficam locais ao participante que abriu a extensão; não são enviados aos outros jogadores nem ao mestre. Isso não altera as permissões ou a privacidade que o próprio site C.R.I.S. aplica à conta.

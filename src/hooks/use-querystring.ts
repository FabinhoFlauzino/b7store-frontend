import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function UseQueryString() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return {
    get: (att: string) => {
      return searchParams.get(att)
    },
    set: (att: string, val: string) => {
      const params = new URLSearchParams(searchParams.toString())

      if(val) {
        params.set(att, val)
      } else {
        params.delete(att)
      }

      router.push(`${pathname}?${params.toString()}`)
    }
  }
}

/**
 * Explicação do que esse hook faz
 * 
 * Ele vai retornar um objeto com duas funções: get e set
 * A função GET vai mandar uma atributo para pegar um atributo e retornar o valor
 * A função SET iremos pegar o atributo que uqeremos trocar e o valor que queremos colocar nesse atributo
 * 
 * 
 * 
 * Para fazer o funcionamento correto precisaremos de alguns hooks do próprio React
 * useRouter do next/navigation para trocar de tela
 * usePathname do next/navigation para pegar o caminho atual
 * useSearchParams do next/navigation para pegar os parâmetros da URL
 * 
 * 
 * 
 * Para pegar um item da query string usamos o useSearchParams com o metodo get e passamos o nome do parametro que queremos pegar
 * searchParams.get("cor")
 * Exemplo: se a URL for localhost:3000/categories/camisetas?cor=azul
 * e chamarmos a função get("cor") ela vai retornar "azul"
 *
 * Para atualizar os parâmetros da query string, fazemos os seguintes passos:
 * Primeiro pegamos todos os parâmetros atuais da URL
 * Depois verificamos se o valor que queremos colocar é vazio
 * Se for vazio, queremos remover esse atributo da URL
 * Se não for vazio, queremos adicionar ou trocar o valor desse atributo
 * 
 * Passo 1: Pegar todos os parâmetros atuais da URL
 *  const params = new URLSearchParams(searchParams.toString()) 
 *    //new URLSearchParams() Isso cria uma nova instância de `URLSearchParams` com os dados atuais da URL, permitindo que a gente edite os parâmetros livremente.
 *    const params = new URLSearchParams('nome=Joao&idade=25');
      console.log(params.get('nome'));   // "Joao"
      console.log(params.get('idade'));  // "25"
 * 
 * Passo 2: Verificar se o valor que queremos colocar está vazio:
 *  Se estiver vazio: removemos o parâmetro da URL usando `params.delete('chave')`
 *  Se não estiver vazio: usamos `params.set('chave', 'valor')` para adicionar ou atualizar o valor
 *  const params = new URLSearchParams(searchParams.toString())
      if(val) {
        params.set(att, val)
      } else {
        params.delete(att)
      }
 *  Esse passo não autera a URL do site, apenas modifica o objeto `params` que criamos
 * 
 * 
 *
 * Passo 3: Atualizar a URL com os novos parâmetros
 * Usamos o `router.push()` para navegar para a nova URL com os parâmetros atualizados
 * router.push(`${pathname}?${params.toString()}`)
 * 
 * 
 * Usando o hook na prática:
 * 
 * const queryString = useQueryString() // dentro da queryString temos as funções get e set
 * const order = queryString.get("order") ?? "views" //Pega o valor do parâmetro "order", ou usa "views" como valor padrão se não existir
 * 
 * Para o <select>, usamos `defaultValue={order}` para definir o valor inicial baseado na query string.
 * Após isso temos que ter uma função para quando o usuário trocar o valor do select
 * Quando o usuário muda o valor do select, disparamos a função:
 *  const handleSelectChanged = (e: ChangeEvent<HTMLSelectElement>) => {
      queryString.set("order", e.target.value)
    }
 * Isso atualiza a URL com o novo parâmetro, mantendo a reatividade da aplicação.
 * 
 * 
 */
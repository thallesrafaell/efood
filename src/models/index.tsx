export class ListasRestaurantes {
  id: number
  image: string
  nome: string
  avaliacao: number
  descricao: string
  info: string[]

  constructor(
    id: number,
    image: string,
    nome: string,
    avaliacao: number,
    descricao: string,
    info: string[]
  ) {
    this.id = id
    this.image = image
    this.nome = nome
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.info = info
  }
}

export class Cardapio {
  id: number
  image: string
  titulo: string
  descricao: string

  constructor(id: number, image: string, titulo: string, descricao: string) {
    this.id = id
    this.image = image
    this.titulo = titulo
    this.descricao = descricao
  }
}

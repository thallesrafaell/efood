export class ListasRestaurantes {
  id: number
  image: string
  nome: string
  avaliacao: number
  descricao: string
  info: string

  constructor(
    id: number,
    image: string,
    nome: string,
    avaliacao: number,
    descricao: string,
    info: string
  ) {
    this.id = id
    this.image = image
    this.nome = nome
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.info = info
  }
}

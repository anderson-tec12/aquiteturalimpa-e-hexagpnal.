import { Collection } from './collection'

export default class Base implements Collection{
  itens:any[] = []

  insert(item:any){
    this.itens.push(item)
    return item
  }
}

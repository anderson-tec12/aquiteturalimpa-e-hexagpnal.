/*
  Exemplo de como a arquitetura da aplicação fica depedente de uma
  biblioteca externa.

  A maneira correta é criar uma interface de entrada e um adpter que a implemnte
  pois se amanha seja nescessario troca de biblioteca seja mais facil a troca de biblioteca
  externas
*/

import {v4 as uuid} from 'uuid';


export class ID{
  static render():string{
    return uuid()
  }
}

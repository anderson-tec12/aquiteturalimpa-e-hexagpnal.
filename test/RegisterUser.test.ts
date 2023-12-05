import RegisterUser from '../src/exemple/app/user/RegisterUser'
import Base from '../src/exemple/app/adapters/base';
import {HashProvider} from '../src/exemple/app/adapters/providerHash'
import {BCRYPT_ADAPTER} from '../src/exemple/app/adapters/Auth/bcript'


test('Deve registrar um usuário com criptografia real',() => {
  const baseInMemory = new Base()
  const bcriyptAdapter = new BCRYPT_ADAPTER()
  const useCase = new RegisterUser(baseInMemory, bcriyptAdapter);

  const user = useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
  expect(bcriyptAdapter.decript('123456789', user.password)).toBeTruthy()
})


test('Deve registrar um usuário',() => {
  const baseInMemory = new Base()
  const hashProvider = new HashProvider()
  const useCase = new RegisterUser(baseInMemory, hashProvider);

  const user = useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
  expect(user.password).toEqual('987654321')
})

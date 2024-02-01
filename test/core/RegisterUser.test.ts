import RegisterUser from '../../src/core/user/RegisterUser'
import Base from '../../src/adapters/base';
import {HashProvider} from '../../src/adapters/providerHash'
import {BCRYPT_ADAPTER} from '../../src/adapters/Auth/bcript'


test('Deve registrar um usuário com criptografia real',async () => {
  const baseInMemory = new Base()
  const bcriyptAdapter = new BCRYPT_ADAPTER()
  const useCase = new RegisterUser(baseInMemory, bcriyptAdapter);

  const user = await useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
  expect(bcriyptAdapter.decript('123456789', user.pass!)).toBeTruthy()
})


test('Deve registrar um usuário',async () => {
  const baseInMemory = new Base()
  const hashProvider = new HashProvider()
  const useCase = new RegisterUser(baseInMemory, hashProvider);

  const user = await useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
  expect(user.pass).toEqual('987654321')
})

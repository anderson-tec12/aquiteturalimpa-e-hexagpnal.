import RegisterUser from '../../src/exemple/app/user/RegisterUser'
import Base from '../../src/exemple/adapters/base';
import {HashProvider} from '../../src/exemple/adapters/providerHash'
import {BCRYPT_ADAPTER} from '../../src/exemple/adapters/Auth/bcript'


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

import RegisterUser from '../src/exemple/app/user/RegisterUser'
import Base from '../src/base';
import {HashProvider} from '../src/providerHash'

test('Deve registrar um usuário',() => {
  const baseInMemory = new Base()
  const hashProvider = new HashProvider()
  const useCase = new RegisterUser(baseInMemory, hashProvider);

  const user = useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
  expect(user.password).toEqual('987654321')
})

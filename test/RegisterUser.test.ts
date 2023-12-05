import RegisterUser from '../src/RegisterUser';
import Base from '../src/base';

test('Deve registrar um usuário',() => {
  const baseInMemory = new Base()
  const useCase = new RegisterUser(baseInMemory);

  const user = useCase.runner('Joe', 'joe@zmail.com','123456789')

  expect(user).toHaveProperty('id')
})

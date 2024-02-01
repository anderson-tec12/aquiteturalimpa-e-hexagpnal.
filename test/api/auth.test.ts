import axios from 'axios'

const baseUrl = process.env.API_URL

test('Deve registrar um novo usuario se não existir', async () => {
  const user = {
    name:'João',
    mail:'joão@gmail.com',
    pass: '123456789'
  }
  const resp = await axios.post(`${baseUrl}/user`,user)

  expect(resp.status).toBe(201)
})

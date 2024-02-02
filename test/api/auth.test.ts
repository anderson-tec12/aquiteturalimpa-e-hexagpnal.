import axios from 'axios'

const baseUrl = process.env.API_URL

test('Deve registrar um novo usuario se não existir', async () => {
  const user = {
    name:'João',
    mail:'joão@gmail.com',
    pass: '123456789'
  }
  try{
    const resp = await axios.post(`${baseUrl}/user`,user)

    expect(resp.status).toBe(201)
  }catch(e:any){
    console.log({e})
    expect(e.response.status).toBe(400)
    // expect(e.response.data).toBe('Users is exists')
  }
})

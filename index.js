import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json('Hola!')
})

export default app
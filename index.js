import express from 'express' // require -> commonJS
import { SuperHeroRouter } from './routes/superhero-routes.js'

const app = express()
app.use(express.json({ limit: '10mb' }))

app.disable('x-powered-by')
app.get('/', (req, res) => res.send('Express on Vercel'))
app.use('/superhero', SuperHeroRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

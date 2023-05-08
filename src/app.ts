import { env } from './env'
import { app } from './server'

app.listen(env.PORT, () => {
  console.log('🚀 Running Server 🚀')
})

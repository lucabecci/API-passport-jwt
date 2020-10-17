import app from './app'
import './database/database'

async function main() {
    await app.listen(app.get('port'));
    console.log(`Server on port: ${app.get('port')}`)
}
main()
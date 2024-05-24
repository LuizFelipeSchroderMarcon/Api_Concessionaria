import mysql2 from "mysql2/promise"

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/concessionaria")
    
    console.log("Conectado ao SGBD MySQL")
    global.connection = connection
    return connection
}
//connect()
export default connect


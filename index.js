const bcrypt  = require('./bcrypt')
const chalk = require('chalk')
const commander = require('commander')

commander
.option("-hs, --hash <i>", "String value", String, 'hello_world')
.option("-c, --comparar <j>", "String value", String, '$2a$10$SDROiBTfL0emRq7TPkTrROx6TM4Ou/ISYBwq4a48O02682tIpxJWu')
.parse(process.argv);

const operacao = process.argv[2]
const pass = process.argv[3]
const hash = process.argv[4]

 if (operacao === 'hash' || operacao === '--hash' || operacao === '-hs') {
      const resultado = bcrypt.hash(pass || 'hello_world')  // criar um arquivo sanitize(args) para tratar os parâmetros
      console.log(chalk.bgYellow('Resultado:'), chalk.magenta(resultado))  
 } else if (operacao === 'comparar' || operacao === '--comparar' || operacao === '-c'){
      const resultado = bcrypt.comparar(pass || 'hello_world', hash)  
      resultado ? console.log(chalk.bgYellow('Senha compatível:'), chalk.bgGreen('Sim' )) :
                  console.log(chalk.bgYellow('Senha compatível:'), chalk.bgGreen('Não' ))
 } else {
     console.log(chalk.red('Operação inválida!'))
 }





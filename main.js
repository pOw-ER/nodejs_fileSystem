const fs = require('fs')
// const fse = require('fs-extra')

//////////// LEVEL 1-1 ///////////////////
fs.readFile('./blog1.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString());
})
let text = 'Sean hat keine Ahnung von NODEJS'
fs.writeFile('./blog1.txt', text, () => {
  console.log('files written');
})

let text1 = 'Enes ist der Meister'

fs.writeFile('./blog2.txt', text1, () => {
  console.log('ist okay');
})


if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    console.log(err);
  })
} else {
  fs.rmdir('./assets', (err) => {
    console.log(err);
  })
}

if (fs.existsSync('./delete.txt')) {
  fs.unlink('./delete.txt', (err) => {
    console.log(err);
  })
}
let text2 = 'Afrae ist ein Designer'
fs.writeFile('./Hello.txt', text2, () => {
  console.log('funktioniert');
})

fs.rename('./Hello.txt', 'Helloworld.txt', (err) => {
  console.log(err);
})

//////////// LEVEL 3-1 ///////////////////

let erstelleDatei = (data) => {
  if (!fs.existsSync('./data.txt')) {
    fs.writeFile('./data.txt', data, () => {
      console.log('gut written');
    })
  } else {
    fs.appendFile('./data.txt', data, () => {
      console.log('es ist okay');
    })
  }
}
erstelleDatei("\n" + 'Önder kann alles')


//////////// LEVEL 3-2 ///////////////////

if (!fs.existsSync('./MyFunnyFolder')) {
  fs.mkdir('./MyFunnyFolder', () => {
    console.log('okay MyFunnyFolder erstellt');
  })
} else {
  fs.rmdir('./MyFunnyFolder', () => {
    console.log('MyFunnyFolder gelöscht');
  })
}

// console.log(fs.existsSync('./What/isThis.txt'));

// fse.outputFile('./What/isThis.txt', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log('sehr gut funktioniert');
//   }
// })

// if (!fs.existsSync('./What')) {
//   fs.mkdirSync('./What', () => {
//     console.log('schon gut sss');
//   })
// } else {
//   if (!fs.existsSync('./What/isThis.txt')) {
//     fs.writeFile('./What/isThis.txt', 'hello', (err) => {
//       console.log('schon isThis erstellt');
//       console.log(err);
//     })
//   } else {
//     fs.rmdir('./What', () => {
//       console.log('what und isThis schon gelöscht');
//     })
//   }
// }

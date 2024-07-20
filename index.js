const args = process.argv.slice(2);

let name = "user";
let level = 1;
let greeting = "Hello";
let language = "English";

for (let i = 0; i <= args.length; i++) {
  switch (args[i]) {
    case "--name":
    case "-n":
      name = args[i + 1];
      i++;
      break;
    case "--level":
    case "-l":
      level = parseInt(args[i + 1]);
      i++;
      break;
    case "--greeting":
    case "-g":
      greeting = args[i + 1];
      i++;
      break;
    case "--language":
    case "-ln":
      language = args[i + 1];
      i++;
      break;
    default:
      break;
  }
}

let dateTime = new Date();
if (level === 1) {
  console.log(`${name} ${greeting}`);
} else if (level === 2) {
  console.log(`${name} ${greeting} (Date and Time: ${dateTime}) ${language}`);
} else {
  console.log(`${name} ${greeting} ${language}`);
}

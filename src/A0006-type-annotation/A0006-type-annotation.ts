const dadosCliente1: readonly [number, string] = [1, `mateus`];
const dadosCliente2: [number, string, string] = [1, `mateus`, `gotardi`];
const dadosCliente3: [number, string, string?] = [1, `mateus`];
const dadosCliente4: [number, string, ...string[]] = [1, `mateus`, `gotardi`];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = `Carlos`;

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = [`mateus`, `gotardi`];
const array2: ReadonlyArray<string> = [`mateus`, `gotardi`];

console.log(array1);
console.log(array2);

let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: `mateus` as const,
  sobrenome: `gotardi`,
};

function escolhaACor(cor: `vermelho` | `Amarelo` | `Aul`): string {
  return cor;
}
console.log(escolhaACor(`Amarelo`));

//module mode
export default 1;

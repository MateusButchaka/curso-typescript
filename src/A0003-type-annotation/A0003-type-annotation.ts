function semRetorno(...args: string[]): void {
  console.log(args.join(``));
}

const pessoa = {
  nome: `mateus`,
  sobrenome: `gotardi`,

  exibirNome(): void {
    console.log(this.nome + ` ` + this.sobrenome);
  },
};

semRetorno(`mateus`, `gotardi`);
pessoa.exibirNome();

export { pessoa };

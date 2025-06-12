class ConfiguracaoSistema {
  private linguagem: string;
  private fusoHorario: string;

  // Construtor público - pode criar várias instâncias
  constructor() {
    this.linguagem = "Português";
    this.fusoHorario = "GMT-3";
  }

  public getLinguagem(): string {
    return this.linguagem;
  }

  public setLinguagem(linguagem: string): void {
    this.linguagem = linguagem;
  }

  public getFusoHorario(): string {
    return this.fusoHorario;
  }

  public setFusoHorario(fusoHorario: string): void {
    this.fusoHorario = fusoHorario;
  }
}

// Código cliente
const config1 = new ConfiguracaoSistema();
config1.setLinguagem("Inglês");

const config2 = new ConfiguracaoSistema();

console.log("Config1 linguagem:", config1.getLinguagem()); // Inglês
console.log("Config2 linguagem:", config2.getLinguagem()); // Português (padrão)

console.log("Mesma instância?", config1 === config2); // false

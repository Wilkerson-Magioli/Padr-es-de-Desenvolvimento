class ConfiguracaoSistema {
  // 1. Campo privado estático para armazenar a instância do Singleton
  private static instancia: ConfiguracaoSistema | null = null;

  private linguagem: string;
  private fusoHorario: string;

  // 4. Construtor privado
  private constructor() {
    this.linguagem = "Português";
    this.fusoHorario = "GMT-3";
  }

  // 2 e 3. Método público estático para obter a instância (lazy loading)
  public static getInstancia(): ConfiguracaoSistema {
    if (this.instancia === null) {
      this.instancia = new ConfiguracaoSistema();
    }
    return this.instancia;
  }

  // Métodos auxiliares
  public getLinguagem(): string {
    return this.linguagem;
  }

  public setLinguagem(novaLinguagem: string): void {
    this.linguagem = novaLinguagem;
  }

  public getFusoHorario(): string {
    return this.fusoHorario;
  }

  public setFusoHorario(novoFuso: string): void {
    this.fusoHorario = novoFuso;
  }
}

// Código cliente usando o singleton
const config1 = ConfiguracaoSistema.getInstancia();
config1.setLinguagem("Inglês");

const config2 = ConfiguracaoSistema.getInstancia();
console.log("Linguagem:", config2.getLinguagem()); // Deve mostrar "Inglês"

console.log("Mesma instância?", config1 === config2); // true

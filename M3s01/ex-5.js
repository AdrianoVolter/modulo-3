class EstadoTarefa {
    getEstado() {
      throw new Error("Este método deve ser sobrescrito");
    }
    proximoEstado(tarefa) {
      throw new Error("Este método deve ser sobrescrito");
    }
  }
  
  class AFazer extends EstadoTarefa {
    getEstado() {
      return "A fazer";
    }
    proximoEstado(tarefa) {
      tarefa.setEstado(new EmAndamento());
    }
  }
  
  class EmAndamento extends EstadoTarefa {
    getEstado() {
      return "Em andamento";
    }
    proximoEstado(tarefa) {
      tarefa.setEstado(new Concluida());
    }
  }
  
  class Concluida extends EstadoTarefa {
    getEstado() {
      return "Concluída";
    }
    proximoEstado(tarefa) {
      console.log("A tarefa já está concluída");
    }
  }

  class Tarefa {
    constructor(titulo, descricao) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.estado = new AFazer();
    }
    getEstado() {
      return this.estado.getEstado();
    }
    setEstado(estado) {
      this.estado = estado;
    }
    avancarEstado() {
      this.estado.proximoEstado(this);
    }
  }
  
  
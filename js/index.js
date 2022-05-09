class Hotel {
  constructor(nomeHotel, classificacaoHotel, taxaDiaUtil, finalDeSemana) {
    this.nomeHotel = nomeHotel;
    this.classificacaoHotel = classificacaoHotel;
    this.taxasDiaDeSemama = {
      normais: taxaDiaUtil[0],
      fidelidade: taxaDiaUtil[1],
    };
    this.taxasFinalDeSemana = {
      normais: finalDeSemana[0],
      fidelidade: finalDeSemana[1],
    };
    this.total_a_pagar = 0;
  }

  get hotelVencedor() {
    return `O hotel, ${this.nomeHotel} é o hotel mais barato`;
  }

  get reservar() {
    let reservado = `O Hotel ${this.nomeHotel}, foi reservado a um preço de R$ ${this.total_a_pagar},00`;
    return reservado;
  }

  totalAPagar(cliente, diasDeSemana, finalDeSemana) {
    var tipoCliente = cliente == "Regular" ? "normais" : "fidelidade";

    this.total_a_pagar = this.taxasDiaDeSemama[tipoCliente] * diasDeSemana;
    this.total_a_pagar += this.taxasFinalDeSemana[tipoCliente] * finalDeSemana;

    return this.total_a_pagar;
  }
}

class ServiceHoteis {
  constructor(dias, preferencia, HoteisDisponiveis, estrelas) {
    this.dias = dias;
    this.preferencia = preferencia;
    this.HoteisDisponiveis = HoteisDisponiveis;
    this.estrelas = estrelas;
    this.HoteisBaratos = [];
  }

  getHoteisDisponiveis() {
    return this.HoteisDisponiveis;
  }
  HotelMaisBarato() {
    const diasDeSemana = this.dias.filter((dia) => dia < 6).length;
    const finalDeSemana = this.dias.filter((dia) => dia > 5).length;

    this.HoteisBaratos = this.HoteisDisponiveis.map((hotel) => {
      hotel.totalAPagar(this.preferencia, diasDeSemana, finalDeSemana);
      return hotel;
    });

    this.HoteisBaratos.sort(function (a, b) {
      if (a.total_a_pagar < b.total_a_pagar) {
        return -1;
      } else {
        return true;
      }
    });
    return this.HoteisBaratos[0];
  }
}

module.exports = {
  Hotel,
  ServiceHoteis,
};
/* console.log("Entrada 03: ");
const service = new ServiceHoteis([4, 5, 7], "Reward", hotelaria, 4);
console.log(service.HotelMaisBarato()); */
//entrada 01 "Regular",1,2,3
//entrada 02 "Regular",5,6,7
//entrada 03 "Reward",4,5,7

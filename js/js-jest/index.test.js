const { Hotel, ServiceHoteis } = require("./");
const hotelaria = [
  new Hotel("Lakewood", 3, [110, 80], [80, 90]),
  new Hotel("Bridgewood", 4, [160, 110], [60, 50]),
  new Hotel("Ridgewood", 5, [220, 100], [150, 40]),
];

const hotel = new Hotel("Saudades", 3, [110, 80], [80, 90]);

const cliente = {
  preferencia: "Reward",
  dias: [4, 5, 7],
  estrelas: 3,
};
const suit = new ServiceHoteis(
  cliente.dias,
  cliente.preferencia,
  hotelaria,
  cliente.estrelas
);
describe("Serviço de Hoteis", () => {
  const HotelMaisBarato = suit.getHotelMaisBarato();
  const HoteisDisponiveis = suit.getHoteisDisponiveis();
  const ListaHoteisBaratos = suit.getListHoteisBaratos();
  const HotelMaisBaratoEstrelas = suit.getHotelMaisBaratoEstrelas();
  it("Caso o hotel mais barato seja realmente o mais barato entre os disponiveis", () => {
    expect(
      ListaHoteisBaratos.filter(
        (hoteis) => hoteis.total_a_pagar < HotelMaisBarato.total_a_pagar
      ).length
    ).toBe(0);
  });
  it("Caso o hotel não mais barato seja realmente o mais barato entre os disponiveis", () => {
    expect(
      [hotel].filter(
        (hoteis) => hoteis.total_a_pagar < HotelMaisBarato.total_a_pagar
      ).length
    ).toBe(1);
  });
  it("Caso as estrelas do hotel mais barato seja diferente da pedida", () => {
    expect(HotelMaisBaratoEstrelas).not.toHaveProperty("classificacaoHotel", 4);
  });
  it("Caso as estrelas do hotel mais barato seja igual da pedida", () => {
    expect(HotelMaisBaratoEstrelas).toHaveProperty(
      "classificacaoHotel",
      cliente.estrelas
    );
  });
  it("Caso o Hotel retornado seja diferente dos Disponiveis", () => {
    expect(HoteisDisponiveis).not.toContain(hotel);
  });
});

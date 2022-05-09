const { Hotel, ServiceHoteis } = require("./");
const hotelaria = [
  new Hotel("Lakewood", 3, [110, 80], [80, 90]),
  new Hotel("Bridgewood", 4, [160, 110], [60, 50]),
  new Hotel("Ridgewood", 5, [220, 100], [150, 40]),
];

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

  it("Caso o Hotel tenha a mesma estrela que o cliente pediu", () => {
    expect(HotelMaisBarato).toHaveProperty("classificacaoHotel", 5);
  });

  it("Caso as estrelas do hotel seja diferente da pedida", () => {
    expect(HotelMaisBarato).not.toHaveProperty(
      "classificacaoHotel",
      cliente.estrelas
    );
  });

  it("Caso o Hotel retornado seja diferente dos Disponiveis", () => {
    const hotel = new Hotel("Saudades", 3, [110, 80], [80, 90]);

    expect(HoteisDisponiveis).not.toContain(hotel);
  });
});

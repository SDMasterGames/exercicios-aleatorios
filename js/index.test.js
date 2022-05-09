const { Hotel, ServiceHoteis } = require("./");
const hotelaria = [
  new Hotel("Lakewood", 3, [110, 80], [80, 90]),
  new Hotel("Bridgewood", 4, [160, 110], [60, 50]),
  new Hotel("Ridgewood", 5, [220, 100], [150, 40]),
];

const cliente = {
  preferencia: "Reward",
  dias: [4, 5, 7],
  estrelas: 4,
};
const suit = new ServiceHoteis(
  cliente.dias,
  cliente.preferencia,
  hotelaria,
  cliente.estrelas
);
describe("Serviço de Hoteis", () => {
  const hotelMaisBarato = suit.HotelMaisBarato();
  it("Caso as estrelas do hotel seja diferente da pedida", () => {
    expect(hotelMaisBarato).not.toHaveProperty(
      "classificacaoHotel",
      cliente.estrelas
    );
  });

  it("Caso o Hotel retornado seja diferente dos Disponiveis", () => {
    const hotel = new Hotel("Saudades", 3, [110, 80], [80, 90]);

    expect(hotelaria).not.toContain(hotel);
  });
});

# Backend for restaurant booking system using solidity

Detta projekt beskriver det smarta kontrakt som behöver användas i inlämningsuppgiften Restaurangen.

## Komma igång

- Installera [https://trufflesuite.com/ganache/](ganache)

- Starta ganache
- Lägg till ett nytt workspace
- Ge ditt workspace ett namn
- Kontrollera att den kör på port 7545

I detta projekt kommer ni sedan behöva göra följande i en terminal:

```terminal
npm i
```

För att installera all beroende som behövs för just detta projekt. Sedan (och tänk på att ganache måste vara igång nu):

```terminal
truffle migrate --reset
```

Detta kommando kommer att kompilera kontraktet och placera resultatet i mappen build/contracts. I vårt fall blir resultatet en fil som heter Restaurants.json. Dessutom kommer kontraktet att installeras i vår kedja som ligger i ganache. Wohoo!

I Restaurants.json kommer det att finnas en egenskap som heter abi. Denna lista behöver vi lägga in i react-projektets config.js.

## TODO: README

> It's a simple tool that help you roll the dice. Currying support.

### Getting Started

* **Basic Use**

```typescript
import roll from "@hansuhhi-don/dice";
// or import { roll } from "@hansuhhi-don/dice";

const result1 = roll(2, 6); // Roll 2 dice with a cap of 6
// will get: {total: 3, numbers: [1, 2]}

const result2 = roll(2, 6); // Roll 2 dice with a cap of 6 also
// will get: {total: 6, numbers: [4, 2]}


const twoDices = roll(2);
const rollResult1 = twoDices(6); // will get: {total: 6, numbers: [3, 3]}
const rollResult2 = twoDices(12); // will get: {total: 13, numbers: [4, 9]}
```

### API

* **props1: Number of dice to roll**

* **props2: Maximum number of dice**

enjoy😃
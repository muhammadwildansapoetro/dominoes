export const sortAscending = (
  dominoes: number[][],
  setDominoes: (key: number[][]) => void
) => {
  dominoes.sort((a, b) => {
    const total1 = a[0] + a[1];
    const total2 = b[0] + b[1];

    if (total1 !== total2) {
      return total1 - total2;
    }

    return a[0] - b[0] || a[1] - b[1];
  });

  setDominoes([...dominoes]);
};

export const sortDescending = (
  dominoes: number[][],
  setDominoes: (key: number[][]) => void
) => {
  dominoes.sort((a, b) => {
    const total1 = a[0] + a[1];
    const total2 = b[0] + b[1];

    if (total1 !== total2) {
      return total2 - total1;
    }

    return b[0] - a[0] || b[1] - a[1];
  });

  setDominoes([...dominoes]);
};

export const countDoubleNumber = (dominoes: number[][]): number => {
  const doubleCount = dominoes.filter(([a, b]) => a === b).length;
  return doubleCount;
};

export const flipNumber = (
  dominoes: number[][],
  setDominoes: (key: number[][]) => void
) => {
  const flippedNumber = dominoes.map(([a, b]) => [b, a]);

  setDominoes(flippedNumber);
};

export const removeDuplicates = (
  dominoes: number[][],
  setDominoes: (key: number[][]) => void
) => {
  const countDomino: { [key: string]: number } = {};

  dominoes.forEach((domino) => {
    const key =
      domino[0] < domino[1]
        ? domino.join(",")
        : [domino[1], domino[0]].join(",");
    countDomino[key] = (countDomino[key] || 0) + 1;
  });

  const uniqueDominoes = dominoes.filter((domino) => {
    const key =
      domino[0] < domino[1]
        ? domino.join(",")
        : [domino[1], domino[0]].join(",");
    return countDomino[key] === 1;
  });

  setDominoes(uniqueDominoes);
};

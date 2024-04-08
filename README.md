# Environment

## NixOS

```bash
nix shell nixpkgs#nodejs
```

# Play 🕹

```bash
npx tsx ./src/exponentile.ts
```

# Output

The current state of the game is represented by a JSON object with the following properties:

(Note: In actuality the JSON is printed in a single line)

```json
{
  "board": [
    [ 16, 16, 2, 16, 8, 2, 16, 16 ],
    [ 2, 8, 2, 2, 8, 16, 4, 8 ],
    [ 2, 2, 4, 2, 16, 2, 4, 2 ],
    [ 4, 16, 8, 16, 8, 8, 16, 2 ],
    [ 8, 4, 8, 8, 2, 16, 8, 16 ],
    [ 2, 4, 16, 4, 4, 16, 2, 2 ],
    [ 8, 16, 8, 8, 4, 8, 16, 16 ],
    [ 2, 16, 8, 16, 8, 16, 4, 8 ]
  ],
  "hint": [
    { "x": 0, "y": 2 },
    { "x": 0, "y": 3 }
  ],
  "score": 0
}
```

# Input

The game accepts the positions of the two tiles to be swapped as input. The positions are 0-indexed and are represented as an array of two objects with the following properties:

```json
[{"x":0,"y":2},{"x":0,"y":3}]
```

# End of the Game

When no more moves can be made the stdout is closed.


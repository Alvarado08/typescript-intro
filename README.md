# TypeScript Introduction 👨🏻‍💻

A basic introduction to TypeScript. The primary objective is begin to grasp and implement strongly typed JavaScript throughout future projects and be added to the toolbox.

Tutorial based on: [Sergie Code TypeScript Desde Cero Tutorial](https://youtu.be/UTA5bykCx2c?si=mqUJB4poIe8Bp6zy) (Spanish)

## What was learned and practiced

* Primitive Data
* Unions
* Arrays
* Functions
* Types
* Interfaces
* OOP Classes, Encapsulation and Generics

## How to start

### Install TypeScript

Assuming you have node and npm installed:

### Global

```javascript
npm install -g typescript
```

### Local

```javascript
npm install typescript --save-dev
```

Verify correct installation:

```javascript
tsc -v
```

```javascript
Version x.x.x
```

### Quick Start

Once you have TypeScript installed:

Create **app.ts**

### Compile

```javascript
tsc app.ts
```

### Watch

```javascript
tsc app.ts -w
```

### Initialization

Initialize tsconfig.json:

```javascript
tsc --init
```

### Watch global changes

```javascript
tsc -w
```

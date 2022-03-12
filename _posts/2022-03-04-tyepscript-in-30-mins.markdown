---
layout:     post
title:      "Typescript"
subtitle:   "Typescript from zero to hero"
date:       2022-03-04
author:     "awis.me"
header-img: "img/star2.jpg"
tags:
    - Typescript
    - 随时更新
---

> Typescript学习笔记。From zero to hero。


## 1. Array,Tuple,Union,Enum

``` js
// Basic Types
let id: number = 5         //变量后面加类型，用冒号隔开
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'       //any类型变量，可以放任何类型数据

let ids: number[] = [1, 2, 3, 4, 5]  //不定长数组 区别传统静态语言的int a[4]; 
let arr: any[] = [1, true, 'Hello']  //any数组，可以混合各种值

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]  //元组：已知元素数量和类型的数组，各元素的类型不必相同。


// Tuple Array
let employees: [number, string][]  //每个元素是元组的数组

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union
let pid: string | number    //联合  

/*  以下是C语言的联合，都是一个变量可以存几种不同类型数据
union data{
    int n;
    char ch;
    double f;
};
*/

pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
```

## 2. Map

```javascript

//定义
type MapType = { 
    [id: string]: string; 
}

//实例化
const map: MapType = {};
map['a'] = 'b';
map['c'] = 'd';

//删除
delete map['c'];

//枚举
for (let i in map) {
    console.log(map[i]);
}

//得到包含所有key的数组
console.log(Object.keys(map));

//另外一种用Record的实现方式
const map: Record<string, string> = {};
map['a'] = 'b';
map['c'] = 'd';


```


## 3. Object


```javascript
// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion  类型的选择
let cid: any = 1
// let customerId = <number>cid  从any到 number 的选择
let customerId = cid as number
```

## 4. Function

```js
// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}
```

## 5. Interface, Class

```js
// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')
```

## 6. Generics

```js
// Generics => C++的泛型
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error

```
 
## 7. FAQ

### 7.1. type alias or interface

[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

- 区别不大，一般可尽量用interface
- type对简单类型的别名。常用给枚举类型起一个名字，后面好用。 例如

```javascript
type ID = number | string;
type ABC = 'a' | 'b' | 'c'
```
## 8. d.ts 文件

这个类似C语言的头文件。 里面都是类型定义。 有了这些，就可以知道在typescript里面如何使用一个javascript库了。DefinitelyTyped是typescript社区维护的头文件库。第三方javascript的type都可以在那里找。

## 9. 参考资料

- [https://www.youtube.com/watch?v=BCg4U1FzODs](https://www.youtube.com/watch?v=BCg4U1FzODs)
- [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

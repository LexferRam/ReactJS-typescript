# Typescript

Todos los eventos de elementos de formulario son del tipo React.ChangeEvent<T>, donde T es el tipo de elemento HTML.
Ejemplo de todos los diferentes tipos de HTML:

**Para input type="text"el tipo de evento es React.ChangeEvent HTMLInputElement**

```javascript
const Input = (): JSX.Element => { 
    const [inputValue, setInputValue] = useState<cadena>(""); 
    return ( 
        <input 
            type="text" 
            value={inputValue} 
            onChange={( 
                ev: React.ChangeEvent<HTMLInputElement>, 
            ): void => setInputValue(ev.target.value)} 
        /> 
    ); 
};
```

**para textarea es React.ChangeEvent HTMLTextAreaElement**

```javascript
const TextArea = (): JSX.Element => { 
    const [textAreaValue, setTextAreaValue] = useState<string>(""); 
    return ( 
        <textarea 
            value={textAreaValue} 
            onChange={( 
                ev: React.ChangeEvent<HTMLTextAreaElement>, 
            ): void => setTextAreaValue(ev.target.value)} 
        /> 
    ); 
};
```

**porque select usamosReact.ChangeEvent HTMLInputSelect**

```javascript
const Select = (): JSX.Element => { 
    const [selectValue, setSelectValue] = useState<string>( 
        "optionA", 
    ); 
    return ( 
        <select 
            value={selectValue} 
            onBlur={( 
                ev: React.ChangeEvent<HTMLSelectElement>, 
            ): void => setSelectValue(ev.target.value)} 
        > 
            <option value="optionA">Opción A</option > 
            <valor de opción="opciónB">Opción B</opción> 
            <valor de opción="opciónC">Opción C</opción> 
        </select> 
    ); 
};
```

---
**Diferencia entre types e interfaces** ==> <https://www.nocountryforgeeks.com/typescript-types-vs-interfaces/>

```npm
npx create-react-app . --template typescript
```

**Axios con typescript**

```javascript
interface User {
    id: number;
    firstName: string;
}


axios.get<User[]>('http://localhost:8080/admin/users')
        .then(response => {
            console.log(response.data);
            setUserList( response.data );
        });
```

**JSX.Element**

```javascript
const PrintName2 = ({ prop1, prop2 }: Props): JSX.Element => { /** */}
```

**tipo () => void**

Esto significa que TypeScript ignorará el valor de retorno de la función al definir el tipo. Piense en ello como si el usuario no esperara un valor, por lo que devolver un valor debería funcionar bien y no romper el código.

**Promise<void>**
const asyncFunc: () => Promise<void> = async () => {
    await new Promise(resolve => resolve());
};

La cuestión es que esto sucederá automáticamente(la declaracion de tipo Promise<void> ) sin la definición de tipo

**Diferencia entre interface y type**
las interfaces son más “extensibles” debido a la posibilidad de unir sus declaraciones, y los tipos son más “componibles” debido a la posibilidad de unir los tipos.

1. Los tipos pueden declararse como tipos primitivos, uniones o tuplas mientras que las interfaces no
  
```javascript
//primittivo
type Nombre = string;

//Objeto
type CoordenadaX = {x:number}
type CoordenadaY = {y:number}

//union
type Coordenadas = CoordenadaX | CoordenadaY;

//tupla
type Tupla = [number, string]

```

2. Los tipos pueden crear interseccion con otros tipos, mientras que las interfaces no.

```javascript
type CocheTipo = {combustible: string;} | {transmision:string;}

type Coche = {
    motor: string;
}

type Flota = Coche & CocheTipo
```

3. La unión en la declaración de una interfaz no funciona con los tipos.

```javascript
//esto no aplica en los types
interface Coche {
    motor: string;
}

interface Coche {
    ruedas: number;
}

const coche: Coche = {
    motor:'v8',
    ruedas:4
}
```

4. No puedes extender una interfaz con un tipo si se usa el operador unión en su definición de tipo.

```javascript
type Coche = {
    motor:string;
}

interface Moto{
    motor:string;
}

type Vehiculo = Coche | Moto;

//no esta permitido
interface Seat extends Vehiculo{
    ...
}
```

**Type Redux Actions and reducer**

```javascript
enum ActionTypes {
  A = 'ANYTHING_HERE_A',
  B = 'ANYTHING_HERE_B',
}

interface IActionA {
  type: ActionTypes.A;
  a: string;
}

interface IActionB {
  type: ActionTypes.B;
  b: string;
}

type IAction = IActionA | IActionB

const reducer = (action: IAction) {
  switch (action.type) {
    case ActionTypes.A:
      return console.info('action a: ', action.a)

    case ActionTypes.B:
      return console.info('action b: ', action.b)
    }
}
```


**Handle click with typescript**

```javascript
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark();
  };
```


**Context with typescript**

```javascript
import { useContext, createContext, PropsWithChildren, ReactNode } from 'react'

interface IAppContext {
    title?: string;
}

const defaultState = {
    title: 'Default Title'
}

//Partial: Make all properties in an object optional
// export const DataContext = createContext<Partial<IAppContext>>(defaultState);

//Required: Make all properties in an object required

const DataContext = createContext<IAppContext>(defaultState);

type ContextProp = {
    children?: ReactNode
}

// export const AppProvider = ({ children }:PropsWithChildren<{}>): JSX.Element => {
export const AppProvider = ({ children }: ContextProp): JSX.Element => {
    return (
        <DataContext.Provider value={{ title: 'Hello' }}>
            {children}
        </DataContext.Provider>
    )
}

export const useAppContext = () => useContext(DataContext) as IAppContext
```
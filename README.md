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
### Install & Run Http-Server
    sudo npm install http-server -g
    http-server

### [Create React App](https://github.com/facebook/create-react-app#create-react-app--)
    create-react-app my-app
    cd my-app
    npm start

### React Patterns:
* ###### Stateful и Stateless Components
__Stateful__ - компонент содержащий внутреннее состояния `state`
** __Stateless__ - не содержит `state`

*и это никак не зависит от того как был объявлен компонент через функцию или класс

### State & Props
Props are immutable - some kind of component configuration, received from parent.
State - mutable. Can be changed using .setState() method inside component.

### Lifecycle methods
#### Mounting
* `constructor()`
* `getDerivedStateFromProps()`
* `render()`
* `componentDidMount()`

#### Updating (new props, setState(), forceUpdate())
* `getDerivedStateFromProps()`
* `shouldComponentUpdate()`
* `render()`
* `componentDidUpdate()`

#### Unmounting
* `componentWillUnmount()` уборка событий, ссылки в компоненте, очистка интревалов

#### Error
* `componentDidCatch()`


### React-Router

```
import {BrowserRouter, Route} from "react-router-dom";

<BrowserRouter>
    <div>
      <Route path="/" render={() => <h2>Welcome!</h2>}exact />
      <Route path='/info' component={InfoPage}/>
      <Route path='/people/:id/' render={(mach) => <Person personId={mach.params.id}/>}/>
    </div>
</BrowserRouter>
```
####link:
```
import { Link } from 'react-router-dom';
<Link to='/info'>Info</Link>
```
обновляет URL в адресной строке, но не перезагружает страницу


links:
* [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle).
* [lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


### Questions:
* Как сделать так чтобы первая ветка отреагировать на изменения в первой - никак, для этого есть Flux

## Links:
* [react-essential-course](https://github.com/krambertech/react-essential-course)
### Video Lessons:
* [CodeDojo React](https://www.youtube.com/watch?v=fQAKKXc6BCM&list=PLqHlAwsJRxAONt5CnjMMeKdYGv1CDRUOl)
* [Создание приложения с помощью create-react-app](https://www.youtube.com/watch?v=ZYZp_i8Hfmw&list=PLqHlAwsJRxANc2mFeSIRLdglGf2ZNzNBr)
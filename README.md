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

### Synthetic events
### Controlled/Uncontrolled components

#### Инициализация компонента
* getDefaultProps
* getInitialState
* componentWillMount
* render 
* componentDid mount

#### Props Change
* componentWillReceiveProps
* shouldComponentUpdate
* componentWillUpdate
* render
* componentDidUpdate

#### Изменения Состояния (state)
* shouldComponentUpdate
* componentWillUpdate
* render
* componentDidUpdate

#### Демонтаж Компонента (unmount)
* componentWillUnmount
* * уборка: событий, ссылки в компоненте, очистка интревалов


### Questions:
* Как сделать так чтобы первая ветка отреагировать на изменения в первой - никак, для этого есть Flux

## Links:
* [react-essential-course](https://github.com/krambertech/react-essential-course)
### Video Lessons:
* [CodeDojo React](https://www.youtube.com/watch?v=fQAKKXc6BCM&list=PLqHlAwsJRxAONt5CnjMMeKdYGv1CDRUOl)
* [Создание приложения с помощью create-react-app](https://www.youtube.com/watch?v=ZYZp_i8Hfmw&list=PLqHlAwsJRxANc2mFeSIRLdglGf2ZNzNBr)
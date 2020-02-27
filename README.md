# Convert Class To Function

## Before:
``` javascript
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Olá, {this.props.name}!
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
```

## After:

``` javascript
const HelloMessage = () => {
    return (
      <div>
        Olá, {this.props.name}!
      </div>
    );
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
```
var React = require("react");

class Home extends React.Component {
  render() {
    const loginForm = (
            <form action="/authenticating" method="get">
                <input type="text" name="username" placeholder="username"></input>
                <input type="text" name="password" placeholder="password"></input>
                <input type="submit" value="login"></input>
            </form>
        )

    return (
      <html>
        <head />
        <body>
            <div>
                <h1>TWEEDR</h1>
            </div>
            <div>
                {loginForm}
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
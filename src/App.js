import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <header>
        <h1>Welcome to Nakatomi Corporation</h1>
      </header>
      <Card>
        {/* <Image src={logo} className="App-logo" alt="logo" /> */}
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
      <main>
        <h2>Upload CSV files here</h2>
        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename" />
          <input type="submit" />
        </form>
      </main>
    </View>
  );
}

export default withAuthenticator(App);
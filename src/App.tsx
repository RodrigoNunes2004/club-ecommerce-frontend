import { FunctionComponent } from "react";

interface AppProps {
  message?: string;
}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: FunctionComponent<AppProps> = ({message}) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <h1>Hello World!</h1>
}

export default App;
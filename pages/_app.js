import "../styles/globals.css"
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { store, persistor } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Auth from "./Auth"


export default function App({ Component, pageProps }) {

  // const client = new ApolloClient({
  //   // uri: "https://api.afriopia.com/graphql",
  //   uri: "http://localhost:5000/graphql",
  //   cache: new InMemoryCache({
  //     typePolicies: {
  //       Query: {
  //         fields: {
  //           articles: {
  //             merge(existing, incoming) {
  //               return incoming;
  //             },
  //           },
  //           subscribers: {
  //             merge(existing, incoming) {
  //               return incoming;
  //             },
  //           },
  //         },
  //       },
  //     },
  //   }),
  // });

  return (
    <>
      <Provider store={store}>
        {/* <ApolloProvider client={client}> */}
          <PersistGate loading={null} persistor={persistor} >
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </PersistGate>
        {/* </ApolloProvider> */}
      </Provider>
    </>
  )
}

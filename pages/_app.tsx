import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { Tuple } from '@mantine/core';
import { UsersProvider } from '../context api/User';
import { MessageProvider } from '../context api/Message';
import { InboxProvider } from '../context api/Inbox';



type CustomColors = 'primaryColorName' | 'secondaryColorName';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<CustomColors, Tuple<string, 10>>;
  }
}
function MyApp({ Component, pageProps }: AppProps) {

  return (
  <MantineProvider theme={{
    colorScheme:"dark",
    colors:{
      customDarkColors:["#131A2B", "#080E1A"],
    }
  }}>
    <UsersProvider>
      <InboxProvider>
        <MessageProvider>
          <Component {...pageProps} />
        </MessageProvider>
      </InboxProvider>
    </UsersProvider>
  </MantineProvider>
  )
}

export default MyApp

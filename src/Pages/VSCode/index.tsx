import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SideBar from '../../components/VSCode/SideBar';
import TabsWrapper from '../../components/VSCode/TabsWrapper';
import { useMenu } from '../../hooks/useMenu';
import Routes from '../../Routes';
import {
  Container,
  SideBarWrapper,
  Content,
  View,
} from './style';

const VSCode = () => {
  const { isMenuOpened, isCodeView } = useMenu();
  const code = `import React from 'react';
  import { Outlet } from 'react-router-dom';
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  import SideBar from '../../components/VSCode/SideBar';
  import TabsWrapper from '../../components/VSCode/TabsWrapper';
  import { useMenu } from '../../hooks/useMenu';
  import Routes from '../../Routes';
  import {
    Container,
    SideBarWrapper,
    Content,
    View,
  } from './style';
  
  const VSCode = () => {
    const { isMenuOpened, isCodeView } = useMenu();
    return (
      <Container>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <Content>
          <TabsWrapper />
          <View isMenuOpened={isMenuOpened}>
            {
              isCodeView
                ? (
                  <SyntaxHighlighter
                    language="typescript"
                    showLineNumbers
                    customStyle
                    style={dracula}
  
                  >
                    {code}
                  </SyntaxHighlighter>
                )
                : <Routes />
            }
            <Outlet />
          </View>
        </Content>
      </Container>
    );
  };
  
  export default VSCode;
  `;
  axios('../static/js/Pages/Bio/index.tsx').then((r) => console.log(r));
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Content>
        <TabsWrapper />
        <View isMenuOpened={isMenuOpened}>
          {
            isCodeView
              ? (
                <SyntaxHighlighter
                  language="typescript"
                  showLineNumbers
                  customStyle={{ background: '#191725', fontSize: 18 }}
                  style={tomorrowNight}

                >
                  {code}
                </SyntaxHighlighter>
              )
              : <Routes />
          }
          <Outlet />
        </View>
      </Content>
    </Container>
  );
};

export default VSCode;

import React, { useState } from 'react';
import { updateJsxSpreadAttribute } from 'typescript';
import { MainWrapper } from '../../Styles/globalStyles';

import { 
  Container, 
  Content, 
} from './styles';

const FontREM: React.FC = () => {
  const [desktopPercent, setDesktop] = useState(62.5)
  const [tabletPercent, setTablet] = useState(54.7)
  const [mobilePercent, setMobile] = useState(46.9)

  const [desktopValue, setDesktopValue] = useState(10)
  const [tabletValue, setTabletValue] = useState(8.75)
  const [mobileValue, setMobileValue] = useState(7.5)

  const [rem0, setRem0] = useState(0.8)
  const [rem1, setRem1] = useState(1.6)
  const [rem2, setRem2] = useState(2.4)
  const [rem3, setRem3] = useState(3.2)
  const [rem4, setRem4] = useState(4)
  const [rem5, setRem5] = useState(4.8)
  const [rem6, setRem6] = useState(5.6)

  return (
    <>
      <MainWrapper>
        <Container>
          <h1>FontREM</h1>
        </Container>
        <Content>
          <header>
            <span>
              
            </span>

            <span>
              Desktop <br/>
              <div>font-size:<input value={desktopPercent} onChange={el => setDesktop(Number(el.target.value))} type="text" autoComplete="off"/> %;</div>
            </span>

            <span>
              Tablet <br/>
              <div>font-size:<input value={tabletPercent} onChange={el => setTablet(Number(el.target.value))} type="text" autoComplete="off"/>%;</div>
            </span>

            <span>
              Mobile <br/>
              <div>font-size:<input value={mobilePercent} onChange={el => setMobile(Number(el.target.value))} type="text" autoComplete="off"/>%;</div>
            </span>
          </header>

          <div className="line">
            <span>font-size:<input value={rem0} onChange={el => setRem0(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem0 * desktopValue}px</span>
            <span>{rem0 * tabletValue}px</span>
            <span>{rem0 * mobileValue}px</span>
          </div>

          <div className="line">
            <span>font-size:<input value={rem1} onChange={el => setRem1(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem1 * desktopValue}px</span>
            <span>{rem1 * tabletValue}px</span>
            <span>{rem1 * mobileValue}px</span>
          </div>

          <div className="line">
            <span>font-size:<input value={rem2} onChange={el => setRem2(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem2 * desktopValue}px</span>
            <span>{rem2 * tabletValue}px</span>
            <span>{rem2 * mobileValue}px</span>
          </div>
          
          <div className="line">
            <span>font-size:<input value={rem3} onChange={el => setRem3(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem3 * desktopValue}px</span>
            <span>{rem3 * tabletValue}px</span>
            <span>{rem3 * mobileValue}px</span>
          </div>
          
          <div className="line">
            <span>font-size:<input value={rem4} onChange={el => setRem4(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem4 * desktopValue}px</span>
            <span>{rem4 * tabletValue}px</span>
            <span>{rem4 * mobileValue}px</span>
          </div>
          
          <div className="line">
            <span>font-size:<input value={rem5} onChange={el => setRem5(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem5 * desktopValue}px</span>
            <span>{rem5 * tabletValue}px</span>
            <span>{rem5 * mobileValue}px</span>
          </div>
          
          <div className="line">
            <span>font-size:<input value={rem6} onChange={el => setRem6(Number(el.target.value))} type="text" autoComplete="off"/>rem;</span>
            <span>{rem6 * desktopValue}px</span>
            <span>{rem6 * tabletValue}px</span>
            <span>{rem6 * mobileValue}px</span>
          </div>

        </Content>
      </MainWrapper>
    </>
  );
};

export default FontREM;

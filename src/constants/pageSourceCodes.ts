export const bioIndex = `import React from 'react';
import { useMenu } from '../../hooks/useMenu';
import {
  Cyan,
  Green,
  Orange,
  Pink,
  Purple,
} from '../../Styles/globalStyles';

import {
  FirstContainer,
  SecondContainer,
  Animation,
  Biography,
} from './styles';

const Bio: React.FC = () => {
  const { isMenuOpened } = useMenu();
  return (
    <>
      <FirstContainer isMenuOpened={isMenuOpened}>
        <img
          src="../assets/images/LeonardoCorbiNew.jpeg"
          alt="Imagem de Leonardo Corbi"
        />
        <Animation contentEditable spellCheck={false}>
          <code className="line1">
            <Pink>const</Pink> leonardoCorbi<Pink>:</Pink> <Purple>Array</Purple>{'<'}<Orange>any</Orange>{'>'}<Pink> = []</Pink>;
          </code>
          <code className="line2">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>HTML5<Cyan>)</Cyan>;
          </code>
          <code className="line3">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>CSS3<Cyan>)</Cyan>;
          </code>
          <code className="line4">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>TypeScript<Cyan>)</Cyan>;
          </code>
          <code className="line5">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>React<Cyan>)</Cyan>;
          </code>
          <code className="line6">
            leonardoCorbi.<Green>push</Green><Cyan>(</Cyan>StyledComponents<Cyan>)</Cyan>;
          </code>
        </Animation>
      </FirstContainer>
      <SecondContainer isMenuOpened={isMenuOpened}>
        <Biography>
          <span>Olá! Eu sou Leonardo Corbi</span>
          <span>
            Desde sempre tive a curiosidade de saber como as coisas funcionavam,
            e com o passar do tempo, a curiosidade pelo mundo tecnológico só aumentou. Quem convive
            comigo percebe rapidamente o contato próximo que tenho com a tecnologia, e como gosto de
            transformar tudo a minha volta, um simples ato de ligar de uma luz se tornou um:
            {' '}
            <em>
              &quot;
              Alexa, ligue a luz
              &quot;
            </em>
            ; ou então uma mudança de hábitos alimentares se tornou sistema automatizado com micro-
            controladores para fazer uma irrigação automática na minha horta...
          </span>
          <span>
            Enfim... esse sou eu, uma pessoa que gosta de estar sempre em contato com as mais novas
            tecnologias e tornando-as úteis  e aplicáveis em todos projetos, uma pessoa auto-didata,
            sempre em busca de aprender algo novo.
          </span>
        </Biography>
      </SecondContainer>
    </>
  );
};

export default Bio;
`;
export const shadesIndex = `import hsl from 'hsl-to-hex';
import React, {
  useCallback, useMemo, useState,
} from 'react';
import { SketchPicker } from 'react-color';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons';
import Pallet from '../../components/Pallet';
import { useMenu } from '../../hooks/useMenu';
import useStorage from '../../hooks/usePersistedState';
import { handleClickToCopy } from '../../Utils/clickToCopy';
import { getPallet } from '../../Utils/colorGrading';
import { toCamelCase } from '../../Utils/stringUtils';
import { IWCAG } from '../../Utils/wcagColorChecker';
import {
  BoxWrapper,
  Braces,
  ButtonsWrapper,
  ColorPickerWrapper,
  Confirm,
  Container,
  PalletName, PalletWrapper, Save,
  SavedPallets, Share,
  Tools,
  Trash,
} from './styles';

interface IStoredPallets {
  id: string;
  title: string;
  mainColor: string;
}

interface IInTools {
  isHover: boolean;
  id: string;
}

type PalletType = [string, IWCAG[]][];

const Pallets = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const { isMenuOpened } = useMenu();
  const [storedPallets, setStoredPallet] = useStorage<IStoredPallets[]>('storedPallets', []);
  const firstColor = hash || '#S{String(Math.round(Math.random() * 999999))}';
  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [range, setRange] = useState(100);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [pallet, setPallet] = useState<PalletType>(getPallet(firstColor, '#FFFFFF') as PalletType);
  const [inTools, setInTools] = useState<IInTools>({} as IInTools);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);
    setPallet(getPallet(hex, bgColor) as PalletType);
    navigate('S{hex}', { replace: true });
  }, [bgColor, selectedColor, range]);

  const handleChangeBackground = useCallback((value: number) => {
    setRange(value);
    handleSelectColor({ hex: selectedColor });
    setBgColor(hsl(0, 0, value));
  }, [selectedColor, bgColor, range]);

  const handleSavePallet = useCallback(() => {
    const data: IStoredPallets = {
      id: uuid() as string,
      title: '',
      mainColor: selectedColor,
    };
    setStoredPallet((prevState) => ([...prevState, data]));
    window.scrollTo({ top: 1000000000, behavior: 'smooth' });
  }, [pallet, storedPallets]);

  const handleSaveRenamePallet = useCallback((id: string, mainColor: string, title: string) => {
    setStoredPallet((prevState) => prevState.map((item) => {
      if (item.id === id) {
        return {
          id,
          mainColor,
          title,
        };
      }
      return item;
    }));
  }, []);

  const handleRemovePallet = useCallback((id: string) => {
    setStoredPallet((prevState) => prevState.filter((item) => item.id !== id));
  }, [storedPallets]);

  const handleSharePallet = useCallback((mainColor: string) => {
    navigate('/palletsS{mainColor}', { replace: true });
  }, []);

  return (
    <Container isMenuOpened={isMenuOpened}>
      <PalletWrapper background={bgColor}>
        {
          pallet.map(([hex, wcag], index) => (
            <Pallet hex={hex} index={index} wcag={wcag} range={range} />
          ))
        }
      </PalletWrapper>
      <ColorPickerWrapper>
        <article>
          <p>Alterar cor de fundo:</p>
          <input type="range" onChange={({ target: { value } }) => handleChangeBackground(+value)} min={1} max={100} value={range} />
          <p>Alterar cor principal:</p>
        </article>
        <SketchPicker
          color={selectedColor || firstColor}
          onChange={handleSelectColor}
          width="390px"
          className="colorPicker"
        />
      </ColorPickerWrapper>
      <ButtonsWrapper>

        <ButtonPrimary
          label="Compartilhar por link"
          onClick={() => handleClickToCopy(window.location.href)}
        />

        <ButtonSecondary
          label="Salvar nos favoritos"
          onClick={handleSavePallet}
        />

      </ButtonsWrapper>
      {
        storedPallets?.map(({ id, mainColor, title }, pos) => {
          const colors = getPallet(mainColor);
          const handleExportJson = (palletTitle: string) => {
            let parsed = {};
            colors.forEach((color, index) => {
              parsed = {
                ...parsed,
                ['S{toCamelCase(palletTitle)}S{index + 1}00']: color,
              };
            });
            handleClickToCopy(JSON.stringify(parsed));
          };
          return (
            <SavedPallets key={id}>
              <Tools
                onMouseEnter={() => setInTools({ isHover: true, id })}
                onMouseLeave={() => setInTools({ isHover: false, id })}
              >
                <Trash
                  onClick={() => handleRemovePallet(id)}
                  className={inTools.isHover && inTools.id === id ? 'in' : 'out'}
                  title="Excluir paleta"
                />

                <Confirm
                  onClick={() => {
                    handleSelectColor({ hex: mainColor });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={inTools.isHover && inTools.id === id ? 'in' : 'out'}
                  title="Visualizar paleta"
                />

                <PalletName
                  role="cell"
                  contentEditable
                  spellCheck={false}
                  id="palletName"
                >
                  {title || 'Sem título S{pos + 1}'}
                </PalletName>

                <Save
                  onClick={(el) => handleSaveRenamePallet(id, mainColor, el.currentTarget.parentNode.querySelector('#palletName').textContent)}
                  className={inTools.isHover && inTools.id === id ? 'in' : 'out'}
                  title="Salvar nome da paleta"
                />

                <Share
                  onClick={() => handleSharePallet(mainColor)}
                  className={inTools.isHover && inTools.id === id ? 'in' : 'out'}
                  title="Copiar link da paleta"
                />

                <Braces
                  onClick={(el) => handleExportJson(el.currentTarget.parentNode.querySelector('#palletName').textContent)}
                  className={inTools.isHover && inTools.id === id ? 'in' : 'out'}
                  title="Copiar JSON da paleta"
                />

              </Tools>
              <BoxWrapper>
                {colors?.map((hex, index) => (
                  <Pallet hex={hex} index={index} />
                ))}
              </BoxWrapper>
            </SavedPallets>
          );
        })
      }
    </Container>
  );
};

export default Pallets;
`;

export const defaultMessage = `/*
Aparentemente não o código dessa página não está disponível,
por favor me alerte que eu rapidamente disponibilizarei.
Obrigado ☺️.
*/`;

import hsl from 'hsl-to-hex';
import React, {
  useCallback, useState,
} from 'react';
import { SketchPicker } from 'react-color';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons';
import Pallet from '../../components/Pallet';
import useStorage from '../../hooks/usePersistedState';
import { handleClickToCopy } from '../../Utils/clickToCopy';
import { getPallet } from '../../Utils/colorGrading';
import { IWCAG } from '../../Utils/wcagColorChecker';
import {
  BoxWrapper,
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
  const [storedPallets, setStoredPallet] = useStorage<IStoredPallets[]>('storedPallets', []);
  const firstColor = hash || `#${String(Math.round(Math.random() * 999999))}`;
  const [selectedColor, setSelectedColor] = useState(firstColor);
  const [range, setRange] = useState(100);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [pallet, setPallet] = useState<PalletType>(getPallet(firstColor, '#FFFFFF') as PalletType);
  const [inTools, setInTools] = useState<IInTools>({} as IInTools);

  const handleSelectColor = useCallback(({ hex }) => {
    setSelectedColor(hex);
    setPallet(getPallet(hex, bgColor) as PalletType);
    navigate(`/pallets${hex}`, { replace: true });
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
    navigate(`/pallets${mainColor}`, { replace: true });
  }, []);

  return (
    <Container>
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
        storedPallets?.map(({ id, mainColor, title }, pos) => (
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
                {title || `Sem título ${pos + 1}`}
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

            </Tools>
            <BoxWrapper>
              {getPallet(mainColor)?.map((hex, index) => (
                <Pallet hex={hex} index={index} />
              ))}
            </BoxWrapper>
          </SavedPallets>
        ))
      }
    </Container>
  );
};

export default Pallets;

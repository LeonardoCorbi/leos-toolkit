import React from 'react';
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet'
import {
  SketchPicker,
  ChromePicker
} from 'react-color'

import { 
  Container, 
  Controls,
  PageSettings,
  TitleSettings,
  ContentSettings 
} from './styles';
import Toolbar from '../../components/Toolbar';

const FontTest: React.FC = () => {

  const [title, setTitle] = useState({
    size: 32,
    color: '#000',
    family: 'Arial',
    weight: 700,
    boxHeight: 80,
  })
  const [article, setArticle] = useState({
    size: 16,
    color: '#000',
    family: 'Arial',
    weight: 500,
    boxHeight: 200,
  })

  const [font, setFont] = useState('')
  const [background, setBackground] = useState('#FFF')

  return (
    <>
      <Toolbar />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={font} rel="stylesheet" />
      </Helmet> 
      <Container
        style={{
          background: background
        }}
      >
        
        <h1>
          <textarea
            spellCheck={false}
            onChange={evt => setTitle({...title, boxHeight: evt.target.scrollHeight})}
            defaultValue={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, consequatur.'}
            style={{
              color: title.color,
              fontSize: title.size,
              fontFamily: title.family,
              fontWeight: title.weight,
              height: title.boxHeight
            }}
            ></textarea>
        </h1>

        <article
        >
          <textarea
            spellCheck={false}
            onChange={evt => setArticle({...article, boxHeight: evt.target.scrollHeight})}
            defaultValue={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quasi praesentium qui unde consequatur reiciendis tenetur veniam animi consequuntur illum libero illo possimus dolore, modi reprehenderit, quo eos accusamus rerum explicabo maxime molestias magnam vel eligendi! Laboriosam reiciendis aut, corporis impedit consequuntur natus tempore illum, dicta inventore qui cum blanditiis tempora alias unde voluptatum facere dolore eaque, dolor quibusdam fugiat velit iusto! Accusamus ipsam quam obcaecati temporibus pariatur, neque officia mollitia sit eligendi provident voluptatibus, earum consectetur quibusdam vero quaerat! Perferendis, culpa quam nihil quibusdam porro nesciunt dicta reprehenderit officia impedit asperiores tempore corrupti maiores similique neque. Quisquam, odit beatae?'}
            style={{
              color: article.color,
              fontSize: article.size,
              fontFamily: article.family,
              fontWeight: article.weight,
              minHeight: article.boxHeight,
            }}
          ></textarea>
          
        </article>
        <Controls>

          <PageSettings>
            <h2>Configurações da página</h2>
            <span>Fonte externa link: <input className="fntInput" type="text" onChange={evt => {
              setFont(evt.target.value)
              setTitle({...title, family: evt.target.value.split('family=')[1].split(':')[0]})
              setArticle({...article, family: evt.target.value.split('family=')[1].split(':')[0]})
            }}/></span>
            <span>
              Cor do fundo:
              <ChromePicker
                onChange={evt => setBackground(evt.hex)}
                color={background}
                disableAlpha={false}
              />
            </span>
          </PageSettings>

          <TitleSettings>
            <h2>Configurações do título</h2>
            <span>
              Nome da fonte: 
              <input type="text" value={font === '' ? title.family : font.split('family=')[1].split(':')[0]}
                onChange={evt => setTitle({...title, family: evt.target.value})}
              />
              
            </span>
            <span>
              Tamanho da fonte: <input type="number" value={title.size}
                onChange={evt => setTitle({...title, size: Number(evt.target.value)})}
              />
            </span>
            <span>
              Peso da fonte:
              {
                font === ''
                  ? (
                    <input type="number" value={title.weight} step="100"
                    onChange={evt => setTitle({...title, weight: Number(evt.target.value)})}
                    />
                    )
                    : <select
                        onChange={evt => setTitle({...title, weight: Number(evt.target.value)})}
                      >
                        {
                          font.split('@')[1].split('&')[0].split(';').map(weight => (
                            <option key={weight} value={weight}>{weight}</option>
                          ))
                        }
                      </select>
              }
               
            </span>
            <span>
              Cor da fonte: <ChromePicker color={title.color}
                onChange={evt => setTitle({...title, color: evt.hex})}
              />
            </span>
          </TitleSettings>

          <ContentSettings>
            <h2>Configurações do parágrafo</h2>
            <span>
              Nome da fonte: <input type="text" value={font === '' ? article.family : font.split('family=')[1].split(':')[0]}
                onChange={evt => setArticle({...title, family: evt.target.value})}
              />
            </span>
            <span>
              Tamanho da fonte: <input type="number" value={article.size}
                onChange={evt => setArticle({...article, size: Number(evt.target.value)})}
              />
            </span>
            <span>
              Peso da fonte: 
              
              {
                font === ''
                  ? (
                    <input type="number" value={article.weight} step="100"
                      onChange={evt => setArticle({...article, weight: Number(evt.target.value)})}
                    />
                  )
                  : (
                      <select
                        onChange={evt => setArticle({...article, weight: Number(evt.target.value)})}
                      >
                        {
                          font.split('@')[1].split('&')[0].split(';').map(weight => (
                            <option key={weight} value={weight}>{weight}</option>
                          ))
                        }
                      </select>
                  )
              }
            </span>
            <span>
              Cor da fonte: <ChromePicker color={article.color}
                onChange={evt => setArticle({...article, color: evt.hex})}
              />
            </span>
          </ContentSettings>

        </Controls>
      </Container>
    </>
  );
};

export default FontTest;

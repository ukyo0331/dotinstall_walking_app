import { memo, FC } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query'

import { SButton } from '../atoms/PrimaryButton';

export const HeroArea: FC = memo(() => {
    return (
        <SHero>
            <div className="container">
                <div className="desk">
                    <h1>すごいお散歩アプリ</h1>
                    <SP>毎日のお散歩を<br/>AIがもっと楽しくする</SP>
                    <a href="#">
                    <SPrimaryButton>ダウンロード</SPrimaryButton>
                    </a>
                </div>
                <div className="pic">    
                    <SImg 
                    src={`${process.env.PUBLIC_URL}/img/app.png`} 
                    alt='アプリの動作イメージ'
                    width='320'
                    height='330'
                    ></SImg>
                </div>
            </div>
        </SHero>
    )
})

const SHero = styled.section`
    background-color: #99e6ff;
    background-image: url(${process.env.PUBLIC_URL}/img/bg.png);
    background-repeat: repeat-x;
    background-position: center bottom;
    padding-top: 64px;
    text-align: center;
    //レスポンシブ
    ${media.greaterThan('medium')`
        .container {
            display: flex;
            align-items: center;
            > div {
                width: 50%
            }
            > div img {
                width: calc(100% - 32px);
                height: auto;
                margin-top: 0;
            }
        }
    `}

`
const SP = styled.p`
    margin-top: 8px;
`
const SImg = styled.img`
    margin-top: 64px;
`
const SPrimaryButton = styled(SButton)`
    margin: 64px auto 0;
`
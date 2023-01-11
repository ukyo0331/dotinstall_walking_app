import { memo, FC } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
//featuresの内容を配列で格納
const contents = [
    {
        title: 'すごい特徴1',
        src: `${process.env.PUBLIC_URL}/img/feature1.png`,
        description1: "すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。",
        description2: "すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。"
    },
    {
        title: 'すごい特徴2',
        src: `${process.env.PUBLIC_URL}/img/feature2.png`,
        description1: "すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。",
        description2: "すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。"
    },
    {
        title: 'すごい特徴3',
        src: `${process.env.PUBLIC_URL}/img/feature3.png`,
        description1: "すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。すごいです1。",
        description2: "すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。すごいです2。"
    },
]

export const Features: FC = memo(() => {
    return (
        <>
            <SFeatures>
                <SH1>すごい特徴</SH1>
                <div className="container">
                    {contents.map((res) => {
                        return (
                            <section>
                                <SPic>
                                    <SImg src={res.src} />
                                </SPic>
                                <SDesc>
                                    <SH2>{res.title}</SH2>
                                    <p>{res.description1}</p>
                                    <p>{res.description2}</p>
                                </SDesc>
                            </section>
                        )
                    })}
                </div>
            </SFeatures>
        </>
    )
})

const SFeatures = styled.section`
    padding: 64px 0;
    section + section {
        margin-top: 40px;
    }
    ${media.greaterThan('medium')`
        section {
            display: flex;
            :nth-child(odd) {
                flex-direction: row-reverse;
            }

        }
    `}
`
const SH1 = styled.h1`
    text-align: center;
    padding-bottom: 64px
`
const SImg = styled.img`
    width: 100%;
`
const SPic = styled.div`
    padding: 32px
`
const SH2 = styled.h2`
    padding-bottom: 16px
`
const SDesc = styled.div`

`
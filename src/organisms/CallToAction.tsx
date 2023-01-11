import { memo, FC } from 'react';
import styled from 'styled-components';

import { PrimaryButton } from '../atoms/PrimaryButton';
import { SButton } from '../atoms/PrimaryButton';

export const CallToAction: FC = memo(() => {
    return (
        <>
            <SCAllToAction>
                <SH1>さあ、はじめてみよう</SH1>
                <SPrimaryButton>ダウンロード</SPrimaryButton>
            </SCAllToAction>
        </>
    )
})

const SCAllToAction = styled.section`
    padding: 64px 0;
    background-color: #85d8f2;
    background-image: url(${process.env.PUBLIC_URL}/img/bg.png);
    background-repeat: repeat-x;
    background-position: center bottom;
`
const SH1 = styled.h1`
    text-align: center;
    padding-bottom: 64px;
`
const SPrimaryButton = styled(SButton) `
    margin: 0 auto;
`
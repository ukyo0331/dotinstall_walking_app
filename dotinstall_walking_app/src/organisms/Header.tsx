import { memo, FC } from 'react';
import styled from 'styled-components'
import { PrimaryButton } from '../atoms/PrimaryButton';

export const Header: FC = memo(() => {
    return (
        <>
            <SHeader>
                <SContainer className='container'>
                    <a href="">
                        <h1>
                            <img 
                                src={`${process.env.PUBLIC_URL}/img/logo.png`}  
                                alt="DotInstall Walking"
                                width='240'
                                height='27'
                            />
                        </h1>
                    </a>
                    <a href="#">
                        <PrimaryButton>
                            ダウンロード
                        </PrimaryButton>
                    </a>
                </SContainer>
            </SHeader>
        </>
    )
})

const SHeader = styled.header`
    padding: 16px 0
`
const SContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
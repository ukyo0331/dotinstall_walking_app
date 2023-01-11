import { memo, FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = memo(() => {
    return (
        <>
            <SFooter>
                <small>(c) dotinstall.com</small>
            </SFooter>
        </>
    )
})

const SFooter = styled.footer`
    background: #323435;
    padding: 64px;
    text-align: center;
    > small {
        font-size: 16px;
        color: #eee;
    }
`
import { memo, FC } from 'react';
import styled from 'styled-components';

type Props = {
    children: string;

}
export const PrimaryButton: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <SButton>
                {children}
            </SButton>
        </>
    )
})

export const SButton = styled.div`
    display: block;
    width: 160px;
    background: #329e00;
    color: #fff;
    border: none;
    text-align: center;
    padding: 8px 0;
    border-radius: 4px;
` 
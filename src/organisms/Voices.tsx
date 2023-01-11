import { memo, FC } from 'react';
import styled from 'styled-components'
import media from 'styled-media-query';
const content = [
    {
        voice: '素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。',
        userIcon: `${process.env.PUBLIC_URL}/img/user1.png`,
        user: "会社員（32）"
    },
    {
        voice: '素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。',
        userIcon: `${process.env.PUBLIC_URL}/img/user2.png`,
        user: "会社員（32）"
    },
    {
        voice: '素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。素晴らしいアプリでした。',
        userIcon: `${process.env.PUBLIC_URL}/img/user3.png`,
        user: "会社員（32）"
    },

]

export const Voices: FC = memo(() => {
    return (
        <>
            <SVoices>
                <SH1>ユーザーの声</SH1>
                <div className="container">
                    {content.map((res) => {
                        return (
                            <SSection>
                                <p>{res.voice}</p>
                                <SFooter>
                                    <img 
                                        src={res.userIcon}  
                                        alt="ユーザーのアイコン"
                                        width='40'
                                        height='40'
                                    />
                                    <p>{res.user}</p>
                                </SFooter>
                            </SSection>
                        )
                    })}
                </div>
            </SVoices>
        </>
    )
})

const SVoices = styled.section`
    background: #99e6ff;
    padding: 64px 0;
    section + section {
        margin-top: 16px;
    }
    ${media.greaterThan('medium')`
    .container {
        display: flex;
        gap: 16px;
    }
    section + section {
        margin-top: 0
    }
    section {
        width: calc((100% - 32px) / 3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    `}
`
const SH1 = styled.h1`
    text-align: center;
    padding-bottom: 64px;
`
const SSection = styled.section`
    background: #fff;
    padding: 16px;
    border-radius: 16px
`
const SFooter = styled.footer`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-tdop: 16px;
`   
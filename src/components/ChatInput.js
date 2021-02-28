import React, {useState} from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

function ChatInput({ sendMessage }) {

    const [input, setInput ] = useState("")

    const send = (e) => {
        e.preventDefault();
        if(!input) return
        sendMessage(input)
        setInput("")
    }


    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        type="text" 
                        placeholder="Message here....."
                        onChange={(e) => setInput(e.target.value)}
                        value={input} />
                    <SendButton
                        type="submit" 
                        onClick={send}>
                        <Send />
                    </SendButton  >
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;

`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }
        input:focus {
            outline: none;
        }
    }
`
const SendButton = styled.button`
    border-radius: 2px;
    background: #007a5a;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 20px;
    }

    :hover {
        background: #148567;
    }
`
const Send = styled(SendIcon)`
    color: #D9D9D9;
`


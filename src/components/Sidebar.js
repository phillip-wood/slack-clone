import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom'

import { sidebarItemsData, sidebarChannelsData } from '../data/SidebarData'
import db from '../firebase'

function Sidebar( {rooms} ) {

    const history = useHistory()

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
        }
    }


    const addChannel = () => {
        const promptName = prompt("Enter channel name")
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgramming
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map( item => (
                        <MainChannelItem key={item.text}>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={() => addChannel()} />
                </NewChannelContainer>
                <ChannelsList>
                {
                    rooms.map( room => (
                        <Channel key={room.id} onClick={() => goToChannel(room.id)}>
                            # {room.name}
                        </Channel>
                    ))
                }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #350d36;

`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    padding-right: 12px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`
const Name = styled.div`

`
const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const MainChannels = styled.div`
    padding-top: 20px;
`
const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: white;
    }

`
const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;

`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`
const ChannelsList = styled.div`

`
const Channel = styled.div`
    height: 28x;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: white;
    }
`